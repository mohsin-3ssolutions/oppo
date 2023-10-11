import React from 'react';

import Logo from "../assets/images/logo.png"

function SelectRole() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="header_nav">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="#"><img className="img-fluid" src={Logo} alt="" /></a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse navigation" id="navbarNavDropdown">
                                    <ul className="navbar-nav">
                                        <li>
                                            <a aria-current="page" href="/">Home</a>
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
            
            {/* <!-- <section className="breadcrumbs_banner">
                <div className="container">
                    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Create an Account</a></li>
                            <li className="breadcrumb-item">Select Your Plan</li>
                            <li className="breadcrumb-item" aria-current="page">Finalize Payment</li>
                        </ol>
                    </nav>
                </div>
            </section> --> */}
            <section className="inner_banner">
                <div className="inner_plan_banner">
                    <div className="container">
                        <h1>Get Started</h1>
                    </div>
                </div>
            </section>
            <section className="role_banner">
                <div className="container">
                    <h2>What is your role?</h2>
                    <p>Let’s get you started by creating an account based on your role in a construction project. Whether you are the owner of the project, the general contractor bidding on the project, or a sub-contractor bidding to help the general contractor, we are here to assist you. By following the steps provided, you will be able to create an account that best suits your needs and helps you manage your construction project efficiently. Get started below!</p>
                </div>
            </section>
            
            <section className="plan_banner">
                <div className="container">
                    <div className="color_bg">
                        <div className="plan_card">
                            <div className="row">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="plan_content">
                                        <h3>Owner</h3>
                                        <p>This plan includes the following features:</p>
                                        <ul>
                                            <li>
                                                <p>Post new projects.</p>
                                            </li>
                                            <li>
                                                <p>Receive bids from Sub Contractors.</p>
                                            </li>
                                            <li>
                                                <p>Respond to RFIs</p>
                                            </li>
                                            <li>
                                                <p>Manage Sub schedules.</p>
                                            </li>
                                        </ul>
                                        <div className="creat_btn">
                                            <a href="/signup">Select</a>
                                            {/* <a href="/owner-signup">Select</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="plan_content">
                                        <h3>General Contractor</h3>
                                        <p>This plan includes the following features:</p>
                                        <ul>
                                            <li>
                                                <p>Find available
                                                    projects.</p>
                                            </li>
                                            <li>
                                                <p>Upload bids to
                                                    Projects.
                                                </p>
                                            </li>
                                            <li>
                                                <p>Send RFIs to GCs.</p>
                                            </li>
                                        </ul>
                                        <div className="creat_btn">
                                            <a href="/signup">Select</a>
                                            {/* <a href="/general-contractor-signup">Select</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="plan_content">
                                        <h3>Sub Contractor</h3>
                                        <p>This plan includes the following features:</p>
                                        <ul>
                                            <li>
                                                <p> Post new projects.</p>
                                            </li>
                                            <li>
                                                <p>Receive bids from Sub
                                                    Contractors.
                                                </p>
                                            </li>
                                            <li>
                                                <p>Respond to RFIs</p>
                                            </li>
                                        </ul>
                                        <div className="creat_btn">
                                            <a href="/signup">Select</a>
                                            {/* <a href="/sub-contractor-signup">Select</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <p>© 2022 All Rights Reserved</p>
                </div>
            </footer>
        </>
    );
}

export default SelectRole;
