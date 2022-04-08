import React,{useEffect,useState} from 'react';
import {
    updateEmail,
    updatePassword,
} from 'firebase/auth';
import { auth } from '../config/firebase-config';
import { Alert } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { async } from '@firebase/util';



export default function Profile() {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [PasswordConfirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

    const navigate = useNavigate()



    const updateProfile = async(e) => {
        // e.preventDefault();
        // if (registerPassword !== PasswordConfirmation) {
        //     return setError('Password do not match.');
        // }
        // const promises =[];
        // setError('');
        // setLoading(true);
        // if(registerEmail !== auth.currentUser.email){
        //     promises.push( updateEmail(auth, registerEmail))
        // }
        // if(registerPassword){
        //     promises.push( updatePassword(auth, registerPassword)) 
        // }

        // promises.all(promises).then(() => {
        //     navigate('/')
        // }).catch(() => {
        //     setError('Failed to update profile')
        // }).finally(()=>{
        //      setLoading(false); 
        // })
        try {
            setError('');
        setLoading(true);
            if (registerPassword !== PasswordConfirmation) {
            return setError('Password do not match.');}
            if(registerEmail !== auth.currentUser.email){
                updateEmail(auth.currentUser,registerEmail)
            }
            if(registerPassword){
                updatePassword(auth.currentUser,registerPassword)
            }
            navigate('/')  
        } catch (error) {
            setError('Failed to update profile')
            console.log(error.message);
        }
        setLoading(false); 
    };

    useEffect(() => {
        if(auth.currentUser){
          setUser(auth.currentUser);
          setRegisterEmail(auth.currentUser.email);
          console.log(user);
        }else {
            navigate('/login');
        }
      },[]);

    return (
        <>
        <Navbar />
        <div className="main">
            {/* <!-- Sign up form --> */}
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Update Profile</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <div className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                    <input type="email" name="email" id="email" placeholder="Your Email" onChange={(e) => setRegisterEmail(e.target.value)} defaultValue={registerEmail} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="pass" id="pass" placeholder="Leave blank to keep the same password" onChange={(e) => setRegisterPassword(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="your_pass" id="your_pass" placeholder="Leave blank to keep the same password" onChange={(e) => setPasswordConfirmation(e.target.value)} />
                                </div>
                                <div className="form-group form-button">
                                    <input disabled={loading} type="submit" name="signup" id="signup" className="form-submit" value="Update" onClick={updateProfile} />
                                </div>
                                <Link to="/">Cancel</Link>
                            </div>
                        </div>
                        {/* <div className="signup-image">
                            <figure><img src="../../assets/auth/images/signup-image.jpg" alt="sing up image" /></figure>
                            <div className="signup-image-link">You are already a member ? <Link to="/login">Log In</Link></div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}