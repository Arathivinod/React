// Home.js
import React from 'react';
import { Card } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="container mt-5">
      <h2 className="display-4 mb-4">Welcome to Our Website!</h2>
      <p className="lead">
        Thank you for visiting our home page. Explore our site to discover exciting
        content and information.
      </p>
      <div className="card-deck">
        {/* Card 1 */}
        <Card className="bg-light text-dark">
          <Card.Body>
            <Card.Title>Latest News</Card.Title>
            <Card.Text>
              Stay updated with our latest news and articles.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Card 2 */}
        <Card className="bg-info text-white">
          <Card.Body>
            <Card.Title>Online Shop</Card.Title>
            <Card.Text>
              Explore our online shop for exciting products.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default Home;
