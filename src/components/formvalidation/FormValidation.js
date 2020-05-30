import React, {useState, useEffect} from 'react';
import './formvalidation.css';

function FormValidation() {

    const [state, setState] = useState({userName: null, password: null, errors: {uname:'', pwd:'', email:''}});

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const emailRegex = RegExp(/\S+@\S+\.\S+/);

    let timerId;

    const isformValid = (errors) => {
         let valid = true;

         Object.values(errors).forEach(val=>{
             val.length > 0 && (valid = false);
         });

         return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isformValid(state.errors)){
            setSuccessMessage("Validation Successfull");
            timerId = setTimeout(()=>{
                window.location.replace("http://www.tidbit.c.la/")
            },1000);
            
        }else{
            setErrorMessage(`Form Invalid: ${state.errors.uname} ${state.errors.pwd} ${state.errors.email}`)
        }
    };

    useEffect(()=>{
       return function(){
           clearTimeout(timerId)
       }
    },[]);

    const handleChange = e => {

        e.preventDefault();

        const {name, value} = e.target;

        let errors = state.errors;

        switch(name){
            case 'username':
                errors.uname = value.length < 3 && value.length > 0 ? 'Username requires minimum 3 characters --' : "";
                break;
            case 'password':
                if(value.length < 8 && value.length > 0){
                    errors.pwd = "password should be minimum 8 characters long "
                }else if(!(/\d/.test(value))){
                    errors.pwd = "Password must have a number in it "
                }else if(!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value))){
                    errors.pwd = "Password must have a special character "
                }else{
                    errors.pwd = "";
                }
                break;
            case 'email':
                  errors.email = value.length > 0 && emailRegex.test(value) ? "" : "Invalid email address ";
                break;
            default:
                break;
         }

         setState(prevState=>({
             ...prevState,
             errors: errors
         }));
    };

    return (
        <React.Fragment>
            <h1 style={{textAlign:'center'}}>Mytidbit Form Validation</h1>
            <div className="main1">
                <p style={{color:'red', fontWeight: 'bold', textAlign:"center"}}>{errorMessage ? errorMessage : successMessage}</p>
                <form onSubmit={handleSubmit} noValidate>
                    <label>Username:</label>
                    <input type="text" className="name1" name="username" placeholder="Enter your name.." onChange={handleChange} noValidate />

                    <label>Email:</label>
                    <input type="email" className="name1" name="email" placeholder="Enter your name.." onChange={handleChange} noValidate />

                    <label>Password:</label>
                    <input type="password" className="name1" name="password" placeholder="Enter your last name.." onChange={handleChange} noValidate />

                    <label>Country</label>
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
