import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const UserDetails = () => {
    // let newParams = useParams('id');
    // let id = newParams.id;
    const {id} = useParams();
    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        <h1>Welcome to User {id} Details Screen</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default UserDetails;