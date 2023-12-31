
import { AuthContext } from "./auth/AuthContext";
import { useContext } from "react";
import api from "./axios";

const useRefreshToken = () => {
    const { setAuthState} = useContext(AuthContext)

    const refresh = async () => {
        try{
        const response = await api.get('/refresh', {
            headers: {
                "Content-Type":'application/json',
            },
            withCredentials: true,
        });

        setAuthState(()=>{
            return { 
                role : response.data.role,
                access_token: response.data.access_token
            }
        })
        return response.data;
    }catch(e){
        console.log(e);
    }
    
    }
    

    return refresh;
}

export default useRefreshToken;