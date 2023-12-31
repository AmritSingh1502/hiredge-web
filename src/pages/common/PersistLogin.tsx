import { Outlet, useLocation, useNavigate, useRoutes } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import useRefreshToken from '../../utils/refresh'

import { AuthContext } from "../../utils/auth/AuthContext";


const PersistLogin = () => {

    const [isLoading, setIsloading] = useState(true);

    const refresh = useRefreshToken();

    const { authState } = useContext(AuthContext)

    const navigate = useNavigate();

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                const response = await refresh();
                if (response.role === "tpo") {
                    navigate('/tpo');
                } else if (response.role === 'student') {
                    navigate('/student');
                } else if (response.role === 'alumni') {
                    navigate('/alumni')
                } else if (response.role === 'hod') {
                    navigate('/hod')
                } else {
                    navigate('/')
                }
            }
            catch (e) {
                console.log(e)
            } finally {
                setIsloading(() => false);

            }
        }
        !authState.access_token ? verifyRefreshToken() : setIsloading(false);
    }, []);


    if (isLoading) {
        return (
            <>
                ...Loading
            </>
        )
    } else

        return (
            <>
                <Outlet />
            </>
        )

}

export default PersistLogin;