import React from 'react'

export default function Footer() {
  return (
        <footer className="page-footer font-small blue pt-4 bg-black">
                <div className="container-fluid text-center">
                    <div className="d-flex justify-content-center row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase text-white">Meet Doctor</h5>
                            <p className="text-white">Our medical center offers the most wide range of services in the state.</p>
                            <p className="text-white">We strive to provide our patients with the most high-quality help by top-notch experts in their fields.</p>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3 text-white">© 2020 Copyright:
                    <a> MeetDoctor</a>
                </div>

            </footer>
  )
}

