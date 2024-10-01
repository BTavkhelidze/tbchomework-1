import './Assignment3.css';

const obj = {
  id: '10002',

  name: 'Eco-Friendly Water Bottle',

  description: 'Stay hydrated with our durable, eco-friendly water bottle.',

  price: 14.99,

  currency: 'USD',

  imageURL: 'https://example.com/images/product-10002.jpg',
};

let keys = Object.keys(obj);

let values = Object.values(obj);

const Assignment3 = () => {
  return (
    <div className='assignment_container'>
      <table>
        <tr>
          <th>keys</th>
          <th>values</th>
          <th>position</th>
        </tr>

        {keys.map((key, index) => {
          return (
            <tr key={key} className='trList'>
              <td> {key} </td>
              <td> {values[index]} </td>
              <td> {[index]} </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Assignment3;
