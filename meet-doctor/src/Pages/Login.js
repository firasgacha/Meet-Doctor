import React, { useState } from 'react';
import {
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { auth } from '../config/firebase-config';
import SignWithGoogle from '../components/GoogleAuth'

export default function Login() {

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [user, setUser] = useState(null);


    const loginUser = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user);
            setUser(auth.currentUser.email);
        } catch (error) {
            console.log(error.message);
        }
    };

    const logoutUser = async () => {
        await signOut(auth);
    };

    return (
        <div className="main">
            {user}
            {/* <!-- Sing in  Form --> */}
            <section className="sign-in">
                <div className="container">
                    <div className="signin-content">
                        <div className="signin-image">
                            <figure><img src="../../assets/auth/images/signin-image.jpg" alt="sing up image" /></figure>
                            <a href="#" className="signup-image-link">Create an account</a>
                        </div>

                        <div className="signin-form">
                            <h2 className="form-title">Sign up</h2>
                            <div className="register-form" id="login-form">
                                <div className="form-group">
                                    <label htmlFor="your_name"><i className="zmdi zmdi-email"></i></label>
                                    <input type="text" name="your_name" id="your_name" placeholder="Your E-mail" onChange={(e) => setLoginEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="your_pass" id="your_pass" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                    <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" onClick={loginUser} />
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