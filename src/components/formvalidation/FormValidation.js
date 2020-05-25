import React from 'react';
import './formvalidation.css';

function FormValidation() {
    return (
        <React.Fragment>
            <div className="main1">
                <form onSubmit={this.handleSubmit} noValidate>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" className="name1" name="firstname" placeholder="Enter your name.." noValidate />

                    <label for="lname">Last Name</label>
                    <input type="text" className="name1" name="lastname" placeholder="Enter your last name.." noValidate />

                    <label htmlFor="country">Country</label>
                    <select id="country" name="country">
                        <option value="india">India</option>
                        <option value="singapore">Singapore</option>
                        <option value="germany">Germany</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>

                    <input type="submit" className="submitt" value="Submit" />
                </form>
            </div>
        </React.Fragment>
    )
}

export default FormValidation;
