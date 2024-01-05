import React, { useEffect, useState } from 'react'
import DefaultLayout from '../reusableComponents/defaultLayout'
import ReactPaginate from 'react-paginate';
import { ThreeDots } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { DateCalendar, DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import moment from 'moment';

export default function FindProject() {
    const [projects, setprojects] = useState([]),
        [count, setCount] = useState(0),
        [pageCount, setPageCount] = useState(0),
        [loading, setLoading] = useState(true);
    const [goBack, setGoBack] = useState(false);
    const [selectedScope, setSelectedScope] = useState(''); // Default value
    const [location, setLocation] = useState(''); // Default value
    const [zoningType, setZoningType] = useState(''); // Default value
    const [selectedDate, setSelectedDate] = useState('');

    const [states] = useState([
        "AK",
        "AL",
        "AR",
        "AZ",
        "CA",
        "CO",
        "CT",
        "DE",
        "DC",
        "FL",
        "GA",
        "HI",
        "ID",
        "IL",
        "IN",
        "IA",
        "KS",
        "KY",
        "LA",
        "ME",
        "MD",
        "MA",
        "MI",
        "MN",
        "MS",
        "MO",
        "MT",
        "NE",
        "NV",
        "NH",
        "NJ",
        "NM",
        "NY",
        "NC",
        "ND",
        "OH",
        "OK",
        "OR",
        "PA",
        "RI",
        "SC",
        "SD",
        "TN",
        "TX",
        "UT",
        "VT",
        "TA",
        "VA",
        "WA",
        "WV",
        "WI",
        "WY",
        "AB",
        "BC",
        "MB",
        "NB",
        "NL",
        "NS",
        "NT",
        "NU",
        "ON",
        "PE",
        "QC",
        "SK",
    ]);

    const handleScope = (event) => {
        setSelectedScope(event.target.value);
    };

    const handleLocation = (event) => {
        setLocation(event.target.value);
    };

    const handZoningType = (event) => {
        setZoningType(event.target.value);
    };

    const handleDateChange = (date) => {
        const formattedDate = moment(date.$d).format('YYYY-MM-DD');
        setSelectedDate(formattedDate);
    };

    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                let url = process.env.REACT_APP_BASE_URL;
                const token = localStorage.getItem('authToken');
                const queryString = `?page_num_start=1&page_size=20&identify_scope=${selectedScope}&services=${zoningType}&licensed_states_of_work=${location}&timeline=${selectedDate}`;

                const requestOptions = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };

                const response = await fetch(
                    url +
                    `/projects_list${queryString}`,
                    requestOptions
                );
                const data = await response.json();

                if (data.data.projects.length > 0) {
                    setCount(data.data.projectsCount / 10);
                    setPageCount(data.data.projectsCount);
                    setprojects(data?.data?.projects);
                } else {
                    setCount(0);
                    setPageCount(0);
                    setprojects([]);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [zoningType, selectedDate, selectedScope, location]);

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

    useEffect(() => {
        if (goBack) {
            navigate(-1);
        }
    }, [goBack])


    console.log(selectedDate)
    console.log(selectedScope)
    console.log(location)
    console.log(zoningType)

    return (
        <DefaultLayout>
            <section className="inner_banner account_banner">
                <div className="inner_plan_banner">
                    <div className="container">
                        <h1>Search Projects</h1>
                    </div>
                </div>
            </section>

            <section className="find_project_banner">
                <div className="container">
                    <button className='back-btn mb-3' onClick={() => { navigate(-1), setGoBack(true) }}>Go Back</button>

                    <div className="search_form filter_project">
                        <p>Search Filter</p>
                        <br />
                        <div className='d-flex justify-content-between'>
                            <select
                                id="timeUnit"
                                className="form-control me-3"
                                value={selectedScope}
                                onChange={handleScope}
                            >
                                <option value="">Scope of work</option>
                                <option value="site_preparation">Site Preparation</option>
                                <option value="concrete">Concrete</option>
                                <option value="structural_and_framing">Structural and framing</option>
                                <option value="roofing_siding_and_sheet_metal_work">Roofing, siding, and sheet metal work</option>
                                <option value="plumbing">Plumbing</option>
                                <option value="hvac">HVAC</option>
                                <option value="electrical">Electrical</option>
                                <option value="carpentry">Carpentry</option>
                                <option value="drywall">Drywall</option>
                                <option value="painting_and_paper_hanging">Painting and paper hanging</option>
                            </select>

                            <select
                                id="state"
                                className="form-control mx-3"
                                value={location}
                                onChange={handleLocation}
                            >
                                <option value="">Location</option>
                                {states.length &&
                                    states.map((state, idx) => {
                                        return (
                                            <option value={state} key={idx}>
                                                {state}
                                            </option>
                                        );
                                    })}
                            </select>
                            <select
                                id="zoningtype"
                                className="form-control mx-3"
                                value={zoningType}
                                onChange={handZoningType}
                            >
                                <option value="">Services</option>
                                <option value="commercial">Commercial</option>
                                <option value="residential">Residential</option>
                                <option value="federal">Federal</option>
                                <option value="road_construction_and_industrial">Road Construction & Industrial</option>
                            </select>

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker value={selectedDate} onChange={handleDateChange} />
                            </LocalizationProvider>
                        </div>

                    </div>

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
                                                    <h2 key={index} onClick={() => { navigate(`/project-details/${data.id}`) }}>
                                                        {data.project_name}
                                                        <span>{moment(data.project_start_date).format('MM-DD-YYYY')}</span>
                                                    </h2>
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
        </DefaultLayout>
    )
}