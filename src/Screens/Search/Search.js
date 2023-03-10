import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSearchParams } from "react-router-dom";

const Search = () => {
    const [search, setSearch] = useSearchParams();
    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center mt-3 mb-3">Welcome to Search Screen</h1>
                        <Form className="w-50 m-auto text-center">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Search Services..."
                                    onChange={(e) => {setSearch({q: e.target.value})}} />
                            </Form.Group>
                            <Button variant="primary" type="button"
                                onClick={() => {console.log(search.get('q'))}}>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Search;