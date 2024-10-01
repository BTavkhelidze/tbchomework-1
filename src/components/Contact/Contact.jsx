import './Contact.css';
const Contact = () => {
  return (
    <div className='contact_container'>
      <div className='title_wrapper'>
        <h1 className='title'> Contact</h1>
      </div>
      <div className='contact_wrapper'>
        <div className='contact'>
          <div className='first_text'>Let`s get in Touch</div>
        </div>
        <div className='submit_form'>
          <form>
            <div className='label_wrapper'>
              <input type='text' id='username' />
              <label htmlFor='username'>Name</label>
            </div>

            <div className='label_wrapper'>
              <input type='text' id='email' />
              <label htmlFor='email'>Email</label>
            </div>

            <div className='label_wrapper'>
              <input type='tel' id='secondname' required />
              <label htmlFor='secondname'>Mobile</label>
            </div>

            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
