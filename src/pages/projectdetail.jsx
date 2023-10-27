import React, { useState } from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
    

export default function Projectdetail() {


    return (
        <div>
            <section class="inner_banner account_banner">
                <div class="inner_plan_banner">
                    <div class="container">
                    <h1>Project Detail Page</h1>
                    </div>
                </div>
            </section>
            <section className="detail_banner">
                <div className="container">
                    
                    <div className="detail_view_box">
                        <div className="row">
                            <div className="col-lg-6">
                                {/* slider */}
                            </div>
                            <div className="col-lg-6">
                                <div className="view_product_content">
                                    <h3>Project Name</h3>
                                    <div className="bulk_dimension">
                                        <ul class="project_status my-2">
                                            <li>
                                                <div>
                                                    <p aria-label="more" id="long-button" aria-haspopup="true" class="cursor-pointer">
                                                        Job Status: <span>10%</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <p aria-label="more" id="long-button" aria-haspopup="true" class="cursor-pointer">
                                                        Date: <span>25-12-2023</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <p class="view_count"><img src="assets/images/view.png" alt=""/>
                                                    <span>100</span>
                                                </p>
                                            </li>
                                        </ul>
                                        <p>General contractors will manage the build process of a movie theater, overseeing site preparation, excavation, electrical, plumbing, HVAC, and finishing work. They will collaborate with specialists to ensure timely, budget-friendly, and quality project completion. The theater will offer advanced audio-visual equipment, comfortable seating, and safety protocols to deliver a first-className entertainment experience.</p>
                                    </div>
                                    <div className="black_btn">
                                        <a href="" className="globle_btn">View Permits</a>
                                        <a href="" className="globle_btn">View Plans</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="work_banner">
                <div class="container">
                    <h1>Work With</h1>
                    <ul class="work_list">
                        <li>
                            <p>Banks</p>
                        </li>
                        <li>
                            <p>Lenders</p>
                        </li>
                        <li>
                            <p>Lenders</p>
                        </li>
                        <li>
                            <p>Lenders</p>
                        </li>
                        <li>
                            <p>Lenders</p>
                        </li>
                        <li>
                            <p>Lenders</p>
                        </li>
                        <li>
                            <p>Lenders</p>
                        </li>
                        <li>
                            <p>Lenders</p>
                        </li>
                        <li>
                            <p>Lenders</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <div className='container'>
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
            </section>
        </div>
    )
}
