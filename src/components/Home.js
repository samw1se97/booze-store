import React from 'react';

import './components-styles/Homepage-styles.css';
export default function Home() {
  return (
    <div className='homepage-wrapper'>
      <h3>Welcome</h3>
      <div className='content-area'>
        <div className='content'>
          <h1>
            <span className='title-span'>B</span>ooze pro
            <span className='title-span'>j</span>ect
          </h1>
          <p>
            Made by <span className='span'>S</span>amuel &{' '}
            <span className='span'>H</span>arel
          </p>
          <button>Click here</button>
        </div>
      </div>
    </div>
  );
}
