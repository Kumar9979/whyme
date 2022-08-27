import React from "react";
import pointing from "../../../assets/images/pointing.svg";
import Image from "next/dist/client/image";
import styles from "../../../styles/propertydetails/lorem.module.css";

const LoremText = () => {
  return (
    <div
      className={`${styles.LoremText}  d-flex flex-column align-items-between p-4 mt-4 position-relative`}
    >
      <div className={`${styles.lorem_text_title} py-3`}>Lorem ipsum</div>
      <div className={`${styles.lorem_text_heading} py-2`}>Lorem ipsum</div>
      <div className={`${styles.lorem_text_properties} py-2 w-75`}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</div>
        
      <button
        className={`${styles.lorem_text_button} w-75 p-0 mt-4 d-flex justify-content-start `}
      >
        Click Here
      </button>
      <div className={`position-absolute ${styles.image_position}`}>
        <Image src={pointing} alt="Picture of the author" width={80} />
      </div>
    </div>
  );
};

export default LoremText;
