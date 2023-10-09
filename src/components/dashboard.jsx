import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DefaultLayout from './reusableComponents/defaultLayout';

function Dashboard({ user, isAuthenticated, paymentSripe }) {
    const navigate = useNavigate();

    useEffect(() => {
        console.log("isAuthenticated ::::::::::", isAuthenticated);
        ((!isAuthenticated) && navigate('/signin'));
        { paymentSripe == "" && navigate('/payment') }
        // const paid = localStorage.getItem('paid')?.length ? true : false;
        // ((isAuthenticated && paid) ? navigate('/dashboard') : navigate('/payment'));
    }, [user]);

    return (
        <>
            <DefaultLayout>
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
                                    <img src="" alt="" />
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
            </DefaultLayout>
        </>
    );
}

export default Dashboard;
