import { useState, useEffect } from "react";
import axios from "axios";
// stylesheet
import "./LegalList.scss";

const LegalList = ({ legalList, setLegalList, zipcode }) => {

    const [legal, setLegal] = useState([])
    useEffect(() => {
        axios
            .get("http://localhost:8080/api/legal/")
            .then((res) => {
                setLegalList(res.data);
            })
            .catch((err) => console.log(err))
    }, []);

    console.log(LegalList)
    return (
        <>
            <div className="organization__container">
                <div key={legal.id} className="organization__container--heading">
                    <h3>All Legal Service Providers</h3>
                    <h4>{legalList.filter(legal => legal.zipcode.includes(zipcode)).length}</h4>
                    {legalList.filter(legal => legal.zipcode.includes(zipcode)).map((legal) => {
                        return (
                            <div key={legal.id} className="organization__container--section">
                                <p className="organization__container--info-name">{legal.name}</p>
                                <p className="organization__container--info">{legal.address} </p>
                                <p className="organization__container--info">T: {legal.phone}</p>
                                <p className="organization__container--info">{legal.description}</p>
                            </div>
                        )
                    })}

                </div>
            </div>


        </>
    )
};
export default LegalList;