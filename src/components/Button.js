import React from 'react';
import { useNavigate } from 'react-router-dom';

import './components-styles/pages-styles.css';

export default function Button(props) {
  const navigate = useNavigate();
  const item = props.viewDetails;
  const handleClick = () => {
    if (props.context === 'details') {
      navigate(`/categories/${props.id}`, { state: item });
    }
  };

  return (
    <button className={'btn'} onClick={handleClick}>
      {props.context}
    </button>
  );
}
