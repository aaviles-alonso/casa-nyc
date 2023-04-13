import { useEffect, useState } from "react";
import axios from "axios";
// stylesheet
import "./Organizations.scss";
// cover
import cover from "../../assets/images/organization-cover.jpeg"
// components
import Search from "../../components/Search/Search";
import ListItem from "../../components/ListItem/ListItem";
import Filter from "../../components/Filter/Filter";


export default function Organizations({ organizations }) {

    const [language, setLanguage] = useState('')
    const [organizationList, setOrganizationList] = useState([]);


    const [addOrganization, setAddOrganization] = useState({
        name: '',
        address: '',
        zipcode: '',
        phone: '',
        description: '',
        languages: '',
        link: ''
    })

    // form control
    const onChangeAddOrg = (e) => {
        const { name, value } = e.target
        setAddOrganization(
            preval => ({ ...preval, [name]: value })
        )
        // console.log(value)
    }

    // save button func
    const addForm = (e) => {
        console.log(e.target.reset())
        e.preventDefault();
        if (validForm() === true) {
            axios.post(`http://localhost:8080/api/organizations/`, addOrganization)
                .then(res => {
                    setOrganizationList([...organizationList, res.data])
                    alert("Your organization has been uploaded successfully!");
                })
                .catch(err => console.log(err.response))

        } else {
            console.log('Please fill out all required fields');
        }
    }

    const [del, setDel] = useState(false);

    // form validation before submitting
    const validForm = () => {
        if (!addOrganization.name ||
            !addOrganization.address ||
            !addOrganization.zipcode ||
            !addOrganization.phone ||
            !addOrganization.description ||
            !addOrganization.link
        ) {
            return false
        }
        return true
    }
    // form require field requirements
    const fieldInvalid = (value) => {
        return value ? true : false
    }
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
                    <Filter setLanguage={setLanguage} />
                </div>

                <ListItem setOrganizationList={setOrganizationList} organizationList={organizationList} language={language} />

                <form className="org__form" onSubmit={addForm}>
                    <div className="org__form--section">
                        <label className="org__form--label" htmlFor="name">Organization Name</label>
                        <input
                            className="org__form--input"
                            name="name"
                            type='text'
                            placeholder="Name"
                            value={addOrganization.name}
                            onChange={onChangeAddOrg}
                        />
                        <span className={`${fieldInvalid(addOrganization.name) ? 'requiredfield' : ''}  notshown`}>This field is required</span>

                        <label className="org__form--label" htmlFor="address">Address</label>
                        <input
                            className="org__form--input"
                            name="address"
                            type='text'
                            placeholder="Address"
                            value={addOrganization.address}
                            onChange={onChangeAddOrg}
                        />
                        <label className="org__form--label" htmlFor="zipcode">Zip Code</label>
                        <input
                            className="org__form--input"
                            name="zipcode"
                            type='text'
                            placeholder="Zip Code"
                            value={addOrganization.zipcode}
                            onChange={onChangeAddOrg}
                        />
                        <span className={`${fieldInvalid(addOrganization.zipcode) ? 'requiredfield' : ''} notshown`}>This field is required</span>

                        <label className="org__form--label" htmlFor="phone">Phone Number</label>
                        <input
                            className="org__form--input"
                            name="phone"
                            type='text'
                            placeholder="Phone Number"
                            value={addOrganization.phone}
                            onChange={onChangeAddOrg}
                        />
                        <span className={`${fieldInvalid(addOrganization.phone) ? 'requiredfield' : ''}  notshown`}>This field is required</span>

                        <label className="org__form--label" htmlFor="description">Description</label>
                        <textarea
                            className="org__form--input"
                            name="description"
                            type='text'
                            placeholder="Please enter a brief item description.."
                            value={addOrganization.description}
                            onChange={onChangeAddOrg}
                        />
                        <span className={`${fieldInvalid(addOrganization.description) ? 'requiredfield' : ''}  notshown`}>This field is required</span>

                        <label className="org__form--label" htmlFor="languages">Languages</label>
                        <input
                            className="org__form--input"
                            name="languages"
                            type='text'
                            placeholder="Languages"
                            value={addOrganization.languages}
                            onChange={onChangeAddOrg}
                        />
                        <span className={`${fieldInvalid(addOrganization.languages) ? 'requiredfield' : ''}  notshown`}>This field is required</span>

                        <label className="org__form--label" htmlFor="link">Link</label>
                        <input
                            className="org__form--input"
                            name="link"
                            type='text'
                            placeholder="Please enter website link"
                            value={addOrganization.link}
                            onChange={onChangeAddOrg}
                        />
                        <span className={`${fieldInvalid(addOrganization.link) ? 'requiredfield' : ''}  notshown`}>This field is required</span>
                        <button
                            className="org__add--btn">
                            Submit
                        </button>

                    </div>
                </form>
            </div>
        </>
    );
};