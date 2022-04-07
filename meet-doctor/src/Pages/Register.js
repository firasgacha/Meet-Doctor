import React,{useState} from 'react';
import {
    createUserWithEmailAndPassword,
} from 'firebase/auth';
import {auth} from '../config/firebase-config';

export default function Register(){
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const registerUser = async() => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };
    return(
        <div className="main">
            {/* <!-- Sign up form --> */}
        <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <div className="register-form" id="register-form">
                            {/* <div className="form-group">
                                <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name"/>
                            </div> */}
                            <div className="form-group">
                                <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email" onChange={(e) => setRegisterEmail(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Password" onChange={(e) => setRegisterPassword(e.target.value)}/>
                            </div>
                            {/* <div className="form-group">
                                <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                            </div> */}
                            {/* <div className="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                            </div> */}
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register"  onClick={registerUser}/>
                            </div>
                        </div>
                    </div>
                    <div className="signup-image">
                        <figure><img src="../../assets/auth/images/signup-image.jpg" alt="sing up image"/></figure>
                        <a href="#" className="signup-image-link">I am already member</a>
                    </div>
                </div>
            </div>
        </section>
            </div>
    )
}