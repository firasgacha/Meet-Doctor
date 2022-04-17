import React, { useEffect, useState } from 'react';
import Topbar from '../components/TopBar';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase-config';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase-config';


export default function Appointment() {
    // appoinment states
    const [dateApp, setDate] = useState('');
    const [time, setTime] = useState('');
    const [departement, setDepartement] = useState('');
    const [doctor, setDoctor] = useState('');
    const [email, setEmail] = useState('');
    const [fullName, setName] = useState('');
    const [userId, setUserId] = useState('');
    const [meetLink, setMeetingLink] = useState('Not available');
    const navigate = useNavigate();
    //database states
    const [departementsList, setDepartementsList] = useState([]);
    const [doctorsList, setDoctorsList] = useState([]);
    const doctorsCollectionRef = collection(db, 'Doctor');
    const appointmentCollectionRef = collection(db, "Appointment");
    const departementsCollectionRef = collection(db, 'Departement');

    const createAppointment = async () => {
        await addDoc(appointmentCollectionRef, {meetLink: meetLink, userId: userId, date: dateApp, departement: departement, doctor: doctor, email: email, name: fullName, time: time })
            .then(() => {
                // console.log('appointment created');
                alert('Appointment sended successfully');
                document.getElementById('appointment-form').reset();
            }).catch((error) => {
                console.log(error.message);
            })
    }
    const getDepartements = async () => {
        const data = await getDocs(departementsCollectionRef);
        setDepartementsList(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
    }
    const getDoctors = async () => {
        const data = await getDocs(doctorsCollectionRef);
        setDoctorsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    useEffect(() => {
        if (auth.currentUser) {
            setUserId(auth.currentUser.uid);
            setEmail(auth.currentUser.email); 
            setName(auth.currentUser.displayName); } else { navigate('/login'); }
        getDepartements();
        getDoctors();
    }, []);
    return (
        <>
            <Topbar />
            <Navbar />
            {/* <!-- Hero Start --> */}
            <div className="container-fluid bg-primary py-5 hero-header mb-5">
                <div className="row py-3">
                    <div className="col-12 text-center">
                        <h1 className="display-3 text-white animated zoomIn">Appointment</h1>
                        <Link to="/" className="h4 text-white">Home</Link>
                        <i className="h5 bi bi-arrow-right text-white ms-1 me-1"></i>
                        <Link to="/appointment" className="h4 text-white">Appointment</Link>
                    </div>
                </div>
            </div>
            {/* <!-- Hero End --> */}


            {/* <!-- Appointment Start --> */}
            <div className="container-fluid bg-primary bg-appointment mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ marginTop: '90px' }}>
                <div className="row gx-5">
                    <div className="col-lg-6 py-5">
                        <div className="py-5">
                            <h1 className="display-5 text-white mb-4">We Are Certified</h1><h1 className="display-5 text-white mb-4">You Can Trust Us</h1>
                        </div>
                    </div>
                    <form className="col-lg-6" id='appointment-form'>
                        <div className="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                            <h1 className="text-white mb-4">Make Appointment</h1>
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <select onChange={(e) => { setDepartement(e.target.value); }} className="form-select bg-light border-0" style={{ height: '55px' }}>
                                        <option defaultValue>Select A Departement</option>
                                        {departementsList.map((dep) => {
                                            console.log(dep);
                                            return (
                                                <option key={dep.id} value={dep.name}>{dep.name}</option>
                                            )
                                        })}

                                    </select>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <select onChange={(e) => { setDoctor(e.target.value); }} className="form-select bg-light border-0" style={{ height: '55px' }}>
                                        <option defaultValue>Select Doctor</option>
                                        {doctorsList.map((doctor) => {
                                            return (
                                                <option key={doctor.id} value={doctor.name}>{doctor.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input defaultValue={fullName} onChange={(e) => { setName(e.target.value); }} type="text" className="form-control bg-light border-0" placeholder="Your Name" style={{ height: '55px' }} />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input defaultValue={email} onChange={(e) => { setEmail(e.target.value); }} type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{ height: '55px' }} />
                                </div>
                                {/* <div className="col-12 col-sm-6">
                                    <input onChange={(e) => { setDoctor(e.target.value); }} type="text" className="form-control bg-light border-0" placeholder="Your Doctor" style={{ height: '55px' }} />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input onChange={(e) => { setDepartement(e.target.value); }} type="text" className="form-control bg-light border-0" placeholder="Your Departement" style={{ height: '55px' }} />
                                </div> */}
                                <div className="col-12 col-sm-6">
                                    <div>
                                        <input type="date"
                                            onChange={(e) => setDate(e.target.value)}
                                            placeholder="Appointment Date" style={{ height: '55px' }} />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div>
                                        <input type="time"
                                            onChange={(e) => setTime(e.target.value)}
                                            placeholder="Appointment Date" style={{ height: '55px' }} />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <a className="btn btn-dark w-100 py-3" onClick={createAppointment}>Make Appointment</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <!-- Appointment End --> */}
        </>
    )
}

