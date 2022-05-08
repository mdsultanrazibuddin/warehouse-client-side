import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import SocialLogIn from '../SocialLogIn/SocialLogIn';


import './SignIn.css'

const SignIn = () => {
     
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  let errorElement= '';
  
  const from = location.state?.from?.pathname || '/';
  
 
  
  const [
    signInWithEmailAndPassword,
    user,error
    
    
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(
    auth
  );
  
  if (error) {
    errorElement = <p className='text-danger'>Error: {error?.message}</p>
}


  const handleEmailBlur = event =>{
    setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
      setPassword(event.target.value);
    }
    if(user){
         navigate (from, {replace: true})
    }
    
   
  

  
  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password)
    
    
  };
   
    return (
        <div className="mx-auto mt-5 login-container">
      
      <Form  onSubmit={handleLogin}   className="form-container">
            <h1 className="text-center register">Sign In</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                 onBlur ={ handleEmailBlur}
                
                 type="email"
                placeholder="Enter email"
                required
              />
             
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                 onBlur={ handlePasswordBlur}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>

            {errorElement}
            
            <p
              className=" forget-pass"
              
            >
              Forget Password?<button className='btn btn-link text-primary pe-auto text-decoration-none'onClick={async () => {
               await sendPasswordResetEmail(email);
          alert('Sent email');
        }}>Reset your password</button>
            </p>

            <h6>
              New to Book Store ?{" "}
              <span
               
                className="text-primary create-new-account"
              >
               <Link className='register form-link' to="/signup">Create a new account</Link> 
              </span>
            </h6>

            <div className="d-flex justify-content-center mt-3 ">
              <Button className="px-5 button" variant="primary" type="submit">
                Sign In
              </Button>
            </div>

          </Form>
          <SocialLogIn></SocialLogIn>
    </div>
    );
};

export default SignIn;