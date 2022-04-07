import React from 'react';
import {signInWithGoogle} from '../config/firebase-config';


const SignWithGoogle = () => {
    return (
        <li><a onClick={signInWithGoogle}><i className="display-flex-center zmdi zmdi-google"></i></a></li>
    )
}

export default SignWithGoogle;