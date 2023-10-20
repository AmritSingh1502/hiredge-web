import { Outlet } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import useRefreshToken from '../../utils/refresh'

import { AuthContext } from "../../utils/auth/AuthContext";


const PersistLogin = () => {

    const [isLoading, setIsloading] = useState(true);

    const refresh = useRefreshToken();

    const { authState } = useContext(AuthContext)

    useEffect(() => {

        const verifyRefreshToken = async () => {


            try {
                await refresh();
            }
            catch (e) {
                console.log(e)
            } finally {
                setIsloading(false);
            }

        }

        !authState?.access_token ? verifyRefreshToken() : setIsloading(false);

    }, [])


    return (
        <>

            {
                isLoading ?
                    <p>Loading.....</p> :
                    <Outlet />
            }
        </>
    )
}

export default PersistLogin;