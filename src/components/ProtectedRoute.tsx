import { useContext } from "react";

import { AuthContext } from "../utils/auth/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: any }) => {

    const { authState } = useContext(AuthContext);

    console.log("Auth COntext");
    console.log(authState);


    let location = useLocation();

    if (authState.authenticated === false) {
        return <Navigate to={'/login'} state={{ from: location }} replace />
    }


    return children;
}


export default ProtectedRoute;