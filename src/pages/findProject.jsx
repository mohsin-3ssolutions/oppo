import React, { useEffect, useState } from 'react'
import DefaultLayout from '../reusableComponents/defaultLayout'

export default function FindProject() {
    const [projects, setprojects] = useState([])
    const fetchProjects = async () => {
        const token = localStorage.getItem('authToken');
        let url = process.env.REACT_APP_BASE_URL;

        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        const res = await fetch(
            url +
            `/projects_list?page_num_start=1&page_size=20`,
            requestOptions
        );
        const data = await res.json();
        setprojects(data?.data)
    };

    useEffect(() => {
        fetchProjects()
    }, [])

    console.log(projects, '===============')
    return (
        <DefaultLayout>
            <section class="inner_banner account_banner">
                <div class="inner_plan_banner">
                    <div class="container">
                        <h1>Search Projects</h1>
                    </div>
                </div>
            </section>

            <section class="find_project_banner">
                <div class="container">
                    <div class="search_form filter_project">
                        <p>Search Filter</p>
                        <form action="">
                            <select name="" id="" class="form-control">
                                <option value="">Scope of Work</option>
                                <option value="">Scope of Work</option>
                                <option value="">Scope of Work</option>
                            </select>
                            <select name="" id="" class="form-control">
                                <option value="">Location</option>
                                <option value="">Location</option>
                                <option value="">Location</option>
                            </select>
                            <select name="" id="" class="form-control">
                                <option value="">Zoning Type</option>
                                <option value="">Zoning Type</option>
                                <option value="">Zoning Type</option>
                            </select>
                            <select name="" id="" class="form-control">
                                <option value="">Timeline</option>
                                <option value="">Timeline</option>
                                <option value="">Timeline</option>
                            </select>
                        </form>
                    </div>
                    <ul>
                        {
                            projects.map((data, index) => (
                                <li key={index}>
                                    <div class="project_detail">
                                        <div class="project_head">
                                            <h2>{data.project_name}<span>{data.project_start_date}</span></h2>
                                            <ul class="project_status">
                                                <li>
                                                    <p class="view_count"><img src="assets/images/view.png" alt="" /><span>100</span></p>
                                                </li>
                                            </ul>
                                        </div>
                                        <p><strong>Project Description: </strong> {data.project_description}</p>
                                    </div>
                                </li>
                            ))
                        }


                    </ul>

                </div>
            </section>
        </DefaultLayout>
    )
}
