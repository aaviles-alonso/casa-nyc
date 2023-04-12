import { useEffect, useState } from "react";
import axios from "axios";
// import components
import Search from "../../components/Search/Search";
import HealthList from "../../components/HealthList/HealthList";
// photos
import hero from "../../assets/images/health-cover.jpeg";
// stylesheet
import "./Healthcare.scss";
import HealthFilter from "../../components/HealthFilter/HealthFilter";

export default function Healthcare(healthcare) {

    const [borough, setBorough] = useState('');
    const [healthcareList, setHealthcareList] = useState([])

    const [addHealthcare, setAddHealthcare] = useState({
        name: '',
        address: '',
        zipcode: '',
        borough: '',
        phone: '',
    })

    // form control
    const onChangeAddHealthcare = (e) => {
        const { name, value } = e.target
        setAddHealthcare(
            preval => ({ ...preval, [name]: value })
        )
        console.log(value)
    }

    // save button func
    const addForm = (e) => {
        console.log(e.target.reset())
        e.preventDefault();
        if (validForm() === true) {
            axios.post(`http://localhost:8080/api/healthcare`, addHealthcare)
                .then(res => {
                    setHealthcareList([...healthcareList, res.data])
                    alert("Your medical service provider has been uploaded successfully!");
                })
                .catch(err => console.log(err.response))

        } else {
            console.log('Please fill out all required fields');
        }
    }

    const [del, setDel] = useState(false);

    const validForm = () => {
        if (!addHealthcare.name ||
            !addHealthcare.address ||
            !addHealthcare.zipcode ||
            !addHealthcare.phone ||
            !addHealthcare.borough
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
            <div className="healthcare">
                <h1>Health Care Access for Immigrants in New York City</h1>

                <div className="hero">
                    <img src={hero} alt="health cover" className="hero__image" />
                </div>

                <div className="health__about">
                    <p className="organization__about--text">
                        These are some free or low-cost health care options for anyone in NYC,
                        regardless of immigration or insurance status.
                        Regardless of immigration status:
                        Children 19 or younger can get low- or no-cost health insurance through Child Health Plus.
                        Pregnant women may qualify for free prenatal, delivery and postnatal care.
                        Immigrants who do not qualify for health insurance through the Marketplace can still get insurance outside the
                        marketplace and may still be eligible for employer-sponsored insurance.
                        With or without insurance, low- or no-cost health care is available through NYC Health + Hospitals. See the back
                        of this fact sheet for locations.
                    </p>
                </div>
                <Search />
                <HealthFilter />
                <HealthList setHealthcareList={setHealthcareList} healthcareList={healthcareList} borough={borough} />

                <form className="org__form" onSubmit={addForm}>
                    <div className="org__form--section">
                        <label className="org__form--label" htmlFor="name">Medical Provider Office</label>
                        <input
                            className="org__form--input"
                            name="name"
                            type='text'
                            placeholder="Name"
                            value={addHealthcare.name}
                            onChange={onChangeAddHealthcare}
                        />
                        <span className={`${fieldInvalid(addHealthcare.name) ? 'requiredfield' : ''}  notshown`}>This field is required</span>

                        <label className="org__form--label" htmlFor="address">Address</label>
                        <input
                            className="org__form--input"
                            name="address"
                            type='text'
                            placeholder="Address"
                            value={addHealthcare.address}
                            onChange={onChangeAddHealthcare}
                        />
                        <span className={`${fieldInvalid(addHealthcare.address) ? 'requiredfield' : ''}  notshown`}>This field is required</span>

                        <label className="org__form--label" htmlFor="zipcode">Zip Code</label>
                        <input
                            className="org__form--input"
                            name="zipcode"
                            type='text'
                            placeholder="Zip Code"
                            value={addHealthcare.zipcode}
                            onChange={onChangeAddHealthcare}
                        />
                        <span className={`${fieldInvalid(addHealthcare.address) ? 'requiredfield' : ''}  notshown`}>This field is required</span>

                        <label className="org__form--label" htmlFor="borough">Borough</label>
                        <input
                            className="org__form--input"
                            name="borough"
                            type='text'
                            placeholder="Borough"
                            value={addHealthcare.borough}
                            onChange={onChangeAddHealthcare}
                        />
                        <span className={`${fieldInvalid(addHealthcare.address) ? 'requiredfield' : ''}  notshown`}>This field is required</span>

                        <label className="org__form--label" htmlFor="phone">Phone Number</label>
                        <input
                            className="org__form--input"
                            name="phone"
                            type='text'
                            placeholder="Phone Number"
                            value={addHealthcare.phone}
                            onChange={onChangeAddHealthcare}
                        />
                        <span className={`${fieldInvalid(addHealthcare.phone) ? 'requiredfield' : ''}  notshown`}>This field is required</span>

                        <button
                            className="org__add--btn">
                            Submit
                        </button>

                    </div>
                </form>

            </div>
        </>
    );
}