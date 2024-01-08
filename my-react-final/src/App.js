import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';

import Consultation from './pages/Consultation';

import BuyMed from './pages/Buymed';
import Login from './pages/Login';
import Signup from './pages/signup';
import Footer from './components/Footer';
import Home from './pages/Home';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consultation" element={<Consultation />} />
      
          <Route path="/buy-medicines" element={<BuyMed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </RecoilRoot>
  );
};

export default App;
