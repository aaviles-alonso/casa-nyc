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