import React, { useState } from "react";
import Select from "react-select";
import styles from "../../styles/modals/registerModal.module.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import Image from "next/image";
import close from "../../assets/icons/close.png";
import sell from "../../assets/icons/sell.png";
import sellWhite from "../../assets/icons/sellWhite.png";

import rent from "../../assets/icons/rent.png";
import rentWhite from "../../assets/icons/rentWhite.png";
import { useRouter } from "next/router";


export const customStyles = {

  control: (base, state) => ({
    ...base,
    background: "#F4F8FB",
    // match with the menu
    borderRadius: "7px",
    // Overwrittes the different states of border
    borderColor: state.isFocused ? "#1D72DB" : "#F4F8FB",
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "#1D72DB" : "#F4F8FB",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#1D72DB" : null,
    borderBottom: "1px solid #F5F5F5",
    fontFamily: "Poppins",
    "&:hover": {
      backgroundColor: state.isFocused ? "#1D72DB" : "#1D72DB",
    },
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#BCC7CE",
      fontFamily: "Poppins",
      fontSize: "0.8rem",
    };
  },
  dropdownIndicator: (provided) => ({
    ...provided,
    svg: {
      fill: "#323D5A",
    },
  }),
};

const typeOptions = [
  {
    type: "sell",
    list: [
      { value: "Sfertility", label: "Sell house" },
      { value: "Shealth", label: "Sell flat" },
      { value: "Snutrition", label: "Sell plot" },
    ],
  },
  {
    type: "rent",
    list: [
      { value: "Rfertility", label: "Rent home" },
      { value: "Rhealth", label: "Rent flat" },
      { value: "Rnutrition", label: "Rent Plot" },
    ],
  },
];

const SellRent = () => {
  const router = useRouter();
  const [optionType, setoptionType] = useState("");
  const formik = useFormik({
    initialValues: {
      propertyType: "",
    },
    validationSchema: Yup.object({
      propertyType: Yup.string().required("Required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
      router.push("post-property/property-details/propertyDetails")
    },
  });

  const optionList = typeOptions?.find((item) => item?.type === optionType);

  return (

    <div className={`vh-100 d-flex align-items-center justify-content-center mx-2`}>
      <div className={`${styles.register_form_container} ${styles.max_height_500}`}>
        <div className="d-flex justify-content-end mt-4 me-4 mb-1 text-white">
          {" "}
          <Image
            src={close}
            alt="close icon"
            width={30}
            height={30}
            className={`${styles.cursor_pointer}`}

          />
          {/* <div className="d-flex justify-content-end ">
        {" "}
        <i
          onClick={() => {
            onHide();
            setoptionType("");
          }}
          className={`${styles.modal_icon_close} ${styles.cursor_pointer} ri-close-circle-line me-4 mt-4 `}
        ></i> */}
        </div>
        <div className={styles.modal_body_register}>
          <div className="mb-1">
            <h5
              className={`fontFam_poppins ${styles.font_semibold} ${styles.color_323D5A} ${styles.font_24}`}
            >
              Please select the option
            </h5>

            <p
              className={`${styles.opacity_6} fontFam_poppins ${styles.color_323D5A} ${styles.font_regular} ${styles.font_18}`}
            >
              Please select the Preferred option that are right here
            </p>
          </div>

          <div className="d-flex justify-content-around">
            <div
              onClick={() => setoptionType("sell")}
              className={
                optionType === "sell"
                  ? `${styles.bg_color_1D72DB} ${styles.rentSell_container} ${styles.margin_r_3} d-flex flex-column align-items-center justify-content-center p-2`
                  : ` ${styles.rentSell_container} ${styles.margin_r_3} d-flex flex-column align-items-center justify-content-center p-2`
              }
            >
              <Image src={optionType === "sell" ? sellWhite : sell} alt="image of sell" width={65} height={65} />
              <span
                className={
                  optionType === "sell"
                    ? `fontFam_poppins ${styles.font_18} ${styles.font_medium} $ text-uppercase text-white mt-3`
                    : `fontFam_poppins ${styles.color_323D5A} ${styles.font_18} ${styles.font_medium} $ text-uppercase  mt-3`
                }
              >
                SELL
              </span>
            </div>

            <div
              onClick={() => setoptionType("rent")}
              className={
                optionType === "rent"
                  ? `${styles.bg_color_1D72DB} ${styles.rentSell_container}  d-flex flex-column align-items-center justify-content-center `
                  : `${styles.rentSell_container} d-flex flex-column align-items-center justify-content-center `
              }
            >
              <div>
                <Image
                  src={optionType === "rent" ? rentWhite : rent}
                  alt="image of rent"
                  width={65}
                  height={65}
                  className={optionType === "rent" ? "text-white" : null}
                />
              </div>

              <span
                className={
                  optionType === "rent"
                    ? `fontFam_poppins ${styles.font_18} ${styles.font_medium}  text-uppercase text-white mt-3`
                    : `fontFam_poppins ${styles.color_323D5A} ${styles.font_18} ${styles.font_medium}  text-uppercase  mt-3`
                }
              >
                RENT
              </span>
            </div>
          </div>
          <form onSubmit={formik.handleSubmit} className="mt-3">
            {optionType !== "" ? (
              <div>
                <label
                  id="#name"
                  className={`${styles.color_1D1E1F} ${styles.font_regular} fontFam_poppins ${styles.font_20} mb-2`}
                >
                  Property Type
                </label>
                <Select
                  options={optionList?.list}
                  type="text"
                  placeholder="Select Property Type"
                  value={optionList?.list.filter((option) => {
                    return option.value === formik.values.propertyType;
                  })}
                  styles={customStyles}
                  name="propertyType"
                  onChange={(selectedOption) => {
                    let event = {
                      target: {
                        name: "propertyType",
                        value: selectedOption.value,
                      },
                    };
                    formik.handleChange(event);
                  }}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                />


              </div>
            ) : null}
            {formik.errors.propertyType && formik.touched.propertyType && (
              <div className="d-flex align-items-center text-danger">
                <i className="ri-error-warning-line me-1 mt-1 "></i>
                <span> {formik.errors.propertyType}</span>
              </div>
            )}
            <div className="d-flex justify-content-end py-2 border-none mt-2">
              <button
                type="submit"
                className={`${styles.bg_color_1D72DB} text-white d-flex justify-content-between align-items-center rounded-3 border-0  px-3 py-2`}
              >
                <span
                  className={`fontFam_poppins ${styles.font_medium} ${styles.font_18} align-middle`}
                >
                  Next
                </span>
                <div>
                  <i
                    className={`${styles.modal_icon_arrowRightbtn} h-100 p-1 ri-arrow-right-line text-white border-light border mt-1 rounded ms-5 `}
                  ></i>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellRent;