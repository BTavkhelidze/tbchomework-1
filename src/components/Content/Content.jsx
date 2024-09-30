import './Content.css';
import Card from '../Card/Card';

const Content = () => {
  return (
    <main className='content_container'>
      <Card
        title='Camera'
        imgUrl='https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg'
        description=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea
        necessitatibus saepe neque a ab eos adipisci animi Vel est mollitia
        veniam dignissimos explicabo! Fugit non quis possimus labore aliquid
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea'
      />
      <Card
        title='Smart Watch'
        imgUrl='https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
        description=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea     Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea'
      />
      <Card
        title='Organic Beauty Products'
        imgUrl='https://media.istockphoto.com/id/1320934166/photo/cosmetic-skin-care-products-on-green-leaves.jpg?s=612x612&w=0&k=20&c=X4pwnTaBzXHDOGZlcdJdlKxmYd__61xboHVIiR5JMIk='
        description=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea     Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea'
      />
    </main>
  );
};

export default Content;
