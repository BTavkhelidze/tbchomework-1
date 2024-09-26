import React from 'react';
import './Card.css';

const Card = ({ title, imgUrl, description }) => {
  return (
    <div className='card1 card'>
      <h1 className='title'>{title}</h1>
      <div className='image_wrapper'>
        <img src={imgUrl} alt='Blink Video Doorbell' />
      </div>
      <p className='description'>{description}</p>
      <button type='button'>Add to Cart</button>
    </div>
  );
};

export default Card;
