import React, { useState, useEffect } from 'react';
import Topbar from '../components/TopBar';
import Navbar from '../components/Navbar';
import { Link,useNavigate } from 'react-router-dom';
import CustomizedTables from '../components/TableDoctor';
import { auth, db } from '../config/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import {Spinner} from '../components/Spinner';




export default function MyAppointmentDoctor() {
    const [appointments, setAppointments] = useState([]);
    const [hide, setHide] = useState(true);
    const appointmentsCollectionRef = collection(db, 'Appointment');
    const [fullName, setFullName] = useState('');
    const usersCollectionRef = collection(db, 'Users');
    const [user, setUser] = useState(null);


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
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    const getAppointments = async () => {
        const data = await getDocs(appointmentsCollectionRef)
        setAppointments(
            data.docs
            .filter(doc => doc.data().doctor.toString().toLowerCase() === fullName.toString().toLowerCase())
            .map((doc) => ({ ...doc.data(), id: doc.id }))
        )
        console.log(auth.currentUser)
    }
    
    useEffect(() => {
        getUserByEmail();
        getAppointments();
    },[])
    useEffect(() => {
        setTimeout(() => {
            setHide(false);
        }, 1000);
    }, [])
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
            <button className="btn btn-primary" onClick={()=>{getUserByEmail();getAppointments();}}>Refresh</button>
            <div className="container-fluid bg-primary py-5 hero-header mb-5">
            <CustomizedTables appointments={appointments} />
            </div>
        </>
    )
}
