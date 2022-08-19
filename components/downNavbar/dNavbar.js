import React from "react";
import styles from "../../styles/navbarStyles/dNavbar.module.css";
import Select from "react-select";

const DownNavbar = () => {
  const options = [
    { value: "Buy", label: "Buy" },
    { value: "Rent", label: "Rent" },
    { value: "Sell", label: "Sell" },
  ];
  const customStyles = {
    option: (defaultStyles, state,provided,) => ({
      ...defaultStyles,
      ...provided,
      color: state.isSelected ? '#50BF97' : '#50BF97',
      fontFamily: "Poppins",
      fontSize: ".8rem",
      textAlign: "center",
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
    
        return { ...provided, opacity, transition };
      },

    // control: () => ({
    //   // none of react-select's styles are passed to <Control />
    //   width: 200,
    // }),
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: "#50BF97",
        fontFamily: "Poppins",
        fontSize: ".8rem",
        fontWeight:"500",
        textAlign: "center",
      };
    },
  };

  return (
    <div className={`${styles.navbarheight} `}>
      <div className={`d-flex justify-content-center py-3`}>
        <div>
          <Select styles={customStyles} placeholder={"Buy"} options={options} />
        </div>
      </div>
    </div>
  );
};

export default DownNavbar;
