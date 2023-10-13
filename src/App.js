import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './assentials/js/bootstrap.bundle.min.js';
import './assentials/js/custom.js';
import './assentials/js/jquery.min.js';
import './assentials/js/slick.js';
import "./assentials/styles/global.css";
import './assentials/styles/responsive.css';

import Account from './components/account.jsx';
import Dashboard from "./components/dashboard.jsx";
import LandingPage from './components/landingPage.jsx';
import Payment from "./components/payment.jsx";
import SelectRole from "./components/paymentPlans.jsx";
import SignIn from "./components/signin.jsx";
import SignUp from "./components/signup.jsx";
import ThankYou from "./components/thankyou.jsx";
import { verifyAuthToken } from './utils.js';
import ContactUs from './components/contactUs.jsx';
import FindProject from './components/findProject';
import Services from './components/services.jsx';
import Story from './components/story.jsx';
import { fetchUserProfileDetails } from './store/userProfileSlice/userProfileSlice.js';
import ChartComponent from './components/ganttchart';

function App() {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [user, setUser] = useState({
  //   paid: false
  // });

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
    const authenticated = !!localStorage.getItem("authToken");
    setIsAuthenticated(authenticated);
  }, [isAuthenticated]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/select-role" element={<SelectRole />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/our-story" element={<Story />} />
        <Route path="/find-a-project" element={<FindProject />} />
        {/* <Route path="/chart" element={<ChartComponent />} /> */}

        <Route path="/signin" element={<SignIn isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<SignUp isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/payment" element={
          <Elements stripe={stripePromise}>
            <Payment isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} /*user={user} setUser={setUser}*/ />
          </Elements>
        } />
        <Route path="/payment-completion" element={<ThankYou isAuthenticated={isAuthenticated} />} />
        <Route path="/dashboard" element={<Dashboard isAuthenticated={isAuthenticated} paymentSripe={paymentSripe} /*user={user}*/ logout={logout} />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;