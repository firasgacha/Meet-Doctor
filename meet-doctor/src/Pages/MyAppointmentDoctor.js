import React, { useState, useEffect } from 'react';
import Topbar from '../components/TopBar';
import Navbar from '../components/Navbar';
import { Link,useNavigate } from 'react-router-dom';
import CustomizedTables from '../components/TableDoctor';
import { auth, db } from '../config/firebase-config';
import { collection, getDocs } from 'firebase/firestore';




export default function MyAppointmentDoctor() {
    const [appointments, setAppointments] = useState([]);
    const appointmentsCollectionRef = collection(db, 'Appointment');
    const getAppointments = async () => {
        const data = await getDocs(appointmentsCollectionRef)
        setAppointments(
            data.docs
            .filter(doc => doc.data().doctor.toString().toLowerCase() === auth.currentUser.displayName.toString().toLowerCase() || doc.data().doctor === localStorage.getItem('name').toString().toLowerCase())
            .map((doc) => ({ ...doc.data(), id: doc.id }))
        )
    }
    
    useEffect(() => {
        getAppointments();
    },[])
    return (
        <>
            <Topbar />
            <Navbar />
            {/* <!-- Hero Start --> */}
            <div className="container-fluid bg-primary py-5 hero-header mb-5">
                <div className="row py-3">
                    <div className="col-12 text-center">
                        <h1 className="display-3 text-white animated zoomIn">Doctor Appointments</h1>
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
