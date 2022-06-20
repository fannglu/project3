import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import Logo from "../../assets/images/nav-logo.png";
import {
  faHome,
  faUser,
  faEnvelope,
  faCode,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const NavBar = () => {
  return (
    <div className=" nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="Mighty Logo" />
      </Link>
      <nav>
        <NavLink
          exact="true"
          className="home-link"
          activeclassname="active"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink
          className="calendar-link"
          exact="true"
          activeclassname="active"
          to="/project"
        >
          <FontAwesomeIcon icon={faCalendar} color="#4d4d4e" />
        </NavLink>

        <NavLink
          className="habit-link"
          exact="true"
          activeclassname="active"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
