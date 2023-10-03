// import React, { useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';

// const PaymentPage = () => {
//   const [email, setEmail] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubscribe = async () => {
//     setLoading(true);
//     const stripe = await loadStripe('pk_test_51Nt6pALVujA8J6lyi9k5qgGlFHXEgq3SwHSi3bgJiXsAl1RBuxwwnPm8IHuGd9M83MoJa0y9lssxSyFH3E9hvtkB00LXzCRHyA');

//     // Create a Stripe Checkout session on your server
//     const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email }), // Include any additional data needed
//     });

//     const session = await response.json();

//     // Redirect to Stripe Checkout
//     const { error } = await stripe.redirectToCheckout({
//       sessionId: session.id,
//     });

//     if (error) {
//       console.error(error);
//     }

//     setLoading(false);
//   };

//   return (
//     <div>
//       <h2>Subscription Payment</h2>
//       <form>
//         <label>Email Address:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <button type="button" onClick={handleSubscribe} disabled={loading}>
//           {loading ? 'Processing...' : 'Subscribe'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PaymentPage;





// // import React from 'react';
// // import { useStripe, useElements, PaymentElement, CardElement, CardCvcElement } from '@stripe/react-stripe-js';
// // import { Elements } from '@stripe/react-stripe-js';
// // import { loadStripe } from '@stripe/stripe-js';

// // // Make sure to call `loadStripe` outside of a component’s render to avoid
// // // recreating the `Stripe` object on every render.

// // const CheckoutForm = () => {
// //   const stripe = useStripe();

// //   const stripePromise = loadStripe('pk_test_51Nt6pALVujA8J6lyi9k5qgGlFHXEgq3SwHSi3bgJiXsAl1RBuxwwnPm8IHuGd9M83MoJa0y9lssxSyFH3E9hvtkB00LXzCRHyA');
// //   const options = {
// //     mode: 'payment',
// //     currency: 'usd',
// //     amount: 1099,
// //     automaticPayment: {
// //       enabled: true
// //     }
// //   };
// //   const elements = useElements(options);
// //   // const elements = stripe.elements(options);
// //   // const options = {
// //   //   // passing the client secret obtained from the server
// //   //   clientSecret: 'sk_test_51Nt6pALVujA8J6lyI6bVuqcyDGwwEWa0ANWTJzJ7r8sQFzsroyd7oxrawYcT8WgJcLwjyVnGHvMLN14NzqZcbwOU00aLM4V3H6',
// //   // };
// //   const handleSubmit = async (event) => {
// //     // We don't want to let default form submission happen here,
// //     // which would refresh the page.
// //     event.preventDefault();

// //     if (!stripe || !elements) {
// //       // Stripe.js hasn't yet loaded.
// //       // Make sure to disable form submission until Stripe.js has loaded.
// //       return;
// //     }

// //     const result = await stripe.confirmPayment({
// //       //`Elements` instance that was used to create the Payment Element
// //       elements,
// //       confirmParams: {
// //         return_url: "http://localhost:3000/dashboard",
// //       },
// //     });


// //     if (result.error) {
// //       // Show error to your customer (for example, payment details incomplete)
// //       console.log(result.error.message);
// //     } else {
// //       // Your customer will be redirected to your `return_url`. For some payment
// //       // methods like iDEAL, your customer will be redirected to an intermediate
// //       // site first to authorize the payment, then redirected to the `return_url`.
// //     }
// //   };

// //   return (
// //     // options={options}
// //     <Elements stripe={stripePromise} >
// //       <form onSubmit={handleSubmit}>
// //         <CardElement options={options} />
// //         {/* <CardCvcElement options={options} /> */}
// //         <PaymentElement options={options} />
// //         <button disabled={!stripe}>Submit</button>
// //       </form>
// //     </Elements>
// //   )
// // };

// // export default CheckoutForm;


// ////////////////////////////////////////////////////
// ////////////////////////////////////////////////////
// ////////////////////////////////////////////////////


// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// function PaymentForm() {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [paymentError, setPaymentError] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!stripe || !elements) {
//       return;
//     }

//     const cardElement = elements.getElement(CardElement);

//     const { paymentMethod, error } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement,
//     });


//     if (error) {
//       setPaymentError(error.message);
//     } else {
//       console.log({ paymentMethod });
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* <PaymentElement /> */}
//       {/* <CardCvcElement /> */}
//       <CardElement />
//       {/* <div id="card-number-element"></div>
//       <div id="card-expiry-element"></div>
//       <div id="card-cvv-element"></div> */}

//       <button type="submit" disabled={!stripe}>
//         Pay
//       </button>
//       {paymentError && <div>{paymentError}</div>}
//     </form>
//   );
// }

// export default PaymentForm;


// ////////////////////////////////////////////////////
// ////////////////////////////////////////////////////
// ////////////////////////////////////////////////////


import React, { useState, useCallback, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { emailPatternValidator } from '../../utils';

export default function Signin({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorState, setErrorState] = useState({
    email: false,
    password: false,
  });

  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });


    if (error) {
      setPaymentError(error.message);
    } else {
      console.log({ paymentMethod });
    }
  };

  useEffect(() => {

    console.log("REACT_APP_STRIPE_PUBLISHABLE_KEY ::::::::::", process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
    console.log("isAuthenticated ::::::::::", isAuthenticated);
    // (isAuthenticated && navigate('/dashboard'));
  }, [isAuthenticated]);

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

  // Event handler to update the state when input fields change

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    checkErrorState(name, value);
    setFormData({
      ...formData,
      [name]: value
    });
  };


  // // Function to handle form submission and log the values
  // const handleSubmit = useCallback(async (event) => {
  //   event.preventDefault();
  //   let hasError = false;

  //   Object.entries(formData).map(([name, value]) => {
  //     console.log({ 111: hasError });
  //     const currentFieldError = checkErrorState(name, value);
  //     hasError = (hasError || currentFieldError);
  //     console.log({ 222: hasError });
  //     console.log({ name, value });
  //   });

  //   console.log({ errorState }, hasError);

  //   try {
  //     if (hasError) throw Error("Has some validation errors.");
  //     const requestData = {
  //       email: formData.email,
  //       password: formData.password,
  //     };

  //     fetch('https://opo.jjtestsite.us/api/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(requestData),
  //     }).then((response) => {
  //       return response.json();
  //     })
  //       .then(({ data, message, success }) => {
  //         // console.log(res); // This will log the parsed response data
  //         console.log({ data, message, success }); // This will log the parsed response data
  //         if (success) {
  //           localStorage.setItem("authToken", data?.token);
  //           toast.success('Loggedin successfully!', { autoClose: 3000 });
  //           setIsAuthenticated(true);
  //           // navigate("/dashboard");
  //         } else {
  //           toast.error('Login failed!' + message, { autoClose: 3000 });
  //         }
  //       });
  //   } catch (error) {
  //     console.error('An error occurred:', error);
  //     toast.error('An error occurred.' + error, { autoClose: 3000 });
  //   }
  // }, [formData, errorState]);


  return (
    <div>
      <header>
        <div className="container">
          {/* Navbar */}
          <div className="header_nav">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">OPPO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navigation" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li>
                      <a aria-current="page" href="#">Home</a>
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
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* Breadcrums */}
      <section className="breadcrumbs_banner">
        <div className="container">
          <nav className='bs-breadcrumb-divider' aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Create an Account</a></li>
              <li className="breadcrumb-item">Select Your Plan</li>
              <li className="breadcrumb-item" aria-current="page">Finalize Payment</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Payment */}
      <section className="pay_banner">
        <div className="container">
          <div className="form_style">
            <div className="color_bg">
              <div className="sign_up">
                <h3>Payment Plan Details</h3>
                <p className="payment_price"><span className="pe-1">1</span>Owner Account…….…… <span>$29.99/mon</span></p>
                <form action="">
                  <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name on Card</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Peter Ehat" />
                  </div>
                  <CardElement />
                  <div className="mb-3">
                    <label for="exampleFormControlInput11" className="form-label">Card Number</label>
                    <input type="text" className="form-control" id="exampleFormControlInput11" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="input-group gap-2">
                    <div className="mb-3 w-25">
                      <label for="exampleFormControlInput12" className="form-label">Exp Date</label>
                      <input type="date" className="form-control" id="exampleFormControlInput12" placeholder="04/27" />
                    </div>
                    <div className="mb-3 w-25">
                      <label for="exampleFormControlInput12" className="form-label">CVC</label>
                      <input type="password" className="form-control" id="exampleFormControlInput12" placeholder="****" />
                    </div>
                  </div>
                  <div className="mb-3 password-group">
                    <label for="exampleFormControlInput13" className="form-label">Billing Address</label>
                    <input type="text" className="form-control" id="exampleFormControlInput13" placeholder="123 Some Street" />
                  </div>
                  <div className="input-group gap-2">
                    <div className="mb-3 w-33">
                      <label for="exampleFormControlInput12" className="form-label">Billing City</label>
                      <input type="text" className="form-control" id="exampleFormControlInput12" placeholder="Lehi" />
                    </div>
                    <div className="mb-3 w-33">
                      <label for="exampleFormControlInput12" className="form-label">Billing State</label>
                      <select name="" id="" className="form-control">
                        <option value="">Utah</option>
                        <option value="">USA</option>
                      </select>
                    </div>
                    <div className="mb-3 w-33">
                      <label for="exampleFormControlInput12" className="form-label">Billing Zip</label>
                      <input type="text" className="form-control" id="exampleFormControlInput12" placeholder="84003" />
                    </div>
                  </div>
                  <div className="submit_btn">
                    <input type="submit" value="Complete Payment" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}