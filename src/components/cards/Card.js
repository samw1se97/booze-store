/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { BiShekel } from 'react-icons/bi';
import Button from '../Button';

import '../components-styles/pages-styles.css';

export default function Card(props) {
  console.log(props.data.image);
  return (
    <div className='card'>
      <div className='card-header card-image'>
        <img
          src={require(`../../images/${
            props.data.image === '' ? 'logo' : props.data.image
          }.jpg`)}
          alt='logo'
        />
      </div>
      <div className='card-body'>
        <p className='item-name'>{props.data.name}</p>
        <div className='price-icon'>
          <p className='item-price'>{props.data.price} </p>
          <BiShekel size='1em' />
        </div>
      </div>
      <div className='card-footer'>
        <Button context='details' viewDetails={props.data} id={props.data.id} />
      </div>
    </div>
  );
}
