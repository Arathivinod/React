// BuyMed.js
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartState, cartTotalSelector } from '../atoms';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';

const medicinesData = [
  { id: 1, name: 'Paracetamol', price: 10 },
  { id: 2, name: 'Citrizine', price: 15 },
  // Add more medicines as needed
];

const BuyMed = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const cartTotal = useRecoilValue(cartTotalSelector);

  const handleAddToCart = (medicine) => {
    const existingItem = cart.find((item) => item.id === medicine.id);

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === medicine.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...medicine, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // Calculate the total price
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h2>Available Medicines</h2>
          <Row xs={1} md={2} lg={3} className="g-4">
            {medicinesData.map((medicine) => (
              <Col key={medicine.id}>
                <Card>
                  <Card.Body>
                    <Card.Title>{medicine.name}</Card.Title>
                    <Card.Text>Price: ${medicine.price}</Card.Text>
                    <Button onClick={() => handleAddToCart(medicine)}>Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col>
          <h2>Shopping Cart</h2>
          <Card>
            <Card.Body>
              <Table striped bordered responsive>
                <thead>
                  <tr>
                    <th>Medicine</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>${item.price * item.quantity}</td>
                      <td>
                        <Button variant="danger" size="sm" onClick={() => handleRemoveFromCart(item.id)}>
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <p>Total Items in Cart: {totalQuantity}</p>
              <p>Total Price: ${totalPrice}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BuyMed;
