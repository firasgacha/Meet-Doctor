import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Test from './Pages/Test';
import ForgetPassword from './Pages/ForgetPassword';
import Profile from './Pages/Profile';
import Doctors from './Pages/Doctors';
import Appointment from './Pages/Appointment';
import Departements from './Pages/Departements';
import { auth } from './config/firebase-config';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Test" element={<Test />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Doctors" element={<Doctors />} />
      <Route path="/Departements" element={<Departements />} />
      <Route path="/Appointment" element={<Appointment />} />
      {/* <Route path="/Appointment" element={auth.currentUser? <Appointment /> : <Login/>} /> */}
      <Route path="/register" element={<Register />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
