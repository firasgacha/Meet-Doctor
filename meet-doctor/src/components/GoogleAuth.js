import React from 'react';
import { auth, provider } from '../config/firebase-config';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";



const SignWithGoogle = () => {
    const navigate = useNavigate();

    const googleSignIn = async () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const name = result.user.displayName;
                const email = result.user.email;
                const photo = result.user.photoURL;

                localStorage.setItem('name', name);
                localStorage.setItem('email', email);
                localStorage.setItem('photo', photo);

                navigate('/');

            }).catch((error) => {
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    return (
        <li><a onClick={googleSignIn}><i className="display-flex-center zmdi zmdi-google"></i></a></li>
    )
}

export default SignWithGoogle;