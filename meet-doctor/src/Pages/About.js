import React from 'react';
import Footer from '../components/Footer';
import Topbar from '../components/TopBar';
import Navbar from '../components/Navbar';
export default function About() {
    return (
        <>
        <Topbar />
      <Navbar />
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-7">
                            <div className="section-title mb-4">
                                <h5 className="position-relative d-inline-block text-primary text-uppercase">About Us</h5>
                                <h1 className="display-5 mb-0">Clinic with innovative approach to treatment!</h1>
                            </div>
                            <h4 className="text-body fst-italic mb-4">We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.</h4>
                            <p className="mb-4">Contact us any suitable way and make an appointment with the doctor whose help you need! Visit us at the scheduled time and get your treatment.</p>
                            <div className="row g-3">
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Award Winning</h5>
                                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Professional Staff</h5>
                                </div>
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>24/7 Opened</h5>
                                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Fair Prices</h5>
                                </div>
                            </div>
                            <a className="btn btn-primary py-3 px-5 mt-4 wow zoomIn" data-wow-delay="0.6s">Make Appointment</a>
                        </div>
                        <div className="col-lg-5" style={{ minHeight: '500px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="../../assets/img/medical-img-1.webp" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            </>
    );
    }