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
  console.log('გოოდ');

  return (
    <>
      <h1>{product.title}</h1>;
    </>
  );
}
