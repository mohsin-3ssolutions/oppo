import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { emailPatternValidator } from '../utils';
import DefaultLayout from '../reusableComponents/defaultLayout';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import { LoginSocialFacebook } from 'reactjs-social-login';

function Signin({ isAuthenticated, setIsAuthenticated }) {
    const navigate = useNavigate();

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .required('Email is required')
            .matches(emailPatternValidator, 'Invalid email address'),
        password: Yup.string().required('Password is required'),
    });

    useEffect(() => {
        // (isAuthenticated && );
        if (isAuthenticated) {
            navigate('/')
        }
    }, [isAuthenticated]);

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            setSubmitting(true); // Set submitting state when form submission begins

            const requestData = {
                email: values.email,
                password: values.password,
            };

            const response = await fetch('https://opo.jjtestsite.us/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (response.ok) {
                const { data, message, success } = await response.json();
                if (success) {
                    localStorage.setItem('authToken', data?.token);
                    toast.success('Logged in successfully!', { autoClose: 3000 });
                    setIsAuthenticated(true);
                    navigate('/');
                } else {
                    toast.error('Login failed! ' + message, { autoClose: 3000 });
                }
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            toast.error('An error occurred.' + error, { autoClose: 3000 });
        } finally {
            setSubmitting(false); // Ensure submitting state is set to false even if an error occurs
        }
    };

    const responseGoogle = async (response) => {
        console.log(response);
        try {
            // setSubmitting(true); // Set submitting state when form submission begins

            const requestData = {
                email: response.profileObj.email,
                // password: response.profileObj.email,
                social_platform: "google.com",
                social_id: response.googleId
            };

            const serverResponse = await fetch('https://opo.jjtestsite.us/api/login', {
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
                    toast.error('Login failed! ' + message, { autoClose: 3000 });
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
                <section className="title_head">
                    <div className="sign_up">
                        <h1>Login</h1>
                        <p>Don't have an account <a href="/signup" className="log_in">Create Account</a></p>
                        <ul className="social_links">
                            <li className='cursor-pointer'>
                                <LoginSocialFacebook
                                    // isOnlyGetToken
                                    appId="1088468802336727"
                                    // onLoginStart={onLoginStart}
                                    onResolve={async ({ provider, data }) => {
                                        console.log(data)
                                        try {
                                            // setSubmitting(true); // Set submitting state when form submission begins

                                            const requestData = {
                                                email: data.email,
                                                social_platform: "facebook.com",
                                                social_id: data.userID
                                            };

                                            const serverResponse = await fetch('https://opo.jjtestsite.us/api/login', {
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
                                                    toast.error('Login failed! ' + message, { autoClose: 3000 });
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
                                    <a className='cursor-pointer'><img src="/assets/images/facebook.png" alt="Facebook" /></a>
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
                                        <a onClick={renderProps.onClick} className='cursor-pointer'>
                                            <img src="/assets/images/google.png" alt="Google" />
                                        </a>
                                    )}
                                />
                            </li>
                            <li className='cursor-pointer'><a href=""><img src="/assets/images/apple.png" alt="Apple" /></a></li>
                        </ul>
                    </div>
                </section>
                <section className="form_style">
                    <div className="container">
                        <div className="color_bg">
                            <div className="sign_up">
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ isSubmitting, touched, errors }) => (
                                        <Form>
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
                                                        }`} placeholder="Enter Password"
                                                />
                                                <ErrorMessage
                                                    name="password"
                                                    component="div"
                                                    className="text-danger"
                                                />
                                            </div>
                                            <div >
                                                <button
                                                    type="submit"
                                                    className="submit_btn"
                                                    disabled={isSubmitting}
                                                >
                                                    Login {isSubmitting && (
                                                        <div className="spinner-border spinner-border-sm" role="status">
                                                            <span className="sr-only"></span>
                                                        </div>
                                                    )}
                                                </button>
                                                {/* <div >
                                                <input type="submit" value="Create Account" disabled={isSubmitting} /> {isSubmitting && (
                                                    <div className="spinner-border" role="status">
                                                        <span className="sr-only"></span>
                                                    </div>
                                                )}
                                            </div> */}
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

export default Signin;