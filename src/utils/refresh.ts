
import { AuthContext } from "./auth/AuthContext";
import { useContext } from "react";
import axios from "./axios";

const useRefreshToken = () => {
    const { setAuthState} = useContext(AuthContext)

    const refresh = async () => {
        try{
        const response = await axios.get('/refresh', {
            headers: {
                "Content-Type":'application/json'
            },
            withCredentials: true
        });
        setAuthState({role: response.data?.role,
        access_token: response.data?.accesstoken} )


    }catch(e){
        console.log(e);
    }

        // return response.data?.accesstoken;
    }

    return refresh;
}

export default useRefreshToken;