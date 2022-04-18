import React, { useState, useEffect } from 'react';
import Topbar from '../components/TopBar';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import CustomizedTables from '../components/Table';
import { auth, db } from '../config/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import {Spinner} from '../components/Spinner';




export default function MyAppointment() {
    const [hide, setHide] = useState(true);
    const [appointments, setAppointments] = useState([]);
    const appointmentsCollectionRef = collection(db, 'Appointment');
    const getAppointments = async () => {
        const data = await getDocs(appointmentsCollectionRef)
        setAppointments(
            data.docs
                .filter(doc => doc.data().userId === auth.currentUser.uid || doc.data().userId === localStorage.getItem('id'))
                .map((doc) => ({ ...doc.data(), id: doc.id }))
        )
    }

    useEffect(() => {
        getAppointments();
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setHide(false);
        }, 1000);
    }, [])
    return (
        <>
            <Topbar />
            <Navbar />
            {hide ? <Spinner/> : null}
            {/* <!-- Hero Start --> */}
            <div className="container-fluid bg-primary py-5 hero-header mb-5">
                <div className="row py-3">
                    <div className="col-12 text-center">
                        <h1 className="display-3 text-white animated zoomIn">My Appointments</h1>
                        <Link to="/" className="h4 text-white">Home</Link>
                        <i className="h5 bi bi-arrow-right text-white ms-1 me-1"></i>
                        <Link to="/MyAppointment" className="h4 text-white">My Appointments</Link>
                    </div>
                </div>
            </div>
            {/* <!-- Hero End --> */}
            <button className="btn btn-primary" onClick={getAppointments}>Refresh</button>
            <div className="container-fluid bg-primary py-5 hero-header mb-5">
                <CustomizedTables appointments={appointments} />
            </div>
        </>
    )
}
