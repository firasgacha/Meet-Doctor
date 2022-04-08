import React, { useState } from 'react';
import {
    sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from '../config/firebase-config';
import SignWithGoogle from '../components/GoogleAuth';
import { Link } from "react-router-dom";
import { Alert } from 'react-bootstrap';


export default function ForgetPassword() {

    const [loginEmail, setLoginEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');



    const resetPassword = async e => {
         e.preventDefault();
         try {
            setMessage('');
            setLoading(true);
            await sendPasswordResetEmail(auth,loginEmail);
            setMessage('Check your inbox for further instructions.');
         } catch (error) {
             console.log(error.message);
             if(error.message==='Firebase: Error (auth/user-not-found).'){
                 setError('User not found.');
             }else {
                setError('Failed to reset password.');
             }
         }
         setLoading(false);

    }

    

    return (
        <div className="main">
            {/* <!-- Sing in  Form --> */}
            <section className="sign-in">
                <div className="container">
                    <div className="signin-content">
                        <div className="signin-image">
                            <figure><img src="../../assets/auth/images/signin-image.jpg" alt="sing up image" /></figure>
                            <div className="text-center">Need an account ? <Link to="/register">Sign Up</Link></div>                           
                        </div>

                        <div className="signin-form">
                            <h2 className="form-title">Password Reset</h2>
                            {message && <Alert variant="success">{message}</Alert>}
                            {error && <Alert variant="danger">{error}</Alert>}
                            <div className="register-form" id="login-form">
                                <div className="form-group">
                                    <label htmlFor="your_name"><i className="zmdi zmdi-email"></i></label>
                                    <input type="text" name="your_name" id="your_name" placeholder="Your E-mail" onChange={(e) => setLoginEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <Link to="/login">Login</Link>
                                </div>
                                <div className="form-group form-button">
                                    <input disabled={loading} type="submit" name="signin" id="signin" className="form-submit" value="Reset Password" onClick={resetPassword} />
                                </div>
                            </div>
                            <div className="social-login">
                                <span className="social-label">Or login with</span>
                                <ul className="socials">
                                    <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                    <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                    <SignWithGoogle/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}