import React, { useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { docRef } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

import './components-styles/Form-styles.css';
export default function Addtem() {
  const navigate = useNavigate();
  const [newItem, setNewItem] = useState({
    name: '',
    price: 0,
    description: '',
    category: '',
    isInStock: false,
    image: '',
  });

  const onChangeHandler = (e) => {
    console.log(e.target.name);
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };

  const addNewItem = async (e) => {
    e.preventDefault();
    await addDoc(docRef, { ...newItem, isInStock: true })
      .then((res) => {
        console.log(res + 'Item was succesfully updated');
      })
      .catch((err) => {
        alert(`${err}, problem while updating Item`);
      })
      .finally(() => {
        navigate(-1);
      });
  };

  return (
    <section className='admin-section'>
      <div>
        <h3>Wellcome Back Admin</h3>
      </div>
      <div className='admin-form-wrapper' onSubmit={addNewItem}>
        <form className='update-form'>
          <p className='form-text'>
            submit this form to add a new item to the Data-Base
          </p>
          <div className='input-wrapper'>
            <label>Name</label>
            <input
              type='text'
              placeholder='New Name'
              name='name'
              onChange={onChangeHandler}
            />
          </div>

          <div className='input-wrapper'>
            <label>Price</label>
            <input
              type='number'
              name='price'
              placeholder='New Price'
              onChange={onChangeHandler}
            />
          </div>

          <div className='input-wrapper'>
            <label>Description</label>
            <textarea
              type='text'
              name='description'
              placeholder='New Name'
              onChange={onChangeHandler}
            />
          </div>

          <div className='input-wrapper'>
            <label>Category</label>
            <select
              name='category'
              onChange={onChangeHandler}
              placeholder='cat'>
              <option value='Wine'>Wine</option>
              <option value='Digedtif'>Digedtif</option>
              <option value='Aperitif'>Aperitif</option>
            </select>
          </div>
          <button className='btn'>Add Item</button>
        </form>
      </div>
    </section>
  );
}
