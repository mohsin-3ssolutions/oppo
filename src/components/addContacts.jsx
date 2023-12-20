import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

export default function AddContacts({ contact, onDataReceived, modalType, dataToUpdate, updateContact }) {

    const [errors, setErrors] = useState([])

    if (modalType == 'add') {
        dataToUpdate = null
    }
    const [initialValues, setInitialValues] = useState({
        name: "",
        business_name: "",
        phone_number: "",
        email: "",
    });

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Please use atleast 3 characters')
            .max(25, 'You have exceeded the limit of 25 characters').required('Name is required'),
        business_name: Yup.string().min(3, 'Please use atleast 3 characters')
            .max(25, 'You have exceeded the limit of 25 characters').required('Business Name is required'),
        phone_number: Yup.string()
            .matches(
                /^(\+\d{1,4}\s?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
                'Invalid phone number format'
            )
            .required('Phone Number is required'),
        email: Yup.string()
            .email('Invalid email')
            .matches(/^.+@.+\..{2,}$/, 'Invalid email format')
            .required('Email is required'),
    });

    useEffect(() => {
        if (modalType === 'update' && dataToUpdate) {
            const updatedInitialValues = { ...dataToUpdate };
            setInitialValues(updatedInitialValues);
        } else if (modalType === 'add') {
            setInitialValues({  // Reset initialValues to empty object when not 'update'
                name: "",
                business_name: "",
                phone_number: "",
                email: "",
            });
        }
    }, [modalType, dataToUpdate]);

    const handleSubmit = async (values, { resetForm }) => {
        // modalType == 'update' ? 
        // values.phone_number = parseInt(values.phone_number.replace(/\D/g, ''), 10);
        let path;
        // for (let i = 0; i < contact.length; i++) {
        //     if (values.email == contact[i].email) {
        //         toast.error('Email already exist!' + message, { autoClose: 3000 });
        //         return
        //     }
        // }

        if (modalType == 'update') {
            path = `update_contact/${dataToUpdate.id}`
        } else {
            path = 'create_contact'
        }
        let url = process.env.REACT_APP_BASE_URL;
        const token = localStorage.getItem('authToken');
        try {
            const requestBody = {
                name: values.name,
                business_name: values.business_name,
                phone_number: values.phone_number,
                email: values.email,
            };
            fetch(`${url}/${path}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(requestBody),
            }).then((response) => {
                return response.json();
            })
                .then(({ data, message, success }) => {
                    if (success) {
                        if (modalType !== 'update') {
                            onDataReceived(data);
                        }
                        if (modalType === 'update') {
                            updateContact(data);
                        }
                        toast.success('Contact added successfully!', { autoClose: 3000 });
                        resetForm();
                        document.getElementById('addContacts').classList.remove('show');
                        document.body.classList.remove('modal-open');
                        const modalBackdrop = document.getElementsByClassName('modal-backdrop');
                        for (let i = 0; i < modalBackdrop.length; i++) {
                            modalBackdrop[i].parentNode.removeChild(modalBackdrop[i]);
                        }
                        setErrors([])
                    } else {
                        // toast.error('Something wnet wrong! ' + " " + message, { autoClose: 3000 });
                        setErrors(data)
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

    console.log(errors)
    return (
        <div className="modal fade" id="addContacts" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Contacts</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
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
                                    <Field type="text" id="phone_number" name="phone_number" className="form-control" />
                                    <ErrorMessage name="phone_number" component="div" className="text-danger" />
                                </div>

                                <div className="form-group my-3">
                                    <label htmlFor="email">Email</label>
                                    <Field type="text" id="email" name="email" className="form-control" />
                                    <ErrorMessage name="email" component="div" className="text-danger" />
                                </div>
                                {errors.length !== 0 && (
                                    <ul style={{ listStyleType: "circle", margin: "10px" }}>
                                        {errors.map((error, index) => (
                                            <div>
                                                <li className="text-danger" key={index}>
                                                    {error}
                                                </li>
                                            </div>
                                        ))}
                                    </ul>
                                )}
                                <button type="submit" className="submit-btn mt-3">Save changes</button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}
