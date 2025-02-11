import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-success navbar-dark'>
        <div className='container-fluid'>
          <Link className='navbar-brand fs-1 fst-italic' to='/'>
            FoodieHub
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav me-auto'>
              <li className='nav-item'>
                <Link
                  className='nav-link active fs-5'
                  aria-current='page'
                  to='/'
                >
                  Home
                </Link>
              </li>
              {localStorage.getItem('token') ? (
                <li className='nav-item'>
                  <Link
                    className='nav-link active fs-5'
                    aria-current='page'
                    to='/'
                  >
                    My Orders
                  </Link>
                </li>
              ) : (
                ''
              )}
            </ul>
            {!localStorage.getItem('token') ? (
              <div className='d-flex '>
                <Link className='btn bg-white text-success mx-1' to='/login'>
                  Login
                </Link>
                <Link
                  className='btn bg-white text-success mx-1'
                  to='/createuser'
                >
                  SignUp
                </Link>
              </div>
            ) : (
              <div>
                <div className='btn bg-white text-success mx-1'>My Cart</div>
                <div
                  className='btn bg-white text-danger mx-1'
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
