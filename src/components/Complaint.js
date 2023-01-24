import React, { useState } from 'react';
import { TextField, Button,MenuItem,FormControl,InputLabel,Select } from '@mui/material';
import './complaint.css'

const Complaint = () => {

  const [complaint, setComplaint] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [domain, setDomain] = useState('');
  const [against_person_name, setAgainstperson] = useState('');
  const handleChange = (e)=>{
    setDomain(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(complaint, name, phone);
  };
  return (
    <div className='d-flex justify-content-center align-items-center form-outer'>
      <form onSubmit={handleSubmit} className='form' >
        <h1>Register Complaint</h1>
        <form className='p-3'>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ width: "100%" }}
          />
        </form>
        <form className='p-3'>

          <TextField
            id="phonenumber"
            label="Phonenumber"
            variant="outlined"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            sx={{ width: "100%" }}
          />
        </form>
        <div className='p-3'>

        <FormControl className='d-block'>
                <InputLabel id="simple-select-label"  >Domain</InputLabel>
                <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    label="Domain"
                    value= {domain}
                    onChange={handleChange}
                    style={{width:"100%"}}
                >
                    <MenuItem value="DEFAULT" disabled >choose option</MenuItem>
                    <MenuItem value="Hospital">Hospital</MenuItem>
                    <MenuItem value="Schools">Schools</MenuItem>
                    <MenuItem value="Ration shop">Ration Shop</MenuItem>
                    <MenuItem value="Municipality">Municipality</MenuItem>
                </Select>
            </FormControl>
        </div>
        <form className='p-3'>
          <TextField
            id="name"
            label="Against"
            variant="outlined"
            value={against_person_name}
            onChange={(e) => setName(e.target.value)}
            sx={{ width: "100%" }}
          />
        </form>
        <form className='p-3'>
          <TextField
            id="complaint"
            label="Complaint"
            multiline
            rows={4}
            variant="outlined"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            sx={{ width: "100%" }}
          />
        </form>
        <div className='d-flex justify-content-center'>
          <input type='file' className='form-control w-50'></input>
        </div>
        <div className='d-flex justify-content-center p-3'>
          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>

  );
};

export default Complaint;
