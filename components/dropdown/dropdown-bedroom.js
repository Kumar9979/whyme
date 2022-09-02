import React, { useState } from "react";
import styles from "../../styles/dropdown/dropdownBedroom.module.css";
import { motion } from "framer-motion";
import { Space } from "antd";
import CloseIcon from "../../assets/icons/close-new-icon.svg";
import Image from "next/image";
import BedroomIcon from "../../assets/icons/bedroom-green-icon.svg";
import DropDownImage from "../../assets/icons/dropdown.svg";

const DropdownBedroom = ({ children, placeholder = [], onRemoveTag }) => {
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
        duration: 0.5,
        delay: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
  return (
    <motion.div onHoverStart={()=>toggleHoverMenu("hovered")}
    onHoverEnd={()=>toggleHoverMenu("leaved")} className={`${styles.dropdown}`}>
      <div
        onClick={(e) => {
          setIsActive(!isActive);

        }}
        
        
        className={`${styles.dropdown_btn} my-2 fw_500 py-2`}
      >
        <div className={`${styles.home_icon} d-flex align-items-center ps-2`}>
          <Image src={BedroomIcon} width={15} height={15} />
        </div>
        {placeholder?.length !== 0 ? (
          placeholder?.slice(0, 2).map((item, index) => {
            return (
              <div key={index} className={`${styles.card} card ms-2`}>
                <div className="d-flex ">
                  <div className={`${styles.card_box} card-body px-1 py-0 d-flex`}>
                    <div className={`${styles.card_items} fs_9 p-1 fw_500 fontFam_poppins`}>{item}</div>
                 
                  <button
                    className={`${styles.close_btn} d-flex align-items-center`}
                  >
                    <Image
                      src={CloseIcon}
                      onClick={() => onRemoveTag(index)}
                      className={``}
                      width={8}
                      height={8}
                    />
                  </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <Space
            className={`${styles.property_types_text} fs_12 fw_400 ms-2 fontFam_poppins d-flex justify-content-start `}
          >
            Bedrooms
          </Space>
        )}
        <div
          className={`${styles.dropdown_icon} ms-auto me-2 d-flex align-items-center `}
        >
          <Image src={DropDownImage} />
        </div>
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

export default DropdownBedroom;
