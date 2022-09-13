import React from "react";
import styles from "../../../styles/postProperty/postpropertylayout.module.css";
import PostPropertyStepper from "./postPropertyStepper";


const PostPropertyLayout = ({ children }) => {
  return (
    <div className={`container`}>
      <div
        className={`${styles.layout_main_container} justify-content-center flex-column flex-lg-row mt-5 pt-5 d-flex`}
      >
        <PostPropertyStepper currentPage={"propertyDetails"} />
        {children}
      </div>
    </div>
  );
};

export default PostPropertyLayout;
