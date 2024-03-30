import { Link } from "react-router-dom";
import navStyle from "../assets/css/navbar.module.css"
import NavLink from "./navlink";

function NavBar(props) {
    let { logged, logout, picture } = props
    const linkArray = [
        {
            text: "Home",
            link: "/"
        },
        {
            text: "About",
            link: "/about"
        },
        {
            text: "Services",
            link: "/services"
        },
    ]

    return (
        <nav>
            <div id={navStyle.logoCont}>
                <img id={navStyle.logo} src="/src/assets/image/disney_logo.png" />

            </div>
            <ul id={navStyle.navLinks}>
                {
                    linkArray.map((value, index) => {
                        return (
                            <NavLink name={value.text} index={index} link={value.link} />
                        )
                    })
                }
            </ul>
            <div id={navStyle.searchCont}>
                {
                    logged && 
                        <div id={navStyle.circle}>
                            <img src={picture} />
                        </div>
                }
                {logged ?
                    <Link to={"/logout"}>
                        <button onClick={logout}>Logout</button>
                    </Link>
                    :
                    <Link to={"/form"}>
                        <button>Login</button>
                    </Link>
                }
            </div>
        </nav>
    );
}

export default NavBar;