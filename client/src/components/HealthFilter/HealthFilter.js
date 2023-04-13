import { useState, useRef } from "react";
import axios from "axios";
import "./HealthFilter.scss";
import "../Filter/Filter.scss";

const HealthFilter = ({ setHealthcareList, setBorough }) => {
    // borough filter
    const boroughRef = useRef()
    const boroughHandler = (e) => {
        setBorough(e.target.value)
    }

    const submitBorough = (e) => {
        e.preventDefault()
        setBorough(boroughRef.current.borough.value)
    }
    return (
        <>
            <form className="form__lamguage" onSubmit={submitBorough} ref={boroughRef}>
                <label htmlFor="form__language" className="form__title"> Filter By:Borough </label >
                <select
                    name="borough"
                    placeholder="languages"
                    id="borough"
                    className="form__languages"
                >
                    <option value=''>Select Borough</option>
                    <option value='Manhattan'>Manhattan</option>
                    <option value='Queens'>Queens</option>
                    <option value='Brooklyn'>Brooklyn</option>
                    <option value='Bronx'>Bronx</option>
                    <option value='Staten Island'>Staten Island</option>

                </select>
                <button className="form__filter--button"
                >Filter</button>
            </form >
        </>
    )

};
export default HealthFilter;