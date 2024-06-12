import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Home = ({ counter, addValue, removeValue }) => {
  
  return (
    <div className='container'>
      <h1>Counter</h1>
      <h2>Value : {counter}</h2>

      <button className='btn' onClick={addValue}>Increase Value</button>
      <br />
      <button className='btn' onClick={removeValue}>Decrease Value</button>

      <Card style={{ width: '18rem' }}>
        <img src="/assets/img/first.jpg" alt="" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <div className="container">
        
      </div>
    </div>
  );
};

export default Home;
