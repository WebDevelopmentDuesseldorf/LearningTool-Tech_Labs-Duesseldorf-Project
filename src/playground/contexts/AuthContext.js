import React, { useContext } from 'react'
import { auth } from "../firebase"


const AuthContext = React.createContext()


export function useAuth() {
    return useContext()
}

export function AuthProvider() {
    const [currentUser, setCurrentUser] = useState()

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }


    useEffect(()=> {
       const unsubscribe =  auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])
    

    const value = {
        currentUser, 
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}