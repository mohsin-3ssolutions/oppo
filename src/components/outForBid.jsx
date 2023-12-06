import React, { useState, useEffect } from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { ThreeDots } from 'react-loader-spinner';


export default function OutForBid() {
    let navigate = useNavigate()
    const [projects, setprojects] = useState([]),
        [count, setCount] = useState(0),
        [pageCount, setPageCount] = useState(0),
        [loading, setLoading] = useState(true),
        [error, setError] = useState(false);
    const fetchData = async () => {
        setLoading(true); // Start loading

        let url = process.env.REACT_APP_BASE_URL;
        const token = localStorage.getItem('authToken');
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const response = await fetch(
                url + `/my_project_list?page_num_start=1&page_size=10`,
                requestOptions
            );

            if (response.ok) {
                const data = await response.json();

                if (data?.data?.projects.length > 0) {
                    setCount(data.data.projectsCount / 10);
                    setPageCount(data.data.projectsCount);
                    setprojects(data.data.projects);
                } else {
                    setError(true); // Set an error state if no data is available
                }
            } else {
                setError(true); // Set an error state if the response is not ok
            }
            setLoading(false); // Stop loading
        } catch (error) {
            setError(true); // Set an error state if an error occurs
            setLoading(false); // Stop loading
        }
    };
    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [])

    const fetchPaginatedData = async (currentPage) => {
        let url = process.env.REACT_APP_BASE_URL;
        setLoading(true)
        const token = localStorage.getItem('authToken');
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        const res = await fetch(
            url +
            `/my_project_list?page_num_start=${currentPage}&page_size=10`,
            requestOptions
        );
        const data = await res.json();
        setLoading(false)
        return data;
    };

    const handlePageClick = async (data) => {
        let currentPage = data.selected + 1;
        const dataFromServer = await fetchPaginatedData(currentPage);
        setprojects(dataFromServer?.data?.projects);
    };



    const options = [
        { value: '10%', color: "red" },
        { value: '20%', color: "red" },
        { value: '30%', color: "red" },
        { value: '40%', color: "red" },
        { value: '50%', color: "red" },
        { value: '60%', color: "red" },
        { value: '70%', color: "red" },
        { value: '80%', color: "red" },
        { value: '90%', color: "red" },
        { value: '100%', color: "red" }
    ];

    const [jobStatus, setJobstatus] = useState('10%');
    const [anchorEl, setAnchorEl] = useState(null);
    const ITEM_HEIGHT = 48;

    const open = Boolean(anchorEl);

    const [selectedOptions, setSelectedOptions] = useState({});

    const handleClick = (event, project) => {
        setSelectedOptions({ ...selectedOptions, [project.id]: event.currentTarget });
    };

    const handleClose = (event, project) => {
        if (event) {
            // If an event object is provided, set the selected value for the specific project
            const updatedProjects = projects.map((p) =>
                p === project ? { ...p, jobStatus: event } : p
            );
            setprojects(updatedProjects);
        }
        // Close the menu for the specific project
        setSelectedOptions({ ...selectedOptions, [project.id]: null });
    };


    return (
        // <div > //className="tab-pane fade bid_tab" id="home" role="tabpanel" aria-labelledby="home-tab"
        <div className='container'>
            <div className="about_projects">
                {loading ?
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
                    </div> : (
                        (projects?.length == 0) ?
                            <div>
                                <div className="text-center">
                                    <h3>No projects to show.</h3>
                                </div>
                            </div> :

                            <div className="color_bg">
                                <ul className="project_boxes">
                                    {projects.map((project, index) => (
                                        <li>
                                            <div className="project_detail" key={index}>
                                                <div className="project_head">
                                                    <h2 onClick={() => { navigate(`/project-details/${project.id}`) }} className='cursor-pointer' >{project.project_name}<span>{project.project_start_date}</span></h2>
                                                    <ul className="project_status">
                                                        {/* <li>
                                                                <div className='list_btn'>
                                                                    <a href=""><img src="assets/images/list.gif" alt="" /></a>
                                                                </div>
                                                            </li> */}
                                                        <li>
                                                            <div>
                                                                <p
                                                                    aria-label="more"
                                                                    id="long-button"
                                                                    aria-controls={open ? 'long-menu' : undefined}
                                                                    aria-expanded={open ? 'true' : undefined}
                                                                    aria-haspopup="true"
                                                                    onClick={(e) => handleClick(e, project)}
                                                                    className='cursor-pointer'
                                                                >
                                                                    Job Status: <span>{project.jobStatus}</span>
                                                                </p>
                                                                <Menu
                                                                    id="long-menu"
                                                                    MenuListProps={{
                                                                        'aria-labelledby': 'long-button',
                                                                    }}
                                                                    anchorEl={selectedOptions[project.id]}
                                                                    open={Boolean(selectedOptions[project.id])}
                                                                    onClose={() => handleClose(options[0].value, project)}
                                                                    PaperProps={{
                                                                        style: {
                                                                            maxHeight: ITEM_HEIGHT * 4.5,
                                                                            width: '20ch',
                                                                        },
                                                                    }}
                                                                >
                                                                    {options.map((option) => (
                                                                        <MenuItem
                                                                            key={option.value}
                                                                            selected={option.value === project.jobStatus}
                                                                            onClick={() => { handleClose(option.value, project) }}
                                                                        >
                                                                            {option.value}
                                                                        </MenuItem>
                                                                    ))}
                                                                </Menu>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <p className="view_count mt-2"><img src="/assets/images/view.png" alt="" /><span>{project.bids_count}</span></p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <p><strong>Project Description:</strong>{project.project_description}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                    )}
                {projects.length > 0 && <ReactPaginate
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    pageCount={count}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"item-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"item-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"item-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"item-link"}
                    activeClassName={"active"}
                />}


                <div className="creat_btn text-center mt-5">
                    <Link to="/find-a-project" className='me-4'>Find a Project</Link>
                    <a href="/post-new-project">Post a Project</a>
                </div>
            </div>
        </div>
    )
}
