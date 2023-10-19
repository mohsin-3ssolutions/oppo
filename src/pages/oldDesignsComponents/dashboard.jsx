import React, { useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Dashboard = ({ isAuthenticated, logout }) => {
    const navigate = useNavigate();
    useEffect(() => {
        // console.log("errorState has changed:", errorState);
        console.log("isAuthenticated ::::::::::", isAuthenticated);
        (!isAuthenticated && navigate('/signin'))
    }, [isAuthenticated]);

    return (
        <div className="sign_up"> 
            {isAuthenticated
                ? <>
                    <h1 style={{ textAlign: "center"}}>Dashboard</h1>
                    <h3 style={{ textAlign: "center"}}>Dashboard Content will display here.</h3>
                    <div className="submit_btn">
                        <input onClick={logout} type="submit" value="Log Out" />
                    </div>
                    {/* <button
                        className="submit_btn"
                        style={{ textAlign: "center" }}
                        // onClick={() => { localStorage.removeItem("authToken"); navigate('/signin'); }}
                        onClick={logout}
                    >
                        Logout
                    </button> */}
                    <ToastContainer />

                </> : <></>
            }
        </div>
    )
};

export default Dashboard;