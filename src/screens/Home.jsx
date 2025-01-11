import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

function Home() {
  const [foodCategory, setFoodCategory] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [search, setSearch] = useState('');

  const loadData = async () => {
    const response = await fetch('http://localhost:5000/api/foodData', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setFoodCategory(data[0]);
    setFoodItems(data[1]);
    console.log(data[0], data[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

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
            <div className=' d-flex justify-content-center'>
              <input
                className='form-control me-2 w-75 bg-white text-dark'
                type='search'
                placeholder='Type in...'
                aria-label='Search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
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
      <div className='m-4 container'>
        {foodCategory
          ? foodCategory.map((category) => {
              return (
                <div className='row m-3'>
                  <div key={category._id} className='fs-3 m-3'>
                    {category.CategoryName}
                  </div>
                  <hr />
                  {foodItems
                    ? foodItems
                        .filter(
                          (item) =>
                            item.CategoryName === category.CategoryName &&
                            item.name
                              .toLowerCase()
                              .includes(search.toLowerCase())
                        )
                        .map((filterItems) => {
                          return (
                            <div
                              key={filterItems._id}
                              className='col-12 col-md-6 col-lg-4 col-xl-3'
                            >
                              <Card
                                foodName={filterItems.name}
                                options={filterItems.options}
                                imgSrc={filterItems.img}
                              />
                            </div>
                          );
                        })
                    : 'No items found'}
                </div>
              );
            })
          : 'Loading...'}
      </div>
    </div>
  );
}

export default Home;
