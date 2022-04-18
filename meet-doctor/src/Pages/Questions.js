import React, { useEffect, useState } from 'react';
import Topbar from '../components/TopBar';
import Navbar from '../components/Navbar';
import { Spinner } from '../components/Spinner';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Questions() {
    const [hide, setHide] = useState(true);
    const [a, setA] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setHide(false);
        }, 1000);
    }, [])
    return (
        <>
            <Topbar />
            <Navbar />
            {hide ? <Spinner /> : null}


            <div className="signup-form row">
                <h3 className="d-flex justify-content-center">Security</h3>
                <div className="register-form mt-5 col-6" id="register-form">
                    <div class="form-group">
                        <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" value='Anxiété' onChange={(e) => { setA(e.target.value) }} />
                        <label for="agree-term" class="label-agree-term"><span><span></span></span>Anxiété</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                        <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                        <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                    </div>
                </div>
                <div className="register-form mt-5 col-6" id="register-form">
                    <div class="form-group">
                        <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                        <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                        <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                        <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                    </div>
                    <div className="form-group form-button">
                        <input name="signup" id="signup" className="form-submit" value="Update" />
                    </div>
                </div>
            </div>
        </>

    );
}