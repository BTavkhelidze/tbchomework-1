import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ title, imgUrl, description }) => {
  Card.propTypes = {
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

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
