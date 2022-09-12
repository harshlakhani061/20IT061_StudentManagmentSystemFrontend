import Button from 'react-bootstrap/Button';
import {Container, Card} from "react-bootstrap";
import Form from 'react-bootstrap/Form';

export default function Register() {
    return (
        <div className="my-3">
            <Container>
                <Card>
                    <Card.Header>
                        <strong>Register</strong>
                    </Card.Header>
                    <Card.Body>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="email" placeholder="Enter Username"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Conform Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Confirm Password"/>
                        </Form.Group>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Card.Footer>
                </Card>
            </Container>
        </div>
    );
}