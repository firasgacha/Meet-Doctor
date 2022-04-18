import React from 'react';
import Topbar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { minHeight } from '@mui/system';
export default function Home() {
    return (
        <div>
            {/* <!-- Spinner Start --> */}
            {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-grow text-primary m-1" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-dark m-1" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-secondary m-1" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div> */}
            {/* <!-- Spinner End --> */}


            {/* {/* <!-- Topbar Start --> */}
            <Topbar />
            {/* <!-- Topbar End --> */}


            {/* <!-- Navbar Start --> */}
            <Navbar />
            {/* <!-- Navbar End --> */}


            {/* <!-- Full Screen Search Start --> */}
            <div className="modal fade" id="searchModal" tabIndex="-1">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content" style={{ backgroundColor: 'rgba(9, 30, 62, .7)' }}>
                        <div className="modal-header border-0">
                            <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex align-items-center justify-content-center">
                            <div className="input-group" style={{ maxWidth: '900px' }}>
                                <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword" />
                                <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Full Screen Search End --> */}


            {/* <!-- Carousel Start --> */}
            <div className="container-fluid p-0">
                <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="../../assets/img/image-6.png" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: '900px' }}>
                                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">Consult Your Doctor Online</h5>
                                    <h1 className="display-1 text-white mb-md-4 animated zoomIn">Stay Home, Stay Safe</h1>
                                    <a href="appointment.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</a>
                                    <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="../../assets/img/imge-1.webp" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: '900px' }}>
                                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">Consult Your Doctor Online</h5>
                                    <h1 className="display-1 text-white mb-md-4 animated zoomIn">Stay Home, Stay Safe</h1>
                                    <a href="appointment.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</a>
                                    <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="../../assets/img/image-4.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: '900px' }}>
                                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">Consult Your Doctor Online</h5>
                                    <h1 className="display-1 text-white mb-md-4 animated zoomIn">Stay Home, Stay Safe</h1>
                                    <a href="appointment.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</a>
                                    <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="../../assets/img/image-5.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: '900px' }}>
                                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">Consult Your Doctor Online</h5>
                                    <h1 className="display-1 text-white mb-md-4 animated zoomIn">Stay Home, Stay Safe</h1>
                                    <a href="appointment.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</a>
                                    <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* <!-- Carousel End --> */}


            {/* <!-- Banner Start --> */}
            <div className="container-fluid banner mb-5">
                <div className="container">
                    <div className="row gx-0">
                        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                            <div className="bg-primary d-flex flex-column p-5" style={{ height: '300px' }}>
                                <h3 className="text-white mb-3">Opening Hours</h3>
                                <div className="d-flex justify-content-between text-white mb-3">
                                    <h6 className="text-white mb-0">Mon - Fri</h6>
                                    <p className="mb-0 text-white"> 8:00am - 9:00pm</p>
                                </div>
                                <div className="d-flex justify-content-between text-white mb-3">
                                    <h6 className="text-white mb-0">Saturday</h6>
                                    <p className="mb-0 text-white"> 8:00am - 7:00pm</p>
                                </div>
                                <div className="d-flex justify-content-between text-white mb-3">
                                    <h6 className="text-white mb-0">Sunday</h6>
                                    <p className="mb-0 text-white"> 8:00am - 5:00pm</p>
                                </div>
                                <a className="btn btn-light" href="">Appointment</a>
                            </div>
                        </div>
                        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                            <div className="bg-dark d-flex flex-column p-5 align-align-items-center" style={{ height: '300px' }}>
                                <h3 className="mt-5 d-flex justify-content-center text-white mb-3">MeetDoctor@gmail.com</h3>
                                <a className="d-flex  justify-content-center btn btn-light" href="">Contact Us</a>
                            </div>
                        </div>
                        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                            <div className="bg-secondary d-flex flex-column p-5" style={{ height: '300px' }}>
                                <h3 className="mt-5 d-flex  justify-content-center text-white mb-3">Make Appointment</h3>
                                <h2 className="d-flex  justify-content-center text-white mb-0">+216 22 333 333</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Banner Start --> */}


            {/* <!-- Departemets --> */}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row g-5">
                        <div className="col">
                            <div className="section-title mb-4">
                                <h5 className="position-relative d-inline-block text-primary text-uppercase">OUR DEPARTEMENTS</h5>
                                <h1 className="display-5 mb-0">The World's Best Website That You Can Trust</h1>
                            </div>
                            <section className="py-0">
                                <div className="container">
                                    <img className="w-100" src="../../assets/img/image-7.jpg" alt="" />
                                </div>
                            </section>

                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- Departemets --> */}

            {/* <!-- About Start --> */}
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
            {/* <!-- About End --> */}


            




            {/* <!-- Newsletter Start --> */}
            <div className="container-fluid position-relative pt-5 wow fadeInUp" data-wow-delay="0.1s" style={{ zIndex: 1 }}>
                <div className="container">
                    <div className="bg-primary p-5">
                        <form className="mx-auto" style={{ maxWidth: '600px' }}>
                            <div className="input-group">
                                <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                                <button className="btn btn-dark px-4">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- Newsletter End --> */}


            {/* <!-- Back to Top --> */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i className="bi bi-arrow-up"></i></a>

            <Footer/>
        </div>
    );
}