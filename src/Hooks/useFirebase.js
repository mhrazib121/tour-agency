import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from '../Firebase/authentication.init';

initializeAuthentication();

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [error, setError] = useState()

    const auth = getAuth();
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((error) => {
                // An error happened.
            });
    };

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])


    return {
        user,
        error,
        signInUsingGoogle,
        logOut
    }
};

export default useFirebase;