import React from 'react'
import DefaultLayout from '../reusableComponents/defaultLayout'

export default function Story() {
    return (
        <DefaultLayout>
            <section class="about_banner story_banner">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="about_img">
                                <div class="story_banner_img">
                                    <img src="assets/images/c11.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="about_content">
                                <h4>A BRIEF HEADING</h4>
                                <h1 class="sub_head">Our story</h1>
                                <p>Use this section to describe your company and the services you offer. You could share your company’s story and details about why you are in business. The goal is to create a connection with the visitor and give them confidence to work with you.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section class="about_banner mission_banner">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="about_content">
                                <h1 class="sub_head">Our Mission</h1>
                                <p>A paragraph describing your company’s goals or mission statement. This section is meant to help visitors understand the purpose of your business.</p>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="about_img">
                                <div class="left_img">
                                    <img src="assets/images/c10.jpg" alt="" />
                                </div>
                                <div class="right_img">
                                    <img src="assets/images/c11.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="services_list story_benefit">
                <div class="container">
                    <h1 class="banner_heading">Why Choose Us</h1>
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="plan_content g_card">
                                <h3>Benefit 1</h3>
                                <p>A short description of this service and how it helps clients.</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="plan_content g_card">
                                <h3>Benefit 2</h3>
                                <p>A short description of this service and how it helps clients.</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="plan_content g_card">
                                <h3>Benefit 3</h3>
                                <p>A short description of this service and how it helps clients.</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="plan_content g_card">
                                <h3>Benefit 4</h3>
                                <p>A short description of this service and how it helps clients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="testimonial_banner">
                <div class="container">
                    <h1 class="banner_heading">Client Testimonials</h1>
                    <div class="row">
                        <div class="col-sm-6 col-md-4">
                            <div class="plan_content">
                                <p>“A testimonial from a client who benefited from your product or service. Testimonials can be a highly effective way of establishing credibility and increasing your company's reputation.”</p>
                                <div class="client_profile">
                                    <div class="client_dp">
                                        <img src="assets/images/testimonial.jpg" alt="" />
                                    </div>
                                    <p>Client Name</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="plan_content">
                                <p>“A testimonial from a client who benefited from your product or service. Testimonials can be a highly effective way of establishing credibility and increasing your company's reputation.”</p>
                                <div class="client_profile">
                                    <div class="client_dp">
                                        <img src="assets/images/testimonial.jpg" alt="" />
                                    </div>
                                    <p>Client Name</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="plan_content">
                                <p>“A testimonial from a client who benefited from your product or service. Testimonials can be a highly effective way of establishing credibility and increasing your company's reputation.”</p>
                                <div class="client_profile">
                                    <div class="client_dp">
                                        <img src="assets/images/testimonial.jpg" alt="" />
                                    </div>
                                    <p>Client Name</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-5">
                        <a href="" class="globle_btn">Get Started</a>
                    </div>
                </div>
            </section>
        </DefaultLayout>
    )
}
