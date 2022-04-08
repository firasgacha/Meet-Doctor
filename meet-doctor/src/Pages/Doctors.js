import React, { useState, useEffect } from 'react';
import Topbar from '../components/TopBar';
import Navbar from '../components/Navbar';
import DoctorsCards from '../components/DoctorsCards';
import { db } from '../config/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { auth } from '../config/firebase-config';
import { Link} from "react-router-dom";



export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const doctorsCollectionRef = collection(db,'Doctor');

  useEffect(() => {
    const getDoctors = async () => {
      const data = await getDocs(doctorsCollectionRef);
      setDoctors(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id}))
      )
    }
    getDoctors();
  },[])
  return (
    <>
     <Topbar /> 
     <Navbar />
     <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
            <div className="col-12 text-center">
                <h1 className="display-3 text-white animated zoomIn">Doctors</h1>
                <a href="/" className="h4 text-white">Home</a>
                <i className="h5 bi bi-arrow-right text-white ms-1 me-1"></i>
                <a href="" className="h4 text-white">Doctors</a>
            </div>
        </div>
    </div>
    <div className="container-fluid py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
                    <div className="section-title bg-light rounded h-100 p-5">
                        <h5 className="position-relative d-inline-block text-primary text-uppercase">Our Doctors</h5>
                        <h1 className="display-6 mb-4">Meet Our Certified & Experienced Doctors</h1>
                        
                        {auth.currentUser? <Link to="/Appointment" className="btn btn-primary py-3 px-5">Appointment</Link> : null}

                    </div>
                </div>
                {doctors.map((doctor) => {
                  return (
                    <div key={doctor.id}>
                      <DoctorsCards name={doctor.name} speciality={doctor.speciality} />
                    </div>
                  )
                })}
            </div>
        </div>
    </div>
    </>
  )
}

