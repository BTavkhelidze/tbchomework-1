'use client';

import { useState, useEffect } from 'react';

import './Content.css';

import Card from '../components/Card/Card';

const Content = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('https://dummyjson.com/products');

        if (!res.ok)
          throw new Error('Somthing went wrong with fetching Products');

        const data = await res.json();
        if (data.Response === 'False') throw new Error('Products not found!');
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <main className='content_container'>
      {isLoading && <p className='loading'>Loading...</p>}
      {error && <p className='section-products__intro'> {error}</p>}

      {!isLoading && !error && (
        <>
          {products.map((product) => (
            <Card productsObj={product} key={product.id} />
          ))}
        </>
      )}
    </main>
  );
};

export default Content;
