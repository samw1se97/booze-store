import React from 'react';
import Card from '../cards/Card';
import '../components-styles/pages-styles.css';

export default function Wine({ products }) {
  const wineData = products.filter((el) => el.category === 'Wine');
  return (
    <main>
      <h3 className='heading'>Our wines</h3>
      <div className='card-grid'>
        {wineData && wineData.map((el) => <Card key={el.id} data={el} />)}
      </div>
    </main>
  );
}
