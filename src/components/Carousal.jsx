import React from 'react';

function Carousal() {
  return (
    <div>
      <div
        id='carouselExampleFade'
        className='carousel slide carousel-fade '
        data-bs-ride='carousel'
        style={{ objectFit: 'contain !important' }}
      >
        <div className='carousel-inner ' id='carousel'>
          <div className=' carousel-caption  ' style={{ zIndex: '9' }}>
            <form className=' d-flex justify-content-center'>
              {' '}
              <input
                className='form-control me-2 w-75 bg-white text-dark'
                type='search'
                placeholder='Type in...'
                aria-label='Search'
              />
              <button className='btn text-white bg-success' type='submit'>
                Search
              </button>
            </form>
          </div>
          <div className='carousel-item active'>
            <img
              src='https://plus.unsplash.com/premium_photo-1684534125661-614f59f16f2e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              className='d-block w-100  '
              style={{ filter: 'brightness(30%)' }}
              alt='...'
            />
          </div>
          <div className='carousel-item'>
            <img
              src='https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              className='d-block w-100 '
              style={{ filter: 'brightness(30%)' }}
              alt='...'
            />
          </div>
          <div className='carousel-item'>
            <img
              src='https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              className='d-block w-100 '
              style={{ filter: 'brightness(30%)' }}
              alt='...'
            />
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleFade'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleFade'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousal;
