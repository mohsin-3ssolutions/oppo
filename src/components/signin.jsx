import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { emailPatternValidator } from '../utils';

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
        (isAuthenticated && navigate('/account'));
    }, [isAuthenticated]);

    const handleSubmit = async (values, { setSubmitting }) => {
        console.log(values)
        try {
            // if (hasError) throw Error("Has some validation errors.");
            setSubmitting(true)
            const requestData = {
                email: values.email,
                password: values.password,
            };

            fetch('https://opo.jjtestsite.us/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            }).then((response) => {
                return response.json();
            })
                .then(({ data, message, success }) => {
                    // console.log(res); // This will log the parsed response data
                    console.log({ data, message, success }); // This will log the parsed response data
                    if (success) {
                        localStorage.setItem("authToken", data?.token);
                        toast.success('Loggedin successfully!', { autoClose: 3000 });
                        setIsAuthenticated(true);
                        navigate("/account");
                    } else {
                        toast.error('Login failed!' + message, { autoClose: 3000 });
                    }
                });
        } catch (error) {
            console.error('An error occurred:', error);
            toast.error('An error occurred.' + error, { autoClose: 3000 });
        }
    };

    return (
        <>
            <section className="title_head">
                <div className="container">
                    <h1>Login</h1>
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
            <footer>
                <div className="container">
                    <p>© 2022 All Rights Reserved</p>
                </div>
            </footer>
        </>
    );
}

export default Signin;