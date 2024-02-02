import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({children}) {

const [isAuthenticated,setAuthenticated] = useState(false);
const [username,setUsername] = useState(null);


function login(username,password){
    if(username==='Smk_TodoApp' && password==='smk123'){
        setAuthenticated(true);
        setUsername(username);
        console.log("Success");
        return true;

    }
    else{
        setAuthenticated(false);
        setUsername(null);
        return false;
    
    }
}

function logout()
{
    setAuthenticated(false);
}
    return (
        <AuthContext.Provider value={{isAuthenticated,login,logout,username}}>
            {children}
        </AuthContext.Provider>
    )
}

