import React from 'react';
import FormatHoc from './FormatHoc';

function SignupBit({ formFields, socialIcons }) {
    return (
        <div className="form-container sign-up-container">
            <form action="#" id="formey">
                <h1 className="sub-title">Create Account</h1>
                {socialIcons}
                <span className="or-text">or use your email for registration</span>
                {formFields}
            </form>
        </div>
    )
}

export default FormatHoc(SignupBit);