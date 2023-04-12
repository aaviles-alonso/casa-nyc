import "./EducationList.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const EducationList = ({ educationList, setEducationList, eclass }) => {

    const [education, setEducation] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/education")
            .then((res) => {
                setEducationList(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    console.log(educationList)

    return (
        <>
            <div className="organization__container">
                <div className="organization__container--heading">
                    <h3>All Education Programs</h3>
                    <h4>{educationList.filter(education => education.class_type.includes(eclass)).length}</h4>
                    {educationList.filter(education => education.class_type.includes(eclass)).map((education) => {
                        return (

                            <div key={education.id} className="organization__container--section">
                                <p className="organization__container--info-name">{education.name}</p>
                                <a href={education.link} className="organization__container--link"> <p className="organization__container--info">{education.link}</p></a>
                                <p className="organization__container--info">{education.address} </p>
                                <p className="organization__container--info">T: {education.phone}</p>
                                <p className="organization__container--info">{education.class_type}</p>
                            </div>

                        )
                    })}

                </div>
            </div>

        </>
    )


};

export default EducationList;