// images imported
import hero from "../../assets/icons/hero.jpeg";
import image1 from "../../assets/images/image-1.jpeg";
import image2 from "../../assets/images/image-2.jpeg";
import image3 from "../../assets/images/image-3.jpeg";
import image4 from "../../assets/images/image-4.jpeg";
import image5 from "../../assets/images/image-5.jpeg";
import image6 from "../../assets/images/image-6.jpeg";
import image7 from "../../assets/images/image-7.jpeg";
import image8 from "../../assets/images/image-8.jpeg";
import image9 from "../../assets/images/image-9.jpeg";

// stylesheet
import "./Home.scss";

export default function Home() {
    return (
        <>
            <div className="hero">
                <img src={hero} alt="hero" className="hero__image" />
            </div>

            <div className="about">
                <h1 className="about__title">ABOUT US</h1>
                <p className="about__text">
                    Casa-nyc has gathered all of the resources we can find to help immigrant New Yorkers.
                    At Casa-nyc, we're all about inclusivity and teamwork! That's why we welcome contributions
                    from everyone in the community to make sure we've got the latest and most accurate information
                    available. Our goal is to be the go-to place for immigrants, where they can find everything
                    they need to succeed and feel at home. We're all about collaboration and sharing knowledge,
                    so that everyone can benefit and thrive together. Come and join the Casa-nyc family!
                </p>
            </div>

            <div className="about__mission">
                <h2 className="about__title">OUR MISSION</h2>
                <p className="about__text">
                    Casa-nyc seeks to facilitate access to vital resources for immigrants who have recently
                    settled in New York City allowing easier navigation and access to resources with greater
                    ease and convenience. Non-profit organizations that cater to these communities can leverage
                    our platform to promote their services and reach a wider audience. Ultimately, Casa-nyc
                    streamlines the process of locating and utilizing resources, empowering immigrants to thrive
                    and integrate more seamlessly into their new home.
                </p>
            </div>

            <section className="gallery">
                <div className="gallery__photos">

                    <img src={image1} className="gallery__image" alt="gallery" />
                    <img src={image2} className="gallery__image" alt="gallery" />
                    <img src={image3} className="gallery__image" alt="gallery" />
                    <img src={image4} className="gallery__image" alt="gallery" />
                    <img src={image5} className="gallery__image" alt="gallery" />
                    <img src={image6} className="gallery__image" alt="gallery" />
                    <img src={image7} className="gallery__image" alt="gallery" />
                    <img src={image8} className="gallery__image" alt="gallery" />
                    <img src={image9} className="gallery__image" alt="gallery" />
                </div>
            </section>
        </>
    )
};