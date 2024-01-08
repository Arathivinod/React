// Protected.js
import { Button } from 'react-bootstrap';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Protected = ({ logout, user }) => {
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return user ? (
    <div>
      This is a Protected Page
      <br></br>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  ): (
    <Navigate to="/login" />
  )
};

export default Protected;
