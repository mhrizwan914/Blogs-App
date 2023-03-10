import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        <h1>Page Not Found - 404</h1>
                        <Button onClick={() => {navigate("/")}}>Go to Home</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default NotFound;