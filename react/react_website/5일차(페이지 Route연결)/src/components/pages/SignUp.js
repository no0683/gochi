import React from 'react';
import '../../App.css';

function SignUp() {
    return (
        <div className="sign-up">
            <img src={process.env.PUBLIC_URL + "/images/img-1.jpg"} alt="Travel" />
            <h1>Sign Up</h1>
        </div>
    )
}

export default SignUp;