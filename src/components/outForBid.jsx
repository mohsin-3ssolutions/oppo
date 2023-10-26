import React, { useState } from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
    

export default function OutForBid() {
    const options = [
        { value: '10%', color: "red" },
        { value: '20%', color: "red" },
        { value: '30%', color: "red" },
        { value: '40%', color: "red" },
        { value: '50%', color: "red" },
        { value: '60%', color: "red" },
        { value: '70%', color: "red" },
        { value: '80%', color: "red" },
        { value: '90%', color: "red" },
        { value: '100%', color: "red" }
    ];

    const [jobStatus, setJobstatus] = useState('10%');
    const [anchorEl, setAnchorEl] = useState(null);
    const ITEM_HEIGHT = 48;

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

    return (
        <div className="tab-pane fade bid_tab" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div className="about_projects">
                <div className="color_bg">
                    <div className="project_detail">
                        <div className="project_head">
                            <h2>Project Name <span>Start Date</span></h2>
                            <ul className="project_status">
                                <li>
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
                                        <Menu
                                            id="long-menu"
                                            MenuListProps={{
                                                'aria-labelledby': 'long-button',
                                            }}
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={() => handleClose(options[0].value)}
                                            PaperProps={{
                                                style: {
                                                    maxHeight: ITEM_HEIGHT * 4.5,
                                                    width: '20ch',
                                                },
                                            }}
                                        >
                                            {options.map((option) => (
                                                <MenuItem key={option.value} selected={option.value === '10%'} onClick={() => { handleClose(option.value) }}>
                                                    {option.value}
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
                        <p><strong>Project Description:</strong> General contractors will manage the build process of a movie theater, overseeing site preparation, excavation, electrical, plumbing, HVAC, and finishing work. They will collaborate with specialists to ensure timely, budget-friendly, and quality project completion. The theater will offer advanced audio-visual equipment, comfortable seating, and safety protocols to deliver a first-className entertainment experience.</p>
                    </div>
                </div>
                <div className="creat_btn">
                    <Link to="/find-a-project">Find a Project</Link>
                    <a href="">Post a Project</a>
                </div>
            </div>
        </div>
    )
}
