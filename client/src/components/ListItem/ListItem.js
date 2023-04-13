import "./ListItem.scss";
import { useState, useEffect } from "react";
import axios from "axios";


const ListItem = ({ organizationList, setOrganizationList, language }) => {

    const [organizations, setOrganizations] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/organizations")
            .then((res) => {
                // set organization list
                setOrganizationList(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    console.log(organizationList)

    return (
        <>
            <div className="organization__container">
                <div className="organization__container--heading">
                    <h3>All Organizations</h3>
                    <h4>{organizationList.filter(organization => organization.languages.includes(language)).length}</h4>
                    {organizationList.filter(organization => organization.languages.includes(language)).map((organization) => {
                        return (
                            <div key={organization.id} className="organization__container--section">
                                <p className="organization__container--info-name">{organization.name}</p>
                                <a href={organization.link} className="organization__container--link"> <p className="organization__container--info">{organization.link}</p></a>
                                <p className="organiza</a>tion__container--info">Languages: {organization.languages}</p>
                                <p className="organization__container--info">{organization.address} </p>
                                <p className="organization__container--info">T: {organization.phone}</p>
                                <p className="organization__container--info">{organization.description}</p>
                            </div>
                        )
                    })}

                </div>
            </div>

        </>
    )

};

export default ListItem;