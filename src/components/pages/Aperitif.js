import React from 'react';
import Card from '../cards/Card';

export default function Aperitif({ products }) {
  const aperitifData = products.filter((el) => el.category === 'Aperitif');
  console.log(aperitifData && aperitifData);
  return (
    <>
      <h3 className='heading'>Our Aperitifs</h3>
      <div className='card-grid'>
        {aperitifData &&
          aperitifData.map((el) => <Card key={el.id} data={el} />)}
        {/* <Card data={aperitifData} /> */}
      </div>
    </>
  );
}
