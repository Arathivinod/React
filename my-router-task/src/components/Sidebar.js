// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const userName = "John Doe"; // Replace with the actual user name
  // Replace the placeholder image URL with the actual URL of the user image
  const userImage = "https://via.placeholder.com/150"; 

  return (
    <aside className="sidebar">
      <div className="text-center mb-4">
        {/* User Image */}
        <img
          src={userImage}
          alt="User Image"
          className="rounded-circle"
          style={{ width: '150px', height: '150px' }}
        />
        {/* User Name */}
        <p className="text-muted mt-2">{userName}</p>
      </div>

      <div className="d-flex flex-column align-items-start">

        <ul className="list-unstyled">
          {/* Existing Sidebar Items */}
          <li className="list-group-item">
            {/* Placeholder Logo */}
            🏠{' '}
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="list-group-item">
            {/* Placeholder Logo */}
            ℹ️{' '}
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="list-group-item">
            {/* Placeholder Logo */}
            📞{' '}
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="list-group-item">
            {/* Placeholder Logo */}
            📊{' '}
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>

          {/* Additional Items */}
          <li className="list-group-item">
            {/* Placeholder Logo */}
            📰{' '}
            <Link to="/news" className="nav-link">
              News
            </Link>
          </li>
          <li className="list-group-item">
            {/* Placeholder Logo */}
            🛒{' '}
            <Link to="/shop" className="nav-link">
              Shop
            </Link>
          </li>
        </ul>
      </div>

      {/* Logout */}
      <div className="mt-auto">
        <hr />
        <p className="text-muted pl-3">Welcome {userName}</p>
        <Link to="/logout" className="pl-3">
          {/* Placeholder for Logout Symbol */}
          <span role="img" aria-label="logout">
            ➡️
          </span>{' '}
          Logout
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
