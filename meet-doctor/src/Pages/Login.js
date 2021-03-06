import React, { useEffect,useState } from 'react';
import {
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../config/firebase-config';
import SignWithGoogle from '../components/GoogleAuth';
import { Link, useNavigate } from "react-router-dom";
import { Alert } from 'react-bootstrap';
import Topbar from '../components/TopBar';
import Navbar from '../components/Navbar';
import {Spinner} from '../components/Spinner';





export default function Login() {

    const [loginEmail, setLoginEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [hide, setHide] = useState(true);





    const loginUser = async e => {
        e.preventDefault()
        try {
            setError('');
            setLoading(true);
            await signInWithEmailAndPassword(auth, loginEmail, Password);
            navigate('/');
            setUser(auth.currentUser.email);
        } catch (error) {
            console.log(error.message);
            if (error.message.toString() === 'Firebase: Error (auth/user-not-found).') {
                setError('User not found.');
            } else if (error.message.toString() == 'Firebase: Error (auth/wrong-password).') {
                setError('Invalid password.');
            } else { setError('Failed to authenticate.') }
        }
        setLoading(false);
    };

    useEffect(() => {
        setTimeout(() => {
            setHide(false);
        }, 1000);
    }, [])
    return (
        <>
            <Topbar />
            <Navbar />
            {hide ? <Spinner/> : null}
            {/* <!-- Sing in  Form --> */}
            <div className="container mt-2">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src="../../assets/auth/images/signin-image.jpg" alt="sing up image" /></figure>
                        <div className="text-center">Need an account ? <Link to="/register">Sign Up</Link></div>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Log in</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <div className="register-form" id="login-form">
                            <div className="form-group">
                                <label htmlFor="your_name"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="your_name" id="your_name" placeholder="Your E-mail" onChange={(e) => setLoginEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="your_pass" id="your_pass" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <Link to="/forget-password">Forgot your password ?</Link>
                            </div>
                            <div className="form-group form-button">
                                <input disabled={loading} type="submit" name="signin" id="signin" className="form-submit" value="Log in" onClick={loginUser} />
                            </div>
                            <div className="social-login">
                                <span className="social-label">Or login with</span>
                                <ul className="socials">
                                    <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                    <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                    <SignWithGoogle />
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}