import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
    return (
        <section id="contact" className="py-5 bg-light">
            <Container>
                <h2 className="text-center">Contact Us</h2>
                <Row>
                    <Col md={6}>
                        <Form>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="phone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="tel" placeholder="Enter your phone number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="message">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
                            </Form.Group>
                            <div className="text-center"> {/* Center the button */}
                                <Button variant="primary" type="submit">Submit</Button>
                            </div>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <h5>Our Location</h5>
                        <p>Kilimani Plaza, Ground Floor, Kilimani Rd, Off Menelik Rd, Nairobi, Kenya</p>
                        <div id="map" style={{ height: '300px' }}></div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;
