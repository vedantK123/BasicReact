import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Component/Layout';
import Home from './Component/Home/Home';
import Contact from './Component/Contact/Contact';
import About from './Component/About/About';
import Login from './Component/Login/Login';
import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        {/* by default show component */}
        <Route path='Layout' element={<Layout />}>
          <Route
            path='Home'
            element={
              <Home
                counter={counter}
                addValue={addValue}
                removeValue={removeValue}
              />
            }
          />
          <Route path='Contact' element={<Contact />} />
          <Route
            path='About'
            element={<About counter={counter} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
