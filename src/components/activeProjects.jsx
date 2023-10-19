import React, { useState } from 'react'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'// import Logo from "../assets/images/logo.png"

export default function ActiveProjects() {
  
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
    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
    <div className="about_projects" style={{ display: "none" }}>
        <div className="color_bg">
            <div className="project_detail">
                <div className="project_head">
                    <h2>Project Name <span>Start Date</span></h2>
                    <ul className="project_status">
                        <li>
                            <p className="view_count"><img src="assets/images/view.png" alt="" /><span>100</span></p>
                        </li>
                    </ul>
                </div>
                <p><strong>Project Description:</strong> General contractors will manage the build process of a movie theater, overseeing site preparation, excavation, electrical, plumbing, HVAC, and finishing work. They will collaborate with specialists to ensure timely, budget-friendly, and quality project completion. The theater will offer advanced audio-visual equipment, comfortable seating, and safety protocols to deliver a first-className entertainment experience.</p>
            </div>
        </div>
        <div className="creat_btn">
            <a href="">Find a Project</a>
            <a href="">Post a Project</a>
        </div>
    </div>
    <div className="new_project" style={{ display: "none" }}>
        <div className="color_bg">
            <h2>Start a New Project</h2>
            <form action="">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="form_style ps-0">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Project Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="XYZ Contractors" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput12" className="form-label">Email</label>
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
                                    <label for="exampleFormControlInput12" className="form-label">Upload Permits</label>
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
                                    <label for="exampleFormControlInput12" className="form-label">Upload Plans</label>
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
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker />
                                </LocalizationProvider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="submit_btn">
                    <input type="submit" value="Create Project" />
                </div>
            </form>
        </div>
    </div>
    <div className="new_project project_name_banner">
        <div className="color_bg">
            <h2>Start a New Project</h2>
            <form action="">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="form_style ps-0">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Project Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="XYZ Contractors" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput12" className="form-label">Email</label>
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
                            <div className="mb-3">
                                <ul className="project_status">
                                    <li>
                                        <div className="dropdown">
                                            <button className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                Job Status: <span>70%</span>
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
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
                                    <label for="exampleFormControlInput12" className="form-label">Upload Permits</label>
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
                                    <label for="exampleFormControlInput12" className="form-label">Upload Plans</label>
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
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker value={startDate} onChange={handleStartDateChange} />
                                </LocalizationProvider>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Approximate Completion Date</label>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker value={completionDate} onChange={handleCompletionDateChange} />
                                </LocalizationProvider>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>
        <div className="creat_btn">
            <a href="">Update Project</a>
        </div>
    </div>
</div>
  )
}
