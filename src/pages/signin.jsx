import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { emailPatternValidator } from '../utils';
import DefaultLayout from '../reusableComponents/defaultLayout';

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

        console.log(isAuthenticated, '==========')
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
                    navigate('/account?tabId=0');
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


    return (
        <>
            <DefaultLayout>
                <section className="title_head">
                    <div className="sign_up">
                        <h1>Login</h1>
                        <p>Don't have an account <a href="/signup" className="log_in">Create Account</a></p>
                        <ul className="social_links">
                            <li><a href=""><img src="/assets/images/facebook.png" alt="Facebook" /></a></li>
                            <li><a href=""><img src="/assets/images/google.png" alt="Google" /></a></li>
                            <li><a href=""><img src="/assets/images/apple.png" alt="Apple" /></a></li>
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
                                                        <div class="spinner-border spinner-border-sm" role="status">
                                                            <span class="sr-only"></span>
                                                        </div>
                                                    )}
                                                </button>
                                                {/* <div >
                                                <input type="submit" value="Create Account" disabled={isSubmitting} /> {isSubmitting && (
                                                    <div class="spinner-border" role="status">
                                                        <span class="sr-only"></span>
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