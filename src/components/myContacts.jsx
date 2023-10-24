import React, { useEffect, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner';
import ReactPaginate from 'react-paginate';

export default function MyContacts() {
    const [contact, setContact] = useState([]),
        [search, setSearch] = useState(''),
        [count, setCount] = useState(0),
        [pageCount, setPageCount] = useState(0),
        [loading, setLoading] = useState(false);

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
            `/users?search=${search}&page_num_start=1&page_size=20`,
            requestOptions
        )
            .then(async (res) => {
                let body = await res.json();
                console.log(body)
                if (body.data.length > 0) {
                    setCount(body.data.length / 10);
                    setPageCount(body.data.length);
                    setContact(body?.data)
                }
            })
            .catch((err) => { });
        return data;
    };


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
            `/users?search=${search}&page_num_start=${currentPage}&page_size=20`,
            requestOptions
        );
        const data = await res.json();
        setLoading(false)
        return data;
    };

    const handlePageClick = async (data) => {
        let currentPage = data.selected + 1;
        const dataFromServer = await fetchPaginatedData(currentPage);
        setContact(dataFromServer?.data);
    };

    useEffect(() => {
        fetchData()
    }, [search])

    return (
        <div className="tab-pane fade" id="mycontact" role="tabpanel" aria-labelledby="contact-tab">
            <div className="about_projects">
                <div className="color_bg">
                    <div className="contact_list">
                        <div className="search_form">
                            <form action="">
                                <input
                                    type="search"
                                    placeholder="Search"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <button><img src="assets/images/search.png" alt="" /></button>
                            </form>
                        </div>
                        <div className="list_table">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Business Name</th>
                                            <th scope="col">Phone Number</th>
                                            <th scope="col">Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
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
                                        ) : (
                                            <>
                                                {contact.map((contact, index) => (
                                                    <tr key={index}>
                                                        <td>{contact?.fname}</td>
                                                        <td>{contact?.company_name}</td>
                                                        <td>{contact?.phone}</td>
                                                        <td>{contact?.email}</td>
                                                    </tr>
                                                ))}
                                            </>
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
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
