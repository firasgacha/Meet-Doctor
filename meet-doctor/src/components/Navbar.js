import React,{useEffect,useState} from 'react';
import { auth } from '../config/firebase-config';
import { Link, useNavigate } from "react-router-dom";
import {
    signOut
} from 'firebase/auth';



export default function Navbar() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);


    const logoutUser = async e => {
        e.preventDefault()
        console.log(auth.currentUser)
        try {
            await signOut(auth);
            window.location.reload();           
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        if(auth.currentUser){
          setUser(auth.currentUser);
          console.log(user);
        }
      },[]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
                <Link to="/" className="navbar-brand p-0">
                    <h1 className="m-0 text-primary"><i className="fas fa-user-md-chat"></i>Meet Doctor</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <a href="about.html" className="nav-item nav-link">About</a>
                        <a href="service.html" className="nav-item nav-link">Service</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <a href="price.html" className="dropdown-item">Pricing Plan</a>
                                <a href="team.html" className="dropdown-item">Our Dentist</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="appointment.html" className="dropdown-item">Appointment</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                    {/* <button type="button" className="btn text-dark" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button> */}
                    {
                        user == null?
                            <div>
                                <Link to="/login" className="btn btn-primary py-2 px-4 ms-3">Log in</Link>
                                <Link to="/register" className="btn btn-primary py-2 px-4 ms-3">Sign up</Link>
                            </div>
                            :
                            <div className="d-flex align-content-center">
                                <Link to="/profile">
                                <i className="bi bi-person-circle text-primary ms" style={{fontSize: '2rem'}}></i>
                                </Link> 
                                <button onClick={logoutUser} className="btn btn-primary py-2 px-4 ms-3">Log out</button>
                            </div>
                    }
                </div>
            </nav>
        </div>
    );
}