import React from 'react'
import styles from "../../../styles/postProperty/propertyfeatures.module.css";

const InputFieldGenerator = ({ title, placeholder = "Ex : 7", itemName, inputValue, onChangeFn, inputClassName = styles.propertyFeature_width_75_to_100 }) => {
    return (
        <>
            <label
                htmlFor={itemName}
                className={`mb-2 text-nowrap fs_16 fw_500  fontFam_poppins`}
            >
                {title}
            </label>
            <div>
                <input 
                    type="text"
                    className={` ${inputClassName} mb-1 ps-2 pe-2  pt-2 pb-2 ${styles.propetyfeature_input}`}
                    id={itemName}
                    placeholder={placeholder}
                    name={itemName}
                    value={inputValue}
                    onChange={onChangeFn}
                />
            </div>
        </>

    )
}

export default InputFieldGenerator