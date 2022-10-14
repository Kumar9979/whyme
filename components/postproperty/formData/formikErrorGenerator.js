import React from "react";
import styles from "../../../styles/postProperty/propertyfeatures.module.css";

export const FormikErrorGenerator = ({ formikError, formikTouched }) => {
  return (
    <div className={`${styles.error_container}`}>
      {formikError && formikTouched && (
        <div className="d-flex align-items-center text-danger">
          <i
            style={{ fontSize: 12, marginRight: ".1rem" }}
            className="ri-error-warning-line   "
          ></i>
          <span className={`fs_10 lh-base `}>{formikError}</span>
        </div>
      )}
    </div>
  );
};
