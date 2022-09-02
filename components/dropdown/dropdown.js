import React, { useState } from "react";
import styles from "../../styles/dropdown/dropdown.module.css";
import { motion } from "framer-motion";
const Dropdown = ({ children, placeholder, onDelete, data }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState(placeholder);

  const [isHover, toggleHover] = useState(false);
  console.log(selected);
  const toggleHoverMenu = (state) => {
    if(state==="hovered"){
      toggleHover(true);

      
    }
    else{
      toggleHover(false);
    }
  };
  const [isMouse, toggleMouse] = useState(false);
  const toggleMouseMenu = () => {
    toggleMouse(!isMouse);
  };



  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.1,
        delay: 0.1,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
  return (
    <motion.div onHoverStart={toggleHoverMenu} className={`${styles.dropdown}`}>
      <div className={`${styles.dropdown_btn}`}>
        {data.length !== 0
          ? data.slice(0, 3).map((item, index) => {
              return (
                <div key={index} className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                     <div>{item}</div> 
                      <i
                        onClick={() => onDelete(index)}
                        className="ri-close-line ms-2"
                      ></i>
                    </div>
                  </div>
                </div>
              );
            })
          : "Select"}
        <i className={isHover?"ri-arrow-up-s-fill":"ri-arrow-down-s-fill"}></i>
      </div>
      <motion.div
        animate={isHover ? "enter" : "exit"}
        variants={subMenuAnimate}
        className={`${styles.dropdown_content}`}
        style={{ display: isActive ? "block" : "none" }}
      >
        <div className={`${styles.item}`}>{children}</div>
      </motion.div>
    </motion.div>
  );
};

export default Dropdown;
