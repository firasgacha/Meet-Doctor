import React, { useEffect, useState } from 'react';
import {
    updateEmail,
    updatePassword,
} from 'firebase/auth';
import { auth } from '../config/firebase-config';
import { Alert, InputGroup, Button, FormControl } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { storage } from '../config/firebase-config';
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from 'uuid';
import Avatar from '@mui/material/Avatar';



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
    }, []);

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
            {/* <!-- Hero Start --> */}
            <div className="container-fluid bg-primary py-5 hero-header mb-5">
                <div className="row py-3">
                    <div className="col-12 text-center">
                        <h1 className="display-3 text-white animated zoomIn">Profile</h1>
                        <Link to="/" className="h4 text-white">Home</Link>
                        <i className="h5 bi bi-arrow-right text-white ms-1 me-1"></i>
                        <Link to="/profile" className="h4 text-white">Profile</Link>
                    </div>
                </div>
            </div>
            {/* <!-- Hero End --> */}
            {/* <!-- Sign up form --> */}
            <div className="container signin-content">
                <div className="signup-form">
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
                    <InputGroup>
                        <FormControl
                            type='file'
                            onChange={(e) => setImageUpload(e.target.files[0])}
                        />
                        <Button variant="outline-secondary" onClick={uploadImage}>Upload</Button>
                        <Button variant="outline-secondary">Delete</Button>
                    </InputGroup>
                    <Avatar
                        alt="Remy Sharp"
                        src={localStorage.getItem('photo')}
                        sx={{ width: 86, height: 86 }}
                    />
                </div>
                <div>

                    {/* {imageList.map((url) => {
                                    console.log(url);
                                    return (
                                        
                                    <img src={url} />
                                        

                                    )
                                })} */}
                </div>
            </div>
        </>
    )
}