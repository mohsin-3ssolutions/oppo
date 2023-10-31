import React, { useState, useCallback, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { emailPatternValidator, userRoles } from '../utils';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';
import DefaultLayout from '../reusableComponents/defaultLayout';

function Signup({ isAuthenticated, setIsAuthenticated }) {
    const [passwordStrength, setPasswordStrength] = useState("default");
    const navigate = useNavigate();

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const role = queryParams.get('role') ? queryParams.get('role') : userRoles.subContractor;

    const initialValues = {
        company_name: "",
        fname: "",
        email: "",
        password: "",
        privacePolicy: true,
        role: ""
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
            .required('Privace Policy Name is required'),
        // role: Yup.string().required('Role is required') // Add validation for the "role" field
    });

    const passwordStrengthBar = {
        default: ["grey", 'grey', 'grey', 'grey'],
        veryWeak: ['red', 'grey', 'grey', 'grey'],
        weak: ['orange', 'orange', 'grey', 'grey'],
        normal: ['darkseagreen', 'darkseagreen', 'darkseagreen', 'grey'],
        strong: ['lightgreen', 'lightgreen', 'lightgreen', 'lightgreen'],
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/')
        }
    }, [isAuthenticated]);

    // const handleSubmit = async (values, { setSubmitting }) => {
    const handleSubmit = async (values, { setSubmitting }) => {
        values.role = role;
        let url = process.env.REACT_APP_BASE_URL;

        try {
            setSubmitting(true); // Start the submission, show loader

            const response = await fetch(`${url}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                const { data, message, success } = await response.json();

                if (success) {
                    localStorage.setItem("authToken", data?.token);
                    toast.success('Registration successful!', { autoClose: 3000 });
                    setIsAuthenticated(true);
                    navigate("/payment");
                } else {
                    toast.error('Registration failed!' + message, { autoClose: 3000 });
                }
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            toast.error('An error occurred.' + error, { autoClose: 3000 });
        } finally {
            setSubmitting(false); // Complete the submission, hide loader
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
            <DefaultLayout>
                <section className="form_style margin-top">
                    <div className="container">
                        <div className="color_bg">
                            <div className="sign_up">
                                <h3>Add Company Details</h3>
                                <p>Already have an account? <a href="/signin" className="log_in">Log In</a></p>
                                <p>Signing up with <strong>{role.charAt(0).toUpperCase() + role.slice(1)}</strong> Role.  To change role visit<a href="/select-role" className="log_in">Select Role</a></p>
                                <ul className="social_links">
                                    <li><a href=""><img src="/assets/images/facebook.png" alt="Facebook" /></a></li>
                                    <li><a href=""><img src="/assets/images/google.png" alt="Google" /></a></li>
                                    <li><a href=""><img src="/assets/images/apple.png" alt="Apple" /></a></li>
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
                                                    placeholder="Enter Company Name"
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
                                                        }`}
                                                    placeholder="Enter Full Name"
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

                                            {/* <div className="mb-3">
                                                <label className="form-label">
                                                    Role
                                                </label>
                                                <Field
                                                    name="role"
                                                    as="select" // Use select element for dropdown
                                                    className={`form-select ${touched.role && errors.role ? "is-invalid" : ""}`}
                                                >
                                                    <option value="" label="Select a role" />
                                                    <option value="owner" label="Owner" />
                                                    <option value="general_contractor" label="General Contractor" />
                                                    <option value="sub_contractor" label="Sub-Contractor" />
                                                </Field>
                                                <ErrorMessage name="role" component="div" className="text-danger" />
                                            </div> */}

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
                                                {/* <input  disabled={isSubmitting} onClick={handleSubmit} type="submit" value="Create Account" /> */}
                                                <button
                                                    type="submit"
                                                    className="submit_btn"
                                                    disabled={isSubmitting}
                                                >
                                                    Create Account {isSubmitting && (
                                                        <div className="spinner-border spinner-border-sm" >
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
            </DefaultLayout>
        </>
    );
}

export default Signup;