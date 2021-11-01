
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const Login = () => {

    const {signInUsingGoogle, setIsLoading} = useAuth();
    const location= useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home'

    const googleLogin=()=>{
        signInUsingGoogle()
        .then(result => {
            // const user = result.user;
            // setUser(user);
            // console.log(user);
            history.push(redirect_url)
            
        })
        .catch((error)=>{
            // setError(error.massage)
        })
        .finally(()=> setIsLoading(false))
    }

    return (
        <div className="text-primary p-5 App ">
            <h1> Please Login</h1>

        {/* google sign in  */}

            <button className="m-2 bg-primary text-white rounded-2" onClick={googleLogin} > Google Login </button>
        </div>
    );
};

export default Login;