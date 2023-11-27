import React, { useEffect } from 'react'
import DefaultLayout from '../reusableComponents/defaultLayout'
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const FileLogo = '/assets/images/file.png';
const DummyPic1 = '/assets/images/pic1.png';
const DummyPic2 = '/assets/images/pic2.png';

export default function Startprojectdetail() {
    const [projectsDetials, setProjectsDetials] = useState({})
    const { id } = useParams();

    const fetchProjectData = async () => {
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
                console.log({body});
                setProjectsDetials(body?.data)
            })
            .catch((err) => { });
        return data;
    };

    useEffect(() => {
        console.log({id: process.env.PUBLIC_URL});
        fetchProjectData();
    }, []);

    return (
        <DefaultLayout>
            <div>
                <section className="inner_banner account_banner">
                    <div className="inner_plan_banner">
                        <div className="container">
                            <h1>Project Detail</h1>
                        </div>
                    </div>
                </section>
                <div className="new_project project_name_banner my-5 pt-3">
                    <div className='container'>
                        <div className="color_bg mb-0">
                            <h2>{projectsDetials?.project_name || ''}</h2>
                            <form action="">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="form_style ps-0">
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput1" className="form-label">Project Name</label>
                                                <p className='text'>{projectsDetials?.project_name || 'N/A'}</p>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput12" className="form-label">Email</label>
                                                <p className='text'>{projectsDetials?.email || 'N/A'}</p>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput11" className="form-label">Project Rep</label>
                                                <p className='text'>{projectsDetials?.project_rep || 'N/A'}</p>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput13" className="form-label">Phone Number</label>
                                                <p className='text'>{projectsDetials?.phone || 'N/A'}</p>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput13" className="form-label">Project Description</label>
                                                <p className='text'>{projectsDetials?.project_description || 'N/A'}</p>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput13" className="form-label">Who have you worked with in the past? (Banks, Lenders, etc.)</label>
                                                <p className='text'>{projectsDetials?.past_work || 'N/A'}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="form_style">
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput1" className="form-label">Designer</label>
                                                <p className='text'>{projectsDetials?.designer || 'N/A'}</p>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput12" className="form-label">Engineer</label>
                                                <p className='text'>{projectsDetials?.engineer || 'N/A'}</p>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput12" className="form-label">Architect</label>
                                                <p className='text'>{projectsDetials?.architect || 'N/A'}</p>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput12" className="form-label">Permits</label>
                                                <p className='text'>
                                                    <span><img src={FileLogo} alt="" /> {projectsDetials?.permit_doc || 'N/A'}</span>
                                                </p>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput12" className="form-label">Financing</label>
                                                <p className='text'>
                                                {projectsDetials?.financing || 'N/A'}
                                                </p>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput12" className="form-label">Plans</label>
                                                <p className='text'>
                                                    {projectsDetials?.plan || 'N/A'}
                                                </p>
                                                <div className="upload_files border-0">
                                                    <label for="exampleFormControlInput12" className="form-label">Uploaded Plans</label>
                                                    <p className='text'>
                                                        <span><img src={FileLogo} alt="" /> {projectsDetials?.plan_doc || 'N/A'}</span>
                                                    </p>
                                                    <label for="exampleFormControlInput12" className="form-label">Upload Pictures</label>
                                                    <div className='text'>
                                                        <ul className='picture_list'>
                                                            <li>
                                                                <div className='pro_img'>
                                                                    <img src={DummyPic1} alt="" />
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className='pro_img'>
                                                                    <img src={DummyPic2} alt="" />
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className='pro_img'>
                                                                    <img src={DummyPic1} alt="" />
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className='pro_img'>
                                                                    <img src={DummyPic2} alt="" />
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <span className='del_btn'><img src="assets/images/del.png" alt="" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="form_style">
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput1" className="form-label">Approximate Start Date</label>
                                                <p className='text'>{projectsDetials?.project_start_date || 'N/A'}</p>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput1" className="form-label">Approximate Completion Date</label>
                                                <p className='text'>{projectsDetials?.project_end_date || 'N/A'}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="creat_btn text-center">
                                    <a href={`/submitproposal/${projectsDetials?.id}`}>Submit Purposal For this Project</a>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}
