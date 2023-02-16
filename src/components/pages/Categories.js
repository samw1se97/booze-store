import React from 'react';

import { Link, Outlet } from 'react-router-dom';

export default function Categories() {
  return (
    <>
      <nav className='categories-nav'>
        <ul className='sub-nav'>
          <Link className='sub-router-link' to='/categories/wine'>
            Wines
          </Link>
          <Link className='sub-router-link' to='/categories/digestif'>
            Digestif
          </Link>
          <Link className='sub-router-link' to='/categories/aperitif'>
            Aperitif
          </Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
