import React, { useState } from 'react'
import DefaultLayout from '../reusableComponents/defaultLayout'
import Welcome from '../reusableComponents/welcome';
import PendingProjects from '../components/account-components/pendingProjects';
import ActiveProjects from '../components/account-components/activeProjects';
import GenttChart from '../components/genttChart';
import Profile from '../components/profile';
// import { Link } from 'react-router-dom'

export default function SubContractor() {
    const [activeStep, setActiveStep] = useState('step1');
    const [showProfile, setShowProfile] = useState(true)

    const toggleVisibility = (step) => {
        setActiveStep(step);
    };
    return (
        <>
            <DefaultLayout>
                <Welcome />
                <section className="gc_homebanner">
                    <div className="container">
                        <div className="globle_tabs">
                            <ul className="nav nav-tabs" id="gcTab" role="tablist" onClick={() => { setShowProfile(false) }}>
                                <li role="presentation">
                                    <a id="home-tab" data-bs-toggle="tab" data-bs-target="#pending" type="button" role="tab" aria-controls="home" aria-selected="true">Pending Projects</a>
                                </li>
                                <li role="presentation">
                                    <a id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Active Projects</a>
                                </li>
                                <li role="presentation">
                                    <a id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Sub Contractor Schedule</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="gcTabContent">
                                <PendingProjects />
                                <ActiveProjects />
                                <GenttChart />
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="theater_banner">
                    <div className="container">
                        <div className="new_project" >
                            <div className="color_bg">
                                <h2>Movie Theater - Salt Lake City, Utah</h2>
                                <form action="">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="form_style ps-0">
                                                <div className="mb-3">
                                                    <label for="exampleFormControlInput1" className="form-label">Project Name</label>
                                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="XYZ Contractors" />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="exampleFormControlInput12" className="form-label">Project Rep Email</label>
                                                    <input type="Email" className="form-control" id="exampleFormControlInput12" placeholder="peterehat+oppotest@gmail.com" />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="exampleFormControlInput11" className="form-label">Project Rep</label>
                                                    <input type="text" className="form-control" id="exampleFormControlInput11" placeholder="Peter Ehat" />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="exampleFormControlInput13" className="form-label">Phone Number</label>
                                                    <input type="text" className="form-control" id="exampleFormControlInput13" placeholder="801-976-2351" />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="exampleFormControlInput13" className="form-label">Project Description</label>
                                                    <textarea name="" id="" cols="30" rows="5" className="form-control"></textarea>
                                                    <hr />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="exampleFormControlInput13" className="form-label">Who have you worked with in the past? (Banks, Lenders, etc.)</label>
                                                    <textarea name="" id="" cols="30" rows="5" className="form-control"></textarea>
                                                    <hr />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="form_style">
                                                <div className="mb-3">
                                                    <label for="exampleFormControlInput1" className="form-label">Designer</label>
                                                    <div className="input-group gap-3">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio1" />
                                                            <label className="form-check-label" for="radio1">
                                                                Yes
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio2" />
                                                            <label className="form-check-label" for="radio2">
                                                                No
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio3" />
                                                            <label className="form-check-label" for="radio3">
                                                                TBD
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label for="exampleFormControlInput12" className="form-label">Engineer</label>
                                                    <div className="input-group gap-3">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio1" />
                                                            <label className="form-check-label" for="radio1">
                                                                Yes
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio2" />
                                                            <label className="form-check-label" for="radio2">
                                                                No
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio3" />
                                                            <label className="form-check-label" for="radio3">
                                                                TBD
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label for="exampleFormControlInput12" className="form-label">Architect</label>
                                                    <div className="input-group gap-3">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio1" />
                                                            <label className="form-check-label" for="radio1">
                                                                Yes
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio2" />
                                                            <label className="form-check-label" for="radio2">
                                                                No
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio3" />
                                                            <label className="form-check-label" for="radio3">
                                                                TBD
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label for="exampleFormControlInput12" className="form-label">Permits</label>
                                                    <div className="upload_files">
                                                        <div className="input-group gap-3">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio1" />
                                                                <label className="form-check-label" for="radio1">
                                                                    Yes
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio2" />
                                                                <label className="form-check-label" for="radio2">
                                                                    No
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio3" />
                                                                <label className="form-check-label" for="radio3">
                                                                    TBD
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <label for="exampleFormControlInput12" className="form-label mt-2">Upload Permits</label>
                                                        <input type="file" />
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label for="exampleFormControlInput12" className="form-label">Financing</label>
                                                    <div className="input-group gap-3">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio1" />
                                                            <label className="form-check-label" for="radio1">
                                                                Yes
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio2" />
                                                            <label className="form-check-label" for="radio2">
                                                                No
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio3" />
                                                            <label className="form-check-label" for="radio3">
                                                                TBD
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label for="exampleFormControlInput12" className="form-label">Plans</label>
                                                    <div className="upload_files border-0">
                                                        <div className="input-group gap-3">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio1" />
                                                                <label className="form-check-label" for="radio1">
                                                                    Yes
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio2" />
                                                                <label className="form-check-label" for="radio2">
                                                                    No
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <label for="exampleFormControlInput12" className="form-label mt-2">Upload Plans</label>
                                                        <input type="file" />
                                                        <label for="exampleFormControlInput12" className="form-label">Upload Pictures</label>
                                                        <input type="file" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="form_style">
                                                <div className="mb-3">
                                                    <label for="exampleFormControlInput1" className="form-label">Approximate Start Date</label>
                                                    <input className="form-control" type="date" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="submit_pro">
                                        <input type="submit" value="Submit Proposal" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section> */}
                {showProfile && <Profile />}
            </DefaultLayout>
        </>

    )
}
