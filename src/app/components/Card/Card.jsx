'use client';

import { useRouter } from 'next/navigation';
import './Card.css';

// import Link from 'next/link';

const Card = ({ productsObj }) => {
  const router = useRouter();

  const handlClick = (id) => {
    router.push(`./product/${id}`);
  };
  return (
    // <Link href={`/product/${productsObj.id}`}>
    <div className='card'>
      {/* card-desc_wrapper_reverse */}
      <div className='image_wrapper'>
        <img alt='Blink Video Doorbell' src={productsObj.images[0]} />
      </div>
      <div className='card-desc_wrapper'>
        <h1 className='title'>{productsObj.title}</h1>

        {/* <p className='description'>{productsObj.description}</p> */}
        <div className='price_wrapper'>
          <p className='price'>{productsObj.price}$</p>
          <button onClick={() => handlClick(productsObj.id)} type='button'>
            More
          </button>
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default Card;
