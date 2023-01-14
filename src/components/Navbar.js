import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Navbar.css"

const Navbar = () => {
    return (
        // <div className="navigation-bar">
        //     <a className="active">About</a>
        //     <a>Contact</a>

            <section>
                <Container className="centering text-center">
                    <Row>
                        <Col>
                            <h1>This is where the plugin will go</h1>
                        </Col>
                        <Col className="bannerText">
                            <h1>Moose Token</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
        // </div>
    )
}

export default Navbar;