import React, { useEffect, useState } from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import DefaultLayout from '../reusableComponents/defaultLayout';
import Carousel from '../reusableComponents/carousel';


export default function Projectdetail() {
    const [projectsDetials, setProjectsDetials] = useState({})
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    let id = queryParams.get('id')

    const fetchData = async () => {
        let url = process.env.REACT_APP_BASE_URL;
        const token = localStorage.getItem('authToken');
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        const data = fetch(
            url +
            `/project_detail/${id}`,
            requestOptions
        )
            .then(async (res) => {
                let body = await res.json();
                setProjectsDetials(body?.data)
            })
            .catch((err) => { });
        return data;
    };

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <DefaultLayout>
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
                                <Carousel />
                                {/* <div className='border rounded'><img src="assets/images/inner_bg.jpg" width="100%" height="230" alt="" /></div> */}
                            </div>
                            <div className="col-lg-6">
                                <div className="view_product_content">
                                    <h3>{projectsDetials?.project_name}</h3>
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
                                                        Date: <span>{projectsDetials.project_start_date}</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <p class="view_count"><img src="assets/images/view.png" alt="" />
                                                    <span>100</span>
                                                </p>
                                            </li>
                                        </ul>
                                        <p>{projectsDetials.project_description}</p>
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
                    <h1>More Information</h1>
                    <ul class="work_list">
                        <li>
                            <p>Designer: <strong>{projectsDetials?.designer}</strong></p>
                        </li>
                        <li>
                            <p>Engineer: <strong>{projectsDetials?.engineer}</strong></p>
                        </li>
                        <li>
                            <p>Financing: <strong>{projectsDetials?.financing}</strong></p>
                        </li>
                        <li>
                            <p>Past work: <strong>{projectsDetials?.past_work}</strong></p>
                        </li>
                        <li>
                            <p>Permits: <strong>{projectsDetials?.permits}</strong></p>
                        </li>
                        <li>
                            <p>Plan: <strong>{projectsDetials?.plan}</strong></p>
                        </li>
                        <li>
                            <p>Price: <strong>{projectsDetials?.price}</strong></p>
                        </li>
                        <li>
                            <p>Project Rep: <strong>{projectsDetials?.project_rep}</strong></p>
                        </li>
                        <li>
                            <p>Architect: <strong>{projectsDetials?.architect}</strong></p>
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
                                        <th scope="col">Bidder Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone Number</th>
                                        <th scope="col">Bidding Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="12" className='text-center'>No one has Bid yet</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </DefaultLayout>
    )
}
