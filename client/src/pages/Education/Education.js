// photos
import cover from "../../assets/images/education-cover.jpeg";
// stylesheet
import "./Education.scss";

export default function Education() {
    return (
        <>
            <div className="edu">
                <h1>Free English Courses for Immigrants in NYC</h1>
                <div className="hero">
                    <img src={cover} alt="education hero" className="hero__image" />
                </div>
            </div>
        </>
    )
}