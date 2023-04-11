import "./EducationList.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const EducationList = () => {

    const [education, setEducation] = useState([])
    // retreive education list
    const [educationList, setEducationList] = useState([]);

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
                    {educationList.map((education) => {
                        return (
                            <>
                                <div className="organization__container--section">
                                    <p className="organization__container--info-name">{education.name}</p>
                                    <a href={education.link} className="organization__container--link"> <p className="organization__container--info">{education.link}</p></a>
                                    {/* <p className="organiza</a>tion__container--info">Languages: {education.class_type}</p> */}
                                    <p className="organization__container--info">{education.address} </p>
                                    <p className="organization__container--info">T: {education.phone}</p>
                                    <p className="organization__container--info">{education.class_type}</p>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>

        </>
    )


};

export default EducationList;