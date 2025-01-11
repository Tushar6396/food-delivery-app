import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    geolocation: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });

    const content = await response.json();
    console.log(content);

    if (!content.success) {
      alert('Some error occured');
    } else {
      alert('User created successfully');
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className='container p-5'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter name'
              name='name'
              value={credentials.name}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Enter email'
              name='email'
              value={credentials.email}
              onChange={handleChange}
            />
            <small id='emailHelp' className='form-text text-muted'>
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Password</label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Password'
              name='password'
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter your Address'
              name='geolocation'
              value={credentials.geolocation}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className=' btn btn-success'>
            Submit
          </button>
          <Link to='/login' className='m-3 btn btn-danger'>
            Already a User
          </Link>
        </form>
      </div>
    </>
  );
}

export default Signup;
