import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Profile() {

    const validationSchema = Yup.object().shape({
        projectName: Yup.string().required('Project Name is required'),
        yearsInBusiness: Yup.number().required('Years In Business is required'),
        ein: Yup.string().required('EIN is required'),
        licensedWorkStates: Yup.string().required('Licensed Work States is required'),
        contractorLicense: Yup.string().required('Contractor License # is required'),
        workCapacity: Yup.number().required('Work Capacity is required'),
        numEmployees: Yup.number().required('Number of Employees is required'),
        description: Yup.string().required('Description is required'),
        selectedServices: Yup.array().min(1, 'Select at least one service'),
        // scope: Yup.string().required('Scope is required'),
        pastContractorsWorkedWith: Yup.string().required('Past Contractors Worked With is required'),
    });

    const initialValues = {
        projectName: '',
        yearsInBusiness: '',
        ein: '',
        licensedWorkStates: '',
        contractorLicense: '',
        workCapacity: '',
        numEmployees: '',
        description: '',
        selectedServices: [],
        scope: '',
        pastContractorsWorkedWith: '',
        w9Form: ''
    };

    const handleSubmit = (values, { setSubmitting }) => {
        // Handle form submission here
        console.log(values);
        // Access the uploaded files from the input fields
        const w9FormFile = values.w9Form[0];
        const workersCompFormFile = values.workersCompForm[0];
        const profilePictureFile = values.profilePicture[0];

        // You can now handle the files as needed
        console.log('W9 Form File:', w9FormFile);
        console.log('Worker’s Comp Form File:', workersCompFormFile);
        console.log('Profile Picture File:', profilePictureFile);

        // Reset the form submission state
        setSubmitting(false);
    };
    return (
        <div>
            <section className="profile_banner">
                <div className="container">
                    <div className="new_project project_name_banner">
                        <div className="color_bg">
                            <h2>Profile Information</h2>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >{({ values, setFieldValue }) => (
                                <Form>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="form_style ps-0">
                                                <div className="mb-3">
                                                    <label htmlFor="projectName" className="form-label">Project Name</label>
                                                    <Field
                                                        type="text"
                                                        id="projectName"
                                                        name="projectName"
                                                        className="form-control"
                                                        placeholder="XYZ Contractors"
                                                    />
                                                    <ErrorMessage name="projectName" component="div" className="text-danger" />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="yearsInBusiness" className="form-label">Years In Business</label>
                                                    <Field
                                                        type="text"
                                                        id="yearsInBusiness"
                                                        name="yearsInBusiness"
                                                        className="form-control"
                                                        placeholder="25"
                                                    />
                                                    <ErrorMessage name="yearsInBusiness" component="div" className="text-danger" />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="ein" className="form-label">EIN</label>
                                                    <Field
                                                        type="text"
                                                        id="ein"
                                                        name="ein"
                                                        className="form-control"
                                                        placeholder="34-98676"
                                                    />
                                                    <ErrorMessage name="ein" component="div" className="text-danger" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Licensed Work States</label>
                                                    <Field as="select" name="licensedWorkStates" className="form-control">
                                                        <option value="123">123</option>
                                                        {/* Add options for the select field here */}
                                                    </Field>
                                                    <ErrorMessage name="licensedWorkStates" component="div" className="text-danger" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="contractorLicense" className="form-label">Contractor License #</label>
                                                    <Field
                                                        type="text"
                                                        id="contractorLicense"
                                                        name="contractorLicense"
                                                        className="form-control"
                                                        placeholder="12983546142"
                                                    />
                                                    <ErrorMessage name="contractorLicense" component="div" className="text-danger" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="workCapacity" className="form-label">Work Capacity (# concurrent jobs)</label>
                                                    <Field
                                                        type="text"
                                                        id="workCapacity"
                                                        name="workCapacity"
                                                        className="form-control"
                                                        placeholder="5"
                                                    />
                                                    <ErrorMessage name="workCapacity" component="div" className="text-danger" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="numEmployees" className="form-label">Number of Employees</label>
                                                    <Field
                                                        type="text"
                                                        id="numEmployees"
                                                        name="numEmployees"
                                                        className="form-control"
                                                        placeholder="22"
                                                    />
                                                    <ErrorMessage name="numEmployees" component="div" className="text-danger" />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="w9Form" className="form-label">W9 Form (PDF)</label>
                                                    <div className="upload_files">
                                                        {/* <Field
                                                            type="file"
                                                            name="w9Form"
                                                            className="form-control-file"
                                                            onChange={(e) => {
                                                                setFieldValue('w9Form', e.currentTarget.files[0]);
                                                            }}
                                                        /> */}
                                                        <input type="file" name="w9Form" onChange={(event) => {
                                                            setFieldValue("w9Form", event.currentTarget.files[0]);
                                                        }} />
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label for="workersCompForm" className="form-label">Worker’s Comp Form (PDF)</label>
                                                    <div className="upload_files">
                                                        {/* <Field
                                                            type="file"
                                                            name="workersCompForm"
                                                            className="form-control-file"
                                                            onChange={(e) => {
                                                                setFieldValue('workersCompForm', e.currentTarget.files[0]);
                                                            }}
                                                        /> */}
                                                        <input type="file" name="workersCompForm" onChange={(event) => {
                                                            setFieldValue("workersCompForm", event.currentTarget.files[0]);
                                                        }} />
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label for="profilePicture" className="form-label">Profile Picture</label>
                                                    <div className="upload_files">
                                                        {/* <Field
                                                            type="file"
                                                            name="profilePicture"
                                                            className="form-control-file"
                                                            onChange={(e) => {
                                                                setFieldValue('profilePicture', e.currentTarget.files[0]);
                                                            }}
                                                        /> */}
                                                        <input type="file" name="profilePicture" onChange={(event) => {
                                                            setFieldValue("profilePicture", event.currentTarget.files[0]);
                                                        }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="form_style">
                                                <div className="mb-3">
                                                    <label htmlFor="description" className="form-label">Description/Biography of Company & Services</label>
                                                    <Field
                                                        as="textarea"
                                                        id="description"
                                                        name="description"
                                                        className="form-control"
                                                        rows="5"
                                                    />
                                                    <ErrorMessage name="description" component="div" className="text-danger" />
                                                    <hr />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="flexCheckDefault11" className="form-label">Select Services You Provide</label>
                                                    <div className="upload_files">
                                                        <ul>
                                                            <li>
                                                                <div className="form-check">
                                                                    <Field
                                                                        type="checkbox"
                                                                        name="selectedServices"
                                                                        value="Commercial"
                                                                        id="commercialService"
                                                                        className="form-check-input"
                                                                    />
                                                                    <label className="form-check-label" for="flexCheckDefault">
                                                                        Commercial
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="form-check">
                                                                    <Field
                                                                        type="checkbox"
                                                                        name="selectedServices"
                                                                        value="Residential"
                                                                        id="residentialService"
                                                                        className="form-check-input"
                                                                    />
                                                                    <label className="form-check-label" for="flexCheckDefault1">
                                                                        Residential
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="form-check">
                                                                    <Field
                                                                        type="checkbox"
                                                                        name="selectedServices"
                                                                        value="Federal"
                                                                        id="federalService"
                                                                        className="form-check-input"
                                                                    />
                                                                    <label className="form-check-label" for="flexCheckDefault2">
                                                                        Federal
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="form-check">
                                                                    <Field
                                                                        type="checkbox"
                                                                        name="selectedServices"
                                                                        value="Road Construction & Industrial"
                                                                        id="roadConstructionService"
                                                                        className="form-check-input"
                                                                    />
                                                                    <label className="form-check-label" for="flexCheckDefault3">
                                                                        Road Construction & Industrial
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Identify Scope</label>
                                                    <Field as="select" name="scope" className="form-control">
                                                        <option value="123">123</option>
                                                        {/* Add options for the select field here */}
                                                    </Field>
                                                    <ErrorMessage name="scope" component="div" className="text-danger" />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="pastContractorsWorkedWith" className="form-label">Past Contractors Worked With</label>
                                                    <Field
                                                        as="textarea"
                                                        id="pastContractorsWorkedWith"
                                                        name="pastContractorsWorkedWith"
                                                        className="form-control"
                                                        rows="5"
                                                    />
                                                    <ErrorMessage name="pastContractorsWorkedWith" component="div" className="text-danger" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <button type="submit" className="globle_submit mt-5">Save</button>
                                    </div>
                                </Form>
                            )}
                            </Formik>

                        </div>
                        <div className="creat_btn">
                            <a href="">Save</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
