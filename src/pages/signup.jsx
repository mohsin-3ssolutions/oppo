import React, { useState, useCallback, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { emailPatternValidator, userRoles } from '../utils';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';
import DefaultLayout from '../reusableComponents/defaultLayout';
import GoogleLogin from 'react-google-login';
import { LoginSocialFacebook } from 'reactjs-social-login';

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
                    toast.error('Registration failed! ' + data[0], { autoClose: 3000 });
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

    const responseGoogle = async (response) => {
        console.log(response);
        let url = process.env.REACT_APP_BASE_URL;
        try {
            // setSubmitting(true); // Set submitting state when form submission begins
            const requestData = {
                email: response.profileObj.email,
                role: role,
                company_name: response.profileObj.name,
                social_platform: "google.com",
                social_id: response.googleId,
                fname: response.profileObj.name,
            };

            const serverResponse = await fetch(`${url}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (serverResponse.ok) {
                const { data, message, success } = await serverResponse.json();
                if (success) {
                    localStorage.setItem('authToken', data?.token);
                    toast.success('Signup successfully!', { autoClose: 3000 });
                    setIsAuthenticated(true);
                    navigate('/');
                } else {
                    toast.error('Signup failed! ' + message, { autoClose: 3000 });
                }
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            toast.error('An error occurred.' + error, { autoClose: 3000 });
        } finally {
            // setSubmitting(false); // Ensure submitting state is set to false even if an error occurs
        }
    };

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: "662224309157-0tnmushq70mf9r2bipg7llc4ef1nrehu.apps.googleusercontent.com",
                scope: ""
            })
        }
        gapi.load('client:auth2', start)
    }, [])


    return (
        <>
            <DefaultLayout>
                <section className="form_style margin-top">
                    <div className="container">
                        <div className="color_bg">
                            <div className="sign_up">
                                <h3>Add Company Details</h3>
                                <p>Already have an account? <a href="/signin" className="log_in">Log In</a></p>

                                {role == 'owner' ? <p>Signing up with <strong className='role'> {role.split('_')[0]?.charAt(0)?.toUpperCase() + role.split('_')[0]?.slice(1)} </strong> Role.  To change role visit<a href="/select-role" className="log_in">Select Role</a></p> : <p>Signing up with <strong className='role'> {role.split('_')[0]?.charAt(0)?.toUpperCase() + role.split('_')[0]?.slice(1)} {role.split('_')[1]?.charAt(0)?.toUpperCase() + role.split('_')[1]?.slice(1)}</strong> Role.  To change role visit<a href="/select-role" className="log_in">Select Role</a></p>}
                                <ul className="social_links">
                                    <li className='cursor-pointer'>
                                        <LoginSocialFacebook
                                            // isOnlyGetToken
                                            appId="1088468802336727"
                                            // onLoginStart={onLoginStart}
                                            onResolve={async ({ provider, data }) => {
                                                console.log(data)
                                                let url = process.env.REACT_APP_BASE_URL;
                                                try {
                                                    // setSubmitting(true); // Set submitting state when form submission begins

                                                    const requestData = {
                                                        email: data.email,
                                                        role: role,
                                                        company_name: data.name,
                                                        social_platform: "facebook.com",
                                                        social_id: data.userID,
                                                        fname: data.name,
                                                    };

                                                    const serverResponse = await fetch(`${url}/register`, {
                                                        method: 'POST',
                                                        headers: {
                                                            'Content-Type': 'application/json',
                                                        },
                                                        body: JSON.stringify(requestData),
                                                    });

                                                    if (serverResponse.ok) {
                                                        const { data, message, success } = await serverResponse.json();
                                                        if (success) {
                                                            localStorage.setItem('authToken', data?.token);
                                                            toast.success('Logged in successfully!', { autoClose: 3000 });
                                                            setIsAuthenticated(true);
                                                            navigate('/');
                                                        } else {
                                                            toast.error(message, { autoClose: 3000 });
                                                        }
                                                    } else {
                                                        throw new Error('Network response was not ok.');
                                                    }
                                                } catch (error) {
                                                    console.error('An error occurred:', error);
                                                    toast.error('An error occurred.' + error, { autoClose: 3000 });
                                                } finally {
                                                    // setSubmitting(false); // Ensure submitting state is set to false even if an error occurs
                                                }
                                            }}
                                            onReject={(err) => {
                                                console.log(err)
                                            }}
                                        >
                                            <a ><img src="/assets/images/facebook.png" alt="Facebook" /></a>
                                        </LoginSocialFacebook>
                                    </li>

                                    <li className='cursor-pointer'>
                                        <GoogleLogin
                                            clientId="662224309157-0tnmushq70mf9r2bipg7llc4ef1nrehu.apps.googleusercontent.com"
                                            buttonText=""
                                            onSuccess={responseGoogle}
                                            onFailure={responseGoogle}
                                            cookiePolicy={'single_host_origin'}
                                            render={(renderProps) => (
                                                <a onClick={renderProps.onClick}>
                                                    <img src="/assets/images/google.png" alt="Google" />
                                                </a>
                                            )}
                                        />
                                    </li>
                                    <li className='cursor-pointer'><a href=""><img src="/assets/images/apple.png" alt="Apple" /></a></li>
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
                                                <Field className="form-check-input" required name='privacePolicy' type="checkbox" id="flexCheckDefault" />
                                                <label className="form-check-label" >
                                                    By creating account you agree to our <a href="">Privacy Policy</a>,<a href="">Terms of Service</a>and<a href="">Notification Setting</a>
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