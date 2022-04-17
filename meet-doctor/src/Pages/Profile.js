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
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase-config';



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
    const [role, setRole] = useState('');
    //database states
    const [phone, setPhone] = useState('');
    const [birthday, setBirthday] = useState('');
    const [fullName, setFullName] = useState('');
    const [photoURL, setphotoURL] = useState(null);
    const usersCollectionRef = collection(db, 'Users');

    const getUserByEmail = async () => {
        try {
            const data = await getDocs(usersCollectionRef)
            setUser(
                await data.docs
                    .filter(doc => doc.data().email === auth.currentUser.email || doc.data().email === localStorage.getItem('email'))
                    .map((doc) => ({ ...doc.data(), id: doc.id }))
            )
            user.map(user => {
                setPhone(user.phone)
                setBirthday(user.birthday)
                setFullName(user.fullName)
                setphotoURL(user.photoURL)
                setRole(user.role)
            })
        } catch (error) {
            console.log(error.message)
        }

        // const tt = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        // tt.forEach(element => {
        //     if(element.email == registerEmail){
        //         setFullName(element.fullName)
        //         setBirthday(element.birthday)
        //         setPhone(element.phone)
        //         setphotoURL(element.photoURL)
        //     }

        // });
    }
    const UpdateUserInfo = async () => {
        await addDoc(usersCollectionRef, {
            phone: phone,
            birthday: birthday,
            fullName: fullName,
            email: registerEmail,
            photoURL: photoURL,
            role: "0"

        })
            .then(() => {
                console.log('User updated');
            }).catch((error) => {
                console.log(error.message);
            })
    }

    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then(() => {
            alert("image uploaded");
        });
    }

    const updateSecurity = async () => {
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
        if (auth.currentUser) {
            // setUser(auth.currentUser);
            setRegisterEmail(auth.currentUser.email);
        } else {
            navigate('/login');
        }
    }, []);

    useEffect(() => {
        // listAll(imageListRef).then((res) => {
        //     res.items.forEach((item) => {
        //         getDownloadURL(item).then((url) => {
        //             setImageList((prev) => [...prev, url]);
        //         });
        //     });
        // });
        getUserByEmail();
    }, []);

    return (
        <>
            <Navbar />
            {/* <!-- Hero Start --> */}
            <div className="container-fluid bg-primary py-5 hero-header mb-2">
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
            <div className="d-flex justify-content-center">
                {error && <Alert variant="danger">{error}</Alert>}
            </div>
            <div className="container signin-content">
                <div className="signup-form">
                <h3 className="d-flex justify-content-center">{role==="0"?"User":role==="1"?"Doctor":null} Informations</h3>
                    <Avatar
                        alt="Remy Sharp"
                        src={localStorage.getItem('photo')}
                        sx={{ width: 86, height: 86 }}
                    />
                    <InputGroup className="mt-2">
                        <FormControl
                            type='file'
                            onChange={(e) => setImageUpload(e.target.files[0])}
                        />
                        <Button variant="outline-secondary" onClick={uploadImage}>Upload</Button>
                        <Button variant="outline-secondary">Delete</Button>
                    </InputGroup>
                    <div className="register-form d-flex row align-items-center mt-3">
                        <div className="d-flex col-6">
                            <div className="form-group">
                                <label htmlFor="name"><i className="zmdi zmdi-email"></i></label>
                                <input type="text" name="Full Name" id="Full Name" placeholder="Full Name" onChange={(e) => setFullName(e.target.value)} defaultValue={fullName} />
                            </div>
                        </div>
                        <div className="d-flex col-6">
                            <div className="form-group">
                                <label htmlFor="birthday"><i className="zmdi zmdi-email"></i></label>
                                <input type="date" name="birthday" id="birthday" placeholder="Your birthday" onChange={(e) => setBirthday(e.target.value)} defaultValue={birthday} />
                            </div>
                        </div>
                        <div className="d-flex col-12 mt-3">
                            <div className="form-group">
                                <label htmlFor="phone"><i className="zmdi zmdi-phone"></i></label>
                                <input type="text" name="phone" id="phone" placeholder="Your Phone" onChange={(e) => setPhone(e.target.value)} defaultValue={phone} />
                            </div>
                        </div>
                        <div className="form-group form-button">
                            <input disabled={loading} type="submit" name="signup" id="signup" className="form-submit" value="Update" onClick={UpdateUserInfo} />
                            <input type="submit" name="signup" id="signup" className="form-submit ms-2 btn-dark" value="Get My Data" onClick={getUserByEmail} />
                        </div>
                    </div>


                </div>
                <div className="signup-form">
                    <h3 className="d-flex justify-content-center">Security</h3>
                    <div className="register-form mt-5" id="register-form">
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
                            <input disabled={loading} type="submit" name="signup" id="signup" className="form-submit" value="Update" onClick={updateSecurity} />
                        </div>
                    </div>
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