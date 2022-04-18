import React from 'react'

export default function DoctorsCards(props) {
    return (
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
            <div className="team-item">
                <div className="position-relative rounded-top" style={{ zIndex: 1 }}>
                    <img className="img-fluid rounded-top w-100" src={props.photoURL} alt="image_doctor" />
                    <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                        <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                        <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                        <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                        <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                    </div>
                </div>
                <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                    <h4 className="mb-2">Dr. {props.name}</h4>
                    <h6 className="mb-2">Dr. {props.departement}</h6>
                    <p className="text-primary mb-0">{props.speciality}</p>
                </div>
            </div>
        </div>
    )
}

