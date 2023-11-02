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
import SubContractor from './pages/subContractor.jsx';
import Projectdetail from './pages/projectdetail.jsx';

const AppRouter = ({ isAuthenticated, setIsAuthenticated, paymentStatus }) => {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
  const location = useLocation();
  const navigate = useNavigate();
  const userRole = useSelector((state) => {
    return state?.userProfileSlice?.userData?.data?.role;
  });

  const userData = useSelector((state) => {
    return state?.userProfileSlice?.userData?.data;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(verifyAuthToken(fetchUserProfileDetails))
  }, [userRole, dispatch]);

  const paymentSripe = useSelector((state) => {
    return state?.userProfileSlice?.userData?.data?.stripe_customer_id;
  });

  return (
    <div>
      <Routes>
        {/* <Route  path="/find-a-project" element={<FindProject />} /> */}
        <Route
          path="/find-a-project"
          element={
            isAuthenticated ? <FindProject /> : <Navigate to="/signin" replace />
          }
        />
        <Route path="/project-details" element={
          isAuthenticated ? <Projectdetail /> : <Navigate to="/signin" replace />
        }
        />
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
        <Route path="/dashboard" element={<Dashboard isAuthenticated={isAuthenticated} paymentSripe={paymentSripe} />} />
        {userData && <Route path="/account" element={userRole == 'owner' || userRole == 'sub_contractor' ? <SubContractor /> : <Account />} />}
      </Routes>
    </div>
  );
}

export default AppRouter;