import React, { useState } from "react";
import styles from "../../styles/dropdown/dropdown.module.css";
import { motion } from "framer-motion";
import { Space } from "antd";
import Close from "../../assets/icons/close.png";
import Image from "next/image";
const Dropdown = ({ children, placeholder, onRemoveTag }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState(placeholder);
  const [isHover, toggleHover] = React.useState(false);
console.log(selected);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };
  const [isMouse, toggleMouse] = React.useState(false);
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
        duration: 0.5,
        delay: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
  return (
    <motion.div onHoverStart={toggleHoverMenu} className={`${styles.dropdown}`}>
      <div
        onClick={(e) => {
          setIsActive(!isActive);
        }}
        className={`${styles.dropdown_btn}`}
      >
        {placeholder.length !== 0 ? (
          placeholder.slice(0, 2).map((item, index) => {
            return (
              <div key={index} className={`card`}>
                <div className="d-flex">
                  <div className="card-body px-1 py-1">
                    <div className={``}>{item}</div>
                  </div>
                  <button className={`${styles.close_btn} d-flex align-items-center`}>
                    <Image
                      src={Close}
                      onClick={()=>onRemoveTag(index)}
                      className={``}
                      width={15}
                      height={15}
                    />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <Space
            className={`${styles.property_types_text} fs_12 fw_400 ms-2 fontFam_poppins`}
          >
            Property Type
          </Space>
        )}
        <span className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"} />
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
