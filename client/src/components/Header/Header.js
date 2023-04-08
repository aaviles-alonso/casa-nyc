import logo from "../../assets/icons/logo.png";
import { NavLink, Link } from "react-router-dom";
// stylesheet
import "./Header.scss";

function Header() {

    return (
        <>
            <header className="header">
                <nav className="header__nav--bar">

                    <Link to="/">
                        <img src={logo} alt="casa-nyc" className="header__logo" />
                    </Link>

                    <ul className="header__nav--menu">
                        <NavLink
                            to="/resources"
                            className={({ isActive }) =>
                                isActive
                                    ? "header__nav--link header__nav--link-active"
                                    : "header__nav--link"}
                        > RESOURCES</NavLink>

                        <NavLink
                            to="/organizations"
                            className={({ isActive }) =>
                                isActive
                                    ? "header__nav--link header__nav--link-active"
                                    : "header__nav--link"}
                        > ORGANIZATIONS</NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? "header__nav--link header__nav--link-active"
                                    : "header__nav--link"}
                        > MISSION</NavLink>

                    </ul>

                    <div className="header__hamburger">
                        <span className="header__burgerbar" ></span>
                        <span className="header__burgerbar"></span>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header;