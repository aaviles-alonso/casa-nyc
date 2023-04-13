import { useState, useEffect } from "react";
import axios from "axios";

// stylesheet
import "./HealthList.scss";

const HealthList = ({ healthcareList, setHealthcareList, borough }) => {

    const [healthcare, setHealthcare] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/healthcare")
            .then((res) => {
                setHealthcareList(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    // console.log(healthcareList)

    return (
        <>
            <div className="organization__container">
                <div key={healthcare.id} className="organization__container--heading">
                    <h3>Medical Provider Offices</h3>
                    <h4>{healthcareList.filter(healthcare => healthcare.borough.includes(borough)).length}</h4>
                    {healthcareList.filter(healthcare => healthcare.borough.includes(borough)).map((healthcare) => {
                        return (

                            <div className="organization__container--section">
                                <p className="organization__container--info-name">{healthcare.name}</p>
                                <p className="organization__container--info">{healthcare.address} </p>
                                <p className="organization__container--info">T: {healthcare.phone}</p>
                                <p className="organization__container--info">{healthcare.borough}</p>
                            </div>

                        )
                    })}

                </div>
            </div>

        </>
    )
};

export default HealthList;