import React, { useState, useEffect } from 'react';
import Topbar from '../components/TopBar';
import Navbar from '../components/Navbar';
import { db } from '../config/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import DepartementsCards from '../components/DepartementsCards';
import { Link } from 'react-router-dom';


export default function Departements() {

  const [departements, setDepartements] = useState([]);
  const departementsCollectionRef = collection(db, 'Departement');


  useEffect(() => {
    const getDepartements = async () => {
      const data = await getDocs(departementsCollectionRef);
      setDepartements(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      )
    }

    getDepartements();
  }, [])
  return (
    <>
      <Topbar />
      <Navbar />
      <div>
        <div className="container-fluid bg-primary py-5 hero-header mb-5">
          <div className="row py-3">
            <div className="col-12 text-center">
              <h1 className="display-3 text-white animated zoomIn">Departements</h1>
              <Link to="/" className="h4 text-white">Home</Link>
              <i className="h5 bi bi-arrow-right text-white ms-1 me-1"></i>
              <Link to="/departements" className="h4 text-white">Departements</Link>
            </div>
          </div>
        </div>
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="row g-5 mb-5">
              <div className="col-lg-5 wow zoomIn" data-wow-delay="0.3s" style={{ minHeight: 400 }}>
                <div className="twentytwenty-container position-relative h-100 rounded overflow-hidden">
                  <img className="position-absolute w-100 h-100" src="https://firebasestorage.googleapis.com/v0/b/meet-doctor-e2707.appspot.com/o/departements%2Fdepartement-image.png?alt=media&token=76751d4f-1fec-494f-921a-e0020d1110b6" style={{ objectFit: "cover" }} />
                  <img className="position-absolute w-100 h-100" src="https://firebasestorage.googleapis.com/v0/b/meet-doctor-e2707.appspot.com/o/departements%2Fdepartement-image.png?alt=media&token=76751d4f-1fec-494f-921a-e0020d1110b6" style={{ objectFit: "cover" }} />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="section-title mb-5">
                  <h5 className="position-relative d-inline-block text-primary text-uppercase">Our Departements</h5>
                  <h1 className="display-5 mb-0">We Offer The Best Quality Services</h1>
                </div>
                <div className="row g-5">
                  {departements.map((dep) => {
                    console.log(dep);
                    return (
                      <DepartementsCards key={dep.id} titre={dep.name} text={dep.descriptor} />
                    )
                  })}


                </div>
              </div>
            </div>
            <div className="row g-5 wow fadeInUp" data-wow-delay="0.1s">
              <div className="col-lg-5 service-item wow zoomIn" data-wow-delay="0.9s">
                <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-4">
                  <h3 className="text-white mb-3">Make Appointment</h3>
                  <h2 className="text-white mb-0">+216 22 333 333</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

