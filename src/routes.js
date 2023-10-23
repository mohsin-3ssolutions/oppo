import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Account from './pages/account.jsx';
import Dashboard from "./pages/dashboard.jsx";
import LandingPage from './pages/landingPage.jsx';
import Payment from "./pages/payment.jsx";
import SelectRole from "./pages/paymentPlans.jsx";
import SignIn from "./pages/signin.jsx";
import SignUp from "./pages/signup.jsx";
import ThankYou from "./pages/thankyou.jsx";
import { verifyAuthToken } from './utils.js';
import ContactUs from './pages/contactUs.jsx';
import FindProject from './pages/findProject';
import Services from './pages/services.jsx';
import Story from './pages/story.jsx';
import { fetchUserProfileDetails } from './store/userProfileSlice/userProfileSlice.js';

const AppRouter = ({ isAuthenticated, setIsAuthenticated, paymentStatus }) => {
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
    console.log(isAuthenticated)
    const location = useLocation();
    const navigate = useNavigate();
  
    const logout = () => {
      localStorage.removeItem('authToken');
      setIsAuthenticated(false);
    }
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(verifyAuthToken(fetchUserProfileDetails))
    }, []);
  
    const paymentSripe = useSelector((state) => {
      return state?.userProfileSlice?.userData?.data?.stripe_customer_id;
    });
    const userRole = useSelector((state) => {
      return state?.userProfileSlice?.userData?.data?.role;
    });
  
    return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage isAuthenticated={isAuthenticated} paymentSripe={paymentSripe} />} />
        <Route path="/select-role" element={<SelectRole />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/our-story" element={<Story />} />
        <Route path="/find-a-project" element={<FindProject />} />
        {/* <Route path="/chart" element={<ChartComponent />} /> */}

        <Route path="/signin" element={<SignIn isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<SignUp isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/payment"
          element={
            paymentStatus === 'SUBSCRIBED' ? (
              <Navigate to="/" replace />
            ) : (
              <Elements stripe={stripePromise}>
                <Payment isAuthenticated={isAuthenticated} paymentStatus={paymentStatus} setIsAuthenticated={setIsAuthenticated} />
              </Elements>
            )
          }
        />
        <Route path="/payment-completion" element={<ThankYou isAuthenticated={isAuthenticated} />} />
        <Route path="/dashboard" element={<Dashboard isAuthenticated={isAuthenticated} paymentSripe={paymentSripe} logout={logout} />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <ToastContainer />
    </div>
    );
}

export default AppRouter;