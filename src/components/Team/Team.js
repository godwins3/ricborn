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
                                <Card.Text>
                                    CEO - He is a switched-on individual who walks around with a 
                                    light bulb above his head. He is instrumental in creating 
                                    strategies that work for your brand. Specializes in 
                                    anything that is artsy. He has vast experience in various 
                                    aspects of marketing and advertising industry spanning
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="team-member">
                        <Card>
                            <Card.Img variant="top" src={HeroImage.img} />
                            <Card.Body>
                                <Card.Title>Edward Owino</Card.Title>
                                <Card.Text>
                                    Marketing Lead - Years of Corporate expereince in FMCG, Media, 
                                    Advertising and Branding, Marketing Agency and Business Development. 
                                    Owino has worked with Colgate Palmolive (EA), Nationa Media,
                                    The Standard Group, Sketchers Design Promoters, Brand house
                                    among other. Capable of achieving and maintaining robust 
                                    business relations, Team player , great eye to gaps and concept
                                    creation and development.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="team-member">
                        <Card>
                            <Card.Img variant="top" src={HeroImage.img} />
                            <Card.Body>
                                <Card.Title>Nzula B. Kioko</Card.Title>
                                <Card.Text>
                                    Client Service - An experienced individual that supervises and plans success. As 
                                    the company's developer, Nzula ensures that each and every 
                                    procedure we follow is thoroughly planned, up to the latest 
                                    standards, and is being implemented correctly. She represents 
                                    the client, makes sure their voices are heard and their demands 
                                    are met.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={4} className="team-member">
                        <Card>
                            <Card.Img variant="top" src={HeroImage.img} />
                            <Card.Body>
                                <Card.Title>Felix Akoko</Card.Title>
                                <Card.Text>
                                    Creative Designer - Felix has the mind of an artist and more than 10 years of 
                                    working experience in all kinds of media design and creative 
                                    solutions. With his great ideas, he is able to create innovative 
                                    brands identities, logos, and more. He has mastery in coming up 
                                    with concepts and ensuring they are done in the best media 
                                    possible. Conquering deadlines every time
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="team-member">
                        <Card>
                            <Card.Img variant="top" src={HeroImage.img} />
                            <Card.Body>
                                <Card.Title>Ian Muteti</Card.Title>
                                <Card.Text>
                                    Graphic Designer - With over 10 years experience and exceptional knowledge 
                                    in developing graphics, audio and visual images for 
                                    product illustrations, logos and websites. I am passionate 
                                    and enthusiastic to design and have the capability to 
                                    create extraordinary designs with high visual impact 
                                    according to the needs and requirements of the clients. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="team-member">
                        <Card>
                            <Card.Img variant="top" src={HeroImage.img} />
                            <Card.Body>
                                <Card.Title>Edwin Odoje</Card.Title>
                                <Card.Text>
                                    Operations Director - Edwin's most prominent role is his leadership 
                                    to the advertising operations department. In 
                                    this position, He manages the advertising operations 
                                    team by overseeing scheduling, production, and implementation of all advertising programs and campaigns in order to 
                                    ensure accurate and timely execution of these programs
                                </Card.Text>
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
