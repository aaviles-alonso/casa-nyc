// photos
import cover from "../../assets/images/mission-cover.jpeg";
import about from "../../assets/images/about-cover.jpeg";
import mission from "../../assets/images/image-10.jpeg";

// stylesheet
import "./About.scss";
import "../../styles/global.scss";

export default function About() {
    return (
        <>
            <div className="about__mission">
                <h2 className="about__title">Our Mission</h2>
            </div>
            < div className="about__mission--paragraph">
                <p className="about__text">
                    Casa-nyc seeks to facilitate access to vital resources for immigrants who have recently
                    settled in New York City allowing easier navigation and access with greater
                    ease and convenience. Organizations  that cater to these communities can leverage
                    our platform to promote their services and reach a wider audience. Ultimately, Casa-nyc
                    streamlines the process of locating and utilizing resources, empowering immigrants to thrive
                    and integrate more seamlessly into their new home.
                </p>
            </div>
            <div className="about__mission--cover">
                <img src={cover} alt="mission cover" className="about__mission--image"></img>
            </div>
            <div className="about__container">

                <div className="about__paragraph">
                    <p className="about__paragraph--sub">
                        Casa-nyc has gathered all of the resources we can find to help immigrant New Yorkers.
                        We're all about inclusivity and teamwork!
                    </p>
                </div>
                <div>
                    <div className="about__paragraph--image">
                        <img src={about} alt="community" className="about__paragraph--community"></img>
                    </div>
                    <div className="">
                        <img src={mission} alt="people dancing" className="about__mission--two"></img>
                    </div>
                    <p className="about__text">
                        Our goal is to be the go-to place for immigrants to find everything
                        they need to succeed and feel at home.
                        We welcome contributions
                        from everyone in the community to make sure we've got the latest and most accurate information
                        available. We're all about collaboration and sharing knowledge,
                        so that everyone can benefit and thrive together. Come and join the Casa-nyc family!
                    </p>
                </div>
            </div>
        </>
    );
}