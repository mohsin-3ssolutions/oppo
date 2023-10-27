import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

export default function AddContacts({ onDataReceived, modalType, dataToUpdate, updateContact }) {
    console.log(modalType)
    console.log(dataToUpdate)
    const [initialValues, setInitialValues] = useState({
        name: "",
        business_name: "",
        phone_number: "",
        email: "",
    });

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        business_name: Yup.string().required('Business Name is required'),
        phone_number: Yup.string().required('Phone Number is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
    });

    useEffect(() => {
        if (modalType === 'update' && dataToUpdate) {
            const updatedInitialValues = { ...dataToUpdate };
            setInitialValues(updatedInitialValues);
        }
    }, [modalType, dataToUpdate]);
    const handleSubmit = async (values, { resetForm }) => {
        // modalType == 'update' ? 
        let path;
        if (modalType == 'update') {
            path = `update_contact/${dataToUpdate.id}`
        } else {
            path = 'create_contact'
        }
        let url = process.env.REACT_APP_BASE_URL;
        const token = localStorage.getItem('authToken');
        try {
            fetch(`${url}/${path}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(values),
            }).then((response) => {
                return response.json();
            })
                .then(({ data, message, success }) => {
                    console.log({ data, message, success });
                    if (success) {
                        if (modalType !== 'update') {
                            onDataReceived(data);
                        }
                        if (modalType === 'update') {
                            updateContact(data);
                        }
                        toast.success('Contact added successfully!', { autoClose: 3000 });
                        resetForm();
                    } else {
                        toast.error('Something wnet wrong!' + message, { autoClose: 3000 });
                    }
                });
        } catch (error) {
            console.error('An error occurred:', error);
            toast.error('An error occurred.' + error, { autoClose: 3000 });
        }
        finally {
            // setSubmitting(false);
        }
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
                            enableReinitialize={true}
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
                                    <label htmlFor="business_name">Business Name</label>
                                    <Field type="text" id="business_name" name="business_name" className="form-control" />
                                    <ErrorMessage name="business_name" component="div" className="text-danger" />
                                </div>
                                <div className="form-group my-3">
                                    <label htmlFor="phone_number">Phone Number</label>
                                    <Field type="number" id="phone_number" name="phone_number" className="form-control" />
                                    <ErrorMessage name="phone_number" component="div" className="text-danger" />
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
