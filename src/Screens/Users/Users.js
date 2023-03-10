import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Users = () => {
    const navigate = useNavigate();
    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        <h1>Welcome to Users Screen</h1>
                        <Button onClick={() => {navigate("/users/1")}} className="d-block mt-2">User 1</Button>
                        <Button onClick={() => {navigate("/users/2")}} className="d-block mt-2">User 2</Button>
                        <Button onClick={() => {navigate("/users/3")}} className="d-block mt-2">User 3</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Users;