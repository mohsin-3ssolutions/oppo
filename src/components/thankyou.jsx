import React from 'react';
import Logo from "../assets/images/logo.png"

function Signin({ isAuthenticated, setIsAuthenticated }) {
    
    return (
        <>
            <header>
                <div className="container">
                    <div className="header_nav">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="#"><img className="img-fluid" src={Logo} alt="" /></a>
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
                    <h1>Thank You!</h1>
                </div>
            </section>


            <section className="pay_banner thanku_banner">
                <div className="container">
                    <div className="form_style">
                        <div className="color_bg">
                            <div className="sign_up">
                                <h3>Payment Details</h3>
                                <p className="payment_price"><span className="pe-1">1</span>Owner Account…….…… <span>$29.99/mon</span></p>
                                <p className="thnaku_message">Your payment was successful! Welcome to Oppo!
                                    Begin using your account now!</p>
                                <div className="creat_btn">
                                    <a href="/account">Go to Dashboard</a>
                                </div>
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

export default Signin;




// function Header() {
//     return (
//         <header>
//             <div classNameName="container">
//                 <div classNameName="header_nav">
//                     <nav classNameName="navbar navbar-expand-lg navbar-light">
//                         <div classNameName="container-fluid">
//                             <a classNameName="navbar-brand" href="#"><img classNameName="img-fluid" src="assets/images/logo.png" alt="" /></a>
//                             <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//                                 <span classNameName="navbar-toggler-icon"></span>
//                             </button>
//                             <div classNameName="collapse navbar-collapse navigation" id="navbarNavDropdown">
//                                 <ul classNameName="navbar-nav">
//                                     <li>
//                                         <a aria-current="page" href="#">Home</a>
//                                     </li>
//                                     <li>
//                                         <a href="#">Our Services</a>
//                                     </li>
//                                     <li>
//                                         <a href="#">Our Story</a>
//                                     </li>
//                                     <li>
//                                         <a href="#">Contact Us</a>
//                                     </li>
//                                     <li>
//                                         <a href="#">My Account</a>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </nav>
//                 </div>
//             </div>
//         </header>
//     );
// }

// function Signin() {
//     return (
//         <section classNameName="title_head">
//             <div classNameName="container">
//                 <h1>Login</h1>
//                 <div classNameName="color_bg">
//                     <div classNameName="sign_up">
//                         <form action="">
//                             <div classNameName="mb-3">
//                                 <label htmlFor="exampleFormControlInput12" classNameName="form-label">Email Address</label>
//                                 <input type="Email" classNameName="form-control" id="exampleFormControlInput12" placeholder="peterehat+oppotest@gmail.com" />
//                             </div>
//                             <div classNameName="mb-3 password-group">
//                                 <label htmlFor="exampleFormControlInput13" classNameName="form-label">Password</label>
//                                 <input type="password" classNameName="form-control" id="exampleFormControlInput13" placeholder="**************" />
//                             </div>
//                             <div classNameName="submit_btn">
//                                 <input type="submit" value="Create Account" />
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// function Footer() {
//     return (
//         <footer>
//             <div classNameName="container">
//                 <p>© 2022 All Rights Reserved</p>
//             </div>
//         </footer>
//     );
// }

// function App() {
//     return (
//         <div>
//             <Header />
//             <Signin />
//             <Footer />
//         </div>
//     );
// }