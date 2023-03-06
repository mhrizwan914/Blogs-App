import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();
    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        <h1>Welcome to Contact Screen</h1>
                        <Button onClick={() => {navigate("/")}}>Go to Home</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;