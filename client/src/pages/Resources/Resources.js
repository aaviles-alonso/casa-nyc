import { NavLink, Link } from "react-router-dom";


// photos
import resource from "../../assets/images/resource-cover.jpeg";
import health from "../../assets/icons/health-icon-blue.png";
import education from "../../assets/icons/book-cover-icon.png";
import legal from "../../assets/icons/gavel-law-icon.png";

// stylesheet
import "./Resources.scss";

export default function Resources() {
    return (
        <>
            <div className="resource__hero">
                <div className="resource__hero--title">
                    <h1 className="resource__hero--title-sub">Resource Guide for Immigrant New Yorkers</h1>
                </div>
                <div className="resource__hero--image">
                    <img src={resource} alt="resource cover" className="resource__hero--image-sub" />
                </div>
            </div>

            <section className="resource__section">
                <h3 className="resource__section--text">All of the resources we can find to help the immigrant and undocumented population in New York City find legal representation, healthcare providers and classes nearest to you.
                </h3>
                <div className="resource__container">
                    <div className="resource__container--card">
                        <Link to="/resources/healthcare">
                            <img src={health} alt="health clipart" className="resource__container--icon"></img>
                            <h4 className="resource__container--title">Healthcare</h4>
                            <p className="resource__container--text">Find Healthcare providers</p>

                        </Link>
                    </div>
                </div>

                <div className="resource__container">
                    <Link to="/resources/legal">
                        <div className="resource__container--card">
                            <img src={legal} alt="health clipart" className="resource__container--icon2"></img>
                            <h4 className="resource__container--title">Legal Service Providers</h4>
                            <p className="resource__container--text">Find Immigration legal service providers</p>
                        </div>
                    </Link>
                </div>

                <div className="resource__container">
                    <Link to="/resources/education">
                        <div className="resource__container--card">
                            <img src={education} alt="health clipart" className="resource__container--icon"></img>
                            <h4 className="resource__container--title">Education</h4>
                            <p className="resource__container--text">Find Education resources</p>
                        </div>
                    </Link>
                </div>
            </section>

        </>
    );

}