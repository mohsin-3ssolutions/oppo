import React from 'react';

function Header() {
    return (
        <header>
            <div className="container">
                <div className="header_nav">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#"><img className="img-fluid" src="assets/images/logo.png" alt="" /></a>
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
    );
}

export default Header;