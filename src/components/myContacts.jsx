import React, { useEffect, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner';
import ReactPaginate from 'react-paginate';
import AddContacts from './addContacts';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { toast } from 'react-toastify';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function MyContacts() {
    const [contact, setContact] = useState([]),
        [search, setSearch] = useState(''),
        [count, setCount] = useState(0),
        [pageCount, setPageCount] = useState(0),
        [loading, setLoading] = useState(false),
        [parentData, setParentData] = useState(null),
        [modalType, setModalType] = useState(''),
        [dataToUpdate, setDataToUpdate] = useState(null);

    const receiveDataFromAddContacts = (data) => {
        setContact((prevContact) => [data, ...prevContact]);
    };
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
            `/contact_list?search=${search}&page_num_start=1&page_size=10`,
            requestOptions
        )
            .then(async (res) => {
                let body = await res.json();
                console.log(body)
                if (body.data.contact.length > 0) {
                    setCount(body.data.totalContact / 10);
                    setPageCount(body.data.totalContact);
                    setContact(body?.data.contact)
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
            `/contact_list?search=${search}&page_num_start=${currentPage}&page_size=10`,
            requestOptions
        );
        const data = await res.json();
        setLoading(false)
        return data;
    };

    const handlePageClick = async (data) => {
        let currentPage = data.selected + 1;
        const dataFromServer = await fetchPaginatedData(currentPage);
        setContact(dataFromServer?.data.contact);
    };

    useEffect(() => {
        fetchData()
    }, [search])

    const handleDelete = (contact) => {
        console.log(contact);

        let url = process.env.REACT_APP_BASE_URL;
        setLoading(true);
        const token = localStorage.getItem('authToken');
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        fetch(url + `/delete_contact/${contact.id}`, requestOptions)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("Error deleting contact");
                }
            })
            .then(() => {
                // Assuming the deletion was successful, you can now remove the contact from the state.
                // Create a new contact array excluding the deleted contact.
                setContact((prevContact) => prevContact.filter(item => item.id !== contact.id));
                setLoading(false);
                toast.success('Contact added successfully!', { autoClose: 3000 });
            })
            .catch((error) => {
                console.error("Error deleting contact:", error);
                setLoading(false);
            });
    };

    const handleUpdate = (contact) => {
        setModalType('update')
        setDataToUpdate(contact)
    }

    const updateContact = (updatedContact) => {
        setContact((prevContacts) => {
            return prevContacts.map((contact) => {
                if (contact.id === updatedContact.id) {
                    return updatedContact;
                }
                return contact;
            });
        });
    };

    return (
        // <div className="tab-pane fade contact_tab" id="mycontact" role="tabpanel" aria-labelledby="contact-tab">
        <div className='container'>
            <div className="about_projects">
                <div className="color_bg">
                    <div className="contact_list">
                        <div className='add_contact'>
                            <button type="button" class="globle_submit" data-bs-toggle="modal" data-bs-target="#addContacts" onClick={() => { setModalType('add') }}>
                                Add Contacts
                            </button>
                            <div className="search_form">
                                <form action="">
                                    <input
                                        type="search"
                                        placeholder="Search"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                    {/* <button><img src="assets/images/search.png" alt="" /></button> */}
                                </form>
                            </div>
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
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {contact.length == 0 && <tr>
                                            <td className="text-center loader_style " colspan="12">
                                                <h2>Add Contact to start connecting! No contacts yet.</h2>
                                                <h3>Let's build your network</h3>
                                            </td>
                                        </tr>
                                        }

                                        {loading ? (
                                            <tr>
                                                <td className="text-center loader_style " colspan="12">
                                                    <ThreeDots
                                                        height="100"
                                                        width="120"
                                                        radius="9"
                                                        color="#000"
                                                        ariaLabel="three-dots-loading"
                                                        wrapperStyle={{}}
                                                        visible={true}
                                                    />
                                                </td>
                                            </tr>
                                        ) : (
                                            <>
                                                {contact.map((contact, index) => (
                                                    <tr key={index}>
                                                        <td>{contact?.name}</td>
                                                        <td>{contact?.business_name}</td>
                                                        <td>{contact?.phone_number}</td>
                                                        <td>{contact?.email}</td>
                                                        <td><div class="dropdown">
                                                            <div type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <MoreVertIcon />
                                                            </div>
                                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                                <li><button class="dropdown-item" type="button" data-bs-toggle="modal" data-bs-target="#addContacts" onClick={() => { handleUpdate(contact) }}><EditIcon color='gray' /> Update</button></li>
                                                                <li><button class="dropdown-item" type="button" onClick={() => { handleDelete(contact) }}><DeleteIcon color='gray' /> Delete</button></li>
                                                            </ul>
                                                        </div></td>
                                                    </tr>
                                                ))}
                                            </>
                                        )}
                                    </tbody>
                                </table>
                                {contact.length > 0 && <ReactPaginate
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

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AddContacts onDataReceived={receiveDataFromAddContacts} modalType={modalType} dataToUpdate={dataToUpdate} updateContact={updateContact} />
        </div>
    )
}
