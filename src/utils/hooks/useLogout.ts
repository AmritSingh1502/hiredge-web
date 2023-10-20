import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { axiosPrivate } from "../axios";



const useLogout = () => {
    const { authState,setAuthState } = useContext(AuthContext)

    const logout = async () => {

        try {

            const response = await axiosPrivate.get('/logout', {
                withCredentials: true,
                
            });

            setAuthState({
                role: null,
                access_token:null,
            });

        } catch (error) {
            console.error(error);
        }
    }

    return logout;
}

export default useLogout;