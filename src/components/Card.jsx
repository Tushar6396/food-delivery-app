import React from 'react';

function Card(props) {
  let options = props.options[0];
  let optionsPrice = Object.keys(options);

  return (
    <div className='card mt-3' style={{ width: '18rem', maxHeight: '360px' }}>
      <img
        src={props.imgSrc}
        className='card-img-top'
        alt='...'
        style={{ height: '120px', objectFit: 'fill' }}
      />
      <div className='card-body'>
        <h5 className='card-title'>{props.foodName}</h5>
        <p className='card-text'>Some quick example text to build.</p>
        <div className='container w-100 '>
          <select className='m-2 h-100 bg-success text-white'>
            {Array.from({ length: 6 }, (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>

          <select className='m-2 h-100 bg-success text-white'>
            {optionsPrice.map((data) => {
              return (
                <option key={data} value={data}>
                  {data}
                </option>
              );
            })}
          </select>
          <div className='d-inline h-100 fs-5'>Total Price</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
