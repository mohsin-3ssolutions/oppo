import React, { useState } from 'react'
import DefaultLayout from '../reusableComponents/defaultLayout'
// import { Link } from 'react-router-dom'

export default function SubContractor() {
    const [activeStep, setActiveStep] = useState('step1');

    const toggleVisibility = (step) => {
        setActiveStep(step);
    };
    return (  
        <>
        <DefaultLayout>
        <section className="inner_banner account_banner">
            <div className="inner_plan_banner">
                <div className="container">
                    <h1>Welcome Back <span> Zach</span></h1>
                </div>
            </div>
        </section>

        <section className="gc_homebanner">
            <div className="container">
                <div className="globle_tabs">
                    <ul className="nav nav-tabs" id="gcTab" role="tablist">
                        <li role="presentation">
                            <a id="home-tab" data-bs-toggle="tab" data-bs-target="#pending" type="button" role="tab" aria-controls="home" aria-selected="true">Pending Projects</a>
                        </li>
                        <li role="presentation">
                            <a id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Active Projects</a>
                        </li>
                        <li role="presentation">
                            <a id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact_sub" type="button" role="tab" aria-controls="contact" aria-selected="false">Sub Contractor Schedule</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="gcTabContent">
                        <div className="tab-pane fade" id="pending" role="tabpanel" aria-labelledby="home-tab">
                            <div className="about_projects">
                                <div className="color_bg">
                                    <ul className="project_boxes">
                                        <li>
                                            <div className="project_detail">
                                                <div className="project_head">
                                                    <h2>Project Name <span>Oct 12, 2023</span></h2>
                                                </div>
                                                <p><strong>Project Description:</strong> General contractors will manage the build process of a movie theater, overseeing site preparation, excavation, electrical, plumbing, HVAC, and finishing work. They will collaborate with specialists to ensure timely, budget-friendly, and quality project completion. The theater will offer advanced audio-visual equipment, comfortable seating, and safety protocols to deliver a first-className entertainment experience.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="project_detail">
                                                <div className="project_head">
                                                    <h2>Project Name <span>Oct 12, 2023</span></h2>
                                                </div>
                                                <p><strong>Project Description:</strong> General contractors will manage the build process of a movie theater, overseeing site preparation, excavation, electrical, plumbing, HVAC, and finishing work. They will collaborate with specialists to ensure timely, budget-friendly, and quality project completion. The theater will offer advanced audio-visual equipment, comfortable seating, and safety protocols to deliver a first-className entertainment experience.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="project_detail">
                                                <div className="project_head">
                                                    <h2>Project Name <span>Oct 12, 2023</span></h2>
                                                </div>
                                                <p><strong>Project Description:</strong> General contractors will manage the build process of a movie theater, overseeing site preparation, excavation, electrical, plumbing, HVAC, and finishing work. They will collaborate with specialists to ensure timely, budget-friendly, and quality project completion. The theater will offer advanced audio-visual equipment, comfortable seating, and safety protocols to deliver a first-className entertainment experience.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="project_detail">
                                                <div className="project_head">
                                                    <h2>Project Name <span>Oct 12, 2023</span></h2>
                                                </div>
                                                <p><strong>Project Description:</strong> General contractors will manage the build process of a movie theater, overseeing site preparation, excavation, electrical, plumbing, HVAC, and finishing work. They will collaborate with specialists to ensure timely, budget-friendly, and quality project completion. The theater will offer advanced audio-visual equipment, comfortable seating, and safety protocols to deliver a first-className entertainment experience.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="creat_btn mb-5">
                                    <a href="">Find a Project</a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="about_projects">
                                <div className="color_bg">
                                    <ul className="project_boxes">
                                        <li>
                                            <div className="project_detail">
                                                <div className="project_head">
                                                    <h2>Active Project Name <span>Awarded on Oct 2, 2023</span></h2>
                                                </div>
                                                <p><strong>Project Description:</strong> General contractors will manage the build process of a movie theater, overseeing site preparation, excavation, electrical, plumbing, HVAC, and finishing work. They will collaborate with specialists to ensure timely, budget-friendly, and quality project completion. The theater will offer advanced audio-visual equipment, comfortable seating, and safety protocols to deliver a first-className entertainment experience.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="project_detail">
                                                <div className="project_head">
                                                    <h2>Active Project Name <span>Awarded on Oct 2, 2023</span></h2>
                                                </div>
                                                <p><strong>Project Description:</strong> General contractors will manage the build process of a movie theater, overseeing site preparation, excavation, electrical, plumbing, HVAC, and finishing work. They will collaborate with specialists to ensure timely, budget-friendly, and quality project completion. The theater will offer advanced audio-visual equipment, comfortable seating, and safety protocols to deliver a first-className entertainment experience.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="project_detail">
                                                <div className="project_head">
                                                    <h2>Active Project Name <span>Awarded on Oct 2, 2023</span></h2>
                                                </div>
                                                <p><strong>Project Description:</strong> General contractors will manage the build process of a movie theater, overseeing site preparation, excavation, electrical, plumbing, HVAC, and finishing work. They will collaborate with specialists to ensure timely, budget-friendly, and quality project completion. The theater will offer advanced audio-visual equipment, comfortable seating, and safety protocols to deliver a first-className entertainment experience.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="project_detail">
                                                <div className="project_head">
                                                    <h2>Active Project Name <span>Awarded on Oct 2, 2023</span></h2>
                                                </div>
                                                <p><strong>Project Description:</strong> General contractors will manage the build process of a movie theater, overseeing site preparation, excavation, electrical, plumbing, HVAC, and finishing work. They will collaborate with specialists to ensure timely, budget-friendly, and quality project completion. The theater will offer advanced audio-visual equipment, comfortable seating, and safety protocols to deliver a first-className entertainment experience.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="creat_btn mb-5">
                                    <a href="">Find a Project</a>
                                </div>
                            </div>
                        
                        </div>
                        <div className="tab-pane fade" id="contact_sub" role="tabpanel" aria-labelledby="contact-tab">...</div>
                    </div>
                </div>
            </div>
        </section>
        <section className="theater_banner">
            <div className="container">
                <div className="new_project" style="display: non;">
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
                                            <hr/>
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput13" className="form-label">Who have you worked with in the past? (Banks, Lenders, etc.)</label>
                                            <textarea name="" id="" cols="30" rows="5" className="form-control"></textarea>
                                            <hr/>
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
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio2"  />
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
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio2"  />
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
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio2"  />
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
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio2"  />
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
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio2"  />
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
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio2"  />
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
                            <div className="submit_btn">
                                <input type="submit" value="Submit Proposal" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <section className="profile_banner theater_banner">
            <div className="container">
                <div className="new_project project_name_banner">
                    <div className="color_bg">
                        <h2>Profile Information</h2>
                        <form action="">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="form_style ps-0">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Project Name</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="XYZ Contractors" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput12" className="form-label">Years In Business</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput12" placeholder="25" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput11" className="form-label">EIN</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput11" placeholder="34-98676" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput13" className="form-label">Licensed Work States</label>
                                            <select name="" className="form-control" id="">
                                                <option value=""></option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput13" className="form-label">Contractor License #</label>
                                            <input type="text" className="form-control" placeholder="12983546142" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput13" className="form-label">Work Capacity (# concurrent jobs)</label>
                                            <input type="text" className="form-control" placeholder="5" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput13" className="form-label">Number of Employees</label>
                                            <input type="text" className="form-control" placeholder="22" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput13" className="form-label">W9 Form (PDF)</label>
                                            <div className="upload_files">
                                                <input type="file" />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput13" className="form-label">Worker’s Comp Form (PDF)</label>
                                            <div className="upload_files">
                                                <input type="file" />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput13" className="form-label">Profile Picture</label>
                                            <div className="upload_files">
                                                <input type="file" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="form_style">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput13" className="form-label">Description/Biography of Company & Services</label>
                                            <textarea name="" id="" cols="30" rows="5" className="form-control"></textarea>
                                            <hr/>
                                        </div>
                                        <div className="mb-3">
                                            <label  for="flexCheckDefault11" className="form-label">Select Services You Provide</label>
                                            <div className="upload_files">
                                                <ul>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                            <label className="form-check-label" for="flexCheckDefault">
                                                                Commercial
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                                            <label className="form-check-label" for="flexCheckDefault1">
                                                                Residential
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
                                                            <label className="form-check-label" for="flexCheckDefault2">
                                                                Federal
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                                                            <label className="form-check-label" for="flexCheckDefault3">
                                                                Road Construction & Industrial
                                                            </label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput13" className="form-label">Identify Scope</label>
                                            <select name="" className="form-control" id="">
                                                <option value=""></option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput13" className="form-label">Past Contractors Worked With</label>
                                            <textarea name="" id="" cols="30" rows="5" className="form-control"></textarea>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                </div>
                            </div>
                            
                        </form>
                    </div>
                    <div className="creat_btn">
                        <a href="">Save</a>
                    </div>
                </div>
            </div>
        </section>

        </DefaultLayout>
        </>

    )
}
