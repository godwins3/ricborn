import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { HeroImage } from './Datasheets/Datasheet';

function Blog() {
    return (
        <section id="blog" className="py-5">
            <Container>
                <h2>Our Blog</h2>
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={HeroImage.img} />
                            <Card.Body>
                                <Card.Title>Blog Post Title</Card.Title>
                                <Card.Text>Excerpt from the blog post...</Card.Text>
                                <a href="https://www.aoristlabs.co/" className="btn btn-primary">Read More</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={HeroImage.img} />
                            <Card.Body>
                                <Card.Title>Blog Post Title</Card.Title>
                                <Card.Text>Excerpt from the blog post...</Card.Text>
                                <a href="https://www.aoristlabs.co/" className="btn btn-primary">Read More</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={HeroImage.img} />
                            <Card.Body>
                                <Card.Title>Blog Post Title</Card.Title>
                                <Card.Text>Excerpt from the blog post...</Card.Text>
                                <a href="https://www.aoristlabs.co/" className="btn btn-primary">Read More</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    {/* Add more blog post previews as needed */}
                </Row>
            </Container>
        </section>
    );
}

export default Blog;
