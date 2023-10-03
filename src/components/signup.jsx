import React, { useState, useCallback, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { emailPatternValidator } from '../utils';
import Logo from "../assets/images/logo.png"
import FacebookImageSrc from "../assets/images/facebook.png"
import GoogleImageSrc from "../assets/images/google.png"
import AppleImageSrc from "../assets/images/apple.png"

function Signup({ isAuthenticated, setIsAuthenticated }) {
    const [agreeCheck, setAgreeCheck] = useState(true);
    const [passwordStrength, setPasswordStrength] = useState("default");
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        companyName: "",
        fullName: "",
        email: "",
        password: "",
        passwordStrength: 'default',
        // agreementCheck: true,
    });
    const [errorState, setErrorState] = useState({
        companyName: false,
        fullName: false,
        email: false,
        password: false,
    });

    const passwordStrengthBar = {
        default: ["grey", 'grey', 'grey', 'grey'],
        veryWeak: ['red', 'grey', 'grey', 'grey'],
        weak: ['orange', 'orange', 'grey', 'grey'],
        normal: ['darkseagreen', 'darkseagreen', 'darkseagreen', 'grey'],
        strong: ['lightgreen', 'lightgreen', 'lightgreen', 'lightgreen'],
    };

    useEffect(() => {
        // console.log("errorState has changed:", errorState);
        // console.log("isAuthenticated ::::::::::", isAuthenticated);

        (isAuthenticated && navigate('/payment'));

    }, [isAuthenticated, errorState]);


    const checkErrorState = useCallback((name, value) => {
        let isErr = false;
        if (name === 'email') isErr = (value.length && emailPatternValidator.test(value)) ? false : true;
        else isErr = value.length ? false : true;

        setErrorState((es) => ({
            ...es,
            [name]: isErr,
        }));

        return isErr;
    }, [errorState]);


    const calculatePasswordStrength = (password) => {

        checkErrorState("password", password);
        // Define the criteria for assessing password strength
        const criteria = {
            minLength: 8,      // Minimum length
            hasUppercase: /[A-Z]/.test(password),  // At least one uppercase letter
            hasLowercase: /[a-z]/.test(password),  // At least one lowercase letter
            hasNumber: /\d/.test(password),         // At least one digit
            hasSpecial: /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password),  // At least one special character
        };

        let score = 0;
        if (password.length >= criteria.minLength) score += 2;
        if (criteria.hasUppercase) score += 2;
        if (criteria.hasLowercase) score += 2;
        if (criteria.hasNumber) score += 2;
        if (criteria.hasSpecial) score += 2;

        // Password strength categories
        if (score < 4) {
            setPasswordStrength("veryWeak");
        } else if (score < 6) {
            setPasswordStrength("weak");
        } else if (score < 8) {
            setPasswordStrength("normal");
        } else {
            setPasswordStrength("strong");
        }

        setFormData({
            ...formData,
            password
        });
    }

    // Event handler to update the state when input fields change
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        checkErrorState(name, value);
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to handle form submission and log the values
    const handleSubmit = useCallback(async (event) => {
        event.preventDefault();
        let hasError = false;

        Object.entries(formData).map(([name, value]) => {
            const currentFieldError = checkErrorState(name, value);
            hasError = (hasError || currentFieldError);
        });

        console.log({ errorState }, hasError);

        try {
            if (hasError) throw Error("Has some validation errors.");
            const requestData = {
                company_name: formData.companyName,
                fname: formData.fullName,
                email: formData.email,
                password: formData.password,
            };

            fetch('https://opo.jjtestsite.us/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            }).then((response) => {
                // if (!response.ok) {
                //   throw new Error('Network response was not ok');
                // }
                return response.json(); // Use response.json() for JSON data
                // If the response is plain text, you can use response.text() instead
            })
                .then(({ data, message, success }) => {
                    // console.log(res); // This will log the parsed response data
                    console.log({ data, message, success }); // This will log the parsed response data
                    if (success) {
                        localStorage.setItem("authToken", data?.token);
                        toast.success('Registration successful!', { autoClose: 3000 });
                        setIsAuthenticated(true);
                        navigate("/payment");
                    } else {
                        toast.error('Registration failed!' + message, { autoClose: 3000 });
                    }
                });
        } catch (error) {
            console.error('An error occurred:', error);
            toast.error('An error occurred.' + error, { autoClose: 3000 });
        }
    }, [formData, errorState]);
    return (
        <>
            <header>
                <div className="container">
                    <div className="header_nav">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="#"><img className="img-fluid" src={Logo} alt="" /></a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse navigation" id="navbarNavDropdown">
                                    <ul className="navbar-nav">
                                        <li>
                                            <a aria-current="page" href="/">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">Our Services</a>
                                        </li>
                                        <li>
                                            <a href="#">Our Story</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="#">My Account</a>
                                        </li>
                                        {/* <li>
                                            <div className="creat_btn">
                                                <a onClick={logout}>Log Out</a>
                                            </div>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            
            <section className="form_style margin-top">
                <div className="container">
                    <div className="color_bg">
                        <div className="sign_up">
                            <h3>Add Company Details</h3>
                            <p>Already have an account? <a href="/signin" className="log_in">Log In</a></p>
                            <ul className="social_links">
                                <li><a href=""><img src={FacebookImageSrc} alt="Facebook" /></a></li>
                                <li><a href=""><img src={GoogleImageSrc} alt="Google" /></a></li>
                                <li><a href=""><img src={AppleImageSrc} alt="Apple" /></a></li>
                            </ul>
                            <form >
                                <div className="mb-3">
                                    <label  style={{ ...(errorState.companyName ? { color: "red" } : {}) }} className="form-label">Company Name</label>
                                    <input
                                        name="companyName"
                                        onChange={handleInputChange}
                                        type="text"
                                        style={{ ...(errorState.companyName ? { borderColor: "red" } : {}) }} className="form-control" id="exampleFormControlInput1" placeholder="Enter Company Name" />
                                </div>
                                <div className="mb-3">
                                    <label  style={{ ...(errorState.fullName ? { color: "red" } : {}) }} className="form-label">Full Name</label>
                                    <input
                                        name="fullName"
                                        onChange={handleInputChange}
                                        type="text"
                                        style={{ ...(errorState.fullName ? { borderColor: "red" } : {}) }} className="form-control" id="exampleFormControlInput11" placeholder="Enter Full Name" />
                                </div>
                                <div className="mb-3">
                                    <label  style={{ ...(errorState.email ? { color: "red" } : {}) }} className="form-label">Email</label>
                                    <input
                                        name="email"
                                        style={{ ...(errorState.email ? { borderColor: "red" } : {}) }}
                                        onChange={handleInputChange} type="Email" className="form-control" id="exampleFormControlInput12" placeholder="Enter Email" />
                                </div>
                                <div className="mb-3 password-group">
                                    <label  style={{ ...(errorState.password ? { color: "red" } : {}) }} className="form-label">Password</label>
                                    <input
                                        name="password"
                                        onChange={(e) => calculatePasswordStrength(e.target.value)}
                                        type="password"
                                        style={{ ...(errorState.password ? { borderColor: "red" } : {}) }} className="form-control" id="exampleFormControlInput13" placeholder="Enter Password" />
                                </div>
                                <div className="mb-3">
                                    <label  className="form-label strength_pwd">Password Strength</label>
                                    <div className="strenght_field">
                                        <span style={{ background: passwordStrengthBar[passwordStrength][0] }} /> <span style={{ background: passwordStrengthBar[passwordStrength][1] }} /> <span style={{ background: passwordStrengthBar[passwordStrength][2] }} /> <span style={{ background: passwordStrengthBar[passwordStrength][3] }} />
                                    </div>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" checked={agreeCheck} onChange={(e) => setAgreeCheck(!agreeCheck)} value="true" id="flexCheckDefault" />
                                        <label className="form-check-label" >
                                            By creating account you agree to our <a href="">Privacy Policy</a> <a href="">Terms of Service</a> and <a href="">Notification Setting</a>
                                        </label>
                                </div>
                                <div className="submit_btn">
                                    <input disabled={!agreeCheck} onClick={handleSubmit} type="submit" value="Create Account" />
                                    {/* {
                                        (agreeCheck) ?
                                        <input disabled={!agreeCheck} onClick={handleSubmit} type="submit" value="Create Account" />
                                        :
                                            <input
                                                disabled={true}
                                                type="submit"
                                                value="Create Account"
                                                title="Please check Privacy Policy"
                                            />
                                    } */}

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <p>© 2022 All Rights Reserved</p>
                </div>
            </footer>
            <ToastContainer />
        </>
    );
}

export default Signup;