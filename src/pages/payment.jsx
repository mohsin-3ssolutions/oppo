import React, { useState, useCallback, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DefaultLayout from '../reusableComponents/defaultLayout';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { verifyAuthToken } from '../utils';
import { fetchUserProfileDetails } from '../store/userProfileSlice/userProfileSlice';

function Payment({ userRole, paymentStatus }) {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialValues = {
        name: '',
        address: '',
        city: '',
        state: 'utah',
        zip: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        address: Yup.string().required('Address is required'),
        city: Yup.string().required('City is required'),
        state: Yup.string().required('State is required'),
        zip: Yup.string().required('Zip is required'),
    });


    const createdDate = useSelector((state) => {
        return state?.userProfileSlice?.userData?.data?.created_at;
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        if (!stripe || !elements) {
            toast.error("Stripe Card Element doesn't load properly. Kindly refresh ", {
                autoClose: 3000,
            });
            setSubmitting(false);
            return;
        }

        try {
            const cardElement = elements.getElement(CardElement);
            const { paymentMethod, error } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
            });

            if (error) {
                toast.error('Looks like! ' + error.message, { autoClose: 3000 });
            } else {
                const requestData = {
                    stripe_plan_id: 'price_1Nt6rYLVujA8J6lyDVJtm4au',
                    stripe_token: paymentMethod.id,
                    card_holder_name: values.name,
                    billing_address: values.address,
                    billing_city: values.city,
                    billing_state: values.state,
                    billing_zip: values.zip,
                    role: 'general_contractor',
                };

                const token = localStorage.getItem('authToken');
                let url = process.env.REACT_APP_BASE_URL;

                fetch(url + `/subscription`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(requestData),
                })
                    .then((response) => response.json())
                    .then(({ data, message, success }) => {
                        if (success) {
                            toast.success('Payment successfully Done!', { autoClose: 3000 });
                            // dispatch(verifyAuthToken(fetchUserProfileDetails));
                            // localStorage.setItem('paid', true);
                            navigate('/payment-completion');
                        } else {
                            toast.error('Payment failed! Kindly, try again.' + message, {
                                autoClose: 3000,
                            });
                        }
                    });
            }
        } catch (error) {
            toast.error('Error: ' + error, { autoClose: 3000 });
        } finally {
            setSubmitting(false);
        }
    };


    useEffect(() => {
        const authenticated = !!localStorage.getItem("authToken");
        if (!authenticated) {
            navigate('/signin')
        }
        const paid = localStorage.getItem('paid')?.length ? true : false;
        if (authenticated && paid) {
            navigate('/account?tabId=0')
        }
        // ((isAuthenticated && paid) && navigate('/dashboard'));
    }, []);

    const handleTrial = async () => {
        try {
            let url = process.env.REACT_APP_BASE_URL;
            const token = localStorage.getItem('authToken');
            const response = await fetch(url + `/trial_start`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                }
            });

            if (response.ok) {
                const { data, message, success } = await response.json();
                if (success) {
                    navigate('/account?tabId=0');
                } else {
                    toast.error('Trail starting failed! ' + message, { autoClose: 3000 });
                }
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            toast.error('An error occurred.' + error, { autoClose: 3000 });
        }
    }
    console.log(paymentStatus)
    return (
        <>
            <DefaultLayout>
                <section className="pay_banner margin-top">
                    <div className="container">
                        <div className="form_style">
                            <div className="color_bg">
                                <div className="sign_up">
                                    <h3>Payment Plan Details</h3>
                                    <p className='mb-2'>
                                        {paymentStatus === "ON_TRIAL"
                                            // ? 'Welcome to our trial experience which will expire in 2 weeks from your signup. Please complete Payment and continue your journey!"'
                                            ? `Welcome to our trial experience which will expire on ${moment(createdDate).add(14, 'days').utc().format()}. Please complete Payment and continue your journey!"`
                                            : paymentStatus === 'TRIAL_EXPIRED'
                                                ? 'Your trial period is over. Please complete Payment and continue your journey.'
                                                : ''}
                                    </p>
                                    { userRole && <p className="payment_price"><span className="pe-1">1</span> "{userRole?.split('_').map(r => r[0].toUpperCase() + r.substr(1)).join(' ')}" Account…….…… <span>$29.99/mon</span></p> }

                                    <Formik
                                        initialValues={initialValues}
                                        validationSchema={validationSchema}
                                        onSubmit={handleSubmit}
                                    >
                                        {({ isSubmitting, touched, errors }) => (
                                            <Form>
                                                <div className="mb-3 mt-2">
                                                    <label

                                                        className="form-label"
                                                    >
                                                        Name on Card
                                                    </label>
                                                    <Field
                                                        name="name"

                                                        type="text"
                                                        className={`form-control ${touched.name && errors.name ? "is-invalid" : ""
                                                            }`}
                                                        placeholder="Enter Card Holder Name"
                                                    />
                                                    <ErrorMessage
                                                        name="name"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label

                                                        className="form-label"
                                                    >
                                                        Card Number
                                                    </label>
                                                    {/* Use CardElement here for card number input */}
                                                    <CardElement
                                                    // onChange={(e) => {
                                                    //     setPaymentError(false);
                                                    // }}
                                                    />
                                                    <ErrorMessage
                                                        name="cardNumber"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label
                                                        className="form-label"
                                                    >
                                                        Billing Address
                                                    </label>
                                                    <Field
                                                        name="address"

                                                        type="text"
                                                        className={`form-control ${touched.address && errors.address ? "is-invalid" : ""
                                                            }`}
                                                        placeholder="Enter Billing Address"
                                                    />
                                                    <ErrorMessage
                                                        name="address"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>

                                                <div className="input-group gap-2">
                                                    <div className="mb-3 w-33">
                                                        <label

                                                            className="form-label"
                                                        >
                                                            Billing City
                                                        </label>
                                                        <Field
                                                            name="city"

                                                            type="text"
                                                            className={`form-control ${touched.city && errors.city ? "is-invalid" : ""
                                                                }`}
                                                            placeholder="Enter Billing City"
                                                        />
                                                        <ErrorMessage
                                                            name="city"
                                                            component="div"
                                                            className="text-danger"
                                                        />
                                                    </div>
                                                    <div className="mb-3 w-33">
                                                        <label

                                                            className="form-label"
                                                        >
                                                            Billing State
                                                        </label>
                                                        <Field
                                                            name="state"

                                                            as="select"
                                                            className={`form-control ${touched.state && errors.state ? "is-invalid" : ""
                                                                }`}
                                                        >
                                                            <option value="utah">Utah</option>
                                                            <option value="usa">USA</option>
                                                        </Field>
                                                        <ErrorMessage
                                                            name="state"
                                                            component="div"
                                                            className="text-danger"
                                                        />
                                                    </div>
                                                    <div className="mb-3 w-33">
                                                        <label

                                                            className="form-label"
                                                        >
                                                            Billing Zip
                                                        </label>
                                                        <Field
                                                            name="zip"

                                                            type="number"
                                                            className={`form-control ${touched.zip && errors.zip ? "is-invalid" : ""
                                                                }`}
                                                            placeholder="Enter Zip Code"
                                                        />
                                                        <ErrorMessage
                                                            name="zip"
                                                            component="div"
                                                            className="text-danger"
                                                        />
                                                    </div>
                                                </div>

                                                {/* <button
                                                    className="submit_btn"
                                                    // type="submit"
                                                    disabled={paymentStatus == "ON_TRIAL"}
                                                >
                                                    Start Trail
                                                </button> */}

                                                <button
                                                    className="submit_btn"
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                >
                                                    Complete Payment
                                                </button>

                                            </Form>
                                        )}
                                    </Formik>
                                    {/* ON_TRIAL */}
                                    {paymentStatus !== 'ON_TRIAL' && <button
                                        className="submit_btn"
                                        onClick={() => { handleTrial() }}
                                    >
                                        Start 2 Weeks Trial!
                                    </button>}



                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </DefaultLayout>


            <ToastContainer />
        </>
    );
}

export default Payment;


// import React, { useState, useCallback, useEffect } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';

// import Logo from "../assets/images/logo.png";

// function Payment({ setUser, isAuthenticated, user }) {
//     const stripe = useStripe();
//     const elements = useElements();
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         name: "",
//         address: "",
//         city: "",
//         state: "utah",
//         zip: "",
//     });
//     const [errorState, setErrorState] = useState({
//         name: false,
//         address: false,
//         city: false,
//         state: false,
//         zip: false,
//     });
//     const [paymentError, setPaymentError] = useState(null);

//     const handleSubmit = useCallback(async (event) => {
//         event.preventDefault();
//         if (!stripe || !elements) {
//             toast.error("Stripe Card Element doesn't load properly. Kindly refresh ", { autoClose: 3000 });
//             return;
//         }

//         let hasError = false;
//         Object.entries(formData).map(([name, value]) => {
//             const currentFieldError = checkErrorState(name, value);
//             hasError = (hasError || currentFieldError);
//         });

//         const cardElement = elements.getElement(CardElement);
//         const { paymentMethod, error } = await stripe.createPaymentMethod({
//             type: 'card',
//             card: cardElement,
//         });


//         if (error || hasError) {
//             console.log({ error });
//             if (hasError) toast.error("Has some validation errors.", { autoClose: 3000 });
//             else toast.error('Looks like! ' + error.message, { autoClose: 3000 });
//             setPaymentError(error.message);
//         } else {
//             try {
//                 const requestData = {
//                     /********************************************************************************************
//                      * for yearly: price_1NuzFOLVujA8J6lyirUWQ5Ug, for month:price_1Nt6rYLVujA8J6lyDVJtm4au
//                      ********************************************************************************************/
//                     stripe_plan_id: 'price_1Nt6rYLVujA8J6lyDVJtm4au',  // monthly plan id
//                     stripe_token: paymentMethod.id,
//                     card_holder_name: formData.name,
//                     billing_address: formData.address,
//                     billing_city: formData.city,
//                     billing_state: formData.state,
//                     billing_zip: formData.zip,
//                     role: 'general_contractor',  /// hard coded  [ 'owner', 'general_contractor', 'sub_contractor' ]
//                 }
//                 console.log({ paymentMethod });
//                 const token = localStorage.getItem("authToken");
//                 console.log({ token, requestData });



//                 fetch('https://opo.jjtestsite.us/api/subscription', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `Bearer ${localStorage.getItem("authToken")}`
//                     },
//                     body: JSON.stringify(requestData),
//                 }).then((response) => {
//                     return response.json();
//                 }).then(({ data, message, success }) => {
//                     console.log({ data, message, success }); // This will log the parsed response data
//                     if (success) {
//                         toast.success('Payment successfully Done!', { autoClose: 3000 });
//                         localStorage.setItem('paid', true);
//                         navigate("/payment-completion");
//                     } else {
//                         toast.error('Payment failed! Kindly, try again.' + message, { autoClose: 3000 });
//                     }
//                 });

//             } catch (error) {
//                 toast.error('Error: ' + error, { autoClose: 3000 });
//             }
//         }
//     }, [formData, errorState]);

//     const checkErrorState = useCallback((name, value) => {
//         let isErr = false;
//         if (name === 'email') isErr = (value.length) ? false : true;
//         else isErr = value.length ? false : true;

//         setErrorState((es) => ({
//             ...es,
//             [name]: isErr,
//         }));

//         return isErr;
//     }, [errorState]);

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;

//         checkErrorState(name, value);
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     useEffect(() => {
//         console.log("isAuthenticated ::::::::::", isAuthenticated);
//         ((!isAuthenticated) && navigate('/signin'));

//         const paid = localStorage.getItem('paid')?.length ? true : false;
//         ((isAuthenticated && paid) && navigate('/dashboard'));
//     }, []);

//     return (
//         <>
//             <header>
//                 <div className="container">
//                     <div className="header_nav">
//                         <nav className="navbar navbar-expand-lg navbar-light">
//                             <div className="container-fluid">
//                                 <a className="navbar-brand" href="#"><img className="img-fluid" src={Logo} alt="" /></a>
//                                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//                                     <span className="navbar-toggler-icon"></span>
//                                 </button>
//                                 <div className="collapse navbar-collapse navigation" id="navbarNavDropdown">
//                                     <ul className="navbar-nav">
//                                         <li>
//                                             <a aria-current="page" href="#">Home</a>
//                                         </li>
//                                         <li>
//                                             <a href="#">Our Services</a>
//                                         </li>
//                                         <li>
//                                             <a href="#">Our Story</a>
//                                         </li>
//                                         <li>
//                                             <a href="#">Contact Us</a>
//                                         </li>
//                                         <li>
//                                             <a href="#">My Account</a>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </nav>
//                     </div>
//                 </div>
//             </header>


//             <section className="pay_banner margin-top">
//                 <div className="container">
//                     <div className="form_style">
//                         <div className="color_bg">
//                             <div className="sign_up">
//                                 <h3>Payment Plan Details</h3>
//                                 <p className="payment_price"><span className="pe-1">1</span>Owner Account…….…… <span>$29.99/mon</span></p>
//                                 <form action="">
//                                     <div className="mb-3">
//                                         <label style={{ ...(errorState.name ? { color: "red" } : {}) }} className="form-label">Name on Card</label>
//                                         <input
//                                             name="name"
//                                             style={{ ...(errorState.name ? { borderColor: "red" } : {}) }}
//                                             onChange={handleInputChange}
//                                             type="text"
//                                             className="form-control"
//                                             id="exampleFormControlInput1"
//                                             placeholder="Enter Card Holder Name "
//                                         />
//                                     </div>
//                                     <div className="mb-3">
//                                         <label style={{ ...(paymentError?.length ? { color: "red" } : {}) }} className="form-label">Card Details</label>
//                                         <CardElement
//                                             onChange={(e) => { setPaymentError(false); }}
//                                         />
//                                     </div>
//                                     <div className="mb-3 password-group">
//                                         <label style={{ ...(errorState.address ? { color: "red" } : {}) }} className="form-label">Billing Address</label>
//                                         <input
//                                             name="address"
//                                             style={{ ...(errorState.address ? { borderColor: "red" } : {}) }}
//                                             onChange={handleInputChange}
//                                             type="text"
//                                             className="form-control"
//                                             id="exampleFormControlInput13"
//                                             placeholder="Enter Billing Address"
//                                         />
//                                     </div>
//                                     <div className="input-group gap-2">
//                                         <div className="mb-3 w-33">
//                                             <label style={{ ...(errorState.city ? { color: "red" } : {}) }} className="form-label">Billing City</label>
//                                             <input
//                                                 name="city"
//                                                 style={{ ...(errorState.city ? { borderColor: "red" } : {}) }}
//                                                 onChange={handleInputChange}
//                                                 type="text"
//                                                 className="form-control"
//                                                 id="exampleFormControlInput12"
//                                                 placeholder="Enter Billing City"
//                                             />
//                                         </div>
//                                         <div className="mb-3 w-33">
//                                             <label style={{ ...(errorState.state ? { color: "red" } : {}) }} className="form-label">Billing State</label>
//                                             <select
//                                                 name="state"
//                                                 style={{ ...(errorState.state ? { borderColor: "red" } : {}) }}
//                                                 onChange={handleInputChange}
//                                                 className="form-control"
//                                                 value={formData.state}
//                                             >
//                                                 <option value="utah">Utah</option>
//                                                 <option value="usa">USA</option>
//                                             </select>
//                                         </div>
//                                         <div className="mb-3 w-33">
//                                             <label style={{ ...(errorState.zip ? { color: "red" } : {}) }} className="form-label">Billing Zip</label>
//                                             <input
//                                                 name="zip"
//                                                 style={{ ...(errorState.zip ? { borderColor: "red" } : {}) }}
//                                                 onChange={handleInputChange}
//                                                 type="number"
//                                                 className="form-control"
//                                                 id="exampleFormControlInput12"
//                                                 placeholder="Enter Zip Code"
//                                             />
//                                         </div>
//                                     </div>
//                                     <button className="submit_btn" onClick={handleSubmit} type="submit" >
//                                         Complete Payment
//                                     </button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <footer>
//                 <div className="container">
//                     <p>© 2022 All Rights Reserved</p>
//                 </div>
//             </footer>
//             <ToastContainer />
//         </>
//     );
// }

// export default Payment;