import React, { useState, useCallback, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { emailPatternValidator } from '../utils';
import Logo from "../assets/images/logo.png"
import FacebookImageSrc from "../assets/images/facebook.png"
import GoogleImageSrc from "../assets/images/google.png"
import AppleImageSrc from "../assets/images/apple.png"
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';

function Signup({ isAuthenticated, setIsAuthenticated }) {
    const [passwordStrength, setPasswordStrength] = useState("default");
    const navigate = useNavigate();
    const initialValues = {
        company_name: "",
        fname: "",
        email: "",
        password: "",
        privacePolicy: true,
        // passwordStrength: 'default',
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .required('Email is required')
            .matches(emailPatternValidator, 'Invalid email address'),
        password: Yup.string().required('Password is required'),
        company_name: Yup.string()
            .required('Company Name is required'),
        fname: Yup.string()
            .required('Full Name is required'),
        privacePolicy: Yup.string()
            .required('Privace Policy Name is required')
    });

    const passwordStrengthBar = {
        default: ["grey", 'grey', 'grey', 'grey'],
        veryWeak: ['red', 'grey', 'grey', 'grey'],
        weak: ['orange', 'orange', 'grey', 'grey'],
        normal: ['darkseagreen', 'darkseagreen', 'darkseagreen', 'grey'],
        strong: ['lightgreen', 'lightgreen', 'lightgreen', 'lightgreen'],
    };

    useEffect(() => {
        (isAuthenticated && navigate('/payment'));

    }, [isAuthenticated]);


    const handleSubmit = async (values, { setSubmitting }) => {
        console.log(values)
        try {
            fetch('https://opo.jjtestsite.us/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            }).then((response) => {

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
        finally {
            setSubmitting(false);
        }
    };

    const calculatePasswordStrength = (value) => {
        const criteria = {
            minLength: 8,
            hasUppercase: /[A-Z]/.test(value),
            hasLowercase: /[a-z]/.test(value),
            hasNumber: /\d/.test(value),
            hasSpecial: /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(value),
        };

        let score = 0;
        if (value.length >= criteria.minLength) score += 2;
        if (criteria.hasUppercase) score += 2;
        if (criteria.hasLowercase) score += 2;
        if (criteria.hasNumber) score += 2;
        if (criteria.hasSpecial) score += 2;

        if (score < 4) {
            setPasswordStrength("veryWeak");
        } else if (score < 6) {
            setPasswordStrength("weak");
        } else if (score < 8) {
            setPasswordStrength("normal");
        } else {
            setPasswordStrength("strong");
        }
    };
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
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting, handleChange, touched, errors, values }) => (
                                    <Form>
                                        {/* <FormObserver /> */}
                                        <div className="mb-3">
                                            <label
                                                className="form-label"
                                            >
                                                Company Name
                                            </label>
                                            <Field
                                                name="company_name"
                                                type="text"
                                                placeholder="Enter Email Address"
                                                className={`form-control ${touched.company_name && errors.company_name ? "is-invalid" : ""
                                                    }`}
                                            />
                                            <ErrorMessage
                                                name="company_name"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>

                                        <div className="mb-3 password-group">
                                            <label
                                                className="form-label"
                                            >
                                                Full Name
                                            </label>
                                            <Field
                                                name="fname"
                                                type="text"
                                                className={`form-control ${touched.fname && errors.fname ? "is-invalid" : ""
                                                    }`} placeholder="Enter Password"
                                            />
                                            <ErrorMessage
                                                name="fname"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label
                                                className="form-label"
                                            >
                                                Email Address
                                            </label>
                                            <Field
                                                name="email"
                                                type="email"
                                                placeholder="Enter Email Address"
                                                className={`form-control ${touched.email && errors.email ? "is-invalid" : ""
                                                    }`}
                                            />
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>

                                        <div className="mb-3 password-group">
                                            <label

                                                className="form-label"
                                            >
                                                Password
                                            </label>
                                            <Field
                                                name="password"
                                                type="password"
                                                className={`form-control ${touched.password && errors.password ? "is-invalid" : ""
                                                    }`}
                                                placeholder="Enter Password"
                                                onChange={(e) => {
                                                    handleChange(e);
                                                    calculatePasswordStrength(e.target.value);
                                                }}
                                            />
                                            <ErrorMessage
                                                name="password"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label strength_pwd">Password Strength</label>
                                            <div className="strenght_field">
                                                <span style={{ background: passwordStrengthBar[passwordStrength][0] }} /> <span style={{ background: passwordStrengthBar[passwordStrength][1] }} /> <span style={{ background: passwordStrengthBar[passwordStrength][2] }} /> <span style={{ background: passwordStrengthBar[passwordStrength][3] }} />
                                            </div>
                                        </div>
                                        <div className="form-check">
                                            <Field className="form-check-input" name='privacePolicy' type="checkbox" id="flexCheckDefault" />
                                            <label className="form-check-label" >
                                                By creating account you agree to our <a href="">Privacy Policy</a> <a href="">Terms of Service</a> and <a href="">Notification Setting</a>
                                            </label>
                                        </div>
                                        <div >
                                            <button
                                                type="submit"
                                                className="submit_btn"
                                                disabled={isSubmitting}
                                            >
                                                Create Account {isSubmitting && (
                                                    <div className="spinner-border spinner-border-sm" role="status">
                                                        <span className="sr-only"></span>
                                                    </div>
                                                )}
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <p>© 2022 All Rights Reserved</p>
                </div>
            </footer>
        </>
    );
}

export default Signup;