import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';


function Services() {
    return (
        <section id="services" className="py-5 bg-light">
            <Container>
                <h2>Our Services</h2>
                <Row>
                    <Col md={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Activations</Card.Title>
                                <Card.Text>We offer general trade storms, in-store promotions, road shows, and community forum sensitizations.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Activations</Card.Title>
                                <Card.Text>We offer general trade storms, in-store promotions, road shows, and community forum sensitizations.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Activations</Card.Title>
                                <Card.Text>We offer general trade storms, in-store promotions, road shows, and community forum sensitizations.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    {/* Add more service items as needed */}
                </Row>
            </Container>
        </section>
    );
}

export default Services;
