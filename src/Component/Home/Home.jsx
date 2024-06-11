import React from 'react';
import { useState } from 'react';
import  Card  from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import  Image  from 'react-bootstrap/Image';

const Home = () => {


// Counter is one type of variable
// SetCounter is one type of funcation 
// je variable ne update karva mate use thai chhe

 let [Counter,setCounter] =  useState(15)

  

  const addValue = () => {
    Counter = Counter + 1;
    setCounter(Counter);
     console.log("Add Value",Counter);
  }

  const removevalue = () => {
    Counter = Counter - 1;
    setCounter(Counter)
  }



  return (
    <div className='container'>
       <h1>Counter</h1>

       <h2>Couter Value: {Counter}</h2>

       <button className='btn' onClick={addValue}>Increse Value</button>
        <br />
       <button className='btn' onClick={removevalue}>Decrese Value</button>

       <Card style={{ width: '18rem' }}>
      <Image src='first.jpg'/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Home
