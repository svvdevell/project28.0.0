import {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import Button from "@mui/material/Button";
import Spinner from "react-bootstrap/Spinner";
import {getDateOfBirth} from "../getDateOfBirth";
import {getUserById} from "../api";

const User = () => {
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(true);
    const {userId} = useParams();

    useEffect(() => {
        getUserById(userId).then(result => {
            setUser(result);
            setLoading(false);
        });
    }, [userId]);

    const {
        image,
        firstName,
        lastName,
        age,
        birthDate,
        gender,
        email,
        phone,
        domain,
        company,
    } = user;

    return (
        <main>
            <div className="container d-flex justify-content-center flex-column align-items-center">
                {isLoading && <Spinner animation="border" variant="primary"/>}
                <div className="user">
                    <div className="user__img">
                        <img src={image} alt="profile-photo"/>
                    </div>
                    <div className="user__info">
                        <h3 className="user__info-title">General information</h3>
                        <ul className="user__list">
                            <li><strong>FullName: </strong>{firstName} {lastName}</li>
                            <li><strong>Age: </strong>{age}</li>
                            <li><strong>Gender: </strong>{gender}</li>
                            <li><strong>Date of Birth: </strong>{getDateOfBirth(birthDate)}</li>
                        </ul>
                        <h3 className="user__info-title">Contact information</h3>
                        <ul className="user__list">
                            <li><strong>Email: </strong>{email}</li>
                            <li><strong>Phone: </strong>{phone}</li>
                            <li><strong>Web Site: </strong>{domain}</li>
                        </ul>
                        <h3 className="user__info-title">Employee Information</h3>
                        <ul className="user__list">
                            <li><strong>Company: </strong>"{company?.name}"</li>
                            <li><strong>Department: </strong>{company?.department}</li>
                        </ul>
                    </div>
                </div>
                <Link to={"/users"}> <Button variant="contained" color="primary">Back to list</Button></Link>
            </div>
        </main>
    );
};
export default User;