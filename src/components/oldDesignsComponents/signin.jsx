import React, { useState, useCallback, useEffect } from 'react';
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



  useEffect(() => {
    console.log("isAuthenticated ::::::::::", isAuthenticated);
    (isAuthenticated && navigate('/dashboard'));
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


  // Function to handle form submission and log the values
  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    let hasError = false;

    Object.entries(formData).map(([name, value]) => {
      console.log({ 111: hasError });
      const currentFieldError = checkErrorState(name, value);
      hasError = (hasError || currentFieldError);
      console.log({ 222: hasError });
      console.log({ name, value });
    });

    console.log({ errorState }, hasError);

    try {
      if (hasError) throw Error("Has some validation errors.");
      const requestData = {
        email: formData.email,
        password: formData.password,
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
            // navigate("/dashboard");
          } else {
            toast.error('Login failed!' + message, { autoClose: 3000 });
          }
        });
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('An error occurred.' + error, { autoClose: 3000 });
    }
  }, [formData, errorState]);


  return (
    <div>
      <section className="title_head">
        <div className="container">
          <h1>Login</h1>
        </div>
      </section>

      <section className="form_style">
        <div className="container">
          <div className="color_bg">
            <div className="sign_up">
              <form action="">
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput12" className="form-label" style={{ ...(errorState.email ? { color: "red" } : {}) }} >Email Address</label>
                  <input
                    name="email"
                    style={{ ...(errorState.email ? { borderColor: "red" } : {}) }}
                    onChange={handleInputChange}
                    type="Email"
                    className="form-control"
                    id="exampleFormControlInput12"
                    placeholder="Enter Email Address"
                  />
                </div>
                <div className="mb-3 password-group">
                  <label htmlFor="exampleFormControlInput13" className="form-label" style={{ ...(errorState.password ? { color: "red" } : {}) }} >Password</label>
                  <input
                    name="password"
                    onChange={handleInputChange}
                    type="password"
                    style={{ ...(errorState.password ? { borderColor: "red" } : {}) }}
                    className="form-control"
                    id="exampleFormControlInput13"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="submit_btn">
                  <input type="submit" onClick={handleSubmit} value="Log In " />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="sign_up">
        <p>Don't have an account? <a href="/signup" className="log_in">Create Account!</a></p>
      </div> */}

      
      <ToastContainer />
    </div>
  );
}