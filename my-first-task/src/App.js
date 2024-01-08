import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer  from './Footer';
import Sidebar from './Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <Body />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
}

export default App;
