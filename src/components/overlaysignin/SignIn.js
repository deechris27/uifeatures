import React from 'react';
import FormatHoc from './FormatHoc';


function SigninBit({ formFields, socialIcons }) {
    return (
        <div className="form-container sign-in-container">
            <form action="#">
                <h1>Sign in</h1>
                 {socialIcons}
                <span>or use your account</span>
                 {formFields}
            </form>
        </div>
    )
}

export default FormatHoc(SigninBit);