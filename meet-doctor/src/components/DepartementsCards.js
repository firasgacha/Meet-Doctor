import React from 'react'

export default function DepartementsCards(props) {
    return (
        <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
            <div className="rounded-top overflow-hidden">
                <img className="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/meet-doctor-e2707.appspot.com/o/departements%2Fdepartement-image.png?alt=media&token=76751d4f-1fec-494f-921a-e0020d1110b6" alt="image-departements" />
            </div>
            <div className="position-relative bg-light rounded-bottom text-center p-4">
                <h5 className="m-0">{props.titre}</h5>
            </div>
        </div>
    )
}

