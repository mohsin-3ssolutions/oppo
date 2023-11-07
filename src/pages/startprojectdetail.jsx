import React from 'react'
import DefaultLayout from '../reusableComponents/defaultLayout'

export default function Startprojectdetail() {
    return (
        <DefaultLayout>
            <div>
                <section class="inner_banner account_banner">
                    <div class="inner_plan_banner">
                        <div class="container">
                            <h1>Project Detail</h1>
                        </div>
                    </div>
                </section>
                <div className="new_project project_name_banner my-5 pt-3">
                    <div className='container'>
                        <div className="color_bg mb-0">
                            <h2>Start a New Project</h2>
                            <form action="">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="form_style ps-0">
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput1" className="form-label">Project Name</label>
                                                <p className='text'>abc</p>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput12" className="form-label">Email</label>
                                                <p className='text'>peterehat+oppotest@gmail.com</p>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput11" className="form-label">Project Rep</label>
                                                <p className='text'>Peter Ehat</p>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput13" className="form-label">Phone Number</label>
                                                <p className='text'>801-976-2351</p>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput13" className="form-label">Project Description</label>
                                                <p className='text'>Project Description</p>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput13" className="form-label">Who have you worked with in the past? (Banks, Lenders, etc.)</label>
                                                <p className='text'>Project Description</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="form_style">
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput1" className="form-label">Designer</label>
                                                <p className='text'>Yes</p>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput12" className="form-label">Engineer</label>
                                                <p className='text'>Yes</p>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput12" className="form-label">Architect</label>
                                                <p className='text'>Yes</p>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput12" className="form-label">Permits</label>
                                                <p className='text'>
                                                    <span><img src="assets/images/file.png" alt="" /> MyProjectPermit.pdf</span>
                                                </p>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput12" className="form-label">Financing</label>
                                                <p className='text'>
                                                    yes
                                                </p>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput12" className="form-label">Plans</label>
                                                <p className='text'>
                                                    yes
                                                </p>
                                                <div className="upload_files border-0">
                                                    <label for="exampleFormControlInput12" className="form-label">Upload Plans</label>
                                                    <p className='text'>
                                                        <span><img src="assets/images/file.png" alt="" /> MyProjectPlans.pdf</span>
                                                    </p>
                                                    <label for="exampleFormControlInput12" className="form-label">Upload Pictures</label>
                                                    <div className='text'>
                                                        <ul className='picture_list'>
                                                            <li>
                                                                <div className='pro_img'>
                                                                    <img src="assets/images/pic1.png" alt="" />
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className='pro_img'>
                                                                    <img src="assets/images/pic2.png" alt="" />
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className='pro_img'>
                                                                    <img src="assets/images/pic1.png" alt="" />
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className='pro_img'>
                                                                    <img src="assets/images/pic2.png" alt="" />
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <span className='del_btn'><img src="assets/images/del.png" alt="" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="form_style">
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput1" className="form-label">Approximate Start Date</label>
                                                <p className='text'>12-12-023</p>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput1" className="form-label">Approximate Completion Date</label>
                                                <p className='text'>12-12-023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="creat_btn text-center">
                                    <a href="">Create Project</a>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}
