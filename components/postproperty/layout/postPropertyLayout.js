import React from "react";
import StepperNew from "../../../pages/stepper/stepper";
import styles from "../../../styles/postProperty/postpropertylayout.module.css";

const PostPropertyLayout = ({ children }) => {
  return (
    <div className={`container`}>
      <div
        className={`${styles.layout_main_container} justify-content-center mt-5 pt-5 d-flex`}
      >
        <StepperNew currentPage={"propertyDetails"} />
        {children}
      </div>
    </div>
  );
};

export default PostPropertyLayout;
