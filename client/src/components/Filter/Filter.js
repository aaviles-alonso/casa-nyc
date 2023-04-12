import { useState, useRef } from "react";
import "./Filter.scss";

const Filter = ({ setOrganizationList, setLanguage }) => {
    // language filter
    const languageRef = useRef()
    const languagesHandler = (e) => {
        setLanguage(e.target.value)
    }

    const submitLanguage = (e) => {
        e.preventDefault()
        setLanguage(languageRef.current.language.value)

    }
    return (
        <>
            <form className="form__lamguage" onSubmit={submitLanguage} ref={languageRef}>
                <label htmlFor="form__language" className="form__title"> Filter By:Language </label >
                <select
                    name="language"
                    placeholder="languages"
                    id="languages"
                    className="form__languages"
                >
                    <option value=''>Select Languages</option>
                    <option value='English'>English</option>
                    <option value='Spanish'>Spanish</option>
                    <option value='Chinese'>Chinese</option>
                    <option value='Hindi'>Hindi</option>
                    <option value='Polish'>Polish</option>
                    <option value='Greek'>Greek</option>
                    <option value='French'>French</option>
                    <option value='Albanian'>Albanian</option>
                    <option value='Mandarin'>Polish</option>
                    <option value='Vietnamese'>Polish</option>

                </select>
                <button
                >Filter</button>
            </form >
        </>
    )
};
export default Filter;