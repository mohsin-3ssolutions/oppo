import React from 'react'
import DefaultLayout from '../reusableComponents/defaultLayout'

export default function ContactUs() {
    return (
        <div>
            <DefaultLayout>
                <section class="services_banner">
                    <div class="container">
                        <div class="inner_content">
                            <h1 class="banner_heading">Contact Us</h1>
                            <p class="mb-0">We would love to hear from you.</p>
                            <p>Feel free to reach out using the below details.</p>
                        </div>
                    </div>
                    <div class="service_banner_img">
                        <img src="assets/images/inner_bg.jpg" class="img-fluid" alt=""/>
                    </div>
                </section>
                <section class="about_banner contact_details">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="about_img">
                                    <div class="contact_img">
                                        <img src="assets/images/inner_bg.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="about_content">
                                    <ul class="contact_content">
                                        <li>
                                            <span>Address:</span>
                                            <p>123 Main Street, New York, NY 10001</p>
                                        </li>
                                        <li>
                                            <span>Hours:</span>
                                            <p>Mon-Fri 9:00AM – 5:00PM</p>
                                        </li>
                                        <li>
                                            <span>Phone:</span>
                                            <p>123-456-7890</p>
                                        </li>
                                        <li>
                                            <span>Email:</span>
                                            <p>contact@mysite.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </DefaultLayout>
        </div>
    )
}
