import React, { useEffect, useState } from 'react'
// import { IconButton, Menu, MenuItem } from '@mui/material';
// import { Link, useLocation } from 'react-router-dom';
import DefaultLayout from '../reusableComponents/defaultLayout';
// import Carousel from '../reusableComponents/carousel';


export default function Biderlist() {

    return (
        <DefaultLayout>
            <section class="inner_banner account_banner">
                <div class="inner_plan_banner">
                    <div class="container">
                        <h1>Bid List</h1>
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div class="list_table">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Bidder Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone Number</th>
                                        <th scope="col">Bidding Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="12" className='text-center'>No one has Bid yet</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </DefaultLayout>
    )
}