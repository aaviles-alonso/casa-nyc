import "./ListItem.scss";
import { useState, useEffect } from "react";
import axios from "axios";


const ListItem = () => {
    const [organizations, setOrganizations] = useState([])
    // retrieve organization list
    const [organizationList, setOrganizationList] = useState([]);

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
                    {organizationList.map((organization) => {
                        return (
                            <>
                                <p className="organization__container--info">{organization.name}</p>
                                <p className="organization__container--info">{organization.link}</p>
                                <p className="organization__container--info">{organization.languages}</p>
                                <p className="organization__container--info">{organization.address} </p>
                                <p className="organization__container--info">{organization.phone}</p>
                                <p className="organization__container--info">{organization.description}</p>
                            </>
                        )
                    })}

                </div>
            </div>

        </>
    )

};

export default ListItem;