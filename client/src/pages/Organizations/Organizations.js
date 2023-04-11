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
    const [addOrganization, setAddOrganization] = useState({
        name: '',
        address: '',
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

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/organizations")
            .then((res) => {
                setOrganization(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    // save button func
    const addForm = (e) => {
        e.preventDefault();
        if (validForm() === true) {
            axios.post(`http://localhost:8080/api/organizations/`, addOrganization)
                .then(res => console.log(res.data))
                .catch(err => console.log(err.response))

        } else {
            console.log('Please fill out all required fields');
        }
    }

    const [del, setDel] = useState(false);

    // const navigate = useNavigate();

    // const navigateHandler = () => {
    //     navigate(`organization/add`);
    // };



    // form validation before submitting
    const validForm = () => {
        if (!addOrganization.name ||
            !addOrganization.address ||
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
        return value ? false : true
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
                </div>

                <div className="organization__container">
                    <h3>Organization Title</h3>

                </div>
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
                        <span className={`${fieldInvalid(addOrganization.address) ? 'requiredfield' : ''}  notshown`}>This field is required</span>

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