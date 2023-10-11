import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { useNavigate } from 'react-router-dom';
import Account from './components/account.jsx';
import Dashboard from "./components/dashboard.jsx";
import Payment from "./components/payment.jsx";
import SelectRole from "./components/paymentPlans.jsx";
import SignIn from "./components/signin.jsx";
import SignUp from "./components/signup.jsx";
import LandingPage from './components/landingPage.jsx';
import ThankYou from "./components/thankyou.jsx";
import { verifyAuthToken } from './utils.js';

import { fetchUserProfileDetails } from './store/userProfileSlice/userProfileSlice.js';
import LandingPage from './components/landingPage.jsx';

function App() {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({
    // isAuthenticated: false,
    paid: false
  });

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    // verifyAuthToken();
    dispatch(verifyAuthToken(fetchUserProfileDetails))
  }, []);

  const paymentSripe = useSelector((state) => {
    return state?.userProfileSlice?.userData?.data?.stripe_customer_id;
  });

  useEffect(() => {
    console.log({123456: process.env});
    const authenticated = !!localStorage.getItem("authToken");
    setIsAuthenticated(authenticated);
  }, [isAuthenticated, user]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/payment-plans" element={<PaymentPlans isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} /> */}
        {/* <Route path="/" element={<SignIn isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} /> */}
        <Route path="/signin" element={<SignIn isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/payment" element={
          <Elements stripe={stripePromise}>
            <Payment isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} user={user} setUser={setUser} />
          </Elements>
        } />
        <Route path="/payment-completion" element={<ThankYou isAuthenticated={isAuthenticated} />} />
        <Route path="/dashboard" element={<Dashboard isAuthenticated={isAuthenticated} paymentSripe={paymentSripe} user={user} logout={logout} />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
