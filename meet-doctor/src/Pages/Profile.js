import React, { useEffect, useState } from 'react';
import {
    updateEmail,
    updatePassword,
} from 'firebase/auth';
import { auth } from '../config/firebase-config';
import { Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { storage } from '../config/firebase-config';
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from 'uuid';



export default function Profile() {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [PasswordConfirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [imageList, setImageList] = useState([]);
    const imageListRef = ref(storage, 'images/');
    const navigate = useNavigate()
    const [imageUpload, setImageUpload] = useState(null);


    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then(() => {
            alert("image uploaded");
        });
    }

    const updateProfile = async () => {
        try {
            setError('');
            setLoading(true);
            if (registerPassword !== PasswordConfirmation) {
                return setError('Password do not match.');
            }
            if (registerEmail !== auth.currentUser.email) {
                updateEmail(auth.currentUser, registerEmail)
            }
            if (registerPassword) {
                updatePassword(auth.currentUser, registerPassword)
            }
            navigate('/')
        } catch (error) {
            setError('Failed to update profile')
            console.log(error.message);
        }
        setLoading(false);
    };


    useEffect(() => {
        listAll(imageListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url]);
                });
            });
        });
    },[]);

    useEffect(() => {
        if (auth.currentUser) {
            setUser(auth.currentUser);
            setRegisterEmail(auth.currentUser.email);
        } else {
            navigate('/login');
        }
    }, []);

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
                            <div>
                                <input type="file" onChange={(e) => setImageUpload(e.target.files[0])} />
                                <button onClick={uploadImage}>Upload Image</button>
                            </div>
                            <div>

                                {imageList.map((url) => {
                                    return (
                                        
                                            <img src={url} />
                                        

                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}