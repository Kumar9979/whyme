export const reactSelectSignUpError = {
    control: (base, state) => ({
      ...base,
      background: "#FFFF",
      // match with the menu
      borderRadius: "5px",
      width: "100%",
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "#dc3546a9" : "#dc3546a9",
      border: "1.3px solid #dc3546a9",
  
      minHeight: "36px",
      maxHeight: "36px",
      // maxHeight: "40px",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      outline: state.isFocused ? "1px solid #dc3546a9" : "none",
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "#dc3546a9" : "#dc3546a9",
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
        color: "#d9d9d9",
        fontFamily: "Nunito",
        fontSize: ".8rem",
        textAlign: "center",
      };
    },
  
    dropdownIndicator: (provided) => ({
      ...provided,
      svg: {
        fill: "#55555",
      },
      paddingTop: "5px",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      top: "7%",
      position: "absolute",
      fontSize: "15px",
    }),
  };
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

  