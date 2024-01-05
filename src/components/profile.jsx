import React, { useEffect, useRef, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
const FileLogo = '/assets/images/file.png';

export default function Profile() {

    const [states] = useState([
        "AK",
        "AL",
        "AR",
        "AZ",
        "CA",
        "CO",
        "CT",
        "DE",
        "DC",
        "FL",
        "GA",
        "HI",
        "ID",
        "IL",
        "IN",
        "IA",
        "KS",
        "KY",
        "LA",
        "ME",
        "MD",
        "MA",
        "MI",
        "MN",
        "MS",
        "MO",
        "MT",
        "NE",
        "NV",
        "NH",
        "NJ",
        "NM",
        "NY",
        "NC",
        "ND",
        "OH",
        "OK",
        "OR",
        "PA",
        "RI",
        "SC",
        "SD",
        "TN",
        "TX",
        "UT",
        "VT",
        "TA",
        "VA",
        "WA",
        "WV",
        "WI",
        "WY",
        "AB",
        "BC",
        "MB",
        "NB",
        "NL",
        "NS",
        "NT",
        "NU",
        "ON",
        "PE",
        "QC",
        "SK",
    ]);

    const userData = useSelector((state) => {
        return state?.userProfileSlice?.userData?.data;
    });

    const userRole = useSelector((state) => {
        return state?.userProfileSlice?.userData?.data?.role;
    });

    const [profile, setProfile] = useState(userData.profile_image ? userData.profile_image : null);
    const [w9, setW9] = useState(userData.w9_form ? userData.w9_form : null);
    const [workerComp, setWorkerComp] = useState(userData.worker_comp ? userData.worker_comp : null);

    const convertUrlToFile = async (url, setterFunction) => {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const filename = getFilenameFromUrl(url);
            const file = new File([blob], filename, { type: blob.type });
            setterFunction(file);
        } catch (error) {
            console.error("Error converting URL to file:", error);
        }
    };

    const getFilenameFromUrl = (url) => {
        const urlParts = url.split("/");
        return urlParts[urlParts.length - 1];
    };

    const readFileAsDataURL = (file, callback) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            callback(reader.result);
        };
        reader.readAsDataURL(file);
    };


    useEffect(() => {
        if (userData.worker_comp) {
            convertUrlToFile(userData.worker_comp, setWorkerComp);
        }
        if (userData.w9_form) {
            convertUrlToFile(userData.w9_form, setW9);
        }
        if (userData.profile_image) {
            convertUrlToFile(userData.profile_image, setProfile);
        }
    }, [userData.worker_comp, userData.w9_form, userData.profile_image]);

    console.log(w9, 'w9')
    console.log(userData, 'userdata')

    const validationSchema = Yup.object().shape({
        projectName: Yup.string().required('Company Name is required'),
        yearsInBusiness: Yup.number().required('Years In Business is required'),
        ein: Yup.string()
            .required('EIN is required')
            .matches(/^\d{2}-\d{5}$/, 'Invalid format. Please use 32-99223 format'),
        licensedWorkStates: Yup.string()
            .required('Licensed work state is required'),
        contractorLicense: Yup.string().required('Contractor License is required'),
        workCapacity: Yup.number().required('Work Capacity is required'),
        numEmployees: Yup.number().required('Number of Employees is required'),
        description: Yup.string().required('Description is required'),
        // selectedServices: Yup.array().min(1, 'Select at least one service'),
        // scope: Yup.string().required('Scope is required'),
        pastContractorsWorkedWith: Yup.string().required('Past Contractors is required'),
    });

    const initialValues = {
        projectName: userData ? userData.company_name : '',
        yearsInBusiness: userData ? userData.business_year : '',
        ein: userData ? userData.ein : '',
        licensedWorkStates: userData ? userData.licensed_states_of_work : '',
        contractorLicense: userData ? userData.contractor_license : '',
        workCapacity: userData ? userData.work_capacity : '',
        numEmployees: userData ? userData.number_of_employees : '',
        description: userData ? userData.biography : '',
        selectedServices: userData ? userData.services.map(service => service.service) : [],
        scope: userData ? userData.scope.map(scope => scope.scope) : [],
        pastContractorsWorkedWith: userData ? userData.past_contractors : '',
        w9Form: '',
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const token = localStorage.getItem('authToken');
            const url = process.env.REACT_APP_BASE_URL;

            if (token) {
                const formData = new FormData();
                formData.append('role', userRole);
                formData.append('company_name', values.projectName);
                formData.append('business_year', values.yearsInBusiness);
                formData.append('ein', values.ein);
                formData.append('licensed_states_of_work', values.licensedWorkStates);
                formData.append('contractor_license', 'yes');
                formData.append('work_capacity', values.workCapacity);
                formData.append('biography', values.description);
                formData.append('number_of_employees', values.numEmployees);
                formData.append('worker_comp', values.workersCompForm ? values.workersCompForm : workerComp);
                formData.append('w9_form', values.w9Form ? values.w9Form : w9);
                formData.append('profile_image', values.profilePicture ? values.profilePicture : profile);
                formData.append('company_name', values.projectName);
                formData.append('commercial_services', 1);
                formData.append('residential_services', 1);
                formData.append('federal_services', 1);
                formData.append('road_and_industrial_construction', 1);
                [...values.scope].forEach((scope) => {
                    formData.append("identify_scope[]", scope);
                });
                [...values.selectedServices].forEach((services) => {
                    formData.append("services[]", services);
                });
                formData.append('past_contractors', values.pastContractorsWorkedWith);

                const response = await fetch(`${url}/update_contractor_profile`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                    body: formData,
                });

                const data = await response.json();

                if (response.ok) {
                    toast.success('Profile updated successfully!', { autoClose: 3000 });
                    // navigate('/find-a-project')
                    // window.location.reload()
                } else {
                    toast.error('Something went wrong!' + data.message, { autoClose: 3000 });
                }
            }
        } catch (error) {
            console.error('An error occurred:', error);
            toast.error('An error occurred.' + error, { autoClose: 3000 });
        } finally {
            // Reset the form submission state
            setSubmitting(false);
        }
    };
    const w9Document = useRef(null);
    const handleReset = () => {
        if (w9Document.current) {
            w9Document.current.value = "";
        }
    };

    const workersDocument = useRef(null);
    const handleResetWorkers = () => {
        if (workersDocument.current) {
            workersDocument.current.value = "";
        }
    };

    const profilePicture = useRef(null);
    const handleResetProfile = () => {
        if (profilePicture.current) {
            profilePicture.current.value = "";
        }
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
                            >{({ isSubmitting, values, setFieldValue }) => (
                                <Form>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="form_style ps-0">
                                                <div className="mb-3">
                                                    <label htmlFor="projectName" className="form-label">Company Name</label>
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
                                                        placeholder="00"
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
                                                        placeholder="xx-xxxxx"
                                                    />
                                                    <ErrorMessage name="ein" component="div" className="text-danger" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Licensed Work States</label>
                                                    {/* <Field as="select" name="licensedWorkStates" className="form-control">
                                                        <option value="123">123</option>
                                                    </Field> */}
                                                    {/* <Field
                                                        type="text"
                                                        id="licensedWorkStates"
                                                        name="licensedWorkStates"
                                                        className="form-control"
                                                    /> */}
                                                    <Field
                                                        name="licensedWorkStates"
                                                        as="select"
                                                        className="form-control"
                                                    >
                                                        <option value="" disabled>
                                                            Select State
                                                        </option>
                                                        {states.length &&
                                                            states.map((state, idx) => {
                                                                return (
                                                                    <option value={state} key={idx}>
                                                                        {state}
                                                                    </option>
                                                                );
                                                            })}
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
                                                        placeholder="0000"
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
                                                    {w9 !== null ?
                                                        <div className='pro_img d-flex'>
                                                            <button className="delete-files"
                                                                onClick={(event) => { setW9(null) }} style={{ top: "-13px" }}>
                                                                <CloseIcon fontSize='20px' />
                                                            </button>
                                                            {w9 && (
                                                                <a href={URL.createObjectURL(new Blob([w9], { type: w9.type }))} download>
                                                                    Download W9 Form
                                                                </a>
                                                            )}                                                        </div> :
                                                        <div className="upload_files">
                                                            <input type="file" name="w9Form" accept=".pdf" ref={w9Document} onChange={(event) => {
                                                                if (event.currentTarget.files[0] && event.currentTarget.files[0].type === 'application/pdf') {
                                                                    setFieldValue("w9Form", event.currentTarget.files[0]);
                                                                } else {
                                                                    console.error('Invalid file type. Please select a PDF file.');
                                                                    setFieldValue("w9Form", null);
                                                                    handleReset()
                                                                    // Optionally, you can clear the file input or show an error to the user
                                                                }

                                                            }} />
                                                            {values.w9Form && <button className='delete-file mb-2'
                                                                onClick={() => { handleReset(), setFieldValue("w9Form", null) }}>
                                                                Delete file
                                                            </button>}
                                                        </div>
                                                    }

                                                </div>
                                                <div className="mb-3">
                                                    <label for="workersCompForm" className="form-label">Worker’s Comp Form (PDF)</label>
                                                    {workerComp !== null ?
                                                        <div className='pro_img d-flex'>
                                                            <button className="delete-files"
                                                                onClick={(event) => { setWorkerComp(null) }} style={{ top: "0px" }}>
                                                                <CloseIcon fontSize='20px' />
                                                            </button>
                                                            {workerComp && (
                                                                <a href={URL.createObjectURL(new Blob([workerComp], { type: workerComp.type }))} download>
                                                                    Download Worker Compensation
                                                                </a>
                                                            )}
                                                        </div> :
                                                        <div className="upload_files">
                                                            <input type="file" accept='.pdf' ref={workersDocument} name="workersCompForm" onChange={(event) => {
                                                                if (event.currentTarget.files[0] && event.currentTarget.files[0].type === 'application/pdf') {
                                                                    setFieldValue("workersCompForm", event.currentTarget.files[0]);
                                                                } else {
                                                                    console.error('Invalid file type. Please select a PDF file.');
                                                                    setFieldValue("workersCompForm", null);
                                                                    handleResetWorkers()
                                                                    // Optionally, you can clear the file input or show an error to the user
                                                                }
                                                            }} />
                                                            {values.workersCompForm && <button className='delete-file mb-2'
                                                                onClick={() => { handleResetWorkers(), setFieldValue("workersCompForm", null) }}>
                                                                Delete file
                                                            </button>}
                                                        </div>
                                                    }

                                                    {/* */}
                                                </div>
                                                <div className="mb-3">
                                                    <label for="profilePicture" className="form-label">Profile Picture</label>
                                                    <div className="upload_files">
                                                        {profile !== null ?
                                                            <div className='pro_img d-flex'>
                                                                <button className="delete-files"
                                                                    onClick={(event) => { setProfile(null) }} style={{ top: "0px" }}>
                                                                    <CloseIcon fontSize='20px' />
                                                                </button>
                                                                {profile && (
                                                                    <img
                                                                        src={profile instanceof File ? URL.createObjectURL(profile) : profile}
                                                                        alt="Profile Image"
                                                                    />
                                                                )}                                                            </div> :
                                                            <input type="file" accept="jpg, .jpeg, .png" ref={profilePicture} name="profilePicture" onChange={(event) => {
                                                                if (event.currentTarget.files[0] && /^image\/(jpeg|jpg|png)$/.test(event.currentTarget.files[0].type)) {
                                                                    setFieldValue("profilePicture", event.currentTarget.files[0]);
                                                                } else {
                                                                    console.error('Invalid file type. Please select a JPEG, JPG, or PNG file.');
                                                                    setFieldValue("profilePicture", null);
                                                                    handleResetProfile()
                                                                }
                                                                // setFieldValue("profilePicture", event.currentTarget.files[0]);
                                                            }} />
                                                        }

                                                        {values.profilePicture && <button className='delete-file mb-2'
                                                            onClick={() => { handleResetProfile(), setFieldValue("profilePicture", null) }}>
                                                            Delete file
                                                        </button>}
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
                                                                        value="commercial"
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
                                                                        value="residential"
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
                                                                        value="federal"
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
                                                                        value="road_construction_and_industrial"
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
                                                {/* <div className="mb-3">
                                                    <label className="form-label">Identify Scope</label>
                                                    <Field as="select" name="scope" className="form-control">
                                                        <option value="concrete">Concrete</option>
                                                        <option value="electrical">Electrical</option>
                                                        <option value="framing">Framing</option>
                                                    </Field>
                                                    <ErrorMessage name="scope" component="div" className="text-danger" />
                                                </div> */}

                                                <div className="mb-3">
                                                    <label for="flexCheckDefault11" className="form-label">Identify Scope</label>
                                                    <div className="upload_files">
                                                        <ul>
                                                            <li>
                                                                <div className="form-check">
                                                                    <Field
                                                                        type="checkbox"
                                                                        name="scope"
                                                                        value="site_preparation"
                                                                        id="sitePreparation"
                                                                        className="form-check-input"
                                                                    />
                                                                    <label className="form-check-label" for="flexCheckDefault">
                                                                        Site Preparation
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="form-check">
                                                                    <Field
                                                                        type="checkbox"
                                                                        name="scope"
                                                                        value="concrete"
                                                                        id="concrete"
                                                                        className="form-check-input"
                                                                    />
                                                                    <label className="form-check-label" for="flexCheckDefault1">
                                                                        Concrete
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="form-check">
                                                                    <Field
                                                                        type="checkbox"
                                                                        name="scope"
                                                                        value="structural_and_framing"
                                                                        id="structural"
                                                                        className="form-check-input"
                                                                    />
                                                                    <label className="form-check-label" for="flexCheckDefault2">
                                                                        Structural and framing
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="form-check">
                                                                    <Field
                                                                        type="checkbox"
                                                                        name="scope"
                                                                        value="roofing_siding_and_sheet_metal_work"
                                                                        id="roadConstructionService"
                                                                        className="form-check-input"
                                                                    />
                                                                    <label className="form-check-label" for="flexCheckDefault3">
                                                                        Roofing, siding, and sheet metal work
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="form-check">
                                                                    <Field
                                                                        type="checkbox"
                                                                        name="scope"
                                                                        value="plumbing"
                                                                        id="plumbing"
                                                                        className="form-check-input"
                                                                    />
                                                                    <label className="form-check-label" for="flexCheckDefault3">
                                                                        Plumbing
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="form-check">
                                                                    <Field
                                                                        type="checkbox"
                                                                        name="scope"
                                                                        value="hvac"
                                                                        id="HVAC"
                                                                        className="form-check-input"
                                                                    />
                                                                    <label className="form-check-label" for="flexCheckDefault3">
                                                                        HVAC
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="form-check">
                                                                    <Field
                                                                        type="checkbox"
                                                                        name="scope"
                                                                        value="electrical"
                                                                        id="electrical"
                                                                        className="form-check-input"
                                                                    />
                                                                    <label className="form-check-label" for="flexCheckDefault3">
                                                                        Electrical
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="form-check">
                                                                    <Field
                                                                        type="checkbox"
                                                                        name="scope"
                                                                        value="carpentry"
                                                                        id="carpentry"
                                                                        className="form-check-input"
                                                                    />
                                                                    <label className="form-check-label" for="flexCheckDefault3">
                                                                        Carpentry
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="form-check">
                                                                    <Field
                                                                        type="checkbox"
                                                                        name="scope"
                                                                        value="drywall"
                                                                        id="drywall"
                                                                        className="form-check-input"
                                                                    />
                                                                    <label className="form-check-label" for="flexCheckDefault3">
                                                                        Drywall
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="form-check">
                                                                    <Field
                                                                        type="checkbox"
                                                                        name="scope"
                                                                        value="painting_and_paper_hanging"
                                                                        id="painting"
                                                                        className="form-check-input"
                                                                    />
                                                                    <label className="form-check-label" for="flexCheckDefault3">
                                                                        Painting and paper hanging
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
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
                                        <button type="submit" disabled={isSubmitting} className="globle_submit mt-5">Save {isSubmitting && (
                                            <div className="spinner-border spinner-border-sm" role="status">
                                                <span className="sr-only"></span>
                                            </div>
                                        )}</button>
                                    </div>
                                </Form>
                            )}
                            </Formik>

                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}
