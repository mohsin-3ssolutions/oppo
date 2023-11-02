import React, { useState } from 'react'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'// import Logo from "../assets/images/logo.png"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
export default function ActiveProjects() {
  const [startDate, setStartDate] = useState(null);
  const [completionDate, setCompletionDate] = useState(null);
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate()

  const handleStartDateChange = (date) => {
    // console.log(date.$d)
    const formattedDate = moment(date.$d).format('YYYY-MM-DD');
    setStartDate(formattedDate);
    // setStartDate(date.$d);
  };

  const handleCompletionDateChange = (date) => {
    const formattedDate = moment(date.$d).format('YYYY-MM-DD');
    setCompletionDate(formattedDate);
  };

  const initialValues = {
    project_name: '',
    email: '',
    price: '',
    project_rep: '',
    phone: '',
    project_description: '',
    past_work: '',
    designer: '',
    engineer: '',
    architect: '',
    permits: '',
    permit_doc: null,
    financing: '',
    plan: '',
    plan_doc: null,
    plan_image: null,
    jobStatus: '',
    project_start_date: null,
    project_end_date: null,
  };

  const validationSchema = Yup.object().shape({
    project_name: Yup.string().required('Project Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    project_rep: Yup.string().required('Project Rep is required'),
    phone: Yup.string().required('Phone Number is required'),
    price: Yup.string().required('Price is required'),
    project_description: Yup.string(),
    past_work: Yup.string(),
    designer: Yup.string(),
    engineer: Yup.string(),
    architect: Yup.string(),
    permits: Yup.string(),
    permit_doc: Yup.string(),
    financing: Yup.string(),
    plan: Yup.string(),
    jobStatus: Yup.string(),
  });

  // const handleSubmit = (values) => {
  //   // Handle form submission here
  // values.project_start_date = startDate;
  // values.project_end_date = completionDate;

  //   console.log(values);
  // };

  const handleSubmit = async (values) => {
    let url = process.env.REACT_APP_BASE_URL;
    values.project_start_date = startDate;
    values.project_end_date = completionDate;
    values.project_type = 'commercial';

    if (moment(startDate).isAfter(completionDate)) {
      toast.error('Start date must be before the completion date.', { autoClose: 3000 });
      return; // Prevent submission if the condition is not met
    }
    setLoading(true);

    const token = localStorage.getItem('authToken');
    if (token) {
      try {
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
        formData.append('project_type', 'commercial');
        formData.append('permits', values.permits);
        formData.append('project_start_date', values.project_start_date);
        formData.append('project_description', values.project_description);
        formData.append('plan_doc', values.plan_doc);
        formData.append('plan_image', values.plan_image);
        formData.append('permit_doc', values.permit_doc);
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
              navigate('/find-a-project')
            } else {
              toast.error('Something went wrong!' + message, { autoClose: 3000 });
            }
          }).finally(() => {
            // Set loading back to false when the API request is complete
            setLoading(false);
          });
      } catch (error) {
        console.error('An error occurred:', error);
        toast.error('An error occurred.' + error, { autoClose: 3000 });
        setLoading(false);
      }
    }
  };


  return (


    // <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
    <div className='container'>
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
                      <Field type="text" className="form-control" id="price" name="price" />
                      <ErrorMessage name="price" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="project_rep" className="form-label">Project Rep</label>
                      <Field type="text" className="form-control" id="project_rep" name="project_rep" />
                      <ErrorMessage name="project_rep" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <Field type="text" className="form-control" id="phone" name="phone" />
                      <ErrorMessage name="phone" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="project_description" className="form-label">Project Description</label>
                      <Field as="textarea" className="form-control" id="project_description" name="project_description" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="past_work" className="form-label">Who have you worked with in the past? (Banks, Lenders, etc.)</label>
                      <Field as="textarea" className="form-control" id="past_work" name="past_work" />
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
                        <label for="exampleFormControlInput12" className="form-label">Upload Permits</label>
                        <input type="file" name="permit_doc" accept=".pdf" onChange={(event) => {
                          setFieldValue("permit_doc", event.currentTarget.files[0]);
                        }} />
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
                          <Field type="radio" name="plan" id="plansTBD" value="tbd" />
                          <label htmlFor="financingTBD">TBD</label>
                        </div>
                        <ErrorMessage name="plan" component="div" className="text-danger" />
                        <label for="exampleFormControlInput12" className="form-label">Upload Plans</label>
                        <input type="file" name="plan_doc" accept=".pdf" onChange={(event) => {
                          setFieldValue("plan_doc", event.currentTarget.files[0]);
                        }} />
                        <label for="exampleFormControlInput12" className="form-label">Upload Pictures</label>
                        <input type="file" name="plan_image" accept="jpg, .jpeg, .png" onChange={(event) => {
                          setFieldValue("plan_image", event.currentTarget.files[0]);
                        }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="form_style">
                    <div className="mb-3">
                      <label for="exampleFormControlInput1" className="form-label">Approximate Start Date</label>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker value={startDate} onChange={handleStartDateChange} />
                      </LocalizationProvider>
                    </div>
                    <div className="mb-3">
                      <label for="exampleFormControlInput1" className="form-label">Approximate Completion Date</label>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker value={completionDate} onChange={handleCompletionDateChange} />
                      </LocalizationProvider>
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
                  wrapperClass="blocks-wrapper"
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
  )
}
