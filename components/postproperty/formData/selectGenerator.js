import React from 'react';
import Select from "react-select";


const SelectGenerator = ({ placeholder = "select...", option, itemName, formikValue, formik }) => {
    return (
        <Select
            instanceId={itemName}
            id={itemName}
            options={option}
            type="text"
            placeholder={placeholder}
            styles={customStyles}
            name={itemName}
            value={option.filter((option) => {
                return (
                    option.value === formikValue
                );
            })}
            onChange={(selectedOption) => {
                let event = {
                    target: {
                        name: itemName,
                        value: selectedOption.value,
                    },
                };
                formik.handleChange(event);
            }}
            components={{
                IndicatorSeparator: () => null,
            }}
        />
    )
}

export default SelectGenerator


export const facingOptions = [
    { value: "North", label: "North" },
    { value: "South", label: "South" },
    { value: "East", label: "East" },
    { value: "West", label: "West" },
];
export const statusOptions = [
    { value: "Ready To Move", label: "Ready To Move" },
    { value: "Under Construction", label: "Under Construction" },
];

export const furnishingOptions = [
    { value: "Furnished", label: "Furnished" },
    { value: "Unfurnished", label: "Unfurnished" },
];
export const transactionOptions = [
    { value: "Resale", label: "Resale" },
    { value: "Fresh", label: "Fresh" },
];


export const customStyles = {
    control: (base, state) => ({
        ...base,
        background: "#F4F8FB",
        // match with the menu
        borderRadius: "7px",
        width: "100%",
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "#1D72DB" : "#F4F8FB",
        // Removes weird border around container
        boxShadow: state.isFocused ? null : null,
        "&:hover": {
            // Overwrittes the different states of border
            borderColor: state.isFocused ? "#1D72DB" : "#F4F8FB",
        },
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#1D72DB" : null,
        borderBottom: "1px solid #F5F5F5",
        fontFamily: "Poppins",
        "&:hover": {
            backgroundColor: state.isFocused ? "#1D72DB" : "#1D72DB",
        },
    }),
    placeholder: (defaultStyles) => {
        return {
            ...defaultStyles,
            color: "#BCC7CE",
            fontFamily: "Poppins",
            fontSize: "0.8rem",
        };
    },
    dropdownIndicator: (provided) => ({
        ...provided,
        svg: {
            fill: "#323D5A",
        },
    }),
};