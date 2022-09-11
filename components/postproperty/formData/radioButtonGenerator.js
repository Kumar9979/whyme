import React from 'react'
import { useState } from 'react';
import styles from "../../../styles/postProperty/propertyfeatures.module.css";

const RadioButtonGenerator = ({ formik, title, itemName, containerClassName = "mb-4 mb-lg-0", titleClassName = "mb-1", }) => {
    const [radioButton, setRadioButton] = useState("yes")
    function handleRadiobutton(e) {
        setRadioButton(e.target.value);
        let event = {
            target: {
                name: itemName,
                value: e.target.value,
            },
        };
        formik.handleChange(event);
    }
    return (

        <div className={` ${containerClassName}`}>
            <h5
                className={`text-nowrap ${styles.total_floors_text} ${titleClassName} fs_15 fs_sm_12 fw_500 `}
            >
                {title}
            </h5>
            <div className="d-flex ">
                <input
                    className={` ms-1 cursor_pointer`}
                    name={itemName}
                    id={itemName + "yes"}
                    type="radio"
                    value="yes"
                    checked={radioButton === "yes"}
                    onChange={handleRadiobutton}
                />
                <label
                    htmlFor={itemName + "yes"}
                    className={
                        radioButton === "yes"
                            ? `${styles.total_floors_text} fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                            : `${styles.total_floors_text} fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                    }
                >
                    Yes
                </label>
                <input
                    className={`  ${styles.membertrade_modal_offer_radiobox} cursor_pointer ms-3`}
                    name={itemName}
                    id={itemName + "no"}
                    type="radio"
                    value="no"
                    checked={radioButton === "no"}
                    onChange={handleRadiobutton}
                />{" "}
                <label
                    htmlFor={itemName + "no"}
                    className={
                        radioButton === "no"
                            ? `${styles.total_floors_text}   fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                            : `${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                    }
                >
                    No
                </label>
            </div>
        </div>)
}

export default RadioButtonGenerator