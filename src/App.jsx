import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import './App.css';

import Content from './components/Content/Content';

import About from './components/About/About';

function App() {
  return (
    <>
      <div className='main_container'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Content />} />
            <Route path='/about' element={<About />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
