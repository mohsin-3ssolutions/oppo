import React from 'react'
import DefaultLayout from '../reusableComponents/defaultLayout'

export default function SCsubmitProposaldetail() {
    return (
        <DefaultLayout>
            <div>
                <section class="inner_banner account_banner">
                    <div class="inner_plan_banner">
                        <div class="container">
                            <h1>Sub-Contractor SUBProposal Project Detail</h1>
                        </div>
                    </div>
                </section>
                <div className="new_project project_name_banner py-5">
                    <div className='container'>
                        <div className="color_bg mb-0">
                            <h2>Movie Theater - Salt Lake City, Utah</h2>
                            <form action="">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="form_style ps-0">
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput1" className="form-label">Project Name</label>
                                                <p className='text'>abc</p>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput12" className="form-label">Project Rep Email</label>
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
                                                <p className='text'>General contractors will manage the build process of a movie theater, overseeing site preparation, excavation, electrical, plumbing, HVAC, and finishing work. They will collaborate with specialists to ensure timely, budget-friendly, and quality project completion. The theater will offer advanced audio-visual equipment, comfortable seating, and safety protocols to deliver a first-class entertainment experience.</p>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput13" className="form-label">Who have you worked with in the past? (Banks, Lenders, etc.)</label>
                                                <p className='text'>This is the part of the project where you can see all the information about what the contractor has done already on the project to ensure that each person bidding on the project has a good idea of what is happening and what has already happened on the project.</p>
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
                                                <p className='text'>Yes</p>
                                                <label for="exampleFormControlInput12" className="form-label">Upload Permits</label>
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
                                {/* <div className="creat_btn text-center">
                                    <a href="">Create Project</a>
                                </div> */}
                            </form>
                            <div className='submit_banner mt-5'>
                                <h3 className='sub_head'>Submitted Proposals</h3>
                                <ul className='proposal_list'>
                                    <li>
                                        <div className='propocal_card dropdown'>
                                            <div className='color_bg'>
                                                <div class="project_head">
                                                    <h2>Wasatch Sub Contractors</h2> <span>Submitted Oct 12, 2023</span>
                                                    <div className='row'>
                                                        <div className='col-lg-6'>
                                                            <div className='proposal_content'>
                                                                <p><strong>Comments: </strong> General contractors will manage the build process of a movie theater, overseeing site preparation, excavation, electrical, plumbing, HVAC, and finishing work. They will collaborate with specialists to ensure timely, budget-friendly, </p>
                                                            </div>
                                                            <div className='proposal_content'>
                                                                <p className='mb-1 dropdown-toggle' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><strong>Latest Communication </strong></p>
                                                                <p>Wasatch Sub Contractors: I think we’ve got the latest things done with what you’re looking for. You: Thanks, guys. This is going to be really great. Wasatch Sub Contractors: That’s great. Yes, we can get back to you with that information as soon as possible.</p>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-6'>
                                                            <div className='proposal_content proposal_detail'>
                                                                <p className='mb-2'><strong>Proposal Documents</strong></p>
                                                                <ul className='proposal_files'>
                                                                    <li>
                                                                        <a className='text'>
                                                                            <span><img src="assets/images/file.png" alt="" /> MyProjectPermit.pdf</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className='text'>
                                                                            <span><img src="assets/images/file.png" alt="" /> MyProjectPermit.pdf</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className='text'>
                                                                            <span><img src="assets/images/file.png" alt="" /> MyProjectPermit.pdf</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className='text'>
                                                                            <span><img src="assets/images/file.png" alt="" /> MyProjectPermit.pdf</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                                <div className='award_review'>
                                                                    <div className='reviews w-50'>
                                                                        <p className='mb-1'><strong>Proposal Rating</strong></p>
                                                                        <ul className='reviews_list'>
                                                                            <li>
                                                                                <span><i className='fa fa-star-o'>1</i></span>
                                                                            </li>
                                                                            <li>
                                                                                <span><i className='fa fa-star-o'>2</i></span>
                                                                            </li>
                                                                            <li>
                                                                                <span><i className='fa fa-star-o'>3</i></span>
                                                                            </li>
                                                                            <li>
                                                                                <span><i className='fa fa-star-o'>4</i></span>
                                                                            </li>
                                                                        </ul>
                                                                        <span className='fa fa-camera-retro fa-lg' >4.5</span>
                                                                    </div>
                                                                    <div className='notes w-50'>
                                                                        <div className='proposal_content'>
                                                                            <p className='mb-1 dropdown-toggle' id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false"><strong>Notes </strong></p>
                                                                            <p className=''>Wasatch Sub Contractors: I think we’ve got the latest things done with what you’re looking for. You: Thanks, guys. This is going to be really great. Wasatch Sub Contractors: That’s great. Yes, we can get back to you with that information as soon as possible.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='create_btn'>
                                                                    <a href="" className='globle_btn'>Award Project</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='comunication_content' aria-labelledby="dropdownMenuButton1">
                                                <div className='proposal_content'>
                                                    <p><strong></strong></p>
                                                    <p className='comunication_pop_text'>Wasatch Sub Contractors: I think we’ve got the latest things done with what you’re looking for. You: Thanks, guys. This is going to be really great. Wasatch Sub Contractors: That’s great. Yes, we can get back to you with that information as soon as possible.</p>
                                                    <ul className='breadcrumbs'>
                                                        <li>
                                                            <a href="">Description</a>
                                                        </li>
                                                        <li>
                                                            <a href="">Biography of Company & Services</a>
                                                        </li>
                                                    </ul>
                                                    <div className='form_input'>
                                                        <input type="text" name="" id="" />
                                                        <button><img src="assets/images/cirlce.png" alt="" /></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='comunication_content dropdown-menu' aria-labelledby="dropdownMenuButton2">
                                                <div className='proposal_content'>
                                                    <p><strong></strong></p>
                                                    <p className='comunication_pop_text'>Wasatch Sub Contractors: I think we’ve got the latest things done with what you’re looking for. You: Thanks, guys. This is going to be really great. Wasatch Sub Contractors: That’s great. Yes, we can get back to you with that information as soon as possible.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='propocal_card dropdown'>
                                            <div className='color_bg'>
                                                <div class="project_head">
                                                    <h2>Wasatch Sub Contractors</h2> <span>Submitted Oct 12, 2023</span>
                                                    <div className='row'>
                                                        <div className='col-lg-6'>
                                                            <div className='proposal_content'>
                                                                <p><strong>Comments: </strong> General contractors will manage the build process of a movie theater, overseeing site preparation, excavation, electrical, plumbing, HVAC, and finishing work. They will collaborate with specialists to ensure timely, budget-friendly, </p>
                                                            </div>
                                                            <div className='proposal_content'>
                                                                <p className='mb-1 dropdown-toggle' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><strong>Latest Communication </strong></p>
                                                                <p>Wasatch Sub Contractors: I think we’ve got the latest things done with what you’re looking for. You: Thanks, guys. This is going to be really great. Wasatch Sub Contractors: That’s great. Yes, we can get back to you with that information as soon as possible.</p>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-6'>
                                                            <div className='proposal_content proposal_detail'>
                                                                <p className='mb-2'><strong>Proposal Documents</strong></p>
                                                                <ul className='proposal_files'>
                                                                    <li>
                                                                        <a className='text'>
                                                                            <span><img src="assets/images/file.png" alt="" /> MyProjectPermit.pdf</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className='text'>
                                                                            <span><img src="assets/images/file.png" alt="" /> MyProjectPermit.pdf</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className='text'>
                                                                            <span><img src="assets/images/file.png" alt="" /> MyProjectPermit.pdf</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className='text'>
                                                                            <span><img src="assets/images/file.png" alt="" /> MyProjectPermit.pdf</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                                <div className='award_review'>
                                                                    <div className='reviews w-50'>
                                                                        <p className='mb-1'><strong>Proposal Rating</strong></p>
                                                                        <ul className='reviews_list'>
                                                                            <li>
                                                                                <span><i className='fa fa-star-o'></i></span>
                                                                            </li>
                                                                            <li>
                                                                                <span><i className='fa fa-star-o'></i></span>
                                                                            </li>
                                                                            <li>
                                                                                <span><i className='fa fa-star-o'></i></span>
                                                                            </li>
                                                                            <li>
                                                                                <span><i className='fa fa-star-o'></i></span>
                                                                            </li>
                                                                        </ul>
                                                                        <span>4.5</span>
                                                                    </div>
                                                                    <div className='notes w-50'>
                                                                        <div className='proposal_content'>
                                                                            <p className='mb-1'><strong>Notes</strong></p>
                                                                            <p>Wasatch Sub Contractors: I think we’ve got the latest things done with what you’re looking for. You: Thanks, guys. This is going to be really great. Wasatch Sub Contractors: That’s great. Yes, we can get back to you with that information as soon as possible.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='create_btn'>
                                                                    <a href="" className='globle_btn'>Award Project</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='comunication_content'>
                                                <div className='proposal_content'>
                                                    <p><strong></strong></p>
                                                    <p><p>Wasatch Sub Contractors: I think we’ve got the latest things done with what you’re looking for. You: Thanks, guys. This is going to be really great. Wasatch Sub Contractors: That’s great. Yes, we can get back to you with that information as soon as possible.</p></p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='propocal_card dropdown'>
                                            <div className='color_bg'>
                                                <div class="project_head">
                                                    <h2>Wasatch Sub Contractors</h2> <span>Submitted Oct 12, 2023</span>
                                                    <div className='row'>
                                                        <div className='col-lg-6'>
                                                            <div className='proposal_content'>
                                                                <p><strong>Comments: </strong> General contractors will manage the build process of a movie theater, overseeing site preparation, excavation, electrical, plumbing, HVAC, and finishing work. They will collaborate with specialists to ensure timely, budget-friendly, </p>
                                                            </div>
                                                            <div className='proposal_content'>
                                                                <p className='mb-1 dropdown-toggle' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><strong>Latest Communication </strong></p>
                                                                <p>Wasatch Sub Contractors: I think we’ve got the latest things done with what you’re looking for. You: Thanks, guys. This is going to be really great. Wasatch Sub Contractors: That’s great. Yes, we can get back to you with that information as soon as possible.</p>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-6'>
                                                            <div className='proposal_content proposal_detail'>
                                                                <p className='mb-2'><strong>Proposal Documents</strong></p>
                                                                <ul className='proposal_files'>
                                                                    <li>
                                                                        <a className='text'>
                                                                            <span><img src="assets/images/file.png" alt="" /> MyProjectPermit.pdf</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className='text'>
                                                                            <span><img src="assets/images/file.png" alt="" /> MyProjectPermit.pdf</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className='text'>
                                                                            <span><img src="assets/images/file.png" alt="" /> MyProjectPermit.pdf</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className='text'>
                                                                            <span><img src="assets/images/file.png" alt="" /> MyProjectPermit.pdf</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                                <div className='award_review'>
                                                                    <div className='reviews w-50'>
                                                                        <p className='mb-1'><strong>Proposal Rating</strong></p>
                                                                        <ul className='reviews_list'>
                                                                            <li>
                                                                                <span><i className='fa fa-star-o'></i></span>
                                                                            </li>
                                                                            <li>
                                                                                <span><i className='fa fa-star-o'></i></span>
                                                                            </li>
                                                                            <li>
                                                                                <span><i className='fa fa-star-o'></i></span>
                                                                            </li>
                                                                            <li>
                                                                                <span><i className='fa fa-star-o'></i></span>
                                                                            </li>
                                                                        </ul>
                                                                        <span>4.5</span>
                                                                    </div>
                                                                    <div className='notes w-50'>
                                                                        <div className='proposal_content'>
                                                                            <p className='mb-1'><strong>Notes</strong></p>
                                                                            <p>Wasatch Sub Contractors: I think we’ve got the latest things done with what you’re looking for. You: Thanks, guys. This is going to be really great. Wasatch Sub Contractors: That’s great. Yes, we can get back to you with that information as soon as possible.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='create_btn'>
                                                                    <a href="" className='globle_btn'>Award Project</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='comunication_content dropdown-menu'>
                                                <div className='proposal_content'>
                                                    <p><strong></strong></p>
                                                    <p><p>Wasatch Sub Contractors: I think we’ve got the latest things done with what you’re looking for. You: Thanks, guys. This is going to be really great. Wasatch Sub Contractors: That’s great. Yes, we can get back to you with that information as soon as possible.</p></p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}
