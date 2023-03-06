import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        <h1>Welcome to Home Screen</h1>
                        <Button onClick={() => {navigate("/about")}}>Go to About</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Home;