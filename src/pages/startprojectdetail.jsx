import React, { useEffect } from 'react'
import DefaultLayout from '../reusableComponents/defaultLayout'
import { useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Close } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { toast } from 'react-toastify';
import Notes from '../components/notes';
import Rating from '../components/rating';
import { ThreeDots } from 'react-loader-spinner';
import Ratting from '../components/rating';

const FileLogo = '/assets/images/file.png';
const DummyPic1 = '/assets/images/pic1.png';
const DummyPic2 = '/assets/images/pic2.png';
const Loader = () => <div>Loading...</div>;

export default function Startprojectdetail() {
    const [projectsDetials, setProjectsDetials] = useState({})
    const [openNotesIndex, setOpenNotesIndex] = useState(null);
    const [openChatIndex, setOpenChatIndex] = useState(null);
    const [isUser, setIsUser] = useState(false);
    const [projectsBidding, setBiddingDetials] = useState([])
    const [loadingIndex, setLoadingIndex] = useState(null);
    const [loading, setLoading] = useState(false);
    const [awarded, setAwarded] = useState(false);
    const [isNotesAdded, setisNotesAdded] = useState(false);

    const updateFlag = (notesAdded) => {
        setisNotesAdded(notesAdded);
    }

    const showNotes = (index) => {
        setOpenChatIndex(null);
        setOpenNotesIndex(index);
    };

    const userId = useSelector((state) => {
        return state?.userProfileSlice?.userData?.data?.id;
    });

    const showChat = (index) => {
        setOpenChatIndex(index);
        setOpenNotesIndex(null);
    };

    const { id, activeProjects } = useParams();

    console.log(activeProjects)


    let data = [1, 2, 3, 4, 5]

    const fetchProjectData = async () => {
        setLoading(true);
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
                console.log({ body });
                setProjectsDetials(body?.data)
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });

        return data;
    };

    const fetchBiddingData = async () => {
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
            `/bid_listing?project_id=${id}`,
            requestOptions
        )
            .then(async (res) => {
                let body = await res.json();
                console.log({ body });
                setBiddingDetials(body?.data)
            })
            .catch((err) => { });
        return data;
    };


    const handleAward = async (item, index) => {
        try {
            setLoadingIndex(index); // Set loading state for the specific button
            setAwarded(true)
            let url = process.env.REACT_APP_BASE_URL;
            const token = localStorage.getItem('authToken');
            const requestData = {
                project_id: item.project_id,
                bid_id: item.id,
                assigned_to: item.user_id,
            };

            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(requestData),
            };

            const res = await fetch(
                url + `/accept_bid`,
                requestOptions
            );

            const body = await res.json();

            if (body.success === true) {
                toast.success('Bid awarded successfully!', { autoClose: 3000 });
            }

            console.log({ body });
        } catch (err) {
            console.error(err);
        } finally {
            setLoadingIndex(null); // Reset loading state after completion
        }
    };

    useEffect(() => {
        fetchProjectData();
        fetchBiddingData();
    }, [isNotesAdded, awarded]);

    useEffect(() => {
        if (projectsDetials?.user_id == userId) {
            setIsUser(true)
        }
    }, [isUser, projectsDetials]);

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
                {loading ? (
                    <div className="new_project project_name_banner my-5 pt-3">
                        <div className='container mx-auto'>
                            <div className="color_bg mb-0 mx-auto">
                                <div className="text-center loader_style">
                                    <ThreeDots
                                        height="100"
                                        width="120"
                                        radius="9"
                                        color="#000"
                                        ariaLabel="three-dots-loading"
                                        wrapperStyle={{}}
                                        visible={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
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
                                    {(isUser == false && activeProjects !== 'true') && <div className="creat_btn text-center">
                                        <a href={`/submitproposal/${projectsDetials?.id}`}>Submit Purposal For this Project</a>
                                    </div>}
                                </form>
                                {(projectsDetials?.award_bid !== null && activeProjects == 'true') && <h3 className='sub_head'>Awarded Proposals</h3>}
                                {(projectsDetials?.award_bid !== null && activeProjects == 'true') &&
                                    <ul className='proposal_list'>
                                        <li>
                                            <div className='propocal_card dropdown'>
                                                <div className='color_bg'>
                                                    <div className="project_head">
                                                        <h2>{projectsDetials.award_bid?.user?.fname}</h2> <span>Submitted {moment(projectsDetials.award_bid?.created_at).format('MMMM D, YYYY')}</span>
                                                        <div className='row'>
                                                            <div className='col-lg-6'>
                                                                <div className='proposal_content'>
                                                                    <p><strong>Comments: </strong> {projectsDetials.award_bid?.description ? projectsDetials.award_bid?.description : "N/A"} </p>
                                                                </div>
                                                                <div className='proposal_content'>
                                                                    <p className='dropdown-toggle' onClick={() => showChat(index)}><strong>Latest Communication </strong></p>
                                                                    <p>Wasatch Sub Contractors: I think we’ve got the latest things done with what you’re looking for. You: Thanks, guys. This is going to be really great. Wasatch Sub Contractors: That’s great. Yes, we can get back to you with that information as soon as possible.</p>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-6'>
                                                                <div className='proposal_content proposal_detail'>
                                                                    <p className='mb-2'><strong>Proposal Documents</strong></p>
                                                                    <ul className='proposal_files'>
                                                                        <li>
                                                                            <a className='text'>
                                                                                <span><img src="/assets/images/file.png" alt="" /> MyProjectPermit.pdf</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a className='text'>
                                                                                <span><img src="/assets/images/file.png" alt="" /> MyProjectPermit.pdf</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a className='text'>
                                                                                <span><img src="/assets/images/file.png" alt="" /> MyProjectPermit.pdf</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a className='text'>
                                                                                <span><img src="/assets/images/file.png" alt="" /> MyProjectPermit.pdf</span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                    <div className='award_review'>
                                                                        <Ratting bidData={projectsDetials.award_bid} />
                                                                        <div className='notes w-50'>
                                                                            <div className='proposal_content'>
                                                                                <p className='mb-1 dropdown-toggle' onClick={() => showNotes()}><strong>Notes </strong></p>
                                                                                <p className=''>{projectsDetials.award_bid?.latest_notes?.notes ? projectsDetials.award_bid?.latest_notes?.notes : 'N/A'}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {projectsDetials.award_bid?.status == 'hired' ? <div className='create_btn'>
                                                                        <button
                                                                            onClick={() => handleAward(projectsDetials.award_bid)}
                                                                            className='awarded_btn'
                                                                            disabled={true}
                                                                        >
                                                                            {'Awarded'}
                                                                        </button>
                                                                    </div> : projectsDetials.award_bid?.status == 'pending' ? <div className='create_btn'>
                                                                        <button
                                                                            onClick={() => handleAward(projectsDetials.award_bid)}
                                                                            className='globle_btn'
                                                                            disabled={loadingIndex === index}
                                                                        >
                                                                            {'Award Project'}
                                                                        </button>
                                                                    </div> : <div className='create_btn'>
                                                                        <button
                                                                            onClick={() => handleAward(projectsDetials.award_bid)}
                                                                            className='rejected_btn'
                                                                            disabled={true}
                                                                        >
                                                                            {'Rejected'}
                                                                        </button>
                                                                    </div>}

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* {openChatIndex == index && <div className='comunication_content' aria-labelledby="dropdownMenuButton1">
                                                    <div className='proposal_content'>
                                                        <p><strong></strong></p>
                                                        <p className='comunication_pop_text'>Wasatch Sub Contractors: I think we’ve got the latest things done with what you’re looking for. You: Thanks, guys. This is going to be really great. Wasatch Sub Contractors: That’s great. Yes, we can get back to you with that information as soon as possible.</p>
                                                        <ul className='breadcrumbs'>
                                                            <li>
                                                                <a href="">Description</a>
                                                            </li>
                                                            <li>
                                                                <a href="">Biography of Company & Services</a>
                                                            </li>
                                                        </ul>
                                                        <div className='form_input'>
                                                            <input type="text" name="" id="" />
                                                            <button><img src="assets/images/cirlce.png" alt="" /></button>
                                                        </div>
                                                    </div>
                                                </div>}
                                                {openNotesIndex === index && (
                                                    <Notes setOpenNotesIndex={setOpenNotesIndex} bidData={projectsDetials.award_bid} updateFlag={updateFlag} />
                                                )} */}
                                            </div>
                                        </li>
                                    </ul>
                                }
                                {isUser && <div className='submit_banner mt-5'>
                                    {projectsBidding.length > 0 && <h3 className='sub_head'>Submitted Proposals</h3>}
                                    {(!loading && projectsBidding.length == 0) && <h3 className='sub_head text-center'>No Proposals Submitted So Far!</h3>}
                                    <ul className='proposal_list'>
                                        {projectsBidding.map((item, index) => (
                                            <li>
                                                <div className='propocal_card dropdown'>
                                                    <div className='color_bg'>
                                                        <div className="project_head">
                                                            <h2>{item?.user?.fname}</h2> <span>Submitted {moment(item?.created_at).format('MMMM D, YYYY')}</span>
                                                            <div className='row'>
                                                                <div className='col-lg-6'>
                                                                    <div className='proposal_content'>
                                                                        <p><strong>Comments: </strong> {item?.description ? item?.description : "N/A"} </p>
                                                                    </div>
                                                                    <div className='proposal_content'>
                                                                        <p className='dropdown-toggle' onClick={() => showChat(index)}><strong>Latest Communication </strong></p>
                                                                        <p>Wasatch Sub Contractors: I think we’ve got the latest things done with what you’re looking for. You: Thanks, guys. This is going to be really great. Wasatch Sub Contractors: That’s great. Yes, we can get back to you with that information as soon as possible.</p>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-6'>
                                                                    <div className='proposal_content proposal_detail'>
                                                                        <p className='mb-2'><strong>Proposal Documents</strong></p>
                                                                        <ul className='proposal_files'>
                                                                            <li>
                                                                                <a className='text'>
                                                                                    <span><img src="/assets/images/file.png" alt="" /> MyProjectPermit.pdf</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a className='text'>
                                                                                    <span><img src="/assets/images/file.png" alt="" /> MyProjectPermit.pdf</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a className='text'>
                                                                                    <span><img src="/assets/images/file.png" alt="" /> MyProjectPermit.pdf</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a className='text'>
                                                                                    <span><img src="/assets/images/file.png" alt="" /> MyProjectPermit.pdf</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                        <div className='award_review'>
                                                                            <Ratting bidData={item} />
                                                                            <div className='notes w-50'>
                                                                                <div className='proposal_content'>
                                                                                    <p className='mb-1 dropdown-toggle' onClick={() => showNotes(index)}><strong>Notes </strong></p>
                                                                                    <p className=''>{item?.latest_notes?.notes ? item?.latest_notes?.notes : 'N/A'}</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        {item.status == 'hired' ? <div className='create_btn'>
                                                                            <button
                                                                                onClick={() => handleAward(item, index)}
                                                                                className='awarded_btn'
                                                                                disabled={true}
                                                                            >
                                                                                {loadingIndex === index ? <Loader /> : 'Awarded'}
                                                                            </button>
                                                                        </div> : item.status == 'pending' ? <div className='create_btn'>
                                                                            <button
                                                                                onClick={() => handleAward(item, index)}
                                                                                className='globle_btn'
                                                                                disabled={loadingIndex === index}
                                                                            >
                                                                                {loadingIndex === index ? <Loader /> : 'Award Project'}
                                                                            </button>
                                                                        </div> : <div className='create_btn'>
                                                                            <button
                                                                                onClick={() => handleAward(item, index)}
                                                                                className='rejected_btn'
                                                                                disabled={true}
                                                                            >
                                                                                {loadingIndex === index ? <Loader /> : 'Rejected'}
                                                                            </button>
                                                                        </div>}

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {openChatIndex == index && <div className='comunication_content' aria-labelledby="dropdownMenuButton1">
                                                        <div className='proposal_content'>
                                                            <p><strong></strong></p>
                                                            <p className='comunication_pop_text'>Wasatch Sub Contractors: I think we’ve got the latest things done with what you’re looking for. You: Thanks, guys. This is going to be really great. Wasatch Sub Contractors: That’s great. Yes, we can get back to you with that information as soon as possible.</p>
                                                            <ul className='breadcrumbs'>
                                                                <li>
                                                                    <a href="">Description</a>
                                                                </li>
                                                                <li>
                                                                    <a href="">Biography of Company & Services</a>
                                                                </li>
                                                            </ul>
                                                            <div className='form_input'>
                                                                <input type="text" name="" id="" />
                                                                <button><img src="assets/images/cirlce.png" alt="" /></button>
                                                            </div>
                                                        </div>
                                                    </div>}
                                                    {openNotesIndex === index && (
                                                        <Notes setOpenNotesIndex={setOpenNotesIndex} bidData={item} updateFlag={updateFlag} />
                                                    )}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>}
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        </DefaultLayout>
    )
}
