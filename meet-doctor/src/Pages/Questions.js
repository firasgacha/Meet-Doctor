import React, { useEffect, useState, useRef } from 'react';
import Topbar from '../components/TopBar';
import Navbar from '../components/Navbar';
import { Spinner } from '../components/Spinner';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ReactToPrint from 'react-to-print';


export default function Questions() {
    const [hide, setHide] = useState(true);
    const [YesOrNo, setYesOrNo] = useState('');
    const componentRef = useRef();

    function print() {
        window.print();
    }

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
                        <h1 className="display-3 text-white animated zoomIn">Questions</h1>
                        <Link to="/" className="h4 text-white">Home</Link>
                        <i className="h5 bi bi-arrow-right text-white ms-1 me-1"></i>
                        <Link to="/Questions" className="h4 text-white">Questions</Link>
                    </div>
                </div>
            </div>
            {/* <!-- Hero End --> */}
            {hide ? <Spinner /> : null}

            <div className='container absolute'>
                <div className='row'>
                    <div className='col-2'>
                        <h4>Patient Name:</h4>
                    </div>
                    <div className='col-3'>
                        <input type="text" placeholder='Type a patient name' />
                    </div>
                </div>
                <div className='row mt-2'>
                    <div className='col-4'>
                        <div className='row'>
                            <div className='col-6 d-flex justify-content-center align-items-center'>Anxiety</div>
                            <div className='col-6'>
                                <select className='form-select bg-light border-0' onChange={(e) => { setYesOrNo(e.target.value); }} style={{ height: '55px' }}>
                                    <option defaultValue>Yes / No</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6 d-flex justify-content-center align-items-center'>Self-harm</div>
                            <div className='col-6'>
                                <select className='form-select bg-light border-0' onChange={(e) => { setYesOrNo(e.target.value); }} style={{ height: '55px' }}>
                                    <option defaultValue>Yes / No</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6 d-flex justify-content-center align-items-center'>School dropout</div>
                            <div className='col-6'>
                                <select className='form-select bg-light border-0' onChange={(e) => { setYesOrNo(e.target.value); }} style={{ height: '55px' }}>
                                    <option defaultValue>Yes / No</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6 d-flex justify-content-center align-items-center'>Depression</div>
                            <div className='col-6'>
                                <select className='form-select bg-light border-0' onChange={(e) => { setYesOrNo(e.target.value); }} style={{ height: '55px' }}>
                                    <option defaultValue>Yes / No</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6 d-flex justify-content-center align-items-center'>High Potential</div>
                            <div className='col-6'>
                                <select className='form-select bg-light border-0' onChange={(e) => { setYesOrNo(e.target.value); }} style={{ height: '55px' }}>
                                    <option defaultValue>Yes / No</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6 d-flex justify-content-center align-items-center'>Suicide attempt</div>
                            <div className='col-6'>
                                <select className='form-select bg-light border-0' onChange={(e) => { setYesOrNo(e.target.value); }} style={{ height: '55px' }}>
                                    <option defaultValue>Yes / No</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6 d-flex justify-content-center align-items-center'>Psychosomatic</div>
                            <div className='col-6'>
                                <select className='form-select bg-light border-0' onChange={(e) => { setYesOrNo(e.target.value); }} style={{ height: '55px' }}>
                                    <option defaultValue>Yes / No</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* colonne 2 */}
                    <div className='col-8'>
                        <div className='row'>
                            <div className='col-6 d-flex justify-content-center align-items-center'>Individual therapeutic follow-up</div>
                            <div className='col-6'>
                                <select className='form-select bg-light border-0' onChange={(e) => { setYesOrNo(e.target.value); }} style={{ height: '55px' }}>
                                    <option defaultValue>Yes / No</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6 d-flex justify-content-center align-items-center'>Psychosis / Hallucinations</div>
                            <div className='col-6'>
                                <select className='form-select bg-light border-0' onChange={(e) => { setYesOrNo(e.target.value); }} style={{ height: '55px' }}>
                                    <option defaultValue>Yes / No</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6 d-flex justify-content-center align-items-center'>Systemic / family therapy</div>
                            <div className='col-6'>
                                <select className='form-select bg-light border-0' onChange={(e) => { setYesOrNo(e.target.value); }} style={{ height: '55px' }}>
                                    <option defaultValue>Yes / No</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6 d-flex justify-content-center align-items-center'>Attention deficit disorder with or without hyperactivity</div>
                            <div className='col-6'>
                                <select className='form-select bg-light border-0' onChange={(e) => { setYesOrNo(e.target.value); }} style={{ height: '55px' }}>
                                    <option defaultValue>Yes / No</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6 d-flex justify-content-center align-items-center'>Eating disorders</div>
                            <div className='col-6'>
                                <select className='form-select bg-light border-0' onChange={(e) => { setYesOrNo(e.target.value); }} style={{ height: '55px' }}>
                                    <option defaultValue>Yes / No</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6 d-flex justify-content-center align-items-center'>Behavioural problems</div>
                            <div className='col-6'>
                                <select className='form-select bg-light border-0' onChange={(e) => { setYesOrNo(e.target.value); }} style={{ height: '55px' }}>
                                    <option defaultValue>Yes / No</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6 d-flex justify-content-center align-items-center'>Other...</div>
                            <div className='col-6'>
                                <select className='form-select bg-light border-0' onChange={(e) => { setYesOrNo(e.target.value); }} style={{ height: '55px' }}>
                                    <option defaultValue>Yes / No</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container absolute mt-3'>
                <h5>1- Please detail the available or mobilizable resources on which the insured can rely (support from the insured's social network, communication skills, motivation, etc.)?</h5>
                <textarea name="" id="" cols="150" rows="4"></textarea>
                <h5>2- What is your patient's capacity to work in his/her usual activity ?</h5>
                <textarea name="" id="" cols="150" rows="4"></textarea>
                <h5>3- Pharmacological history (molecule, maximum dose, effectiveness, side effects) ?</h5>
                <textarea name="" id="" cols="150" rows="4"></textarea>
                <div className='d-flex justify-content-center'>
                    <Button onClick={print} variant="contained" color="error" className="ms-2" target="_blank">
                        Print Patient Form
                    </Button>
                </div>
            </div>
            <Footer />
        </>

    );
}