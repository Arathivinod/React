import React from 'react';
import { Link } from "react-router-dom";


function Header(){
  return (
    <div>
    <nav>
        <Link to="/" className="navLink">
            Home
        </Link><br></br>
        <Link to="/about" className="navLink">
            About
        </Link>
        <Link to="/form" className="navLink">
            Form
        </Link>
    </nav>
    </div>
  );
};
// export default Header