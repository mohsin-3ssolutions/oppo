import React from 'react';
import Logo from "../assets/images/logo.png"

function Account() {
    
    return (
        <>
            <header>
                <div class="container">
                    <div class="header_nav">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="#"><img class="img-fluid" src={Logo} alt="" /></a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse navigation" id="navbarNavDropdown">
                                    <ul class="navbar-nav">
                                        <li>
                                            <a aria-current="page" href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">Our Services</a>
                                        </li>
                                        <li>
                                            <a href="#">Our Story</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="#">My Account</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            <section class="inner_banner account_banner">
                <div class="inner_plan_banner">
                    <div class="container">
                        <h1>Welcome Back <span> Zach</span></h1>
                    </div>
                </div>
            </section>

            <section class="gc_homebanner">
                <div class="container">
                    <div class="globle_tabs account_tabs">
                        <ul class="nav nav-tabs" id="gcTab" role="tablist">
                            <li role="presentation">
                                <a id="home-tab" class="active" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Active Projects</a>
                            </li>
                            <li role="presentation">
                                <a id="contact-tab" data-bs-toggle="tab" data-bs-target="#mycontact" type="button" role="tab" aria-controls="contact" aria-selected="false">My Contacts</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="gcTabContent">
                            <div class="tab-pane fade active show" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="about_projects">
                                    <div class="color_bg">
                                        <div class="project_detail">
                                            <div class="project_head">
                                                <h2>Project Name <span>Start Date</span></h2>
                                                <ul class="project_status">
                                                    <li>
                                                        <p class="view_count"><img src="assets/images/view.png" alt="" /><span>100</span></p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p><strong>Project Description:</strong> General contractors will manage the build process of a movie theater, overseeing site preparation, excavation, electrical, plumbing, HVAC, and finishing work. They will collaborate with specialists to ensure timely, budget-friendly, and quality project completion. The theater will offer advanced audio-visual equipment, comfortable seating, and safety protocols to deliver a first-class entertainment experience.</p>
                                        </div>
                                    </div>
                                    <div class="creat_btn">
                                        <a href="">Find a Project</a>
                                        <a href="">Post a Project</a>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="mycontact" role="tabpanel" aria-labelledby="contact-tab">
                                <div class="about_projects">
                                    <div class="color_bg">
                                        <div class="contact_list">
                                            <div class="search_form">
                                                <form action="">
                                                    <input type="search" placeholder="Search" />
                                                    <button><img src="assets/images/search.png" alt="" /></button>
                                                </form>
                                            </div>
                                            <div class="list_table">
                                                <div class="table-responsive">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Name</th>
                                                                <th scope="col">Business Name</th>
                                                                <th scope="col">Phone Number</th>
                                                                <th scope="col">Email</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Mike Johnson</td>
                                                                <td>Mike’s Contractors</td>
                                                                <td>801-222-2323</td>
                                                                <td>@mike@johnsoncontractors.com</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Trevor Smith</td>
                                                                <td>Trevor Construction</td>
                                                                <td>777-282-2836</td>
                                                                <td>trev@trevorconstruction.com</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Lance Williams</td>
                                                                <td>Lance Tiling</td>
                                                                <td>988-222-3764</td>
                                                                <td>lance@lancetitling.com</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Jon Seenah</td>
                                                                <td>Seenah Roofing</td>
                                                                <td>664-122-1222</td>
                                                                <td>Jon@seenahroofing.com</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Ralph Loodah</td>
                                                                <td>Ralph Plumbing</td>
                                                                <td>111-222-3333</td>
                                                                <td>ralphie@imyourplumber.com</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Bob Jones</td>
                                                                <td>Jones Sewer</td>
                                                                <td>211-667-8898</td>
                                                                <td>bob@isuedtoddforagate.com</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Davey Skeeter</td>
                                                                <td>Davey Electrical</td>
                                                                <td>555-454-3443</td>
                                                                <td>davey@getshockedelectrical.com</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Spencer Williams</td>
                                                                <td>Spencer Drywall</td>
                                                                <td>233-444-3333</td>
                                                                <td>spencer@drywallexperts.com</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Garrett Bogham</td>
                                                                <td>Bogham Paint</td>
                                                                <td>777-282-2836</td>
                                                                <td>bogham@boghampaint.com</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Lisa Warren</td>
                                                                <td>Lisa’s Interirors</td>
                                                                <td>988-222-3764</td>
                                                                <td>Lisa@imakestuffcuteinfside.com</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Escobar Pablito</td>
                                                                <td>Pablito Contractors</td>
                                                                <td>664-122-1222</td>
                                                                <td>pablito@contractorsforhirepab.com</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Sandy Coleman</td>
                                                                <td>Sandy Construction</td>
                                                                <td>555-454-3443</td>
                                                                <td>sandy@sandycolemanconst.com</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Roger Handgrenade</td>
                                                                <td>Painting Handgrenades</td>
                                                                <td>801-222-2323</td>
                                                                <td>handy@handgrenadepaint.com</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Wilford Wilcox</td>
                                                                <td>Wilford Tiling</td>
                                                                <td>555-454-3443</td>
                                                                <td>wilford@tilingexpertsgonenuts.com</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Account;