// photos
import hero from "../../assets/images/legal-cover.jpeg";
// import components
import Search from "../../components/Search/Search";
// stylesheet
import "./Legal.scss";


export default function Legal() {
    return (
        <>
            <div className="legal">
                <h1>Legal Service Providers Serving Immigrants in New York City</h1>
                <div className="hero">
                    <img src={hero} alt="legal hero" className="hero__image" />
                </div>
                <Search />
            </div>
        </>
    )
}