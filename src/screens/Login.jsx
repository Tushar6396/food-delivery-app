import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const content = await response.json();
    console.log(content);

    if (!content.success) {
      alert('Some error occured');
    } else {
      localStorage.setItem('token', content.authToken);
      console.log(localStorage.getItem('token'));
      navigate('/');
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
          <button type='submit' className=' btn btn-success'>
            Submit
          </button>
          <Link to='/createuser' className='m-3 btn btn-danger'>
            New user?
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login;
