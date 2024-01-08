import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ login }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [formValid, setFormValid] = useState(false);

  function handleLogin() {
    
    if (formValid) {
      login();
      navigate("/dashboard");
    }
  }

  function validateUsername(value) {
  
    const isValid = value.trim() !== '';
    setUsernameValid(isValid);
    updateFormValidity();
  }

  function validatePassword(value) {
 
    const isValid = value.trim() !== '';
    setPasswordValid(isValid);
    updateFormValidity();
  }

  function updateFormValidity() {
    
    setFormValid(usernameValid && passwordValid);
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <Card style={{ width: '400px', height: '400px', padding: '20px', backgroundColor: '#f8f9fa' }} className="mx-auto">
        <Card.Body>
          <Card.Title style={{ fontSize: '30px', marginBottom: '20px' }}>Login</Card.Title>

          <Form>
            <Form.Group controlId="formBasicUsername" style={{ marginBottom: '15px' }}>
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  validateUsername(e.target.value);
                }}
                isInvalid={!usernameValid}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid username.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" style={{ marginBottom: '15px' }}>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validatePassword(e.target.value);
                }}
                isInvalid={!passwordValid}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid password.
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" onClick={handleLogin} disabled={!formValid}>
              Login
            </Button>
          </Form>

          <p style={{ marginTop: '15px' }}>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
