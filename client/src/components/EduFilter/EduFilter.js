import { useState, useRef } from "react";
import "./EduFilter.scss";
import "../Filter/Filter.scss";


const EduFilter = ({ setEducationList, setEclass }) => {

    // class type filter
    const classRef = useRef()
    const classHandler = (e) => {
        setEclass(e.target.value)
    }

    const submitClass = (e) => {
        e.preventDefault()
        setEclass(classRef.current.class_type.value)
    }

    return (
        <>
            <form className="form__lamguage" onSubmit={submitClass} ref={classRef}>
                <label htmlFor="form__language" className="form__title"> Filter By: Class Type </label >
                <select
                    name="class_type"
                    placeholder="Class Type"
                    id="class_type"
                    className="form__languages"
                >
                    <option value=''>Select Class Type</option>
                    <option value='ESOL'>ESOL</option>
                    <option value='TASC'>TASC</option>
                    <option value='GED'>GED</option>
                    <option value='ELA'>ELA</option>

                </select>
                <button className="form__filter--button"
                >Filter</button>
            </form >

        </>
    )
}
export default EduFilter;
