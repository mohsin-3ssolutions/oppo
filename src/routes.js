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
import Startprojectdetail from './pages/startprojectdetail.jsx';
import Biderlist from './pages/biderlist.jsx';
import SCsubmitProposaldetail from './pages/SCsubmitProposaldetail.jsx';
import SCawardproposal from './pages/SCawardproposal.jsx';
import Submitproposal from './pages/submitproposal.jsx' 
import PostNewProject from './components/postNewProject.jsx';

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

  }, [userRole, dispatch, paymentStatus]);

  useEffect(() => {
    console.log({ isAuthenticated })

    if (paymentStatus == 'TRIAL_EXPIRED' || paymentStatus == 'NEW') {
      if (location.pathname.includes('/account'))        
      navigate('/payment', { replace: true });
    } else if (paymentStatus === 'SUBSCRIBED') {
      if (location.pathname == '/payment') {
        navigate('/');
      } else {
        navigate(location.pathname);
      }
    }
  }, [paymentStatus, location.pathname])


  const paymentSripe = useSelector((state) => {
    return state?.userProfileSlice?.userData?.data?.stripe_customer_id;
  });

  return (
    <div>
      <Routes>
        {/* <Route  path="/find-a-project" element={<FindProject />} /> */}
        {userData &&  <Route path="/find-a-project" element={isAuthenticated ? <FindProject /> : <Navigate to="/signin" replace />}/>}
        {userData && <Route path="/post-new-project" element={isAuthenticated ? <PostNewProject /> : <Navigate to="/signin" replace />}/>}
        {userData && <Route path="/project-details/:id" element={isAuthenticated ? <Startprojectdetail /> : <Navigate to="/signin" replace />}/> }
        {userData && <Route path="/account/:tabId" element={userRole == 'sub_contractor' ? <SubContractor /> : <Account />} />}
        {userData && <Route path="/submitproposal/:pid" element={<Submitproposal isAuthenticated={isAuthenticated} />} />}

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
        {/* <Route path="/pd" element={<Startprojectdetail isAuthenticated={isAuthenticated} />} /> */}
        <Route path="/biderlisting" element={<Biderlist isAuthenticated={isAuthenticated} />} />
        <Route path="/scaward" element={<SCawardproposal isAuthenticated={isAuthenticated} />} />
        <Route path="/subcontractorsubmitdetail" element={<SCsubmitProposaldetail isAuthenticated={isAuthenticated} />} />
        <Route path="/payment-completion" element={<ThankYou isAuthenticated={isAuthenticated} />} />
        <Route path="/dashboard" element={<Dashboard isAuthenticated={isAuthenticated} paymentSripe={paymentSripe} />} />
      </Routes>
    </div>
  );
}

export default AppRouter;