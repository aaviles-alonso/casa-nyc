// photos
import hero from "../../assets/images/health-cover.jpeg";

// stylesheet
import "./Healthcare.scss";

export default function Healthcare() {
    return (
        <>
            <div className="legal">
                <h1>Health Care Access for Immigrants in New York City</h1>

                <div className="hero">
                    <img src={hero} alt="health cover" className="hero__image" />
                </div>
            </div>
        </>
    );
}