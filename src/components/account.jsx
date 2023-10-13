import React, { useState } from 'react';
import DefaultLayout from './reusableComponents/defaultLayout';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'// import Logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom';
const options = [
    '10%',
    '20%',
    '30%',
    '40%',
    '50%',
    '60%',
    '70%',
    '80%',
    '90%',
    '100%'
];

const ITEM_HEIGHT = 48;
function Account() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [jobStatus, setJobstatus] = useState('10%');

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
        if (e) {
            // If an event object is provided, set the selected value
            console.log(e);
            setJobstatus(e);
        }
        setAnchorEl(null);
    };

    const [startDate, setStartDate] = useState(null);
    const [completionDate, setCompletionDate] = useState(null);

    const handleStartDateChange = (date) => {
        console.log(date)
        setStartDate(date);
    };

    const handleCompletionDateChange = (date) => {
        console.log(date)
        setCompletionDate(date);
    };
    return (
        <>
            <DefaultLayout>
                <section class="inner_banner account_banner">
                    <div class="inner_plan_banner">
                        <div class="container">
                            <h1>Welcome Back <span> Zach</span></h1>
                        </div>
                    </div>
                </section>
                <section class="gc_homebanner">
                    <div class="container">
                        <div class="globle_tabs">
                            <ul class="nav nav-tabs" id="gcTab" role="tablist">
                                <li role="presentation">
                                    <a id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Out for Bid</a>
                                </li>
                                <li role="presentation">
                                    <a id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Active Projects</a>
                                </li>
                                <li role="presentation">
                                    <a id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">General Contractor Schedule</a>
                                </li>
                                <li role="presentation">
                                    <a id="contact-tab" data-bs-toggle="tab" data-bs-target="#mycontact" type="button" role="tab" aria-controls="contact" aria-selected="false">My Contacts</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="gcTabContent">
                                <div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="about_projects">
                                        <div class="color_bg">
                                            <div class="project_detail">
                                                <div class="project_head">
                                                    <h2>Project Name <span>Start Date</span></h2>
                                                    <ul class="project_status">
                                                        <li>
                                                            {/* <div class="dropdown">
                                                                <button class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    Job Status: <span>70%</span>
                                                                </button>
                                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                                </ul>
                                                            </div> */}
                                                            <div>
                                                                <p
                                                                    aria-label="more"
                                                                    id="long-button"
                                                                    aria-controls={open ? 'long-menu' : undefined}
                                                                    aria-expanded={open ? 'true' : undefined}
                                                                    aria-haspopup="true"
                                                                    onClick={handleClick}
                                                                    className='cursor-pointer'
                                                                >
                                                                    Job Status: <span>{jobStatus}</span>
                                                                </p>
                                                                {/* <button  onClick={handleClick} class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    Job Status: <span>70%</span>
                                                                </button> */}
                                                                <Menu
                                                                    id="long-menu"
                                                                    MenuListProps={{
                                                                        'aria-labelledby': 'long-button',
                                                                    }}
                                                                    anchorEl={anchorEl}
                                                                    open={open}
                                                                    onClose={() => handleClose(options[0])}
                                                                    PaperProps={{
                                                                        style: {
                                                                            maxHeight: ITEM_HEIGHT * 4.5,
                                                                            width: '20ch',
                                                                        },
                                                                    }}
                                                                >
                                                                    {options.map((option) => (
                                                                        <MenuItem key={option} selected={option === '10%'} onClick={() => { handleClose(option) }}>
                                                                            {option}
                                                                        </MenuItem>
                                                                    ))}
                                                                </Menu>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <p className="view_count mt-2"><img src="assets/images/view.png" alt="" /><span>100</span></p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <p><strong>Project Description:</strong> General contractors will manage the build process of a movie theater, overseeing site preparation, excavation, electrical, plumbing, HVAC, and finishing work. They will collaborate with specialists to ensure timely, budget-friendly, and quality project completion. The theater will offer advanced audio-visual equipment, comfortable seating, and safety protocols to deliver a first-class entertainment experience.</p>
                                            </div>
                                        </div>
                                        <div class="creat_btn">
                                            <Link to="/find-a-project">Find a Project</Link>
                                            <a href="">Post a Project</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div class="about_projects" style={{ display: "none" }}>
                                        <div class="color_bg">
                                            <div class="project_detail">
                                                <div class="project_head">
                                                    <h2>Project Name <span>Start Date</span></h2>
                                                    <ul class="project_status">
                                                        <li>
                                                            <p class="view_count"><img src="assets/images/view.png" alt="" /><span>100</span></p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <p><strong>Project Description:</strong> General contractors will manage the build process of a movie theater, overseeing site preparation, excavation, electrical, plumbing, HVAC, and finishing work. They will collaborate with specialists to ensure timely, budget-friendly, and quality project completion. The theater will offer advanced audio-visual equipment, comfortable seating, and safety protocols to deliver a first-class entertainment experience.</p>
                                            </div>
                                        </div>
                                        <div class="creat_btn">
                                            <a href="">Find a Project</a>
                                            <a href="">Post a Project</a>
                                        </div>
                                    </div>
                                    <div class="new_project" style={{ display: "none" }}>
                                        <div class="color_bg">
                                            <h2>Start a New Project</h2>
                                            <form action="">
                                                <div class="row">
                                                    <div class="col-lg-4 col-md-6">
                                                        <div class="form_style ps-0">
                                                            <div class="mb-3">
                                                                <label for="exampleFormControlInput1" class="form-label">Project Name</label>
                                                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="XYZ Contractors" />
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="exampleFormControlInput12" class="form-label">Email</label>
                                                                <input type="Email" class="form-control" id="exampleFormControlInput12" placeholder="peterehat+oppotest@gmail.com" />
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="exampleFormControlInput11" class="form-label">Project Rep</label>
                                                                <input type="text" class="form-control" id="exampleFormControlInput11" placeholder="Peter Ehat" />
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="exampleFormControlInput13" class="form-label">Phone Number</label>
                                                                <input type="text" class="form-control" id="exampleFormControlInput13" placeholder="801-976-2351" />
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="exampleFormControlInput13" class="form-label">Project Description</label>
                                                                <textarea name="" id="" cols="30" rows="5" class="form-control"></textarea>
                                                                <hr />
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="exampleFormControlInput13" class="form-label">Who have you worked with in the past? (Banks, Lenders, etc.)</label>
                                                                <textarea name="" id="" cols="30" rows="5" class="form-control"></textarea>
                                                                <hr />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-6">
                                                        <div class="form_style">
                                                            <div class="mb-3">
                                                                <label for="exampleFormControlInput1" class="form-label">Designer</label>
                                                                <div class="input-group gap-3">
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio1" />
                                                                        <label class="form-check-label" for="radio1">
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio2" />
                                                                        <label class="form-check-label" for="radio2">
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio3" />
                                                                        <label class="form-check-label" for="radio3">
                                                                            TBD
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="exampleFormControlInput12" class="form-label">Engineer</label>
                                                                <div class="input-group gap-3">
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio1" />
                                                                        <label class="form-check-label" for="radio1">
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio2" />
                                                                        <label class="form-check-label" for="radio2">
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio3" />
                                                                        <label class="form-check-label" for="radio3">
                                                                            TBD
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="exampleFormControlInput12" class="form-label">Architect</label>
                                                                <div class="input-group gap-3">
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio1" />
                                                                        <label class="form-check-label" for="radio1">
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio2" />
                                                                        <label class="form-check-label" for="radio2">
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio3" />
                                                                        <label class="form-check-label" for="radio3">
                                                                            TBD
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="exampleFormControlInput12" class="form-label">Permits</label>
                                                                <div class="upload_files">
                                                                    <div class="input-group gap-3">
                                                                        <div class="form-check">
                                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio1" />
                                                                            <label class="form-check-label" for="radio1">
                                                                                Yes
                                                                            </label>
                                                                        </div>
                                                                        <div class="form-check">
                                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio2" />
                                                                            <label class="form-check-label" for="radio2">
                                                                                No
                                                                            </label>
                                                                        </div>
                                                                        <div class="form-check">
                                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio3" />
                                                                            <label class="form-check-label" for="radio3">
                                                                                TBD
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <label for="exampleFormControlInput12" class="form-label">Upload Permits</label>
                                                                    <input type="file" />
                                                                </div>
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="exampleFormControlInput12" class="form-label">Financing</label>
                                                                <div class="input-group gap-3">
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio1" />
                                                                        <label class="form-check-label" for="radio1">
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio2" />
                                                                        <label class="form-check-label" for="radio2">
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio3" />
                                                                        <label class="form-check-label" for="radio3">
                                                                            TBD
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="exampleFormControlInput12" class="form-label">Plans</label>
                                                                <div class="upload_files border-0">
                                                                    <div class="input-group gap-3">
                                                                        <div class="form-check">
                                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio1" />
                                                                            <label class="form-check-label" for="radio1">
                                                                                Yes
                                                                            </label>
                                                                        </div>
                                                                        <div class="form-check">
                                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio2" />
                                                                            <label class="form-check-label" for="radio2">
                                                                                No
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <label for="exampleFormControlInput12" class="form-label">Upload Plans</label>
                                                                    <input type="file" />
                                                                    <label for="exampleFormControlInput12" class="form-label">Upload Pictures</label>
                                                                    <input type="file" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-6">
                                                        <div class="form_style">
                                                            <div class="mb-3">
                                                                <label for="exampleFormControlInput1" class="form-label">Approximate Start Date</label>
                                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                    <DatePicker />
                                                                </LocalizationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="submit_btn">
                                                    <input type="submit" value="Create Project" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="new_project project_name_banner">
                                        <div class="color_bg">
                                            <h2>Start a New Project</h2>
                                            <form action="">
                                                <div class="row">
                                                    <div class="col-lg-4 col-md-6">
                                                        <div class="form_style ps-0">
                                                            <div class="mb-3">
                                                                <label for="exampleFormControlInput1" class="form-label">Project Name</label>
                                                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="XYZ Contractors" />
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="exampleFormControlInput12" class="form-label">Email</label>
                                                                <input type="Email" class="form-control" id="exampleFormControlInput12" placeholder="peterehat+oppotest@gmail.com" />
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="exampleFormControlInput11" class="form-label">Project Rep</label>
                                                                <input type="text" class="form-control" id="exampleFormControlInput11" placeholder="Peter Ehat" />
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="exampleFormControlInput13" class="form-label">Phone Number</label>
                                                                <input type="text" class="form-control" id="exampleFormControlInput13" placeholder="801-976-2351" />
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="exampleFormControlInput13" class="form-label">Project Description</label>
                                                                <textarea name="" id="" cols="30" rows="5" class="form-control"></textarea>
                                                                <hr />
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="exampleFormControlInput13" class="form-label">Who have you worked with in the past? (Banks, Lenders, etc.)</label>
                                                                <textarea name="" id="" cols="30" rows="5" class="form-control"></textarea>
                                                                <hr />
                                                            </div>
                                                            <div class="mb-3">
                                                                <ul class="project_status">
                                                                    <li>
                                                                        <div class="dropdown">
                                                                            <button class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                Job Status: <span>70%</span>
                                                                            </button>
                                                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-6">
                                                        <div class="form_style">
                                                            <div class="mb-3">
                                                                <label for="exampleFormControlInput1" class="form-label">Designer</label>
                                                                <div class="input-group gap-3">
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio1" />
                                                                        <label class="form-check-label" for="radio1">
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio2" />
                                                                        <label class="form-check-label" for="radio2">
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio3" />
                                                                        <label class="form-check-label" for="radio3">
                                                                            TBD
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="exampleFormControlInput12" class="form-label">Engineer</label>
                                                                <div class="input-group gap-3">
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio1" />
                                                                        <label class="form-check-label" for="radio1">
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio2" />
                                                                        <label class="form-check-label" for="radio2">
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio3" />
                                                                        <label class="form-check-label" for="radio3">
                                                                            TBD
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="exampleFormControlInput12" class="form-label">Architect</label>
                                                                <div class="input-group gap-3">
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio1" />
                                                                        <label class="form-check-label" for="radio1">
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio2" />
                                                                        <label class="form-check-label" for="radio2">
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio3" />
                                                                        <label class="form-check-label" for="radio3">
                                                                            TBD
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="exampleFormControlInput12" class="form-label">Permits</label>
                                                                <div class="upload_files">
                                                                    <div class="input-group gap-3">
                                                                        <div class="form-check">
                                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio1" />
                                                                            <label class="form-check-label" for="radio1">
                                                                                Yes
                                                                            </label>
                                                                        </div>
                                                                        <div class="form-check">
                                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio2" />
                                                                            <label class="form-check-label" for="radio2">
                                                                                No
                                                                            </label>
                                                                        </div>
                                                                        <div class="form-check">
                                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio3" />
                                                                            <label class="form-check-label" for="radio3">
                                                                                TBD
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <label for="exampleFormControlInput12" class="form-label">Upload Permits</label>
                                                                    <input type="file" />
                                                                </div>
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="exampleFormControlInput12" class="form-label">Financing</label>
                                                                <div class="input-group gap-3">
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio1" />
                                                                        <label class="form-check-label" for="radio1">
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio2" />
                                                                        <label class="form-check-label" for="radio2">
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio3" />
                                                                        <label class="form-check-label" for="radio3">
                                                                            TBD
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="exampleFormControlInput12" class="form-label">Plans</label>
                                                                <div class="upload_files border-0">
                                                                    <div class="input-group gap-3">
                                                                        <div class="form-check">
                                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio1" />
                                                                            <label class="form-check-label" for="radio1">
                                                                                Yes
                                                                            </label>
                                                                        </div>
                                                                        <div class="form-check">
                                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio2" />
                                                                            <label class="form-check-label" for="radio2">
                                                                                No
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <label for="exampleFormControlInput12" class="form-label">Upload Plans</label>
                                                                    <input type="file" />
                                                                    <label for="exampleFormControlInput12" class="form-label">Upload Pictures</label>
                                                                    <input type="file" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-6">
                                                        <div class="form_style">
                                                            <div class="mb-3">
                                                                <label for="exampleFormControlInput1" class="form-label">Approximate Start Date</label>
                                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                    <DatePicker value={startDate} onChange={handleStartDateChange} />
                                                                </LocalizationProvider>
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="exampleFormControlInput1" class="form-label">Approximate Completion Date</label>
                                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                    <DatePicker value={completionDate} onChange={handleCompletionDateChange} />
                                                                </LocalizationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </form>
                                        </div>
                                        <div class="creat_btn">
                                            <a href="">Update Project</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                                <div class="tab-pane fade" id="mycontact" role="tabpanel" aria-labelledby="contact-tab">
                                    <div class="about_projects">
                                        <div class="color_bg">
                                            <div class="contact_list">
                                                <div class="search_form">
                                                    <form action="">
                                                        <input type="search" placeholder="Search" />
                                                        <button><img src="assets/images/search.png" alt="" /></button>
                                                    </form>
                                                </div>
                                                <div class="list_table">
                                                    <div class="table-responsive">
                                                        <table class="table">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Name</th>
                                                                    <th scope="col">Business Name</th>
                                                                    <th scope="col">Phone Number</th>
                                                                    <th scope="col">Email</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Mike Johnson</td>
                                                                    <td>Mike’s Contractors</td>
                                                                    <td>801-222-2323</td>
                                                                    <td>@mike@johnsoncontractors.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Trevor Smith</td>
                                                                    <td>Trevor Construction</td>
                                                                    <td>777-282-2836</td>
                                                                    <td>trev@trevorconstruction.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Lance Williams</td>
                                                                    <td>Lance Tiling</td>
                                                                    <td>988-222-3764</td>
                                                                    <td>lance@lancetitling.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Jon Seenah</td>
                                                                    <td>Seenah Roofing</td>
                                                                    <td>664-122-1222</td>
                                                                    <td>Jon@seenahroofing.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Ralph Loodah</td>
                                                                    <td>Ralph Plumbing</td>
                                                                    <td>111-222-3333</td>
                                                                    <td>ralphie@imyourplumber.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Bob Jones</td>
                                                                    <td>Jones Sewer</td>
                                                                    <td>211-667-8898</td>
                                                                    <td>bob@isuedtoddforagate.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Davey Skeeter</td>
                                                                    <td>Davey Electrical</td>
                                                                    <td>555-454-3443</td>
                                                                    <td>davey@getshockedelectrical.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Spencer Williams</td>
                                                                    <td>Spencer Drywall</td>
                                                                    <td>233-444-3333</td>
                                                                    <td>spencer@drywallexperts.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Garrett Bogham</td>
                                                                    <td>Bogham Paint</td>
                                                                    <td>777-282-2836</td>
                                                                    <td>bogham@boghampaint.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Lisa Warren</td>
                                                                    <td>Lisa’s Interirors</td>
                                                                    <td>988-222-3764</td>
                                                                    <td>Lisa@imakestuffcuteinfside.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Escobar Pablito</td>
                                                                    <td>Pablito Contractors</td>
                                                                    <td>664-122-1222</td>
                                                                    <td>pablito@contractorsforhirepab.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Sandy Coleman</td>
                                                                    <td>Sandy Construction</td>
                                                                    <td>555-454-3443</td>
                                                                    <td>sandy@sandycolemanconst.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Roger Handgrenade</td>
                                                                    <td>Painting Handgrenades</td>
                                                                    <td>801-222-2323</td>
                                                                    <td>handy@handgrenadepaint.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Wilford Wilcox</td>
                                                                    <td>Wilford Tiling</td>
                                                                    <td>555-454-3443</td>
                                                                    <td>wilford@tilingexpertsgonenuts.com</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="profile_banner">
                    <div class="container">
                        <div class="new_project project_name_banner">
                            <div class="color_bg">
                                <h2>Profile Information</h2>
                                <form action="">
                                    <div class="row">
                                        <div class="col-lg-4 col-md-6">
                                            <div class="form_style ps-0">
                                                <div class="mb-3">
                                                    <label for="exampleFormControlInput1" class="form-label">Project Name</label>
                                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="XYZ Contractors" />
                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleFormControlInput12" class="form-label">Years In Business</label>
                                                    <input type="text" class="form-control" id="exampleFormControlInput12" placeholder="25" />
                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleFormControlInput11" class="form-label">EIN</label>
                                                    <input type="text" class="form-control" id="exampleFormControlInput11" placeholder="34-98676" />
                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleFormControlInput13" class="form-label">Licensed Work States</label>
                                                    <select name="" class="form-control" id="">
                                                        <option value=""></option>
                                                    </select>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleFormControlInput13" class="form-label">Contractor License #</label>
                                                    <input type="text" class="form-control" placeholder="12983546142" />
                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleFormControlInput13" class="form-label">Work Capacity (# concurrent jobs)</label>
                                                    <input type="text" class="form-control" placeholder="5" />
                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleFormControlInput13" class="form-label">Number of Employees</label>
                                                    <input type="text" class="form-control" placeholder="22" />
                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleFormControlInput13" class="form-label">W9 Form (PDF)</label>
                                                    <div class="upload_files">
                                                        <input type="file" />
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleFormControlInput13" class="form-label">Worker’s Comp Form (PDF)</label>
                                                    <div class="upload_files">
                                                        <input type="file" />
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleFormControlInput13" class="form-label">Profile Picture</label>
                                                    <div class="upload_files">
                                                        <input type="file" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="form_style">
                                                <div class="mb-3">
                                                    <label for="exampleFormControlInput13" class="form-label">Description/Biography of Company & Services</label>
                                                    <textarea name="" id="" cols="30" rows="5" class="form-control"></textarea>
                                                    <hr />
                                                </div>
                                                <div class="mb-3">
                                                    <label for="flexCheckDefault11" class="form-label">Select Services You Provide</label>
                                                    <div class="upload_files">
                                                        <ul>
                                                            <li>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                                    <label class="form-check-label" for="flexCheckDefault">
                                                                        Commercial
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                                                    <label class="form-check-label" for="flexCheckDefault1">
                                                                        Residential
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                                                                    <label class="form-check-label" for="flexCheckDefault2">
                                                                        Federal
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                                                                    <label class="form-check-label" for="flexCheckDefault3">
                                                                        Road Construction & Industrial
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleFormControlInput13" class="form-label">Identify Scope</label>
                                                    <select name="" class="form-control" id="">
                                                        <option value=""></option>
                                                    </select>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleFormControlInput13" class="form-label">Past Contractors Worked With</label>
                                                    <textarea name="" id="" cols="30" rows="5" class="form-control"></textarea>
                                                    <hr />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                        </div>
                                    </div>

                                </form>
                            </div>
                            <div class="creat_btn">
                                <a href="">Save</a>
                            </div>
                        </div>
                    </div>
                </section>
            </DefaultLayout>

        </>
    );
}

export default Account;