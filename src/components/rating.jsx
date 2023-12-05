import { Rating } from '@mui/material';
import React from 'react'
import { toast } from 'react-toastify';

export default function Ratting({ bidData }) {
  const [value, setValue] = React.useState(bidData?.rating);

  console.log(value)

  const handleRating = async (item) => {
    try {
      let url = process.env.REACT_APP_BASE_URL;
      const token = localStorage.getItem('authToken');

      const requestData = {
        project_id: bidData.project_id,
        bid_id: bidData.id,
        rating: item,
      };

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestData),
      };

      const res = await fetch(
        url + `/bid_rating`,
        requestOptions
      );

      const body = await res.json();

      // if (body.success === true) {
      //   toast.success('Notes added successfully!', { autoClose: 3000 });
      // }
      console.log({ body });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='reviews w-50'>
      <p className='mb-1'><strong>Proposal Rating</strong></p>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
          handleRating(newValue);
        }}
      />
    </div>
  )
}
