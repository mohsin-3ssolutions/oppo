import React, { useState, useEffect } from 'react';
import DefaultLayout from '../reusableComponents/defaultLayout';
import OutForBid from '../components/outForBid';
import ActiveProjects from '../components/activeProjects';
import GenttChart from '../components/genttChart';
import MyContacts from '../components/myContacts';
import Profile from '../components/profile';
import Welcome from '../reusableComponents/welcome';
import { useLocation, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

function Account() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(1);
    const [showProfile, setShowProfile] = useState(true);
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    
    useEffect(() => {
        const initialTabId = parseInt(queryParams.get('tabId')) || 0; // Get initial tabId from the URL query or default to 1
        setActiveTab(initialTabId);
    }, [activeTab])

    // Function to handle tab changes
    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        navigate(`/account?tabId=${tabId}`);
    };
    // const userData = useSelector((state) => {
    //     return state?.userProfileSlice?.userData?.data;
    // });


    // const [showProfile, setShowProfile] = useState(true)
    // console.log(userData, '=========')


    return (
        <>
            <DefaultLayout>
                <Welcome />
                <section className="gc_homebanner">
                    <div className="container">
                        <div className="globle_tabs">
                        <ul className="nav nav-tabs" id="gcTab" role="tablist">
                                <li role="presentation">
                                    <a
                                        // id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"
                                        onClick={() => handleTabChange(1)}
                                        className={`nav-link ${activeTab === 1 ? 'active' : ''}`}
                                    >
                                        Out for Bid
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a
                                        // id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"
                                        onClick={() => handleTabChange(2)}
                                        className={`nav-link ${activeTab === 2 ? 'active' : ''}`}
                                    >
                                        Active Projects
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a
                                        // id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false"
                                        onClick={() => handleTabChange(3)}
                                        className={`nav-link ${activeTab === 3 ? 'active' : ''}`}
                                    >
                                        General Contractor Schedule
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a
                                        // id="contact-tab" data-bs-toggle="tab" data-bs-target="#mycontact" type="button" role="tab" aria-controls="contact" aria-selected="false"
                                        onClick={() => handleTabChange(4)}
                                        className={`nav-link ${activeTab === 4 ? 'active' : ''}`}
                                    >
                                        My Contacts
                                    </a>
                                </li>
                            </ul>

                            <div className="tab-content" id="gcTabContent">
                            </div>
                        </div>
                    </div>
                </section>

                {
                activeTab === 0 ? <Profile />:
                activeTab === 1 ? <OutForBid />:
                activeTab === 2 ? <ActiveProjects />:
                activeTab === 3 ? <GenttChart />:
                activeTab === 4 && <MyContacts />
                }
                 {/* {(showProfile && userData) && <Profile userData={userData} />} */}

            </DefaultLayout>

        </>
    );
}

export default Account;
