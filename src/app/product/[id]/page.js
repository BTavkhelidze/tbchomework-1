import './singleProduct.css';

export async function generateStaticParams() {
  const res = await fetch(`https://dummyjson.com/products`);
  const data = await res.json();

  return data.products.map((product) => ({
    id: product.id.toString(),
  }));
}

export const getProduct = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();

  return data;
};

export default async function Product({ params }) {
  const product = await getProduct(params.id);

  return (
    <>
      <main className='product_container'>
        <div className='wrapepr_img_details'>
          <div className='product_image_wrapper'>
            <img
              alt='Essence Mascproduct_detailsara Lash Princess'
              src={product.images[0]}
            />

            <div className='other_pictures'>
              {product.images.length > 0 && (
                <img
                  alt='Essence Mascproduct_detailsara Lash Princess'
                  src={product.images[0]}
                />
              )}
              {product.images.length > 1 && (
                <img
                  alt='Essence Mascproduct_detailsara Lash Princess'
                  src={product.images[1]}
                />
              )}
              {product.images.length > 2 && (
                <img
                  alt='Essence Mascproduct_detailsara Lash Princess'
                  src={product.images[2]}
                />
              )}
            </div>
          </div>

          <div className='product_details'>
            <h3 className='product_description'>{product.description}</h3>
            <p className='product_rating'>Rating: {product.rating}/5</p>
            <div className='product_meta'>
              <p>Brand: {product.brand}</p>
              <p className='product_price'>price: ${product.price}</p>
              {product.discountPersentage > 1 && (
                <p className='product_discount'>
                  Discount: {product.discountPersentage}
                </p>
              )}
            </div>
          </div>
          <div className='add_to_cart_wrapper'>
            <p className='price'>${product.price}</p>
            <p className='shipping'>{product.shippingInformation}</p>
            {product.stock > 0 ? (
              <p className='in_stock'>In Stock</p>
            ) : (
              <p>Not in Stock</p>
            )}
            <button className='add_to_cart'>Add to Cart</button>
            <div className='product_return_policy'>
              <p>Returns {product.returnPolicy}</p>
              <p>Minimum OrderQuantity {product.minimumOrderQuantity}</p>
            </div>
          </div>
        </div>
        <div className='product_warranty'>
          <h3>warranty Information</h3>
          <p>{product.warrantyInformation}</p>
        </div>

        <div className='product_reviews'>
          <h3>Customer Reviews</h3>
          <ul className='reviews_list'>
            {product.reviews.map((review, i) => (
              <div className='review_wrapper' key={i}>
                <div className='customer'>
                  <img src='https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-1024.png' />

                  <p> {review.reviewerName}</p>
                </div>
                <div className='rating'>
                  <p>
                    review: <span> {review.rating}/5</span>
                  </p>
                  <p>
                    comment: <span> {review.comment}</span>
                  </p>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
