import React from 'react'

export default function DepartementsCards(props) {
    return (
        <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
            <div className="rounded-top overflow-hidden">
                <img className="img-fluid" src={props.photoUrl}/>
            </div>
            <div className="position-relative bg-light rounded-bottom text-center p-4">
                <h5 className="m-0">{props.titre}</h5>
            </div>
        </div>
    )
}

