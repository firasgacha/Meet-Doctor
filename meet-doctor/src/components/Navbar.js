import React from 'react';

export default function Navbar() {
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
                <a href="index.html" className="navbar-brand p-0">
                    <h1 className="m-0 text-primary"><i className="fa fa-tooth me-2"></i>DentCare</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
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
                    <button type="button" className="btn text-dark" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
                    <a href="appointment.html" className="btn btn-primary py-2 px-4 ms-3">Appointment</a>
                </div>
            </nav>
        </div>
    );
}