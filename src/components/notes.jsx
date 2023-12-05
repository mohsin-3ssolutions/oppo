import { Close } from '@mui/icons-material'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function Notes({ setOpenNotesIndex, bidData, updateFlag }) {
  const [isEdit, setIsEdit] = useState(false)
  const [notes, setNotes] = useState(bidData?.latest_notes?.notes)

  console.log(bidData)

  const handleEdit = async () => {
    updateFlag(false);
    try {
      let url = process.env.REACT_APP_BASE_URL;
      const token = localStorage.getItem('authToken');

      const requestData = {
        bid_id: bidData.id,
        notes: notes,
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
        url + `/bid_notes`,
        requestOptions
      );

      const body = await res.json();

      if (body.success === true) {
        toast.success('Notes added successfully!', { autoClose: 3000 });
        setOpenNotesIndex(null)
        updateFlag(true);
      }
      console.log({ body });
    } catch (err) {
      console.error(err);
    }
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  return (
    <div>

      <div className='comunication_content'>
        <div className='text-end' onClick={() => { setOpenNotesIndex(null) }}><Close /></div>
        <div className='display-flex justify-content-between'>
          <h4><strong>Notes</strong></h4>
        </div>
        {
          !isEdit && <div className='proposal_content'>
            <p>{bidData?.latest_notes?.notes}</p>
          </div>
        }
        {
          isEdit && <div className='proposal_content'>
            <textarea name="" value={notes} id="" onChange={handleNotesChange} cols="50" rows="5"></textarea>
          </div>
        }
        <br />
        {!isEdit ? <button className="globle_btn" onClick={() => { setIsEdit(true) }}>Click to Edit Notes</button> : <button className="globle_btn" onClick={() => { handleEdit() }}>Edit Notes</button>}
      </div>
    </div>
  )
}