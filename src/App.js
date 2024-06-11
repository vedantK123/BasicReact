import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Siderbar from './Component/Sidebar/Siderbar';
import Demo from './demo';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from './Component/Layout';
import Home from './Component/Home/Home';
import Contact from './Component/Contact/Contact';
import About from './Component/About/About';
import Login from './Component/Login/Login';

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}/>
          {/* by default show compponent */}
         
        <Route path='Layout' element={<Layout/>}> 
          <Route  path='' index element={<Home/>}/>
          <Route path='Contact' element={<Contact/>}/>
          <Route path='About' element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    


  );
}

export default App;
