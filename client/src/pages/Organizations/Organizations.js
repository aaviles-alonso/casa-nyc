import { useEffect, useState } from "react";
import axios from "axios";
// stylesheet
import "./Organizations.scss";
import "../../styles/global.scss";
// cover
import cover from "../../assets/images/organization-cover.jpeg"
// components
import Search from "../../components/Search/Search";


export default function Organizations() {

    const [organization, setOrganization] = useState([]);
    const [del, setDel] = useState(false);

    // const navigate = useNavigate();

    // const navigateHandler = () => {
    //     navigate(`organization/add`);
    // };

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/organizations")
            .then((res) => {
                setOrganization(res.data);
            })
            .catch((err) => console.log(err));
    }, [del]);

    return (
        <>
            <div className="organization">
                <h1>Organzations Serving Immigrants in New York City</h1>
                <div className="hero">
                    <img src={cover} alt="non-profit hero" className="hero__image" />
                </div>

                <div className="organization__about">
                    <p className="organization__about--text">
                        We created a list of organizations that are serving immigrants
                        in New York City with the hope to create a centralized place
                        where immigrants can gather this vital information and reach
                        out to the organizations.</p>
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