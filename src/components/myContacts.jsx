import React from 'react'

export default function MyContacts() {
    return (
        <div className="tab-pane fade" id="mycontact" role="tabpanel" aria-labelledby="contact-tab">
            <div className="about_projects">
                <div className="color_bg">
                    <div className="contact_list">
                        <div className="search_form">
                            <form action="">
                                <input type="search" placeholder="Search" />
                                <button><img src="assets/images/search.png" alt="" /></button>
                            </form>
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mike Johnson</td>
                                            <td>Mike’s Contractors</td>
                                            <td>801-222-2323</td>
                                            <td>@mike@johnsoncontractors.com</td>
                                        </tr>
                                        <tr>
                                            <td>Trevor Smith</td>
                                            <td>Trevor Construction</td>
                                            <td>777-282-2836</td>
                                            <td>trev@trevorconstruction.com</td>
                                        </tr>
                                        <tr>
                                            <td>Lance Williams</td>
                                            <td>Lance Tiling</td>
                                            <td>988-222-3764</td>
                                            <td>lance@lancetitling.com</td>
                                        </tr>
                                        <tr>
                                            <td>Jon Seenah</td>
                                            <td>Seenah Roofing</td>
                                            <td>664-122-1222</td>
                                            <td>Jon@seenahroofing.com</td>
                                        </tr>
                                        <tr>
                                            <td>Ralph Loodah</td>
                                            <td>Ralph Plumbing</td>
                                            <td>111-222-3333</td>
                                            <td>ralphie@imyourplumber.com</td>
                                        </tr>
                                        <tr>
                                            <td>Bob Jones</td>
                                            <td>Jones Sewer</td>
                                            <td>211-667-8898</td>
                                            <td>bob@isuedtoddforagate.com</td>
                                        </tr>
                                        <tr>
                                            <td>Davey Skeeter</td>
                                            <td>Davey Electrical</td>
                                            <td>555-454-3443</td>
                                            <td>davey@getshockedelectrical.com</td>
                                        </tr>
                                        <tr>
                                            <td>Spencer Williams</td>
                                            <td>Spencer Drywall</td>
                                            <td>233-444-3333</td>
                                            <td>spencer@drywallexperts.com</td>
                                        </tr>
                                        <tr>
                                            <td>Garrett Bogham</td>
                                            <td>Bogham Paint</td>
                                            <td>777-282-2836</td>
                                            <td>bogham@boghampaint.com</td>
                                        </tr>
                                        <tr>
                                            <td>Lisa Warren</td>
                                            <td>Lisa’s Interirors</td>
                                            <td>988-222-3764</td>
                                            <td>Lisa@imakestuffcuteinfside.com</td>
                                        </tr>
                                        <tr>
                                            <td>Escobar Pablito</td>
                                            <td>Pablito Contractors</td>
                                            <td>664-122-1222</td>
                                            <td>pablito@contractorsforhirepab.com</td>
                                        </tr>
                                        <tr>
                                            <td>Sandy Coleman</td>
                                            <td>Sandy Construction</td>
                                            <td>555-454-3443</td>
                                            <td>sandy@sandycolemanconst.com</td>
                                        </tr>
                                        <tr>
                                            <td>Roger Handgrenade</td>
                                            <td>Painting Handgrenades</td>
                                            <td>801-222-2323</td>
                                            <td>handy@handgrenadepaint.com</td>
                                        </tr>
                                        <tr>
                                            <td>Wilford Wilcox</td>
                                            <td>Wilford Tiling</td>
                                            <td>555-454-3443</td>
                                            <td>wilford@tilingexpertsgonenuts.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
