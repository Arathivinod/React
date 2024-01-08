import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Form } from "./pages/Form";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container-fluid">
          <Routes>
            <Route
              path="/"
              element={
                <div className="row">
                  <div className="col-md-3">
                    <Sidebar />
                  </div>
                  <div className="col-md-9">
                    <Body />
                  </div>
                </div>
              }
            />
            <Route path="Home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="form" element={<Form />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
