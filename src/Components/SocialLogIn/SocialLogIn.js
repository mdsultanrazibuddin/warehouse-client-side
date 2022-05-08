import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import auth from "../firebase.init";
import image from '../../Images/google (1).png'
import "./SocialLogIn.css";

const provider = new GoogleAuthProvider();



const SocialLogIn = () => {
 
  const handleGoogleSignIn = () => {

        signInWithPopup(auth, provider)
        .then((result) => {
        
            const user = result.user;
            console.log(user);
        
        })
        .catch((error) => {
            console.error(error)
        });
        
  };

  
  return (
    <div className="socials">
      <div className="d-flex  justify-content-center align-items-center my-3">
        <div className="line"></div>
        <p className="pb-0 mb-0 mx-3">or</p>
        <div className="line"></div>
      </div>

      <div className="social-btn">
        <div className="social-button-container">
          <button
            onClick={handleGoogleSignIn}
            className="d-block mx-auto mx-0 google-btn"
          >
              <img className="img" src={image} alt="" srcset="" />
            Sign In with Google
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default SocialLogIn;