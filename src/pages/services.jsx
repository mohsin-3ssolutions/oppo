import React from 'react'
import DefaultLayout from '../reusableComponents/defaultLayout'

export default function Services() {
    return (
        <DefaultLayout>
            <section class="services_banner">
                <div class="container">
                    <div class="inner_content">
                        <h1 class="banner_heading">Our Services</h1>
                        <p>This text briefly introduces visitors to your main services.</p>
                    </div>
                </div>
                <div class="service_banner_img">
                    <img src="assets/images/inner_bg.jpg" class="img-fluid" alt="" />
                </div>
            </section>
            <section class="services_list">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="plan_content g_card">
                                <div class="service_img">
                                    <img src="assets/images/inner_bg.jpg" alt="" />
                                </div>
                                <h3>Service 1</h3>
                                <p>A short description of this service and how it helps clients.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="plan_content g_card">
                                <div class="service_img">
                                    <img src="assets/images/inner_bg.jpg" alt="" />
                                </div>
                                <h3>Service 2</h3>
                                <p>A short description of this service and how it helps clients.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="plan_content g_card">
                                <div class="service_img">
                                    <img src="assets/images/inner_bg.jpg" alt="" />
                                </div>
                                <h3>Service 3</h3>
                                <p>A short description of this service and how it helps clients.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="plan_content g_card">
                                <div class="service_img">
                                    <img src="assets/images/inner_bg.jpg" alt="" />
                                </div>
                                <h3>Service 4</h3>
                                <p>A short description of this service and how it helps clients.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="plan_content g_card">
                                <div class="service_img">
                                    <img src="assets/images/inner_bg.jpg" alt="" />
                                </div>
                                <h3>Service 5</h3>
                                <p>A short description of this service and how it helps clients.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="plan_content g_card">
                                <div class="service_img">
                                    <img src="assets/images/inner_bg.jpg" alt="" />
                                </div>
                                <h3>Service 6</h3>
                                <p>A short description of this service and how it helps clients.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="plan_content g_card">
                                <div class="service_img">
                                    <img src="assets/images/inner_bg.jpg" alt="" />
                                </div>
                                <h3>Service 7</h3>
                                <p>A short description of this service and how it helps clients.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="plan_content g_card">
                                <div class="service_img">
                                    <img src="assets/images/inner_bg.jpg" alt="" />
                                </div>
                                <h3>Service 8</h3>
                                <p>A short description of this service and how it helps clients.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="plan_content g_card">
                                <div class="service_img">
                                    <img src="assets/images/inner_bg.jpg" alt="" />
                                </div>
                                <h3>Service 9</h3>
                                <p>A short description of this service and how it helps clients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="about_banner">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="about_content">
                                <h4>A BENEFIT / FEATURE</h4>
                                <h1 class="sub_head">A Title About Your Services</h1>
                                <p>A paragraph describing additional information about your business or services. This is a great opportunity to provide details about services that are not listed in the main services menu.</p>
                                <a href="contact-us" class="globle_btn">Contact Us</a>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="about_img">
                                <div class="left_img">
                                    <img src="assets/images/inner_bg.jpg" alt="" />
                                </div>
                                <div class="right_img">
                                    <img src="assets/images/inner_bg.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="faq_banner">
                <div class="container">
                    <div class="faq_list">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq1">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq11" aria-expanded="true" aria-controls="collapseOne">
                                                A Frequently Asked Question Surrounding Your Service
                                            </button>
                                        </h2>
                                        <div id="faq11" class="accordion-collapse collapse" aria-labelledby="faq1" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <p>A detailed answer to provide information about your business, build trust with potential clients, and help convince the visitor that you are a good fit for them.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq2">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq22" aria-expanded="false" aria-controls="collapseTwo">
                                                A Frequently Asked Question Surrounding Your Service
                                            </button>
                                        </h2>
                                        <div id="faq22" class="accordion-collapse collapse" aria-labelledby="faq2" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <p>A detailed answer to provide information about your business, build trust with potential clients, and help convince the visitor that you are a good fit for them.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq3">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq33" aria-expanded="false" aria-controls="collapseThree">
                                                A Frequently Asked Question Surrounding Your Service
                                            </button>
                                        </h2>
                                        <div id="faq33" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <p>A detailed answer to provide information about your business, build trust with potential clients, and help convince the visitor that you are a good fit for them.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq30">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq303" aria-expanded="false" aria-controls="collapseThree">
                                                A Frequently Asked Question Surrounding Your Service
                                            </button>
                                        </h2>
                                        <div id="faq303" class="accordion-collapse collapse" aria-labelledby="faq30" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <p>A detailed answer to provide information about your business, build trust with potential clients, and help convince the visitor that you are a good fit for them.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="accordion" id="accordionExample1">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq4">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq44" aria-expanded="true" aria-controls="collapseOne">
                                                A Frequently Asked Question Surrounding Your Service
                                            </button>
                                        </h2>
                                        <div id="faq44" class="accordion-collapse collapse" aria-labelledby="faq4" data-bs-parent="#accordionExample1">
                                            <div class="accordion-body">
                                                <p>A detailed answer to provide information about your business, build trust with potential clients, and help convince the visitor that you are a good fit for them.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq5">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq55" aria-expanded="false" aria-controls="collapseTwo">
                                                A Frequently Asked Question Surrounding Your Service
                                            </button>
                                        </h2>
                                        <div id="faq55" class="accordion-collapse collapse" aria-labelledby="faq5" data-bs-parent="#accordionExample1">
                                            <div class="accordion-body">
                                                <p>A detailed answer to provide information about your business, build trust with potential clients, and help convince the visitor that you are a good fit for them.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq6">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq66" aria-expanded="false" aria-controls="collapseThree">
                                                A Frequently Asked Question Surrounding Your Service
                                            </button>
                                        </h2>
                                        <div id="faq66" class="accordion-collapse collapse" aria-labelledby="faq6" data-bs-parent="#accordionExample1">
                                            <div class="accordion-body">
                                                <p>A detailed answer to provide information about your business, build trust with potential clients, and help convince the visitor that you are a good fit for them.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq60">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq606" aria-expanded="false" aria-controls="collapseThree">
                                                A Frequently Asked Question Surrounding Your Service
                                            </button>
                                        </h2>
                                        <div id="faq606" class="accordion-collapse collapse" aria-labelledby="faq60" data-bs-parent="#accordionExample1">
                                            <div class="accordion-body">
                                                <p>A detailed answer to provide information about your business, build trust with potential clients, and help convince the visitor that you are a good fit for them.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
