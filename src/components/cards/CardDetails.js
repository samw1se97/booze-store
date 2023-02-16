import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BiShekel } from 'react-icons/bi';
import UpdateForm from '../UpdateForm';

import '../components-styles//Card-details.css';

export default function CardDetails() {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const item = state;

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      {modal && <UpdateForm closeModal={setModal} data={item} />}
      <div className='detail-card-wrapper'>
        <div className='d-card'>
          <div className='d-card-header d-card-img'>
            <img
              src={require(`../../images/${
                item.image === '' ? 'logo' : item.image
              }.jpg`)}
              alt='logo'
            />
          </div>
          <div className='d-card-body-wrapper'>
            <div className='d-card-body'>
              <h1>{item.name}</h1>

              <p className='d-card-description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className='d-price-style'>
                <h2>{item.price}</h2>
                <BiShekel />
              </div>
            </div>
            <div className='d-card-footer'>
              <button
                className='btn card-btn'
                onClick={() => setModal(toggleModal)}>
                Edit
              </button>
              <button className='btn card-btn' onClick={() => navigate(-1)}>
                Go Back
              </button>{' '}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
