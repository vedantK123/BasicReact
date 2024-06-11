import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Siderbar from './Component/Sidebar/Siderbar';
import Demo from './demo';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from './Component/Layout';
import Home from './Component/Home/Home';
import Contact from './Component/Contact/Contact';
import About from './Component/About/About';

function App() {

  return (
    <BrowserRouter>
      <Routes>
          {/* by default show compponent */}
        <Route path='/' element={<Layout/>}> 
          <Route path='Home' element={<Home/>}/>
          <Route path='Contact' element={<Contact/>}/>
          <Route path='About' element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
