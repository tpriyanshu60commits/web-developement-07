import React , {useState , useEffect , useContext} from "react";

const AuthContext = React.createContext();
export const AuthProvider = ({children})=>
{
    const value = {
        name:"priyanshu",
        isLogin:true,
    }
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
};