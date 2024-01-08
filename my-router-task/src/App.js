// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import Login from './components/Login';
import Protected from './components/Protected';
import NoPage from './components/Nopage';
import News from './components/News';
import Shop from './components/Shop'

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const login = () => {
    setAuthenticated(true);
  };

  const logout = () => {
    setAuthenticated(false);
  };

  return (
    <Router>
      <div className="App d-flex">
        <div className="flex-shrink-0">
          <Sidebar authenticated={authenticated} logout={logout} />
        </div>
        <div className="flex-grow-1 d-flex flex-column">
          <Header />
          <div className="container-fluid flex-grow-1">
            <Routes>
              <Route path="/login" element={<Login login={login} />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/dashboard"
                element={
                  authenticated ? (
                    <Protected user={authenticated} logout={logout} />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
              <Route path="*" element={<NoPage />} />
              <Route path="/news" element={<News />} /> {/* Add the News route */}
              <Route path="/shop" element={<Shop />} /> {/* Add the Shop route */}
              <Route path="*" element={<NoPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
