import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from '../Firebase/authentication.init';

initializeAuthentication();

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const signInUsingGoogle = () => {
        setIsLoading (true)
         return signInWithPopup(auth, googleProvider)
            
    }
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((error) => {
                // An error happened.
                setError(error.massage)
            })
            .finally(()=> setIsLoading(false));
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        })
        return () => unsubscribe
    }, [auth])


    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        isLoading,
        setIsLoading
    }
};

export default useFirebase;