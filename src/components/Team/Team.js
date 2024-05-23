import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { HeroImage } from '../Datasheets/Datasheet';

function Team() {
    return (
        <section id="team" className="py-5">
            <Container>
                <h2 className="text-center">Our Team</h2>
                <Row>
                    <Col md={4} className="team-member">
                        <Card>
                            <Card.Img variant="top" src={HeroImage.img} />
                            <Card.Body>
                                <Card.Title>Richard C.M Asola</Card.Title>
                                <Card.Text>CEO - Specializes in strategic concept development with extensive experience in FMCG, media, advertising, branding, and business development.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="team-member">
                        <Card>
                            <Card.Img variant="top" src={HeroImage.img} />
                            <Card.Body>
                                <Card.Title>Richard C.M Asola</Card.Title>
                                <Card.Text>CEO - Specializes in strategic concept development with extensive experience in FMCG, media, advertising, branding, and business development.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="team-member">
                        <Card>
                            <Card.Img variant="top" src={HeroImage.img} />
                            <Card.Body>
                                <Card.Title>Richard C.M Asola</Card.Title>
                                <Card.Text>CEO - Specializes in strategic concept development with extensive experience in FMCG, media, advertising, branding, and business development.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    {/* Add more team members as needed */}
                </Row>
            </Container>
        </section>
    );
}

export default Team;
