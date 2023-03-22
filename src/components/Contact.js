import React from 'react'
import { Fragment, useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import classes from './Contact.css';
import img from "../image/contact.jpg";

const Contact = () => {
    const [contact, setContact]  = useState([])
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");

  const contactsSubmitHandler = (event) => {
    event.preventDefault();

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneRef.current.value,
    };

    setContact([...contact, data])
    fetch("https://react-ecommerce-9c69b-default-rtdb.firebaseio.com/contactus.json", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-Type": "application/json",
      },
    });

    nameRef.current.value = ''
    emailRef.current.value = ''
    phoneRef.current.value = ''
  };

  return (
    <Fragment>
      <div className={classes.text}><br/><h1>Contact Us</h1></div>
    <div className={classes['main-image']}>
    <img src={img} alt='contact'/>
    </div>

    <Form className={classes.form} onSubmit={contactsSubmitHandler} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" ref={nameRef}/><br/>

        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={emailRef} /><br/>

        <Form.Label>Phone Number:</Form.Label>
        <Form.Control type="number" placeholder="Enter number" ref={phoneRef} /><br/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form><br/><br/>

    </Fragment>
  )
}

export default Contact;