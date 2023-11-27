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
    < div>
        <div className='container'>
            <div className="about_projects">
                <div className="color_bg">
                    <ul className="project_boxes">
                        <li>
                            <div className="project_detail">
                                <div className="project_head">
                                    <h2>Active Project Name <span>Awarded on Oct 2, 2023</span></h2>
                                </div>
                                <p><strong>Project Description:</strong> General contractors will manage the build process of a movie theater, overseeing site preparation, excavation, electrical, plumbing, HVAC, and finishing work. They will collaborate with specialists to ensure timely, budget-friendly, and quality project completion. The theater will offer advanced audio-visual equipment, comfortable seating, and safety protocols to deliver a first-class entertainment experience.</p>
                            </div>
                        </li>
                        <li>
                            <div className="project_detail">
                                <div className="project_head">
                                    <h2>Active Project Name <span>Awarded on Oct 2, 2023</span></h2>
                                </div>
                                <p><strong>Project Description:</strong> General contractors will manage the build process of a movie theater, overseeing site preparation, excavation, electrical, plumbing, HVAC, and finishing work. They will collaborate with specialists to ensure timely, budget-friendly, and quality project completion. The theater will offer advanced audio-visual equipment, comfortable seating, and safety protocols to deliver a first-class entertainment experience.</p>
                            </div>
                        </li>
                        <li>
                            <div className="project_detail">
                                <div className="project_head">
                                    <h2>Active Project Name <span>Awarded on Oct 2, 2023</span></h2>
                                </div>
                                <p><strong>Project Description:</strong> General contractors will manage the build process of a movie theater, overseeing site preparation, excavation, electrical, plumbing, HVAC, and finishing work. They will collaborate with specialists to ensure timely, budget-friendly, and quality project completion. The theater will offer advanced audio-visual equipment, comfortable seating, and safety protocols to deliver a first-class entertainment experience.</p>
                            </div>
                        </li>
                        <li>
                            <div className="project_detail">
                                <div className="project_head">
                                    <h2>Active Project Name <span>Awarded on Oct 2, 2023</span></h2>
                                </div>
                                <p><strong>Project Description:</strong> General contractors will manage the build process of a movie theater, overseeing site preparation, excavation, electrical, plumbing, HVAC, and finishing work. They will collaborate with specialists to ensure timely, budget-friendly, and quality project completion. The theater will offer advanced audio-visual equipment, comfortable seating, and safety protocols to deliver a first-class entertainment experience.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="creat_btn text-center my-5">
                  <a className="me-4" href="/find-a-project">Find a Project</a>
                  <a href="/post-new-project">Post a Project</a>
                </div>
            </div>
        </div>
    </div>
  )
}
