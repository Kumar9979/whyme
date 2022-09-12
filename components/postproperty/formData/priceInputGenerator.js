import React from "react";
import styles from "../../../styles/postProperty/pricedetails.module.css";
const PriceInputGenerator = ({
  price = true,
  placeholder = "Enter Your Maintanence Fee",
  title,
  itemName,
  formikValue,
  formik,
}) => {
  return price ? (
    <>
      <label
        htmlFor={itemName}
        className={`form-label text-nowrap fs_16 fw_500 fontFam_poppins`}
      >
        {title}
      </label>
      <div className={`${styles.propetyfeature_input} d-flex`}>
        <div className={`d-flex justify-content-center align-items-center`}>
          <span
            className={`${styles.fontFam_roboto} fw_500 fs_20 align-middle ms-2`}
          >
            ₹
          </span>{" "}
          <span className={`${styles.input_bar} mx-2`}></span>
        </div>

        <input
          type="text"
          className={`form-label ps-2 pe-2  pt-2   w-100  ${styles.propetyfeature_input}`}
          id={itemName}
          placeholder={placeholder}
          name={itemName}
          value={formikValue}
          onChange={formik.handleChange}
        />
      </div>
    </>
  ) : (
    <>
      {" "}
      <label
        htmlFor={itemName}
        className={`form-label text-nowrap fs_16 fw_500 fontFam_poppins`}
      >
        {title}
      </label>
      <div className={`${styles.propetyfeature_input} w-100 d-flex`}>
        <input
          type="text"
          className={`form-label ps-3 pe-2  pt-2  w-100   ${styles.propetyfeature_input}`}
          id={itemName}
          placeholder={placeholder}
          name={itemName}
          value={formikValue}
          onChange={formik.handleChange}
        />
        <div className={`d-flex justify-content-center align-items-center`}>
          <span className={`${styles.input_bar} mx-2`}></span>
          <span className={`fontFam_poppins fw_500 align-middle me-3`}>
            Sqft
          </span>
        </div>
      </div>
    </>
  );
};

export default PriceInputGenerator;
