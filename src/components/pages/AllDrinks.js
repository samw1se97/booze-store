import React from 'react';
import Card from '../cards/Card';
import '../components-styles/pages-styles.css';

export default function AllDrinks({ products }) {
  console.log(products);

  return (
    <>
      <h3 className='heading'>Our Booze</h3>
      <div className='card-grid'>
        {products && products.map((el) => <Card key={el.id} data={el} />)}
      </div>
    </>
  );
}
