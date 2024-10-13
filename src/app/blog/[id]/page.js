import './singleBlog.css';

export async function generateStaticParams() {
  const res = await fetch(`https://dummyjson.com/posts`);
  const data = await res.json();

  return data.posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export const getProduct = async (id) => {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const data = await res.json();

  return data;
};

export default async function Product({ params }) {
  const post = await getProduct(params.id);
  console.log(post);
  return (
    <>
      <main className='post_container'>
        <section className='free_wrapper'>
          <h1 className='title'> Advertising space</h1>
        </section>
        <section className='post_content_wrapper'>
          <div className='post_img_wrapper'>
            <img src='https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg' />
            <span>UserId: {post.userId}</span>
          </div>
          <h4>{post.title}</h4>

          <span className='body_text'>Body Text</span>
          <h5 className='post_body_text'>{post.body}</h5>
          <p>{post.views} Views</p>

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
                //   src={like}
                alt='likes button'
              />
            </span>
          </div>
        </section>
      </main>
    </>
  );
}
