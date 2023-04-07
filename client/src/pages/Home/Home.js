import hero from "../../assets/icons/hero.jpeg";

// stylesheet
import "./Home.scss";

export default function Home() {
    return (
        <>
            <div className="hero">
                <img src={hero} alt="cover photo" className="hero__image"></img>
            </div>
        </>
    )
};