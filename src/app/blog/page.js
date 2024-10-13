'use client';
import Posts from '../components/Post/Posts';

import './Blogs.css';
import { useState, useEffect } from 'react';

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('https://dummyjson.com/posts');

        if (!res.ok)
          throw new Error('Somthing went wrong with fetching Products');

        const data = await res.json();
        if (data.Response === 'False') throw new Error('Products not found!');
        setPosts(data.posts);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);
  console.log(posts);
  return (
    <main className='blogs_container'>
      <section className='title_wrapper'>
        <h1 className='title'> Blogs</h1>
      </section>
      <section className='blogs'>
        {posts.map((post) => (
          <Posts key={post.id} post={post} />
        ))}
      </section>
      <section className='free_wrapper'>
        <h1 className='title'> Advertising space</h1>
      </section>
    </main>
  );
};

export default Blogs;
