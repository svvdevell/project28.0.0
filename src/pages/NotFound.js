import {Link} from "react-router-dom";
import error from "../assets/404-error.jpg";

const NotFound = () => {
    return (
        <div className="container error">
            <div className="error__img"><img src={error} alt="Error"/></div>
            <h1>Oooops, something's wrong here.</h1>
            <Link to="/" className="error__link">Go to Home page</Link>
        </div>
    );
};

export default NotFound;