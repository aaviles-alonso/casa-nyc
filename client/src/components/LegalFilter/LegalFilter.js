import { useState, useRef } from "react";
import "./LegalFilter.scss";
import "../Filter/Filter.scss";

const LegalFilter = ({ setLegalList, setZipcode }) => {
    // zip code filter
    const zipcodeRef = useRef()

    const zipcodeHandler = (e) => {
        setZipcode(e.target.value)
    }
    const submitZipCode = (e) => {
        e.preventDefault()
        setZipcode(zipcodeRef.current.zipcode.value)
    }
    return (
        <>
            <form className="form__lamguage" onSubmit={submitZipCode} ref={zipcodeRef}>
                <label htmlFor="form__language" className="form__title"> Filter By:Zip Code </label >
                <select
                    name="zipcode"
                    placeholder="zipcode"
                    id="zipcode"
                    className="form__languages"
                >
                    <option value=''>Select Zip Code</option>
                    <option value='10001'>10001</option>
                    <option value='10004'>10004</option>
                    <option value='10007'>10007</option>
                    <option value='10019'>10019</option>
                    <option value='11101'>11101</option>
                    <option value='10601'>10601</option>
                    <option value='10279'>10279</option>
                    <option value='11501'>11501</option>

                </select>
                <button className="form__filter--button"
                >Filter</button>
            </form >

        </>
    )


};
export default LegalFilter;