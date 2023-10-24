import React, { useEffect, useState } from 'react'
import DefaultLayout from '../reusableComponents/defaultLayout'
import ReactPaginate from 'react-paginate';
import { ThreeDots } from 'react-loader-spinner';

export default function FindProject() {
    const [projects, setprojects] = useState([]),
        [count, setCount] = useState(0),
        [pageCount, setPageCount] = useState(0),
        [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true)
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
            `/projects_list?page_num_start=1&page_size=20`,
            requestOptions
        )
            .then(async (res) => {
                let body = await res.json();
                console.log(body)
                if (body.data.length > 0) {
                    setCount(body.data.length / 10);
                    setPageCount(body.data.length);
                    setprojects(body?.data)
                }
            })
            .catch((err) => { });
        setLoading(false)
        return data;
    };

    useEffect(() => {
        fetchData()
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
        setprojects(dataFromServer?.data);
    };

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
                    {loading ? (
                        <h3 className="text-center">
                            <ThreeDots
                                height="100"
                                width="120"
                                radius="9"
                                color="#4fa94d"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                visible={true}
                            />
                        </h3>
                    ) :
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
                    }
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
            </section>
        </DefaultLayout>
    )
}
