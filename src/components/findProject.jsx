import React from 'react'
import DefaultLayout from './reusableComponents/defaultLayout'

export default function FindProject() {
    return (
        <DefaultLayout>
            <section class="inner_banner account_banner">
                <div class="inner_plan_banner">
                    <div class="container">
                        <h1>Welcome Back <span> Zach</span></h1>
                    </div>
                </div>
            </section>
            <section class="find_project_banner">
                <div class="container">
                    <div class="search_form">
                        <form action="">
                            <input type="search" placeholder="Search" />
                            <button><img src="assets/images/search.png" alt="" /></button>
                        </form>
                    </div>
                    <ul>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                    </ul>

                </div>
            </section>
        </DefaultLayout>
    )
}
