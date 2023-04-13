import { useEffect, useState } from "react";
import axios from "axios";

// photos
import hero from "../../assets/images/legal-cover.jpeg";
// import components
import Search from "../../components/Search/Search";
import LegalFilter from "../../components/LegalFilter/LegalFilter";
import LegalList from "../../components/LegalList/LegalList";
// stylesheet
import "./Legal.scss";
import "../Organizations/Organizations.scss";
import "../../styles/global.scss";



export default function Legal(legal) {

    const [zipcode, setZipcode] = useState('')
    const [legalList, setLegalList] = useState([]);

    const [addLegal, setAddLegal] = useState({
        name: '',
        address: '',
        zipcode: '',
        phone: '',
        link: ''
    })

    // form control
    const onChangeAddLegal = (e) => {
        const { name, value } = e.target
        setAddLegal(
            preval => ({ ...preval, [name]: value })
        )
        // console.log(value)
    }


    // save button func
    const addForm = (e) => {
        console.log(e.target.reset())
        e.preventDefault();
        if (validForm() === true) {
            axios.post(`http://localhost:8080/api/legal/`, addLegal)
                .then(res => {
                    setLegalList([...legalList, res.data])
                    alert("Your legal service provider has been uploaded successfully!");
                })
                .catch(err => console.log(err.response))

        } else {
            console.log('Please fill out all required fields');
        }
    }

    const [del, setDel] = useState(false);

    const validForm = () => {
        if (!addLegal.name ||
            !addLegal.address ||
            !addLegal.zipcode ||
            !addLegal.phone ||
            !addLegal.link
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
            <div className="legal">
                <h1>Legal Service Providers Serving Immigrants in New York City</h1>

                <div className="hero">
                    <img src={hero} alt="legal hero" className="hero__image" />
                </div>

                <div className="organization__about">
                    <p className="organization__about--text">
                        Due to the pandemic, many Latino immigrants, undocumented immigrants, and people with DACA need legal advice on immigration
                        or work issues. Here we put together some free or low-cost resources that provide guidance or free legal help for immigrants
                        in New York State. Please contact them and ask about your personal inquiry.</p>
                </div>

                <div className="organization__search">
                    <Search />
                    <LegalFilter />
                </div>

                <LegalList setLegalList={setLegalList} legalList={legalList} zipcode={zipcode} />

                <div className="organization__container">
                    <div class="organization__container--heading">
                        <h3>Legal Service Provider</h3>
                        <p className="organization__container--info">Name</p>
                        <p className="organization__container--info">Address</p>
                        <p className="organization__container--info">Phone Number</p>
                        <p className="organization__container--info">Link</p>
                    </div>
                </div>

                <form className="org__form" onSubmit={addForm}>
                    <div className="org__form--section">
                        <label className="org__form--label" htmlFor="name">Law Service Provider</label>
                        <input
                            className="org__form--input"
                            name="name"
                            type='text'
                            placeholder="Name"
                            value={addLegal.name}
                            onChange={onChangeAddLegal}
                        />
                        <span className={`${fieldInvalid(addLegal.name) ? 'requiredfield' : ''}  notshown`}>This field is required</span>

                        <label className="org__form--label" htmlFor="address">Address</label>
                        <input
                            className="org__form--input"
                            name="address"
                            type='text'
                            placeholder="Address"
                            value={addLegal.address}
                            onChange={onChangeAddLegal}
                        />
                        <span className={`${fieldInvalid(addLegal.address) ? 'requiredfield' : ''}  notshown`}>This field is required</span>

                        <label className="org__form--label" htmlFor="zipcode">Zip Code</label>
                        <input
                            className="org__form--input"
                            name="zipcode"
                            type='text'
                            placeholder="Zip Code"
                            value={addLegal.zipcode}
                            onChange={onChangeAddLegal}
                        />
                        <span className={`${fieldInvalid(addLegal.address) ? 'requiredfield' : ''}  notshown`}>This field is required</span>

                        <label className="org__form--label" htmlFor="phone">Phone Number</label>
                        <input
                            className="org__form--input"
                            name="phone"
                            type='text'
                            placeholder="Phone Number"
                            value={addLegal.phone}
                            onChange={onChangeAddLegal}
                        />
                        <span className={`${fieldInvalid(addLegal.phone) ? 'requiredfield' : ''}  notshown`}>This field is required</span>

                        <label className="org__form--label" htmlFor="link">Link</label>
                        <input
                            className="org__form--input"
                            name="link"
                            type='text'
                            placeholder="Enter website link"
                            value={addLegal.link}
                            onChange={onChangeAddLegal}
                        />
                        <span className={`${fieldInvalid(addLegal.link) ? 'requiredfield' : ''}  notshown`}>This field is required</span>
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