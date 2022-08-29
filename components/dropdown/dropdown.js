import React, { useState } from "react";
import styles from "../../styles/dropdown/dropdown.module.css";
const Dropdown = ({ children,placeholder }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState(placeholder);
  function handleBlur(e) {
    console.log(e);
  }
  return (
    <div className={`${styles.dropdown}`}>
      <div
        onClick={(e) => {
          setIsActive(!isActive);
        }}
        className={`${styles.dropdown_btn}`}
      >
        {selected}
        <span className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"} />
      </div>
      <div
        className={`${styles.dropdown_content}`}
        style={{ display: isActive ? "block" : "none" }}
      >
        <div className={`${styles.item}`}>{children}</div>
      </div>
    </div>
  );
};

export default Dropdown;
