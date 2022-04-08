import React, { useState, useEffect } from 'react';
import Topbar from '../components/TopBar';
import Navbar from '../components/Navbar';
import { db } from '../config/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import Cards from '../components/DepartementsCards';


export default function Departements() {

  const [departements, setDepartements] = useState([]);
  const departementsCollectionRef = collection(db,'Departement');


  useEffect(() => {
    const getDepartements = async () => {
      const data = await getDocs(departementsCollectionRef);
      setDepartements(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id}))
      )
    }

    getDepartements();
  },[])
  return (
    <>
     <Topbar /> 
     <Navbar />
    <div>
    <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
            <div className="col-12 text-center">
                <h1 className="display-3 text-white animated zoomIn">OUR DEPARTMENTS</h1>
                <a href="/" className="h4 text-white">Home</a>
                <i className="h5 bi bi-arrow-right text-white ms-1 me-1"></i>
                <a href="" className="h4 text-white">About</a>
            </div>
        </div>
    </div>
      {departements.map((dep) => {
        console.log(dep);
        return (

          <div key={dep.id}>
            <div className='d-flex flex-row'>
            {/* <Cards titre={dep.name} text={dep.description}/> */}
            {dep.name}
            {dep.description }
            </div>
          </div>
          
        )
      })}

    </div>
    </>
  )
}

