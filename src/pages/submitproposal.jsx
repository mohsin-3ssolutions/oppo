import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { ColorRing } from 'react-loader-spinner';

import DefaultLayout from '../reusableComponents/defaultLayout'

const AddMoreLogo = 'assets/images/pluscircle.png';

export default function Submitproposal() {
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();
    const { pid } = useParams();

    const initialValues = {
        plan_doc: null,
        additional_doc: null,
        purposal_description: '',
    };

    const validationSchema = Yup.object().shape({
        plan_doc: Yup.mixed()
            .required('Document is required')
            .test('fileType', 'Only PDF files are allowed', (value) => {
                if (value) {
                    const allowedExtensions = /(\.pdf)$/i;
                    return allowedExtensions.test(value);
                }
                // No file provided, so it's valid (handled by required validation)
                return true;
            }),
    });

    const submitPurposal = async (values) => {
        setLoading(true);
        console.log({ values, pid });

        let url = process.env.REACT_APP_BASE_URL;
        const token = localStorage.getItem('authToken');

        if (token) {
            try {
                let formData = new FormData();
                formData.append('plan_doc', values.plan_doc);
                formData.append("project_id", pid);
                values.project_description?.length && formData.append('description', values.project_description);
                values.additional_doc?.length && formData.append('additional_doc', values.additional_doc);

                const requestOptions = {
                    method: "POST",
                    headers: {
                        // "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: formData,
                };
                const data = fetch(
                    url +
                    `/create_bid`,
                    requestOptions
                ).then((response) => response.json())
                    .then(({ data, message, success }) => {
                        if (success) {
                            toast.success('Purposal submitted successfully!', { autoClose: 3000 });
                            navigate('/find-a-project')
                        } else {
                            toast.error('Something went wrong!' + message, { autoClose: 3000 });
                        }
                    }).finally(() => {
                        setLoading(false);
                    });
                // return data;
            } catch (error) {
                console.error('An error occurred:', error);
                toast.error('An error occurred.' + error, { autoClose: 3000 });
                setLoading(false);
            }
        }
    };


    return (
        // No current openings, but please check back again! 
        <DefaultLayout>
            <div>
                <section className="inner_banner account_banner">
                    <div className="inner_plan_banner">
                        <div className="container">
                            <h1>Sub-Contractor Submit Proposal</h1>
                        </div>
                    </div>
                </section>
                <div className="new_project project_name_banner py-5">
                    <div className='container'>
                        <div className="color_bg mb-0">
                            <h2>Profile Information</h2>
                            {/* <form action=""> */}
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={submitPurposal}
                            >{({ values, setFieldValue }) => (
                                <Form>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="form_style ps-0">
                                                <div className="mb-3">
                                                    {/* <span className='color_red'>*required</span> */}
                                                    <label for="exampleFormControlInput12" className="form-label">Proposal Document (PDF format only) </label>
                                                    <div className="upload_files">
                                                        {/* <input type="file" name="w9Form" accept=".pdf" 
                                                            onChange={(event) => {
                                                                setFieldValue("plan_doc", event.currentTarget.files[0]);
                                                            }}/> */}
                                                        <Field type="file" id="plan_doc" name="plan_doc" accept=".pdf" />
                                                        <ErrorMessage name="plan_doc" component="div" className="text-danger" />
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label for="exampleFormControlInput12" className="form-label">Additional Proposal Document</label>
                                                    <div className="upload_files">
                                                        <input type="file" name="w9Form" accept=".pdf"
                                                            onChange={(event) => {
                                                                setFieldValue("additional_doc", event.currentTarget.files[0]);
                                                            }} />
                                                    </div>
                                                </div>
                                                <div className='mb-3 text-center'>
                                                    <label for="exampleFormControlInput12" className="form-label">Upload Additional Document</label>
                                                    <div className='upload_file_btn'>
                                                        <img src={AddMoreLogo} alt="" />
                                                    </div>  
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="form_style ps-0">
                                                <div className="mb-3">
                                                    <label for="exampleFormControlInput12" className="form-label">Comments for Project Owner</label>
                                                    <Field as="textarea" className="form-control" id="project_description" name="project_description" />
                                                    {/* <textarea name="" className='form-control' id="" cols="30" rows="10"></textarea> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="creat_btn text-center">
                                        {/* <a type='submit'>Submit Proposal</a> */}
                                        <button type="submit" className='globle_submit'>Submit Proposal {loading && <ColorRing
                                            visible={true}
                                            height="35"
                                            width="35"
                                            ariaLabel="blocks-loading"
                                            wrapperStyle={{}}
                                            wrapperclassName="blocks-wrapper"
                                            colors={['white', 'white', 'white', 'white', 'white', 'white']}
                                        />}
                                        </button>
                                        {/* <a onClick={(e) => { console.log('[[[[[[[[[[[[[[[[[[[[[[[') }}>Submit Proposal</a> */}
                                    </div>
                                </Form>
                            )}
                            </Formik>
                        </div>

                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}
