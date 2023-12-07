import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { ThreeDots } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';

export default function FindAProject() {
    const [projects, setprojects] = useState([]),
        [count, setCount] = useState(0),
        [pageCount, setPageCount] = useState(0),
        [loading, setLoading] = useState(true);
    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
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

                const response = await fetch(
                    url +
                    `/projects_list?page_num_start=1&page_size=20`,
                    requestOptions
                );
                const data = await response.json();

                if (data.data.projects.length > 0) {
                    setCount(data.data.projectsCount / 10);
                    setPageCount(data.data.projectsCount);
                    setprojects(data?.data?.projects);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


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
            `/projects_list?page_num_start=${currentPage}&page_size=10`,
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

    return (
        <section className="find_project_banner">
            <div className="container">
                {loading ? (
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
                ) : (
                    projects.length === 0 ? (
                        <div className="text-center loader_style " colSpan="12">
                            <h2>There are no Projects to show you right now!</h2>
                        </div>
                    ) : (
                        <ul>
                            {
                                projects.map((data, index) => (
                                    <li>
                                        <div className="project_detail">
                                            <div className="project_head">
                                                <h2 key={index} onClick={() => { navigate(`/project-details/${data.id}`) }}>{data.project_name}<span>{data.project_start_date}</span></h2>
                                                <ul className="project_status">
                                                    <li>
                                                        {/* <div className='bid_now'>
                                                                <button className='bid_now_btn' data-bs-toggle="modal" data-bs-target="#list-modal"><img src="assets/images/auction.png" alt="" />Bid Now</button>
                                                            </div> */}
                                                        <div className='bid_now'>
                                                            <Link to={`/submitproposal/${data?.id}`} className='bid_now_btn'><img src="assets/images/auction.png" alt="" />Bid Now</Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="view_count"><img src="assets/images/view.png" alt="" /><span>{data.bids_count}</span></p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p><strong>Project Description: </strong> {data.project_description}</p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    )
                )}


                <ReactPaginate
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
                />

            </div>
            {/* <!-- Modal --> */}
            <div className="modal fade bid_modal" id="list-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='add_bid'>
                                <h2 className='sub_head text-center'>Bid Now</h2>
                                <div className='form_style'>
                                    <form action="">
                                        <div className='mb-3'>
                                            <label htmlFor="" className='form-label'>Description</label>
                                            <textarea name="" className='form-control' id="" cols="30" rows="10"></textarea>
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="" className='form-label'>Upload File</label>
                                            <input type="file" className='form-control' />
                                        </div>
                                        <div className='black_btn'>
                                            <button type="button" className='submit_btn'>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}