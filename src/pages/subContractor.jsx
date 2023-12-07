import React, { useEffect, useState } from 'react'
import DefaultLayout from '../reusableComponents/defaultLayout'
import Welcome from '../reusableComponents/welcome';
import PendingProjects from '../components/account-components/pendingProjects';
import ActiveProjects from '../components/account-components/activeProjects';
import GenttChart from '../components/genttChart';
import Profile from '../components/profile';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import FindProject from './findProject';
import FindAProject from '../components/account-components/findAProject';
// import { Link } from 'react-router-dom'

export default function SubContractor() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(0);
    const navigate = useNavigate();
    const { tabId } = useParams();
    useEffect(() => {
        const initialTabId = (0 <= tabId && tabId <= 4) ? parseInt(tabId) : 0;
        setActiveTab(initialTabId);
    }, [activeTab])

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        navigate(`/account/${tabId}`);
    };

    console.log(activeTab, 'activeTab')
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
                                        onClick={() => handleTabChange(1)}
                                        className={`nav-link ${activeTab === 1 ? 'active' : ''}`}
                                    >
                                        Pending Projects
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a
                                        onClick={() => handleTabChange(2)}
                                        className={`nav-link ${activeTab === 2 ? 'active' : ''}`}
                                    >
                                        Active Projects
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a
                                        onClick={() => handleTabChange(3)}
                                        className={`nav-link ${activeTab === 3 ? 'active' : ''}`}
                                    >
                                        General Contractor Schedule
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a
                                        onClick={() => handleTabChange(4)}
                                        className={`nav-link ${activeTab === 4 ? 'active' : ''}`}
                                    >
                                        Find Project
                                    </a>
                                </li>

                            </ul>
                            <div className="tab-content" id="gcTabContent">
                                {
                                    activeTab === 0 ? <Profile /> :
                                        activeTab === 1 ? <PendingProjects /> :
                                            activeTab === 2 ? <ActiveProjects /> :
                                                activeTab === 3 ? <GenttChart /> :
                                                    activeTab === 4 && <FindAProject />
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </DefaultLayout>
        </>

    )
}
