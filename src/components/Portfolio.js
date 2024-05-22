import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { HeroImage } from './Datasheets/Datasheet';

function Portfolio() {
    return (
        <section id="portfolio" className="py-5 bg-light">
            <Container>
                <h2>Our Portfolio</h2>
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={HeroImage.img} />
                            <Card.Body>
                                <Card.Title>Project Title</Card.Title>
                                <Card.Text>Description of the project and results achieved.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={HeroImage.img} />
                            <Card.Body>
                                <Card.Title>Project Title</Card.Title>
                                <Card.Text>Description of the project and results achieved.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={HeroImage.img} />
                            <Card.Body>
                                <Card.Title>Project Title</Card.Title>
                                <Card.Text>Description of the project and results achieved.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    {/* Add more portfolio items as needed */}
                </Row>
            </Container>
        </section>
    );
}

export default Portfolio;
