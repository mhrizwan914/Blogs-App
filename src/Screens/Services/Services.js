import { Button, Col, Container, Row } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet, useNavigate, NavLink } from "react-router-dom";

const Services = () => {
    const navigate = useNavigate();
    const navLinkCss = ({isActive}) => {
        return {
            color: isActive? "#f69110" : "#ffffff8c"
        };
    }
    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        <h1>Welcome to Services Screen</h1>
                        <Button onClick={() => {navigate("/contact")}}>Go to Contact</Button>
                    </Col>
                </Row>
            </Container>
            <Navbar bg="secondary" variant="secondary" className="mt-2">
                <Container>
                    <Nav className="m-auto">
                        <NavLink className="nav-link" style={navLinkCss} to="/services/seo">SEO</NavLink> 
                        <NavLink className="nav-link" style={navLinkCss} to="/services/web">Web</NavLink>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </section>
    );
}

export default Services;