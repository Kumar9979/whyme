export const reactSelectSignUp = {
  control: (base, state) => ({
    ...base,
    background: "#FFFF",
    // match with the menu
    borderRadius: "5px",
    minWidth: 80,
    maxWidth: 80,
    // Overwrittes the different states of border
    borderColor: state.isFocused ? "#a0acc3" : "#e6e6e6",
    border: "none",

    minHeight: "30px",
    maxHeight: "35px",
    // maxHeight: "40px",
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "#a0acc3" : "#e6e6e6",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#7082A6" : null,
    borderBottom: "1px solid #F5F5F5",
    fontFamily: "Nunito",
    "&:hover": {
      backgroundColor: state.isFocused ? "#A0ACC3" : "##7082A6",
    },
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#BCC7CE",
      fontFamily: "Poppins",
      fontSize: ".8rem",
      textAlign: "center",
    };
  },
  singleValue: (provided, state) => ({
    ...provided,
    fontWeight: 600,
    fontFamily: "Poppins",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    svg: {
      fill: "#333333",
    },
    paddingTop: "5px",
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    paddingRight: 0,
  }),
  input: (provided, state) => ({
    ...provided,
    maxWidth: 30,
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: 0,
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    paddingRight: "0.8rem",
  }),
};
