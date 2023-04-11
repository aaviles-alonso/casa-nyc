import { useState, useEffect } from "react";
import axios from "axios";

// stylesheet
import "./HealthList.scss";

const HealthList = () => {

    const [healthcare, setHealthcare] = useState([]);
    // retreive education list
    const [healthcareList, setHealthcareList] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/healthcare")
            .then((res) => {
                setHealthcareList(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    console.log(healthcareList)

    return (
        <>
            <div className="organization__container">
                <div className="organization__container--heading">
                    <h3>Medical Provider Offices</h3>
                    {healthcareList.map((healthcare) => {
                        return (
                            <>
                                <div className="organization__container--section">
                                    <p className="organization__container--info-name">{healthcare.name}</p>
                                    <p className="organization__container--info">{healthcare.address} </p>
                                    <p className="organization__container--info">T: {healthcare.phone}</p>
                                    <p className="organization__container--info">{healthcare.borough}</p>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>

        </>
    )
};

export default HealthList;