import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function AddContacts() {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        businessName: Yup.string().required('Business Name is required'),
        phoneNumber: Yup.string().required('Phone Number is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
    });
    const initialValues = {
        name: "",
        businessName: "",
        phoneNumber: "",
        email: "",

    };

    const handleSubmit = async (values) => {
        console.log(values)
    };

    return (
        <div class="modal fade" id="addContacts" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add Contacts</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            <Form>
                                <div className="form-group my-3">
                                    <label htmlFor="name">Name</label>
                                    <Field type="text" id="name" name="name" className="form-control" />
                                    <ErrorMessage name="name" component="div" className="text-danger" />
                                </div>

                                <div className="form-group my-3">
                                    <label htmlFor="businessName">Business Name</label>
                                    <Field type="text" id="businessName" name="businessName" className="form-control" />
                                    <ErrorMessage name="businessName" component="div" className="text-danger" />
                                </div>

                                <div className="form-group my-3">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <Field type="text" id="phoneNumber" name="phoneNumber" className="form-control" />
                                    <ErrorMessage name="phoneNumber" component="div" className="text-danger" />
                                </div>

                                <div className="form-group my-3">
                                    <label htmlFor="email">Email</label>
                                    <Field type="text" id="email" name="email" className="form-control" />
                                    <ErrorMessage name="email" component="div" className="text-danger" />
                                </div>

                                <button type="submit" className="btn btn-primary mt-3" data-bs-dismiss="modal">Save changes</button>
                            </Form>
                        </Formik>
                    </div>
                    {/* <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
