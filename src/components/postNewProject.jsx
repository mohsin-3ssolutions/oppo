import React, { useEffect, useRef, useState } from 'react'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'// import Logo from "../assets/images/logo.png"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import DefaultLayout from '../reusableComponents/defaultLayout';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

export default function PostNewProject() {
  const [startDate, setStartDate] = useState(null);
  const [completionDate, setCompletionDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [startDateError, setStartDateError] = useState(false);
  const [endDateError, setEndDateError] = useState(false);
  const [goBack, setGoBack] = useState(false);

  let navigate = useNavigate();

  const handleStartDateChange = (date) => {
    // console.log(date.$d)
    const formattedDate = moment(date.$d).format('YYYY-MM-DD');
    setStartDate(formattedDate);
    setStartDateError(false);
  };

  const handleCompletionDateChange = (date) => {
    const formattedDate = moment(date.$d).format('YYYY-MM-DD');
    setCompletionDate(formattedDate);
    setEndDateError(false);
  };

  const initialValues = {
    project_name: '',
    email: '',
    price: 0,
    project_rep: '',
    phone: '',
    project_description: '',
    past_work: '',
    designer: '',
    engineer: '',
    architect: '',
    permits: '',
    permit_doc: [],
    financing: '',
    plan: '',
    plan_doc: [],
    plan_image: [],
    jobStatus: '',
    project_start_date: null,
    project_end_date: null,
    selectedServices: [],
  };

  const validationSchema = Yup.object().shape({
    project_name: Yup.string().min(3, 'Please use atleast 3 characters')
      .max(40, 'You have exceeded the limit of 50 characters')
      .required('Project Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    project_rep: Yup.string().required('Project Rep is required'),
    phone: Yup.string()
      .matches(
        /^(\+\d{1,4}\s?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
        'Invalid phone number format'
      )
      .required('Phone Number is required'),
    price: Yup.string().required('Price is required'),
    project_description: Yup.string().required('Description is required'),
    past_work: Yup.string().required('Past Work is required'),
    designer: Yup.string().required('Designer is required'),
    engineer: Yup.string().required('Engineer is required'),
    architect: Yup.string().required('Architect is required'),
    permits: Yup.string().required('Permits is required'),
    permit_doc: Yup.array(),
    plan_doc: Yup.array(),
    financing: Yup.string().required('Financing is required'),
    plan: Yup.string().required('Plan is required'),
    jobStatus: Yup.string(),
    selectedServices: Yup.array().min(1, 'Select at least one service'),
    scope: Yup.array().min(1, 'Select at least one scope'),
    // project_start_date: Yup.string(),
    // project_end_date: Yup.string()
  });

  // const handleSubmit = (values) => {
  //   // Handle form submission here
  // values.project_start_date = startDate;
  // values.project_end_date = completionDate;

  //   console.log(values);
  // };

  const handleSubmit = async (values) => {

    console.log(values)
    let url = process.env.REACT_APP_BASE_URL;
    values.project_start_date = startDate;
    values.project_end_date = completionDate;

    if (!startDate) { // Use !startDate to check if it's null or undefined
      setStartDateError(true);
      toast.error('Start date should not be empty.', { autoClose: 3000 });
      return;
    }

    if (startDate == "Invalid date") { // Use !startDate to check if it's null or undefined
      setStartDateError(true);
      toast.error('Start date should be a valid date.', { autoClose: 3000 });
      return;
    }

    if (!completionDate) { // Use !completionDate to check if it's null or undefined
      toast.error('End date should not be empty.', { autoClose: 3000 });
      setEndDateError(true);
      return;
    }


    if (moment(startDate).isAfter(completionDate)) {
      toast.error('Start date must be before the completion date.', { autoClose: 3000 });
      return; // Prevent submission if the condition is not met
    }
    setLoading(true);

    const token = localStorage.getItem('authToken');
    if (token) {
      try {

        console.log(values.selectedServices)

        const formData = new FormData();

        // Append key-value pairs to formData
        formData.append('project_name', values.project_name);
        formData.append('project_rep', values.project_rep);
        formData.append('email', values.email);
        formData.append('phone', parseInt(values.phone, 10));
        formData.append('price', parseInt(values.price, 10));
        formData.append('plan', values.plan);
        formData.append('past_work', values.past_work);
        formData.append('designer', values.designer);
        formData.append('architect', values.architect);
        formData.append('engineer', values.engineer);
        formData.append('financing', values.financing);
        // formData.append('project_type', 'commercial');
        formData.append('permits', values.permits);
        formData.append('project_start_date', values.project_start_date);
        formData.append('project_description', values.project_description);
        [...values.selectedServices].forEach((services) => {
          formData.append("services[]", services);
        });
        [...values.scope].forEach((scope) => {
          formData.append("identify_scope[]", scope);
        });
        [...values.plan_doc].forEach((plan) => {
          formData.append("plan_doc[]", plan);
        });
        // values.plan_image.map(file => {
        //   formData.append('plan_image', file);
        // });
        [...values.plan_image].forEach((image) => {
          formData.append("plan_image[]", image);
        });
        // formData.append('permit_doc', values.permit_doc);
        [...values.permit_doc].forEach((permit) => {
          formData.append("permit_doc[]", permit);
        });
        formData.append('project_end_date', values.project_end_date);

        fetch(`${url}/create_project`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
          body: formData, // Use formData to send the data
        })
          .then((response) => response.json())
          .then(({ data, message, success }) => {
            if (success) {
              toast.success('Project created successfully!', { autoClose: 3000 });
              navigate('/account/1')
            } else {
              toast.error('Something went wrong!' + message, { autoClose: 3000 });
            }
          }).finally(() => {
            setLoading(false);
          });
      } catch (error) {
        console.error('An error occurred:', error);
        toast.error('An error occurred.' + error, { autoClose: 3000 });
        setLoading(false);
      }
    }
  };

  const permitDocument = useRef(null);
  const planDocument = useRef(null);
  const planImages = useRef(null);

  console.log(startDateError, endDateError)

  const handleReset = () => {
    if (permitDocument.current) {
      permitDocument.current.value = "";
    }
  };

  const handleResetPlan = () => {
    if (planDocument.current) {
      planDocument.current.value = "";
    }
  };

  const handleResetImages = () => {
    if (planImages.current) {
      planImages.current.value = "";
    }
  };

  const [selectedPlanImages, setSelectedPlanImages] = useState([]);

  const handlePlanImageChange = (event, setFieldValue) => {
    const selectedImages = event.currentTarget.files;
    setSelectedPlanImages([...selectedImages]);
    setFieldValue("plan_image", selectedImages);
  };

  const handleDeleteImage = (event, index, setFieldValue) => {
    event.preventDefault()
    const updatedImages = [...selectedPlanImages];
    updatedImages.splice(index, 1);
    setSelectedPlanImages(updatedImages);
    setFieldValue("plan_image", updatedImages);
  };


  const [selectedPermitDoc, setSelectedPermitDoc] = useState([]);

  const handlePermitDocChange = (event, setFieldValue) => {
    const selectedDoc = Array.from(event.currentTarget.files);
    setSelectedPermitDoc([...selectedDoc]);
    setFieldValue("permit_doc", selectedDoc);
  };


  const handleDeletePermitDoc = (event, index, setFieldValue) => {
    event.preventDefault();
    const updatedPermits = [...selectedPermitDoc];
    updatedPermits.splice(index, 1);
    setSelectedPermitDoc(updatedPermits);
    setFieldValue("permit_doc", updatedPermits);
  };

  const [selectedPlanDoc, setSelectedPlanDoc] = useState([]);

  const handlePlanDocChange = (event, setFieldValue) => {
    const selectedDoc = Array.from(event.currentTarget.files);
    setSelectedPlanDoc([...selectedDoc]);
    setFieldValue("plan_doc", selectedDoc);
  };

  const handleDeletePlanDoc = (event, index, setFieldValue) => {
    event.preventDefault();
    const updatedPlan = [...selectedPlanDoc];
    updatedPlan.splice(index, 1);
    setSelectedPlanDoc(updatedPlan);
    setFieldValue("plan_doc", updatedPlan);
  };

  useEffect(() => {
    if (goBack) {
      navigate(-1);
    }
  }, [goBack])

  console.log(selectedPermitDoc, 'selectedPermitDoc')
  return (
    <DefaultLayout>
      <div className='mt-4'>
        <div className='container'>
          <button className='back-btn mb-3' onClick={() => { navigate(-1), setGoBack(true) }}>Go Back</button>
          <div className="new_project project_name_banner">
            <div className="color_bg">
              <h2>Start a New Project</h2>
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
                          <label htmlFor="project_name" className="form-label">Project Name</label>
                          <Field type="text" className="form-control" id="project_name" name="project_name" />
                          <ErrorMessage name="project_name" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">Email</label>
                          <Field type="email" className="form-control" id="email" name="email" />
                          <ErrorMessage name="email" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="price" className="form-label">Base Price</label>
                          {/* <Field type="number" className="form-control" id="price" name="price" /> */}
                          <div className="input-group">
                            <span className="input-group-text">$</span>
                            <Field
                              type="number"
                              className="form-control"
                              id="price"
                              name="price"
                            />
                          </div>
                          <ErrorMessage name="price" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="project_rep" className="form-label">Project Rep</label>
                          <Field type="text" className="form-control" id="project_rep" name="project_rep" />
                          <ErrorMessage name="project_rep" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="phone" className="form-label">Phone Number</label>
                          <Field type="text" placeholder="xxx-xxx-xxxx" className="form-control" id="phone" name="phone" />
                          <ErrorMessage name="phone" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="project_description" className="form-label">Project Description</label>
                          <Field as="textarea" className="form-control" id="project_description" name="project_description" />
                          <ErrorMessage name="project_description" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="past_work" className="form-label">Who have you worked with in the past? (Banks, Lenders, etc.)</label>
                          <Field as="textarea" className="form-control" id="past_work" name="past_work" />
                          <ErrorMessage name="past_work" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="jobStatus" className="form-label">Job Status</label>
                          <Field as="select" className="form-select" id="jobStatus" name="jobStatus">
                            <option value="">Select Job Status</option>
                            <option value="10">10%</option>
                            <option value="20">20%</option>
                            <option value="30">30%</option>
                            <option value="40">40%</option>
                            <option value="50">50%</option>
                            <option value="60">60%</option>
                            <option value="70">70%</option>
                          </Field>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="form_style">
                        <div className="mb-3">
                          <label htmlFor="designer" className="form-label">Designer</label>
                          <div className="input-group gap-3">
                            <Field type="radio" name="designer" id="designerYes" value="yes" />
                            <label htmlFor="designerYes">Yes</label>
                            <Field type="radio" name="designer" id="designerNo" value="no" />
                            <label htmlFor="designerNo">No</label>
                            <Field type="radio" name="designer" id="designerTBD" value="tbd" />
                            <label htmlFor="designerTBD">TBD</label>
                          </div>
                          <ErrorMessage name="designer" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="engineer" className="form-label">Engineer</label>
                          <div className="input-group gap-3">
                            <Field type="radio" name="engineer" id="engineerYes" value="yes" />
                            <label htmlFor="engineerYes">Yes</label>
                            <Field type="radio" name="engineer" id="engineerNo" value="no" />
                            <label htmlFor="engineerNo">No</label>
                            <Field type="radio" name="engineer" id="engineerTBD" value="tbd" />
                            <label htmlFor="engineerTBD">TBD</label>
                          </div>
                          <ErrorMessage name="engineer" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="architect" className="form-label">Architect</label>
                          <div className="input-group gap-3">
                            <Field type="radio" name="architect" id="architectYes" value="yes" />
                            <label htmlFor="architectYes">Yes</label>
                            <Field type="radio" name="architect" id="architectNo" value="no" />
                            <label htmlFor="architectNo">No</label>
                            <Field type="radio" name="architect" id="architectTBD" value="tbd" />
                            <label htmlFor="architectTBD">TBD</label>
                          </div>
                          <ErrorMessage name="architect" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                          <label for="exampleFormControlInput12" className="form-label">Permits</label>
                          <div className="upload_files">
                            <div className="input-group gap-3">
                              <Field type="radio" name="permits" id="permitsYes" value="yes" />
                              <label htmlFor="permitsYes">Yes</label>
                              <Field type="radio" name="permits" id="permitsNo" value="no" />
                              <label htmlFor="permitsNo">No</label>
                              <Field type="radio" name="permits" id="permitsTBD" value="tbd" />
                              <label htmlFor="permitsTBD">TBD</label>
                            </div>
                            <ErrorMessage name="permits" component="div" className="text-danger" />
                            <div className='permit-docs'>
                              <label for="exampleFormControlInput12" className="form-label">Upload Permits (Upload pdf only)</label>
                              <input
                                type="file"
                                name="permit_doc"
                                multiple
                                accept=".pdf"
                                ref={permitDocument}
                                onChange={(event) => handlePermitDocChange(event, setFieldValue)}
                              />
                              <ErrorMessage name="permit_doc" component="div" className="text-danger" />
                            </div>
                            {selectedPermitDoc.length > 0 && (
                              <div className="d-flex selected-docs">
                                {selectedPermitDoc.map((permit, index) => (
                                  <div key={index} className="selected-doc">
                                    <p className="mb-0 mr-2">
                                      {permit.name.length > 20 ? `${permit.name.slice(0, 20)}...` : permit.name}
                                    </p>
                                    <button className="delete-docs"
                                      onClick={(event) => { handleReset(), handleDeletePermitDoc(event, index, setFieldValue) }}>
                                      <CloseIcon fontSize='20px' />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="financing" className="form-label">Financing</label>
                          <div className="input-group gap-3">
                            <Field type="radio" name="financing" id="financingYes" value="yes" />
                            <label htmlFor="financingYes">Yes</label>
                            <Field type="radio" name="financing" id="financingNo" value="no" />
                            <label htmlFor="financingNo">No</label>
                            <Field type="radio" name="financing" id="financingTBD" value="tbd" />
                            <label htmlFor="financingTBD">TBD</label>
                          </div>
                          <ErrorMessage name="financing" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                          <label for="exampleFormControlInput12" className="form-label">Plans</label>
                          <div className="upload_files border-0">
                            <div className="input-group gap-3">
                              <Field type="radio" name="plan" id="plansYes" value="yes" />
                              <label htmlFor="financingYes">Yes</label>
                              <Field type="radio" name="plan" id="plansNo" value="no" />
                              <label htmlFor="financingNo">No</label>
                            </div>
                            <ErrorMessage name="plan" component="div" className="text-danger" />
                            {/* <div>
                              <label for="exampleFormControlInput12" className="form-label">Upload Plans (Upload pdf only)</label>
                              <input type="file" name="plan_doc" accept=".pdf" ref={planDocument} onChange={(event) => {

                                if (event.currentTarget.files[0] && event.currentTarget.files[0].type === 'application/pdf') {
                                  setFieldValue("plan_doc", event.currentTarget.files[0]);
                                } else {
                                  console.error('Invalid file type. Please select a PDF file.');
                                  setFieldValue("plan_doc", null);
                                  handleResetPlan()
                                  // Optionally, you can clear the file input or show an error to the user
                                }
                              }} />
                              {values.plan_doc && <button className='delete-file mb-2'
                                onClick={() => { handleResetPlan(), setFieldValue("plan_doc", null) }}>
                                Delete file
                              </button>}
                              <ErrorMessage name="plan_doc" component="div" className="text-danger" />
                            </div> */}

                            <div className='permit-docs'>
                              <label for="exampleFormControlInput12" className="form-label">Upload Plans (Upload pdf only)</label>
                              <input
                                type="file"
                                name="plan_doc"
                                multiple
                                accept=".pdf"
                                ref={planDocument}
                                onChange={(event) => handlePlanDocChange(event, setFieldValue)}
                              />
                              <ErrorMessage name="plan_doc" component="div" className="text-danger" />
                            </div>
                            {selectedPlanDoc.length > 0 && (
                              <div className="d-flex selected-docs">
                                {selectedPlanDoc.map((plan, index) => (
                                  <div key={index} className="selected-doc">
                                    <p className="mb-0 mr-2">
                                      {plan.name.length > 20 ? `${plan.name.slice(0, 20)}...` : plan.name}
                                    </p>
                                    <button className="delete-docs"
                                      onClick={(event) => { handleResetPlan(), handleDeletePlanDoc(event, index, setFieldValue) }}>
                                      <CloseIcon fontSize='20px' />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            )}
                            <div className='plan-images'>
                              <label for="exampleFormControlInput12" className="form-label">Upload Pictures</label>
                              <input type="file" multiple name="plan_image" ref={planImages} accept="jpg, .jpeg, .png"
                                onChange={(event) => {
                                  if (event.currentTarget.files[0] && /^image\/(jpeg|jpg|png)$/.test(event.currentTarget.files[0].type)) {
                                    handlePlanImageChange(event, setFieldValue)
                                  } else {
                                    console.error('Invalid file type. Please select a JPEG, JPG, or PNG file.');
                                    setFieldValue(event, null);
                                    handleResetImages()
                                  }
                                }} />
                              {selectedPlanImages.length > 0 && (
                                <div className="selected-images  d-flex">
                                  {selectedPlanImages.map((image, index) => (
                                    <div key={index} className="selected-image">
                                      <img
                                        height={100}
                                        width={100}
                                        className="rounded d-flex m-2 p-1"
                                        src={URL.createObjectURL(image)}
                                        alt={`Selected ${index}`}
                                      />
                                      <button className="delete-files"
                                        onClick={(event) => { handleResetImages(), handleDeleteImage(event, index, setFieldValue) }}>
                                        <CloseIcon fontSize='20px' />
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              )}
                              <ErrorMessage name="plan_image" component="div" className="text-danger" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="form_style">
                        <div className="mb-3">
                          <label for="exampleFormControlInput1" className="form-label">Approximate Start Date</label>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker disablePast   value={startDate} onChange={handleStartDateChange} />
                          </LocalizationProvider>
                          {startDateError && <p className='text-danger'>Start date should not be empty</p>}
                        </div>
                        <div className="mb-3">
                          <label for="exampleFormControlInput1" className="form-label">Approximate Completion Date</label>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker value={completionDate} onChange={handleCompletionDateChange} />
                          </LocalizationProvider>
                          {endDateError && <p className='text-danger'>End date should not be empty</p>}
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
                      </div>
                    </div>
                  </div>
                  <div className="creat_btn">
                    <button type="submit" className='globle_submit' disabled={loading}> Submit {loading && <ColorRing
                      visible={true}
                      height="35"
                      width="35"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperclassName="blocks-wrapper"
                      colors={['white', 'white', 'white', 'white', 'white', 'white']}
                    />}</button>
                  </div>
                  {/* <divv className="creat_btn">
                    <a href="">Update Project</a>
                  </divv> */}
                </Form>
              )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>

    // <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

  )
}
