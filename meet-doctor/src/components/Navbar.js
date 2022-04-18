import React, { useEffect, useState } from 'react';
import { auth } from '../config/firebase-config';
import { Link,useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import {
    signOut
} from 'firebase/auth';
import Avatar from '@mui/material/Avatar';
import { db } from '../config/firebase-config';
import { collection, getDocs } from 'firebase/firestore';




export default function Navbar() {
    const [user, setUser] = useState(null);
    const [fullName, setFullName] = useState('');
    const [photoURL, setphotoURL] = useState(null);
    const usersCollectionRef = collection(db, 'Users');
    const [role, setRole] = useState('');
    const navigate = useNavigate()




    const getUserByEmail = async () => {
        try {
            const data = await getDocs(usersCollectionRef)
            setUser(
                await data.docs
                    .filter(doc => doc.data().email === auth.currentUser.email || doc.data().email === localStorage.getItem('email'))
                    .map((doc) => ({ ...doc.data(), id: doc.id }))
            )
            user.map(user => {
                setFullName(user.fullName)
                setphotoURL(user.photoURL)
                setRole(user.role)
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    const logoutUser = async e => {
        e.preventDefault()
        console.log(auth.currentUser)
        try {
            await signOut(auth);
            localStorage.clear();
            navigate('/');
            window.location.reload();
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        if (auth.currentUser) {
            setUser(auth.currentUser);
            console.log(user);
        }
        getUserByEmail();
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
                <Link to="/" className="navbar-brand p-0">
                    <h1 className="m-0 text-primary">Meet Doctor</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/Departements" className="nav-item nav-link active">Departements</Link>
                        <Link to="/Doctors" className="nav-item nav-link active">Doctors</Link>
                        <Link to="/About" className="nav-item nav-link active">About</Link>
                        {user ?
                            <div className="nav-item dropdown">
                                <Dropdown>
                                    <Dropdown.Toggle variant='white' id="dropdown-basic" className="nav-link dropdown-toggle">
                                        Appointment
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu m-0">
                                        <Link to="/Appointment" className="dropdown-item">Make Appointment</Link>
                                        <Link to="/MyAppointment" className="dropdown-item">My Appointments</Link>
                                        <Link to="/MyAppointmentDoctor" className="dropdown-item">Doctor Appointments</Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            : null}
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                    {/* <button type="button" className="btn text-dark" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button> */}
                    {
                        user == null ?
                            <div>
                                <Link to="/login" className="btn btn-primary py-2 px-4 ms-3">Log in</Link>
                                <Link to="/register" className="btn btn-primary py-2 px-4 ms-3">Sign up</Link>
                            </div>
                            :
                            <div className="d-flex align-content-center">
                                <Link to="/profile">
                                    {localStorage.getItem('photo') ? <Avatar
                                        alt="Remy Sharp"
                                        src={localStorage.getItem('photo')}
                                        sx={{ width: 36, height: 36 }}
                                    /> : <i className="bi bi-person-circle text-primary ms" style={{ fontSize: '2rem' }}></i>
                                    }
                                </Link>
                                <button onClick={logoutUser} className="btn btn-primary py-2 px-4 ms-3">Log out</button>
                            </div>
                    }
                </div>
            </nav>
        </div>
    );
}