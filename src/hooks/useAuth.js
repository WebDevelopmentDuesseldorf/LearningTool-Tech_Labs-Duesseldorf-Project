import React, { createContext, useContext, useState, useEffect } from 'react'
import firebase from "firebase/app"
import "firebase/auth"


// Initialize Firebase
firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
})

const AuthContext = createContext()

// Hook for child components to get the auth object
// ... and re-render when it changes
export const useAuth = () => useContext(AuthContext)


// Provider hook that creates auth object and handles state
export const AuthPorvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticating, setIsAuthenticating] = useState(true)

    const sendSignInLinkToEmail = email => {
        return firebase
            .auth()
            .sendSignInLinkToEmail(email, {
                url: 'http://localhost:3000/confirm',
                handleCodeInApp: true,
            })
            .then(() => true);
    };

    const signInWithEmaiLink = (email, code) => (
        firebase
        .auth()
        .signInWithEmailLink(email, code)
        .then((result) => {
            setUser(result.user);
            return true;
        })
    );

    const logout = () => (
        firebase
        .auth()
        .signOut()
        .then (()=> {
            setUser(null);
        })
    );

     // Subscripe to user on mount
     // Because this sets state in the callback it will cause any ...
     // ... component that utilizes this hook to re-render with the ...
     // ... latest auth object   
     useEffect(() => {
         const unsubscribe = firebase.auth().onAuthStateChanged(user => {
             setUser(user)
             setIsAuthenticating(false)
         })

         // Cleanup subscription on unmount
         return () => unsubscribe()
     }, []);

     const values = {
         user,
         isAuthenticating,
         sendSignInLinkToEmail,
         signInWithEmaiLink,
         logout
     }

     return (
         <AuthContext.Provider value={values}>
            {!isAuthenticating && children}
         </AuthContext.Provider>
     )

};
