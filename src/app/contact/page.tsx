'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

interface formData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit: SubmitHandler<formData> = async (data) => {
    try {
      const response = await axios.post('http://localhost:3001/contact', data);
      console.log(response.data);
      // Handle success (e.g., show a success message)
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <h2>Contact Me</h2>
      </Row>
      <Row>
        <Col lg={12}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                // name="name"
                placeholder="Enter your name"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && typeof errors.name.message === 'string' && (
                <Form.Text className="text-danger">
                  {errors.name.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                // name="email"
                placeholder="Enter your email"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && typeof errors.email.message === 'string' && (
                <Form.Text className="text-danger">
                  {errors.email.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                // name="message"
                placeholder="Enter your message"
                {...register('message', { required: 'Message is required' })}
              />
              {errors.message && typeof errors.message.message === 'string' && (
                <Form.Text className="text-danger">
                  {errors.message.message}
                </Form.Text>
              )}
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
