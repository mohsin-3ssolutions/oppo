import React from 'react'
import DefaultLayout from '../reusableComponents/defaultLayout'

export default function Submitproposal() {
    return (
        // No current openings, but please check back again! 
        <DefaultLayout>
            <div>
                <section class="inner_banner account_banner">
                    <div class="inner_plan_banner">
                        <div class="container">
                            <h1>Sub-Contractor Submit Proposal</h1>
                        </div>
                    </div>
                </section>
                <div className="new_project project_name_banner py-5">
                    <div className='container'>
                        <div className="color_bg mb-0">
                            <h2>Profile Information</h2>
                            <form action="">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="form_style ps-0">
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput12" className="form-label">Proposal Document (PDF format only) <span className='color_red'>*required</span></label>
                                                <div class="upload_files"><input type="file" name="w9Form"/></div>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput12" className="form-label">Additional Proposal Document</label>
                                                <div class="upload_files"><input type="file" name="w9Form"/></div>
                                            </div>
                                            <div className='mb-3 text-center'>
                                                <label for="exampleFormControlInput12" className="form-label">Upload Additional Document</label>
                                                <div className='upload_file_btn'>
                                                    <img src="assets/images/pluscircle.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="form_style ps-0">
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput12" className="form-label">Comments for Project Ownert</label>
                                                <textarea name="" className='form-control' id="" cols="30" rows="10"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="creat_btn text-center">
                                    <a href="">Submit Proposal</a>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}
