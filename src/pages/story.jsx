import React from 'react'
import DefaultLayout from '../reusableComponents/defaultLayout'

export default function Story() {
    return (
        <DefaultLayout>
            <section className="about_banner story_banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about_img">
                                <div className="story_banner_img">
                                    <img src="assets/images/inner_bg.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about_content">
                                <h4>A BRIEF HEADING</h4>
                                <h1 className="sub_head">Our story</h1>
                                <p>Use this section to describe your company and the services you offer. You could share your company’s story and details about why you are in business. The goal is to create a connection with the visitor and give them confidence to work with you.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="about_banner mission_banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="about_content">
                                <h1 className="sub_head">Our Mission</h1>
                                <p>A paragraph describing your company’s goals or mission statement. This section is meant to help visitors understand the purpose of your business.</p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about_img">
                                <div className="left_img">
                                    <img src="assets/images/inner_bg.jpg" alt="" />
                                </div>
                                <div className="right_img">
                                    <img src="assets/images/inner_bg.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services_list story_benefit">
                <div className="container">
                    <h1 className="banner_heading">Why Choose Us</h1>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="plan_content g_card">
                                <h3>Benefit 1</h3>
                                <p>A short description of this service and how it helps clients.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="plan_content g_card">
                                <h3>Benefit 2</h3>
                                <p>A short description of this service and how it helps clients.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="plan_content g_card">
                                <h3>Benefit 3</h3>
                                <p>A short description of this service and how it helps clients.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="plan_content g_card">
                                <h3>Benefit 4</h3>
                                <p>A short description of this service and how it helps clients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonial_banner">
                <div className="container">
                    <h1 className="banner_heading">Client Testimonials</h1>
                    <div className="row">
                        <div className="col-sm-6 col-md-4">
                            <div className="plan_content">
                                <p>“A testimonial from a client who benefited from your product or service. Testimonials can be a highly effective way of establishing credibility and increasing your company's reputation.”</p>
                                <div className="client_profile">
                                    <div className="client_dp">
                                        <img src="assets/images/testimonial.jpg" alt="" />
                                    </div>
                                    <p>Client Name</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="plan_content">
                                <p>“A testimonial from a client who benefited from your product or service. Testimonials can be a highly effective way of establishing credibility and increasing your company's reputation.”</p>
                                <div className="client_profile">
                                    <div className="client_dp">
                                        <img src="assets/images/testimonial.jpg" alt="" />
                                    </div>
                                    <p>Client Name</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="plan_content">
                                <p>“A testimonial from a client who benefited from your product or service. Testimonials can be a highly effective way of establishing credibility and increasing your company's reputation.”</p>
                                <div className="client_profile">
                                    <div className="client_dp">
                                        <img src="assets/images/testimonial.jpg" alt="" />
                                    </div>
                                    <p>Client Name</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <a href="" className="globle_btn">Get Started</a>
                    </div>
                </div>
            </section>
        </DefaultLayout>
    )
}
