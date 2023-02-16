import React from 'react';
import { Link } from 'react-router-dom';

import './components-styles/pages-styles.css';
export default function Nav() {
  return (
    <header className='header home'>
      <img src={require('../images/logo.jpg')} alt='logo-img' />
      <nav className='nav-bar'>
        <Link to='/'>Home</Link>
        <Link to='/admin'>admin</Link>
        <Link to='/categories'>Drinks</Link>
      </nav>
    </header>
  );
}
