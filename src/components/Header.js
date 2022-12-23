import {useContext} from "react";
import {NavLink} from "react-router-dom";
import BasicModal from "./ModalForm/ModalForm";
import logo from "../assets/logo.svg";
import AuthContext from "../contexts/auth/AuthContext";

const Header = () => {
    const {isLoggedIn, userInfo} = useContext(AuthContext);

    return (
        <header className="header container">
            <img src={logo} alt="Logo"/>
            <nav>
                <ul className="navbar">
                    <li><NavLink className={({isActive}) => (isActive ? "active" : "")} to="/" end>Home</NavLink>
                    </li>
                    <li><NavLink className={({isActive}) => (isActive ? "active" : "")} to="users">Users</NavLink>
                    </li>
                    <li><NavLink className={({isActive}) => (isActive ? "active" : "")} to="hotels">Hotels</NavLink>
                    </li>
                    <li><BasicModal/></li>
                    <li>{isLoggedIn ? <img className="user-header__img" src={userInfo.image}/> : null}</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;