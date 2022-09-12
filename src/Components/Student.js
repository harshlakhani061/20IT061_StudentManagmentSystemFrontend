import axios from "axios";
import React, {useEffect, useState} from "react";
import {Container, Form, Card, Button} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";

export default function Student(props) {
    const [id, setId] = useState([]);
    const [name, setName] = useState([]);
    const [address, setAddress] = useState([]);

    const {studentId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (studentId) {
            axios.get("http://localhost:8080/student/" + studentId)
                .then((response) => {
                    if (response.data != null) {
                        setId((response.data.id));
                        setName((response.data.name));
                        setAddress((response.data.address));
                    }
                })
                .catch((error) => props.showAlert("danger", "Error"));
        }
    }, [])

    let student = {
        id: id,
        name: name,
        address: address,
    };

    let textChanged = (event) => {
        if (event.target.name === "id") {
            setId(event.target.value);
        } else if (event.target.name === "name") {
            setName(event.target.value);
        } else if (event.target.name === "address") {
            setAddress(event.target.value);
        }
    };

    let saveStudent = (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:8080/student", student)
            .then((response) => {
                if (response.data != null) {
                    props.showAlert("success", "Record Added Successfully!!!");
                }
            })
            .catch((error) => props.showAlert("danger", "Error"));
        setId("");
        setName("");
        setAddress("");
    };

    let updateStudent = (event) => {
        event.preventDefault();
        axios.put("http://localhost:8080/student/" + studentId, student)
            .then((response) => {
                if (response.data != null) {
                    props.showAlert("success", "Record Updated Successfully!!!");
                    navigate("/listStudents");
                }
            })
    }

    return (
        <div className="my-3">
            <Container>
                <Card>
                    <Form onSubmit={studentId != null ? updateStudent : saveStudent}>
                        <Card.Header>
                            <strong>{studentId != null ? "Update Student Information" : "Add Student Information"}</strong>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group className="mb-3">
                                <Form.Label>Id</Form.Label>
                                <Form.Control
                                    name="id"
                                    value={id}
                                    type="text"
                                    placeholder="Enter Id"
                                    onChange={textChanged}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    name="name"
                                    value={name}
                                    type="text"
                                    placeholder="Enter Name"
                                    onChange={textChanged}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    name="address"
                                    value={address}
                                    type="text"
                                    placeholder="Enter address"
                                    onChange={textChanged}
                                />
                            </Form.Group>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary" type="submit">
                                {studentId != null ? "Update" : "Submit"}
                            </Button>
                        </Card.Footer>
                    </Form>
                </Card>
            </Container>
        </div>
    );
}