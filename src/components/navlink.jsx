import navStyle from "../assets/css/navbar.module.css"
import { Link } from "react-router-dom"


const NavLink = (props) => {

    const { name, index, link} = props

    return (
        <li key={index} id={navStyle.navLink}>
            <Link to={link}>
                {name}
            </Link>
        </li>
    );
}

export default NavLink;