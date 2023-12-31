import { useContext } from "react";

import { AuthContext } from "../../utils/auth/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, role }: { children: any, role: string }) => {

    const { authState } = useContext(AuthContext);

    let location = useLocation();

    if (authState.access_token === null || '') {
        return <Navigate to={'/'} state={{ from: location }} replace />
    }

    if (authState.role !== role) {
        return <Navigate to={'/unauthorized'} state={{ from: location }} replace />
    }


    return children;
}


export default ProtectedRoute;