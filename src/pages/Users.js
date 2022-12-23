import {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import {getUsers} from "../api";

const Users = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        getUsers().then(result => {
            setUsers(result);
            setLoading(false);
        });
    }, []);

    const handleClick = (userId) => () => {
        navigate(`/users/${userId}`);
    };

    return (
        <main>
            <div className="container d-flex justify-content-center flex-column align-items-center">
                {isLoading && <Spinner animation="border" variant="primary"/>}
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>E-mail</th>
                        <th>Phone</th>
                        <th>Show More</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(({firstName, lastName, email, phone, id}) => {
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{firstName}</td>
                                <td>{lastName}</td>
                                <td>{email}</td>
                                <td>{phone}</td>
                                <td className="d-flex justify-content-center">
                                    <Button onClick={handleClick(id)} variant="contained" color="primary">Show more</Button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
            </div>
        </main>
    );
};

export default Users;