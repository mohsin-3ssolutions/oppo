import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from "../assets/images/logo.png"

function Dashboard({ user, isAuthenticated }) {
    const navigate = useNavigate();

    useEffect(() => {
        console.log("isAuthenticated ::::::::::", isAuthenticated);
        ((!isAuthenticated) && navigate('/signin'));
        const paid = localStorage.getItem('paid')?.length ? true : false;
        debugger
        ((isAuthenticated && paid) ? navigate('/dashboard') : navigate('/payment'));
    }, [user]);

    return (
        <>
            <header>
                <div className="container">
                    <div className="header_nav">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="#"><img className="img-fluid" src={Logo} alt=""/></a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse navigation" id="navbarNavDropdown">
                                    <ul className="navbar-nav">
                                        <li>
                                            <a aria-current="page" href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">Our Services</a>
                                        </li>
                                        <li>
                                            <a href="#">Our Story</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="#">My Account</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            <section className="title_head">
                <div className="container">
                    <h1>Oppo Software Marketing Language</h1>
                </div>
            </section>
            <section className="language_banner">
                <div className="container">
                    <div className="market_card_list">
                        <div className="market_card">
                            <div className="market_card_img">
                                <img src="" alt=""/>
                            </div>
                            <div className="market_card_content">
                                <p>Marketing info or other sales info and pictures. Marketing info or other sales info and pictures. Marketing info or other sales info and pictures. Marketing info or other sales info and pictures. Marketing info or other sales info and pictures. Marketing info or other sales info and pictures. Marketing info or other sales info and pictures. Marketing info or other sales info and pictures. Marketing info or other sales info and pictures. Marketing info or other sales info and pictures. Marketing info or other sales info and pictures. Marketing info or other sales info and pictures.</p>
                            </div>
                            <div className="creat_btn">
                                <a href="">Create An Account</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <p>© 2022 All Rights Reserved</p>
                </div>
            </footer>
        </>
    );
}

export default Dashboard;
