import logo from "../../assets/icons/logo.png";
import { NavLink, Link } from "react-router-dom";
// stylesheet
import "./Header.scss";

function Header() {



    return (
        <>
            <header className="header">
                <nav className="header__navbar">

                    <Link to="/">
                        <img src={logo} alt="casa-nyc" className="header__logo" />
                    </Link>

                    <ul className="header__nav-menu">

                        <li className="header__nav--item">
                            <NavLink
                                to="/resources"
                                className={({ isActive }) =>
                                    isActive
                                        ? "header__nav--link header__nav--link-active"
                                        : "header__nav--link"}
                            > RESOURCES</NavLink>
                        </li>

                        <li className="header__nav--item">
                            <NavLink
                                to="/organizations"
                                className={({ isActive }) =>
                                    isActive
                                        ? "header__nav--link header__nav--link-active"
                                        : "header__nav--link"}
                            > ORGANIZATIONS</NavLink>
                        </li>

                        <li className="header__nav--item">
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive
                                        ? "header__nav--link header__nav--link-active"
                                        : "header__nav--link"}
                            > MISSION</NavLink>
                        </li>

                    </ul>

                </nav>
            </header>
        </>
    )
}
export default Header;