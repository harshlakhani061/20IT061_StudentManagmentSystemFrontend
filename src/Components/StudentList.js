import React, {useEffect, useState} from "react";
import {Button, ButtonGroup, Card, Container, Table} from "react-bootstrap";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default function StudentList() {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        getStudents();
    }, [])

    let getStudents = () => {
        axios.get("http://localhost:8080/listStudents")
            .then((response) => setStudents(response.data))
            .catch((error) => alert(error));
    }

    let deleteStudent = (studentId) => {
            axios.delete("http://localhost:8080/student/" + studentId)
                .then(response => {
                    if (response.data !== null) {
                        alert("Record Deleted Successfully");
                        setStudents(students.filter(student => student.id !== studentId));
                    }
                })
        }

    return (
        <div className="my-3">
            <Container>
                <Card.Header>
                    <h3>Student List</h3>
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Student Id</th>
                            <th>Student Name</th>
                            <th>Student Address</th>
                            <th>Edit/Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            students.length === 0 ? (
                                    <tr>
                                        <td>{students.length} Students Available!!!</td>
                                    </tr>
                                ) :
                                (students.map((student) =>
                                    <tr key={student.id}>
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>{student.address}</td>
                                        <td>
                                            <ButtonGroup>
                                                <Link to={"/student/" + student.id}>
                                                <Button size="sm" variant="outline-primary"><FontAwesomeIcon
                                                    icon={faEdit}>Edit</FontAwesomeIcon></Button>
                                                 </Link>
                                                <Button size="sm" variant="outline-danger"><FontAwesomeIcon
                                                    icon={faTrash}>Delete</FontAwesomeIcon></Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                                ))
                        }
                        </tbody>
                    </Table>
                </Card.Body>
            </Container>
        </div>
    );
}