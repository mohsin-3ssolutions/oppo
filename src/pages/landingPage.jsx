import React, { useEffect, useState } from 'react'
import DefaultLayout from '../reusableComponents/defaultLayout'
import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage({ isAuthenticated, paymentSripe }) {
    const [activeStep, setActiveStep] = useState('step1');

    const toggleVisibility = (step) => {
        setActiveStep(step);
    };

    const navigate = useNavigate();

    useEffect(() => {
        // ((!isAuthenticated) && navigate('/signin'));
        { paymentSripe == "" && navigate('/payment') }
        // const paid = localStorage.getItem('paid')?.length ? true : false;
        // ((isAuthenticated && paid) ? navigate('/dashboard') : navigate('/payment'));
    }, []);

    return (
        <DefaultLayout>
            <section className="home_banner">
                <div className="container">
                    <div className="home_content">
                        <h1>OPPO. an opportunity to connect, organize, and bid projects simply.</h1>
                        {isAuthenticated == false ? <Link to="/select-role" className="globle_btn">Get Started</Link> : <Link to="/account" className="globle_btn">Go to your Acount</Link>}
                    </div>
                </div>
            </section>
            <section className="image_banner">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="banner_img">
                                <img className="img-fluid" src="/assets/images/Vert-Stock.png" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="image_banner_content">
                                <h2>Why OPPO?</h2>
                                <p className="mb-3">We are a construction networking platform, opening doors to create quality and lasting connections with other construction professionals.</p>
                                <p className="mb-3">Are you tired of struggling to find quality connections in the construction industry? Do you find yourself struggling to get enough work, or perhaps not being able to complete it as quickly as you would like? Look no further than OPPO.</p>
                                <p className="mb-3"><i>“You’re only as good as the people you hire.”</i> – Ray Kroc</p>
                                <p className="mb-3">In the construction industry, making quality connections is essential to success. When you work with people who share your values and commitment to excellence, you can accomplish great things. OPPO provides the solution to the problem of finding these connections.</p>
                                <p className="mb-3">With OPPO, you can easily connect with other professionals in the construction industry who share your goals and values. Whether you are a general contractor, subcontractor, supplier, or other industry professional, OPPO makes it easy to find the right connections.</p>
                                <p className="mb-3">OPPO offers a wide range of features and tools designed to help you make these connections quickly and easily. You can search for projects and partners based on your specific needs, connect with other professionals through our messaging system, and even receive notifications when new opportunities arise.</p>
                                <p className="mb-3">With OPPO, you can get more work and get it done faster. By connecting with other professionals in the industry who share your commitment to quality and excellence, you can build a network of partners who will help you achieve your goals. And with OPPO’s powerful tools and features, you can make those connections quickly and easily, so you can get back to doing what you do best.</p>
                                <p className="mb-3">Don’t let a lack of quality connections hold you back in the construction industry. Sign up for OPPO today and start building the connections you need to succeed.</p>
                                <a href="" className="globle_btn">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="choose_baner">
                <div className="container">
                    <h1>Why Choose Us</h1>
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="plan_content g_card">
                                <div className="choose_icon">
                                    <img src="/assets/images/icon1.png" alt="" />
                                </div>
                                <h3>Project Discovery Tool</h3>
                                <p>OPPO’s project discovery tool allows you to find new construction projects that match your specific needs and qualifications. This means you can spend less time searching for new work and more time actually completing projects, ultimately leading to increased revenue and productivity.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="plan_content g_card">
                                <div className="choose_icon">
                                    <img src="assets/images/icon2.png" alt="" />
                                </div>
                                <h3>Network Expansion</h3>
                                <p>By using OPPO, you can easily expand your professional network in the construction industry. This means you can connect with other industry professionals who share your values and work ethic, which can lead to new project opportunities, referrals, and even long-term partnerships.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="plan_content g_card">
                                <div className="choose_icon">
                                    <img src="/assets/images/icon3.png" alt="" />
                                </div>
                                <h3>Proposal Management</h3>
                                <p>With OPPO’s proposal management tool, you can efficiently manage all aspects of the proposal process from one centralized location. This means you can easily track your progress on each proposal and communicate with clients and team members in real-time, which can lead to quicker project approvals and increased project efficiency.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="plan_content g_card">
                                <div className="choose_icon">
                                    <img src="/assets/images/icon4.png" alt="" />
                                </div>
                                <h3>Bid Tracking</h3>
                                <p>OPPO’s bid tracking tool allows you to keep track of all your submitted bids and their status. This means you can quickly identify which bids are still pending and which ones have been accepted, which can save you time and help you prioritize your workload accordingly. Additionally, you can use this tool to analyze your bidding history and make informed decisions about future bid opportunities.</p>
                            </div>
                        </div>
                    </div>
                    <div className="step_section">
                        <div className="steps_banner">
                            <ul className="steps_pill">
                                <li>
                                    <a href="javascript:void(0)" onClick={() => toggleVisibility('step1')}>
                                        <img src="/assets/images/icon5.png" alt="" />
                                        <span>Step1</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" onClick={() => toggleVisibility('step2')}>
                                        <img src="/assets/images/icon6.png" alt="" />
                                        <span>Step2</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" onClick={() => toggleVisibility('step3')}>
                                        <img src="/assets/images/icon7.png" alt="" />
                                        <span>Step3</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" onClick={() => toggleVisibility('step4')}>
                                        <img src="/assets/images/icon8.png" alt="" />
                                        <span>Step4</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" onClick={() => toggleVisibility('step5')}>
                                        <img src="/assets/images/icon9.png" alt="" />
                                        <span>Step5</span>
                                    </a>
                                </li>
                            </ul>
                            <ul className="step_content">
                                <li id="step1" style={{ display: activeStep === 'step1' ? 'block' : 'none' }}>
                                    <p>Present your content in an attractive Circle layout item 1. You can highlight key information with click or hover effects and style it as per your preference</p>
                                </li>
                                <li id="step2" style={{ display: activeStep === 'step2' ? 'block' : 'none' }}>
                                    <p>Present your content in an attractive Circle layout item 2. You can highlight key information with click or hover effects and style it as per your preference</p>
                                </li>
                                <li id="step3" style={{ display: activeStep === 'step3' ? 'block' : 'none' }}>
                                    <p>Present your content in an attractive Circle layout item 3. You can highlight key information with click or hover effects and style it as per your preference</p>
                                </li>
                                <li id="step4" style={{ display: activeStep === 'step4' ? 'block' : 'none' }}>
                                    <p>Present your content in an attractive Circle layout item 4. You can highlight key information with click or hover effects and style it as per your preference</p>
                                </li>
                                <li id="step5" style={{ display: activeStep === 'step5' ? 'block' : 'none' }}>
                                    <p>Present your content in an attractive Circle layout item 5. You can highlight key information with click or hover effects and style it as per your preference</p>
                                </li>
                            </ul>
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
                                        <img src="/assets/images/testimonial.jpg" alt="" />
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
                                        <img src="/assets/images/testimonial.jpg" alt="" />
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
                                        <img src="/assets/images/testimonial.jpg" alt="" />
                                    </div>
                                    <p>Client Name</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <Link to="/select-role" className="globle_btn">Get Started</Link>
                    </div>
                </div>
            </section>
        </DefaultLayout>
    )
}
