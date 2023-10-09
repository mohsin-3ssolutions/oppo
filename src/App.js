// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';
import OldSignIn from "./components/oldDesignsComponents/signin.jsx";
import OldSignUp from "./components/oldDesignsComponents/signup.jsx";
import OldPayment from "./components/oldDesignsComponents/payment.jsx";
import OldDashboard from "./components/oldDesignsComponents/dashboard.jsx";
import SignUp from "./components/signup.jsx";
import SignIn from "./components/signin.jsx";
import Payment from "./components/payment.jsx";
import Dashboard from "./components/dashboard.jsx";
import PaymentPlans from "./components/paymentPlans.jsx";
import ThankYou from "./components/thankyou.jsx";
import SubContractorSignUp from './components/subContractorSignup.jsx';
import GeneralContractorSignUp from './components/generalContractorSignup.jsx';
import Account from './components/account.jsx';
// import 'dotenv/config';
// require('dotenv').config();

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import OwnerSignUp from './components/ownerSignup.jsx';
import { ToastContainer } from 'react-toastify';

function App() {
  const stripePromise = loadStripe('pk_test_51Nt6pALVujA8J6lyi9k5qgGlFHXEgq3SwHSi3bgJiXsAl1RBuxwwnPm8IHuGd9M83MoJa0y9lssxSyFH3E9hvtkB00LXzCRHyA');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({
    // isAuthenticated: false,
    paid: false
  });
  // const [isCleared, setIsCleared] = useState(false);
  // const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  }

  useEffect(() => {
    const authenticated = !!localStorage.getItem("authToken");
    // console.log({ authenticated });
    setIsAuthenticated(authenticated);
  }, [isAuthenticated, user]);


  // console.log(isAuthenticated)

  return (
    <Router>
      <Routes>
        <Route path="/account" element={<Account />} />
        <Route path="/dashboard" element={<Dashboard isAuthenticated={isAuthenticated} user={user} logout={logout} />} />
        <Route path="/" element={<PaymentPlans />} />
        {/* <Route path="/payment-plans" element={<PaymentPlans isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} /> */}
        {/* <Route path="/" element={<SignIn isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} /> */}
        <Route path="/signin" element={<SignIn isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<SignUp isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/owner-signup" element={<OwnerSignUp isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/sub-contractor-signup" element={<SubContractorSignUp isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/general-contractor-signup" element={<GeneralContractorSignUp isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/payment" element={
          <Elements stripe={stripePromise}>
            <Payment isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} user={user} setUser={setUser} />
          </Elements>
        } />
        <Route path="/payment-completion" element={<ThankYou isAuthenticated={isAuthenticated} />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Login from './components/signin.jsx';
// import Signup from './components/signup.jsx';
// import Dashboard from './components/dashboard.jsx';
// import ProtectedRoute from './components/protectedRoute';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     // Perform some authentication check here
//     const isAuthenticated = localStorage.getItem("authToken");

//     if (!isAuthenticated) {
//       // Redirect to the login page
//       // navigate('/login');
//       <Navigate to='/login' />
//     }
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/login"
//           render={(props) => (
//             <Login
//               {...props}
//               isAuthenticated={isAuthenticated}
//               setIsAuthenticated={setIsAuthenticated}
//             />
//           )}
//         />
//         <Route
//           path="/signup"
//           render={(props) => (
//             <Signup
//               {...props}
//               isAuthenticated={isAuthenticated}
//               setIsAuthenticated={setIsAuthenticated}
//             />
//           )}
//         />
//         {/* <Route
//           path="/dashboard"
//           render={(props) => (
//             // <Signup
//             //   {...props}
//             //   isAuthenticated={isAuthenticated}
//             //   setIsAuthenticated={setIsAuthenticated}
//             // />
//             <Dashboard />
//           )}
//         /> */}


//         <ProtectedRoute
//           path="/dashboard"
//           component={<Dashboard />}
//           isAuthenticated={isAuthenticated}
//         />
//         {/* <Navigate from="/" to="/login" /> */}
//         {/* { navigate("/login") } */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;