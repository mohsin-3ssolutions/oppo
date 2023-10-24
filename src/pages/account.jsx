import React, { useState, useEffect } from 'react';
import DefaultLayout from '../reusableComponents/defaultLayout';
import OutForBid from '../components/outForBid';
import ActiveProjects from '../components/activeProjects';
import GenttChart from '../components/genttChart';
import MyContacts from '../components/myContacts';
import Profile from '../components/profile';
import Welcome from '../reusableComponents/welcome';

function Account() {

    const [showProfile, setShowProfile] = useState(true)

    return (
        <>
            <DefaultLayout>
                <Welcome />
                <section className="gc_homebanner">
                    <div className="container">
                        <div className="globle_tabs">
                            <ul className="nav nav-tabs" id="gcTab" role="tablist" onClick={() => { setShowProfile(false) }}>
                                <li role="presentation">
                                    <a id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Out for Bid</a>
                                </li>
                                <li role="presentation">
                                    <a id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Active Projects</a>
                                </li>
                                <li role="presentation">
                                    <a id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">General Contractor Schedule</a>
                                </li>
                                <li role="presentation">
                                    <a id="contact-tab" data-bs-toggle="tab" data-bs-target="#mycontact" type="button" role="tab" aria-controls="contact" aria-selected="false">My Contacts</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="gcTabContent">
                                <OutForBid />

                                <ActiveProjects />

                                <GenttChart />

                                <MyContacts />
                            </div>
                        </div>
                    </div>
                </section>

                {showProfile && <Profile />}

            </DefaultLayout>

        </>
    );
}

export default Account;
