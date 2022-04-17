import React, { useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../config/firebase-config';
import { Alert } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import Topbar from '../components/TopBar';
import Navbar from '../components/Navbar';



export default function Register() {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [PasswordConfirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()



    const registerUser = async (e) => {
        e.preventDefault();
        if (registerPassword !== PasswordConfirmation) {
            return setError('Password do not match.');
        }
        try {
            setError('');
            setLoading(true);
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            navigate('/login');
            console.log(user);
        } catch (error) {
            console.log(error.message);
            if(error.message ==='Firebase: Error (auth/email-already-in-use).'){
                setError('Email already in use.');
            }else setError('Failed to create an account.');
            
        }
        setLoading(false);
    };

    useEffect(() => {
        document.getElementById('form-login').reset();
    },[]);
    return (
        <>
        <Topbar/>
        <Navbar />
            {/* <!-- Sign up form --> */}
                    <form id="form-login" className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <div className="register-form" id="register-form">
                                {/* <div className="form-group">
                                <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name"/>
                            </div> */}
                                <div className="form-group">
                                    <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                    <input type="email" name="email" id="email" placeholder="Your Email" onChange={(e) => setRegisterEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="pass" id="pass" placeholder="Password" onChange={(e) => setRegisterPassword(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="your_pass" id="your_pass" placeholder="Password Confirmation" onChange={(e) => setPasswordConfirmation(e.target.value)} />
                                </div>
                                <div className="form-group form-button">
                                    <input disabled={loading} type="submit" name="signup" id="signup" className="form-submit" value="Register" onClick={registerUser} />
                                </div>
                            </div>
                        </div>
                        <div className="signup-image">
                            <figure><img src="../../assets/auth/images/signup-image.jpg" alt="sing up image" /></figure>
                            <div className="signup-image-link">You are already a member ? <Link to="/login">Log In</Link></div>
                        </div>
                    </form>
        </>
    )
}