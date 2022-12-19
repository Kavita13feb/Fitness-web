import { createContext } from "react";



export const AuthContext =createContext()

export default function AuthContextProvider ({childern})   {

return (

    <AuthContext.Provider value={{}}>
        {childern}
    </AuthContext.Provider>
)

}         
