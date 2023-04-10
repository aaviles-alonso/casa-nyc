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

                <div className="health__about">
                    <p className="health__about--text">
                        These are some free or low-cost health care options for anyone in NYC,
                        regardless of immigration or insurance status.
                        Regardless of immigration status:
                        • Children 19 or younger can get low- or no-cost health insurance through Child Health Plus.
                        • Pregnant women may qualify for free prenatal, delivery and postnatal care.
                        • Immigrants who do not qualify for health insurance through the Marketplace can still get insurance outside the
                        marketplace and may still be eligible for employer-sponsored insurance.
                        • With or without insurance, low- or no-cost health care is available through NYC Health + Hospitals. See the back
                        of this fact sheet for locations.
                    </p>
                </div>
            </div>
        </>
    );
}