import React from 'react';
import Card from '../components/Card';
import Carousal from '../components/Carousal';

function Home() {
  return (
    <div>
      <Carousal />
      <div className='m-4'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
