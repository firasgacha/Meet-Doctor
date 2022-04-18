import React, { useEffect, useState } from 'react';
import Topbar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Spinner } from '../components/Spinner';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase-config';

export default function Contact() {
    const contactCollectionRef = collection(db, 'Contacts');
    const [hide, setHide] = useState(true);
    const [fullName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');


    const sendContact = async () => {
        await addDoc(contactCollectionRef, { message: message, subject: subject, email: email, name: fullName })
            .then(() => {
                // console.log('appointment created');
                alert('Message sended successfully');
                document.getElementById('message-form').reset();
            }).catch((error) => {
                console.log(error.message);
            })
    }
    useEffect(() => {
        setTimeout(() => {
            setHide(false);
        }, 1000);
    }, [])
    return (
        <>
            <Topbar />
            <Navbar />
            {hide ? <Spinner /> : null}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-xl-4 col-lg-6 wow slideInUp" data-wow-delay="0.1s">
                            <div className="bg-light rounded h-100 p-5">
                                <div className="section-title">
                                    <h5 className="position-relative d-inline-block text-primary text-uppercase">Contact Us</h5>
                                    <h1 className="display-6 mb-4">Feel Free To Contact Us</h1>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                                    <div className="text-start">
                                        <h5 className="mb-0">Our Office</h5>
                                        <span>Online, Any Time, Any Place</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                                    <div className="text-start">
                                        <h5 className="mb-0">Email Us</h5>
                                        <span>MeetDoctor@gmail.com</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                                    <div className="text-start">
                                        <h5 className="mb-0">Call Us</h5>
                                        <span>+216 22 333 333</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 wow slideInUp" data-wow-delay="0.3s">
                            <form id='message-form'>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <input onChange={(e) => { setName(e.target.value); }} type="text" className="form-control border-0 bg-light px-4" placeholder="Your Name" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12">
                                        <input onChange={(e) => { setEmail(e.target.value); }} type="email" className="form-control border-0 bg-light px-4" placeholder="Your Email" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12">
                                        <input onChange={(e) => { setSubject(e.target.value); }} type="text" className="form-control border-0 bg-light px-4" placeholder="Subject" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12">
                                        <textarea onChange={(e) => { setMessage(e.target.value); }} className="form-control border-0 bg-light px-4 py-3" rows="5" placeholder="Message"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <a className="btn btn-primary w-100 py-3" onClick={sendContact}>Send Message</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-xl-4 col-lg-12 wow slideInUp" data-wow-delay="0.6s">
                            <img className="position-relative rounded w-100 h-100"
                                src="https://img.freepik.com/vecteurs-libre/collection-boutons-contact-rondes_23-2147607168.jpg?size=338&ext=jpg&ga=GA1.2.2008272138.1632700800"></img>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}