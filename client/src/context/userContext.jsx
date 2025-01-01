import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const UserContext = createContext()


export function UserContextProvider({ children }) {


    const [user, setUser] = useState(null)


    useEffect(() => {


     async function handle_fetch() {
        
        try {

            const res =  await axios.get('http://localhost:8081/getUser', {withCredentials: true})

            if(res.data.success){
                setUser(res.data.data.user)
            }

            else{
                setUser(null)
            }
            
        } catch (error) {
            console.log(error);
            
        }

     }

     handle_fetch()

    },[])


    return (

        <UserContext.Provider value={{ user, setUser }}>

            {children}

        </UserContext.Provider>

    )

}

export function useUserContext() {
    return useContext(UserContext)
}