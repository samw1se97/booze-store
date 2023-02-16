// import { async } from '@firebase/util';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase-config';

import './components-styles/Form-styles.css';
export default function UpdateForm({ data, closeModal }) {
  const [formData, setFormData] = useState(data);
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value !== '' && e.target.value,
    });
    return formData;
  };

  const docRef = doc(db, 'booze', data.id);

  // Update Data in firebase
  const updatItem = async (e) => {
    e.preventDefault();

    await updateDoc(docRef, formData)
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
  //  ==============================
  // Delete Curent Item from firebase

  const deleteItem = async (e) => {
    e.preventDefault();
    await deleteDoc(docRef)
      .then((res) => {
        console.log(' Item deleted succesfully');
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        navigate(-1);
      });
  };

  return (
    <div className='overlay'>
      <form className='update-form' onSubmit={updatItem}>
        <h3>Update products</h3>
        <div className='input-wrapper'>
          <label>name</label>
          <input
            type='text'
            name='name'
            placeholder={data.name}
            onChange={onChangeHandler}
          />
        </div>
        <div className='input-wrapper'>
          <label>price</label>
          <input
            type='number'
            name='price'
            placeholder={data.price}
            onChange={onChangeHandler}
          />
        </div>
        <div className='input-wrapper'>
          <label>description</label>
          <textarea
            type='text'
            name='description'
            placeholder={data.description}
            onChange={onChangeHandler}
          />
        </div>
        <div className='input-wrapper'>
          <label>Category</label>
          <select name='category' placeholder={data.category}>
            <option value='Wine'>Wine</option>
            <option value='Digedtif'>Digedtif</option>
            <option value='Aperitif'>Aperitif</option>
          </select>
        </div>
        <div className='input-wrapper stock'>
          <div className='radio-picker'>
            <input
              type='radio'
              name='isInStock'
              value='true'
              defaultChecked
              onChange={onChangeHandler}
            />
            <label>exists in stock</label>
          </div>
          <div className='radio-picker'>
            <input
              type='radio'
              name='isInStock'
              value='false'
              onChange={onChangeHandler}
            />
            <label>out of stock</label>
          </div>
        </div>
        <div className='btn-wrapper'>
          <button type='submit'>Update</button>
          <button type='submit' onClick={deleteItem}>
            Delete
          </button>
          <button onClick={() => closeModal(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
