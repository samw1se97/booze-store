import React from 'react';
import Card from '../cards/Card';
import '../components-styles/pages-styles.css';

export default function Digestif({ products }) {
  const digestifData = products.filter((el) => el.category === 'Digestif');

  return (
    <>
      <h3 className='heading'>Our digestifs</h3>
      <div className='card-grid'>
        {digestifData &&
          digestifData.map((el) => <Card key={el.id} data={el} />)}
      </div>
    </>
  );
}
