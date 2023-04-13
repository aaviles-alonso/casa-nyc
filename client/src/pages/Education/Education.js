import { useEffect, useState } from "react";
import axios from "axios";
// components
import Search from "../../components/Search/Search";
import EduFilter from "../../components/EduFilter/EduFilter";
import EducationList from "../../components/EducationList/EducationList";
// photos
import cover from "../../assets/images/education-cover.jpeg";
// stylesheet
import "./Education.scss";
import "../Organizations/Organizations.scss";


export default function Education(education) {

    const [eclass, setEclass] = useState('')
    const [educationList, setEducationList] = useState([])


    const [addEducation, setAddEducation] = useState({
        name: '',
        address: '',
        zipcode: '',
        phone: '',
        description: '',
        class_type: '',
        link: ''
    })

    // form control
    const onChangeAddEdu = (e) => {
        const { name, value } = e.target
        setAddEducation(
            preval => ({ ...preval, [name]: value })
        )
        console.log(value)
    }


    // save button func
    const addForm = (e) => {
        console.log(e.target.reset())
        e.preventDefault();
        if (validForm() === true) {
            axios.post(`http://localhost:8080/api/education/`, addEducation)
                .then(res => {
                    setEducationList([...educationList, res.data])
                    alert("Your education program has been uploaded successfully!");
                })
                .catch(err => console.log(err.response))

        } else {
            console.log('Please fill out all required fields');
        }
    }

    const [del, setDel] = useState(false);

    // form validation before submitting
    const validForm = () => {
        if (!addEducation.name ||
            !addEducation.address ||
            !addEducation.zipcode ||
            !addEducation.phone ||
            !addEducation.description ||
            !addEducation.class_type ||
            !addEducation.link
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
            <div className="edu">
                <h1>Free English Courses for Immigrants in NYC</h1>
                <div className="hero">
                    <img src={cover} alt="education hero" className="hero__image" />
                </div>

                <div className="health__about">
                    <p className="organization__about--text">
                        Learning and mastering the English language can open multiple doors for individuals
                        residing in the United States. Not only does it allow one to communicate with the community,
                        but it also expands the horizons when it comes to finding career opportunities, education, and hobbies.
                    </p>
                </div>

                <div className="education__search">
                    <Search />
                    <EduFilter setEclass={setEclass} />
                </div>

                <EducationList setEducationList={setEducationList} educationList={educationList} eclass={eclass} />

                <form className="org__form" onSubmit={addForm}>
                    <div className="org__form--section">
                        <label className="org__form--label" htmlFor="name">Program Name</label>
                        <input
                            className="org__form--input"
                            name="name"
                            type='text'
                            placeholder="Name"
                            value={addEducation.name}
                            onChange={onChangeAddEdu}
                        />
                        <span className={`${fieldInvalid(addEducation.name) ? 'requiredfield' : ''}  notshown`}>This field is required</span>

                        <label className="org__form--label" htmlFor="address">Address</label>
                        <input
                            className="org__form--input"
                            name="address"
                            type='text'
                            placeholder="Address"
                            value={addEducation.address}
                            onChange={onChangeAddEdu}
                        />
                        <span className={`${fieldInvalid(addEducation.address) ? 'requiredfield' : ''}  notshown`}>This field is required</span>

                        <label className="org__form--label" htmlFor="zipcode">Zip Code</label>
                        <input
                            className="org__form--input"
                            name="zipcode"
                            type='text'
                            placeholder="Zip Code"
                            value={addEducation.zipcode}
                            onChange={onChangeAddEdu}
                        />
                        <span className={`${fieldInvalid(addEducation.zipcode) ? 'requiredfield' : ''}  notshown`}>This field is required</span>

                        <label className="org__form--label" htmlFor="phone">Phone Number</label>
                        <input
                            className="org__form--input"
                            name="phone"
                            type='text'
                            placeholder="Phone Number"
                            value={addEducation.phone}
                            onChange={onChangeAddEdu}
                        />
                        <span className={`${fieldInvalid(addEducation.phone) ? 'requiredfield' : ''}  notshown`}>This field is required</span>

                        <label className="org__form--label" htmlFor="description">Description</label>
                        <textarea
                            className="org__form--input"
                            name="description"
                            type='text'
                            placeholder="Please enter a brief description.."
                            value={addEducation.description}
                            onChange={onChangeAddEdu}
                        />
                        <span className={`${fieldInvalid(addEducation.description) ? 'requiredfield' : ''}  notshown`}>This field is required</span>

                        <label className="org__form--label" htmlFor="class_type">Classes Offered</label>
                        <input
                            className="org__form--input"
                            name="class_type"
                            type='text'
                            placeholder="List Classes Offered"
                            value={addEducation.languages}
                            onChange={onChangeAddEdu}
                        />
                        <span className={`${fieldInvalid(addEducation.languages) ? 'requiredfield' : ''}  notshown`}>This field is required</span>

                        <label className="org__form--label" htmlFor="link">Link</label>
                        <input
                            className="org__form--input"
                            name="link"
                            type='text'
                            placeholder="Enter website link"
                            value={addEducation.link}
                            onChange={onChangeAddEdu}
                        />
                        <span className={`${fieldInvalid(addEducation.link) ? 'requiredfield' : ''}  notshown`}>This field is required</span>
                        <button
                            className="org__add--btn">
                            Submit
                        </button>

                    </div>
                </form>
            </div>

        </>
    )

}