import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const Login = () => {

    const {signInUsingGoogle} = useAuth();
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
    }

    return (
        <div className="text-primary p-5  ">
            <h1> Please Login</h1>

            <Form className="container">
                <Form.Group as={Row} className="mb-3 m-auto w-50" controlId="formHorizontalEmail">
                    <Form.Label column sm={10}>
                        Name
                    </Form.Label>
                    <Col sm={10}>

                        {/* Name field  */}
                        <Form.Control type="text" placeholder="Enter your name" required />
                    </Col>
                </Form.Group>


                <Form.Group as={Row} className="mb-3 m-auto w-50" controlId="formHorizontalEmail">
                    <Form.Label column sm={10}>
                        Email
                    </Form.Label>
                    <Col sm={10}>

                        {/* email field  */}
                        <Form.Control type="email" placeholder="Email" required />
                    </Col>
                </Form.Group>


                <Form.Group as={Row} className="mb-3 m-auto w-50" controlId="formHorizontalPassword">
                    <Form.Label column sm={10}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        {/* Password field  */}
                        <Form.Control type="password" placeholder="Password" required />
                    </Col>
                </Form.Group>

                {/* <Form.Group as={Row} className="mb-3 m-auto w-50" controlId="formHorizontalCheck">
            <Col sm={{ span: 10 }}>
            <Link to="/login"> Want to register. </Link>
            </Col>
          </Form.Group> */}

                <Form.Group as={Row} className="mb-3 m-auto w-50">
                    <Col sm={{ span: 10 }}>

                        <Button type="submit">Register</Button>
                    </Col>
                </Form.Group>
            </Form>
            {/* <div className="container text-warning"> {error}</div>
        <button onClick={handaleSignIn} > sign in new</button> */}

        {/* google sign in  */}

            <button className="m-2 bg-primary rounded-2" onClick={googleLogin} > Google Login </button>
        </div>
    );
};

export default Login;