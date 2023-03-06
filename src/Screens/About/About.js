import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        <h1>Welcome to About Screen</h1>
                        <Button onClick={() => {navigate("/contact")}}>Go to Contact</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;