'use client';

import { useRouter } from 'next/navigation';

const Posts = ({ post }) => {
  const router = useRouter();

  const handlClick = (id) => {
    router.push(`./blog/${id}`);
  };
  return (
    <>
      <div className='post_wrapper'>
        <p>{post.body}</p>

        <div className='btn_reactions_wrapper'>
          <div className='reactions_wrapper'>
            <span className='reactions like '>
              <img
                className='reactions_image  like'
                src='https://www.svgrepo.com/show/1198/like.svg'
                alt='likes button'
              />
              {post.reactions.likes}
            </span>
            <span className='reactions dislike'>
              {post.reactions.dislikes}
              <img
                className='reactions_image  '
                src='https://www.svgrepo.com/show/504867/show-youtube-dislikes.svg'
                alt='likes button'
              />
            </span>
          </div>
          <button onClick={() => handlClick(post.id)} type='button'>
            See More
          </button>
        </div>
      </div>
    </>
  );
};

export default Posts;
