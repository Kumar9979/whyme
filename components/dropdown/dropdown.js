import React, { useState } from 'react'
import styles from "../../styles/dropdown/dropdown.module.css"
const Dropdown = () => {
    const [isActive, setIsActive] = useState(false);
    const [selected, setIsSelected] = useState("Choose one");
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
          <span
            className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
          />
        </div>
        <div
          className={`${styles.dropdown_content}`}
          style={{ display: isActive ? "block" : "none" }}
        >
          <div
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
            className={`${styles.item}`}
          >
            One
          </div>
          <div
            className={`${styles.item}`}
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
          >
            Two
          </div>
          <div
            className={`${styles.item}`}
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
          >
            Three
          </div>
        </div>
      </div>
  )
}

export default Dropdown