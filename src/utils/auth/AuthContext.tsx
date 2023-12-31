import { createContext, useState } from "react";



type AuthContextType = {
    authState: AuthStateType;
    setAuthState: React.Dispatch<React.SetStateAction<AuthStateType>>
    logout: () => void;
    getAccessToken: () => void;
}


const AuthContext = createContext({} as AuthContextType);


const AuthProvider = ({ children }: any) => {
    const [authState, setAuthState] = useState<AuthStateType>({
        role: null,
        access_token: null,
    })

    const logout = () => {
        setAuthState({
            role: null,
            access_token: null,
        });
    }

    const getAccessToken = () => {
        return authState.access_token;
    }

    return (
        <AuthContext.Provider
            value={{ authState, setAuthState, logout, getAccessToken }}>
            {children}
        </AuthContext.Provider>
    )

}

export { AuthContext, AuthProvider };


