import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { verifyAuthToken } from '../utils';
import { fetchUserProfileDetails } from '../store/userProfileSlice/userProfileSlice';

export default function Welcome() {
    const dispatch = useDispatch();
    const userData = useSelector((state) => {
        return state?.userProfileSlice?.userData?.data;
    });
    // useEffect(() => {
    //     dispatch(verifyAuthToken(fetchUserProfileDetails))
    // }, [dispatch]);
    return (
        <>
            <section className="inner_banner account_banner">
                <div className="inner_plan_banner">
                    <div className="container">
                        <h1>Welcome Back <span> {userData?.fname}</span></h1>
                    </div>
                </div>
            </section>
        </>
    )
}
