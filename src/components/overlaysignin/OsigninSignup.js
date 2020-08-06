import React, { useState, useEffect } from 'react';
import './osigninsignup.css';
import SignupBit from './SignUp';
import SigninBit from './SignIn';
import OverLayBit from './Overlay';

function SignInSignup() {

    const [containerClass, setContainerClass] = useState("");

    const handleSignInUp = (e) => {
        console.log(e.target.name)
        return e.target.name === "signup" ? setContainerClass("right-panel-active") : setContainerClass("");
    };

    return (
        <React.Fragment>
            <h2>Mytidbit overlay signin signup</h2>
            <div className={`container ${containerClass ? containerClass : ""}`}>
                <SignupBit />
                <SigninBit />
                <OverLayBit handleSignInUp={handleSignInUp}/>
            </div>
        </React.Fragment>
    )
}

export default SignInSignup;