// stylesheet
import "./Organizations.scss";
import "../../styles/global.scss";
// cover
import cover from "../../assets/images/organization-cover.jpeg"
// components
import Search from "../../components/Search/Search";

export default function Organizations() {
    return (
        <>
            <div className="organization">
                <h1>Organzations Serving Immigrants in New York City</h1>
                <div className="hero">
                    <img src={cover} alt="non-profit hero" className="hero__image" />
                </div>

                <div className="organization__search">
                    <Search />
                </div>
                <div className="organization__container">
                    <h3>Organization Title</h3>

                </div>
            </div>
        </>
    );
};