import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import "./Team.css"

const Team = () => {
    return (
        <Container>
            <h2 className="text-center pt-4">The Team</h2>

            <Row className="text-center">
                <Col>
                    <Card style={{width: '18rem'}} className="card">
                        <Card.Img variant="top" src=""/>
                        <Card.Body>
                            <Card.Title>Alejandro Bernal - Founder</Card.Title>
                            <Card.Text>
                                The founder of the Moose Token. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}} className="card">
                        <Card.Img variant="top" src=""/>
                        <Card.Body>
                            <Card.Title>Miguel Menjivar - Dev</Card.Title>
                            <Card.Text>
                                The guy who built this website
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Team;