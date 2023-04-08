
// images
import instagram from "../../assets/icons/Icon-instagram.svg";
import facebook from "../../assets/icons/Icon-facebook.svg";
import twitter from "../../assets/icons/Icon-twitter.svg";
import email from "../../assets/icons/email-icon.png";
import address from "../../assets/icons/address-icon.png";
import phone from "../../assets/icons/phone-icon.png";

// stylesheet
import "./Footer.scss";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer__main">
                    <h2 className="footer__title">FOLLOW US</h2>
                </div>
                <div className="footer__social">
                    <a className="footer__social--link" href="https://instagram.com">
                        <img src={instagram} alt="Instagram logo"></img>
                    </a>
                    <a className="footer__social--link" href="https://facebook.com">
                        <img src={facebook} alt="Facebook logo"></img>
                    </a>
                    <a className="footer__social--link" href="https://twitter.com">
                        <img src={twitter} alt="Twitter logo"></img>
                    </a>
                </div>
                <div className="footer__contact">
                    <ul className="footer__contact--list">
                        <li>
                            <img src={phone} alt="phone" className="footer__contact--icon"></img>
                            <h3 className="footer__contact--text">(212) 525-1152</h3>
                        </li>
                        <li>
                            <img src={email} alt="email" className="footer__contact--icon"></img>
                            <h3 className="footer__contact--text">Casa-nyc@gmail.com</h3>
                        </li>
                        <li>
                            <img src={address} alt="address" className="footer__contact--icon"></img>
                            <h3 className="footer__contact--text">123 Madison Street, New York, NY 10017</h3>
                        </li>
                    </ul>
                </div>
                <p class="footer__copyright">Copyright CASA NYC © 2023 All Rights Reserved</p>

            </footer>
        </>
    )
}

export default Footer;