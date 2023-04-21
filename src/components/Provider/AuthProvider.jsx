/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';



const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const logOut = () =>{
        return signOut(auth);
    }



    // Sign In

    const loggedIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // const user = auth.currentUser;
    // const updateName = (name) =>{
    //     return updateProfile(user, {
    //         displayName: name
    //     })
    // }

    // Observe Auth State Change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state change', currentUser);
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        createUser,
        setError,
        error,
        logOut,
        loggedIn,
        success,
        setSuccess,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;