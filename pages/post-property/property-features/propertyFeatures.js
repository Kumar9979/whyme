import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../../styles/postProperty/propertyfeatures.module.css";

import Select from "react-select";
const propertyFeatures = () => {
  const [optionType, setoptionType] = useState("");
  const customStyles = {
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
  const facing = [
    { value: "North", label: "North" },
    { value: "South", label: "South" },
    { value: "East", label: "East" },
    { value: "West", label: "West" },
  ];
  const furnishingStatus = [
    { value: "Furnished", label: "Furnished" },
    { value: "Unfurnished", label: "Unfurnished" },
  ];
  const formik = useFormik({
    initialValues: {
      TotalFloors: "",
      FloorNumber: "",
      CarParkingCount: "",
      BedRoom: "",
      BathRoom: "",
      facing: "",
      FurnishedStatus: "",
      // Amenitities: "",
    },

    validationSchema: Yup.object({
      TotalFloors: Yup.string().required("Required"),
      FloorNumber: Yup.string().required("Required"),
      CarParkingCount: Yup.string().required("Required"),
      BedRoom: Yup.string().required("Required"),
      BathRoom: Yup.string().required("Required"),
      facing: Yup.string().required("Required"),
      FurnishedStatus: Yup.string().required("Required"),

      // Amenitities: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);

      resetForm();
    },
  });

  return (
    <div className="container">
      <div className={`row`}>
        <div className={`col-lg-4 col-md-12`}>stepper</div>

        <div className="col-lg-7 col-m-12 ">
          <div className={`mb-4`}>
            <h5
              className={`${styles.color_1D72DB} ${styles.fontFam_poppins} ${styles.font_medium} ${styles.font_24}`}
            >
              Property Features
            </h5>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className={`contents`}>
              <div className={`${styles.amenities_list_flex_res} `}>
                <div className="item-1   ">
                  <label
                    htmlFor="totalFloors"
                    className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} ${styles.fontFam_poppins}`}
                  >
                    Total floors
                  </label>
                  <div>
                    <input
                      type="text"
                      className={`form-label ps-2 pe-2  pt-2 pb-2 ${styles.propetyfeature_input}`}
                      id="totalFloors"
                      placeholder="Ex : 13"
                      name="TotalFloors"
                      value={formik.values.TotalFloors}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.errors.TotalFloors && formik.touched.TotalFloors && (
                    <div className="d-flex align-items-center text-danger">
                      <i className="ri-error-warning-line me-1  "></i>
                      <span>{formik.errors.TotalFloors}</span>
                    </div>
                  )}
                </div>

                <div className="item-2    ">
                  <label
                    htmlFor="FloorNumber"
                    className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} ${styles.fontFam_poppins}`}
                  >
                    Floor number
                  </label>
                  <div>
                    <input
                      type="text"
                      className={`form-label ps-2 pe-2  pt-2 pb-2 ${styles.propetyfeature_input}`}
                      id="FloorNumber"
                      placeholder="Ex : 7"
                      name="FloorNumber"
                      value={formik.values.FloorNumber}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.errors.FloorNumber && formik.touched.FloorNumber && (
                    <div className="d-flex align-items-center text-danger">
                      <i className="ri-error-warning-line me-1  "></i>
                      <span>{formik.errors.FloorNumber}</span>
                    </div>
                  )}
                </div>

                <div className="item-3   ">
                  <label
                    htmlFor=" CarParkingCount"
                    className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} ${styles.fontFam_poppins}`}
                  >
                    Car Parking Count
                  </label>
                  <div>
                    <input
                      type="text"
                      className={`form-label ps-2 pe-2  pt-2 pb-2 ${styles.propetyfeature_input}`}
                      id=" CarParkingCount"
                      placeholder="Ex : 3"
                      name="CarParkingCount"
                      value={formik.values.CarParkingCount}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.errors.CarParkingCount &&
                    formik.touched.CarParkingCount && (
                      <div className="d-flex align-items-center text-danger">
                        <i className="ri-error-warning-line me-1  "></i>
                        <span>{formik.errors.CarParkingCount}</span>
                      </div>
                    )}
                </div>
              </div>

              <div className={`${styles.amenities_list_flex_res} mt-4`}>
                <div className="item-1 ">
                  <label
                    htmlFor="BedRoom"
                    className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} ${styles.fontFam_poppins}`}
                  >
                    Bedroom
                  </label>
                  <div>
                    <input
                      type="text"
                      className={`form-label ps-2 pe-2  pt-2 pb-2 ${styles.propetyfeature_input}`}
                      id="BedRoom"
                      placeholder="Ex : 13"
                      name="BedRoom"
                      value={formik.values.BedRoom}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.errors.BedRoom && formik.touched.BedRoom && (
                    <div className="d-flex align-items-center text-danger">
                      <i className="ri-error-warning-line me-1  "></i>
                      <span>{formik.errors.BedRoom}</span>
                    </div>
                  )}
                </div>

                <div className="item-2 ">
                  <label
                    htmlFor="FloorNumber"
                    className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} ${styles.fontFam_poppins}`}
                  >
                    Bathroom
                  </label>
                  <div>
                    <input
                      type="text"
                      className={`form-label ps-2 pe-2  pt-2 pb-2 ${styles.propetyfeature_input}`}
                      id="FloorNumber"
                      placeholder="Ex : 7"
                      name="FloorNumber"
                      value={formik.values.FloorNumber}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.errors.FloorNumber && formik.touched.FloorNumber && (
                    <div className="d-flex align-items-center text-danger">
                      <i className="ri-error-warning-line me-1  "></i>
                      <span>{formik.errors.FloorNumber}</span>
                    </div>
                  )}
                </div>

                <div className="item-3">
                  <label
                    htmlFor="facing"
                    className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} ${styles.fontFam_poppins}`}
                  >
                    Facing{" "}
                  </label>
                  <div
                    onClick={() => setoptionType("facing")}
                    // className={
                    //   optionType === "facing"
                    //     ? `${styles.bg_color_1D72DB}  d-flex flex-column  `
                    //     : ` d-flex flex-columnn `
                    // }
                  >
                    <Select
                      id="facing"
                      options={facing}
                      type="text"
                      placeholder="Select.."
                      styles={customStyles}
                      name="facing"
                      value={facing.filter((option) => {
                        return option.value === formik.values.facing;
                      })}
                      onChange={(selectedOption) => {
                        let event = {
                          target: {
                            name: "facing",
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
                  {formik.errors.facing && formik.touched.facing && (
                    <div className="d-flex align-items-center text-danger">
                      <i className="ri-error-warning-line me-1 mt-1 "></i>
                      <span> {formik.errors.facing}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className={`content-third-line d-flex mt-4`}>
                <div className="item">
                  <label
                    htmlFor="FurnishedStatus"
                    className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} ${styles.fontFam_poppins}`}
                  >
                    Furnishing Status{" "}
                  </label>
                  <div
                    onClick={() => setoptionType("furnishingStatus")}
                    // className={
                    //   optionType === "furnishingStatus"
                    //     ? `${styles.bg_color_1D72DB}  d-flex flex-column  `
                    //     : ` d-flex flex-columnn `
                    // }
                  >
                    <Select
                      id="FurnishedStatus"
                      options={furnishingStatus}
                      type="text"
                      placeholder="Select.."
                      styles={customStyles}
                      name="FurnishedStatus"
                      value={furnishingStatus.filter((option) => {
                        return option.value === formik.values.FurnishedStatus;
                      })}
                      onChange={(selectedOption) => {
                        let event = {
                          target: {
                            name: "FurnishedStatus",
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
                  {formik.errors.FurnishedStatus &&
                    formik.touched.FurnishedStatus && (
                      <div className="d-flex align-items-center text-danger">
                        <i className="ri-error-warning-line me-1 mt-1 "></i>
                        <span> {formik.errors.FurnishedStatus}</span>
                      </div>
                    )}
                </div>
              </div>

              {/* CHECKBOX ITEMS */}

              <div className={`content-fourth-line mt-4 `}>
                <div className={`content-fourth-name mb-2`}>
                  <h5
                    className={`${styles.font_20} ${styles.font_regular} ${styles.fontFam_poppins}`}
                  >
                    Amenities
                  </h5>
                </div>
                {/* CHECKBOX ITEMS LIST  */}

                <div className={`${styles.amenities_list_flex_res} `}>
                  <div className="form-check me-4 mb-2">
                    <input
                      className="form-check-input mt-2"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  ${styles.fontFam_poppins}`}
                      htmlFor="flexCheckChecked"
                    >
                      Elevators/Lifts
                    </label>
                  </div>

                  <div className="form-check me-4 mb-2">
                    <input
                      className="form-check-input mt-2"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  ${styles.fontFam_poppins}`}
                      htmlFor="flexCheckChecked"
                    >
                      Guest Parking Spaces
                    </label>
                  </div>

                  <div className="form-check mb-2">
                    <input
                      className="form-check-input mt-2"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  ${styles.fontFam_poppins}`}
                      htmlFor="flexCheckChecked"
                    >
                      Gym
                    </label>
                  </div>
                </div>

                <div className={`${styles.amenities_list_flex_res}  `}>
                  <div className="form-check me-4 mb-2">
                    <input
                      className="form-check-input mt-2"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  ${styles.fontFam_poppins}`}
                      htmlFor="flexCheckChecked"
                    >
                      CCTV Surveillance
                    </label>
                  </div>

                  <div className="form-check me-4 mb-2">
                    <input
                      className="form-check-input mt-2"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  ${styles.fontFam_poppins}`}
                      htmlFor="flexCheckChecked"
                    >
                      Swimming Pool
                    </label>
                  </div>

                  <div className="form-check mb-2">
                    <input
                      className="form-check-input mt-2"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  ${styles.fontFam_poppins}`}
                      htmlFor="flexCheckChecked"
                    >
                      Play Grounds
                    </label>
                  </div>
                </div>

                <div className={`${styles.amenities_list_flex_res}  `}>
                  <div className="form-check me-4 mb-2">
                    <input
                      className="form-check-input mt-2"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  ${styles.fontFam_poppins}`}
                      htmlFor="flexCheckChecked"
                    >
                      Kids Play Area
                    </label>
                  </div>

                  <div className="form-check me-4 mb-2">
                    <input
                      className="form-check-input mt-2"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  ${styles.fontFam_poppins}`}
                      htmlFor="flexCheckChecked"
                    >
                      Community Clubhouse
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input mt-2"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  ${styles.fontFam_poppins}`}
                      htmlFor="flexCheckChecked"
                    >
                      Garden
                    </label>
                  </div>
                </div>

                <div className={`${styles.amenities_list_flex_res}  `}>
                  <div className="form-check me-4 mb-2">
                    <input
                      className="form-check-input mt-2"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  ${styles.fontFam_poppins}`}
                      htmlFor="flexCheckChecked"
                    >
                      Pet Washing Stations
                    </label>
                  </div>

                  <div className="form-check mb-2">
                    <input
                      className="form-check-input mt-2"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  ${styles.fontFam_poppins}`}
                      htmlFor="flexCheckChecked"
                    >
                      Rooftop Lounge Areas
                    </label>
                  </div>
                </div>

                <div className={`${styles.amenities_list_flex_res}  `}>
                  <div className="form-check me-4 mb-2">
                    <input
                      className="form-check-input mt-2"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  ${styles.fontFam_poppins}`}
                      htmlFor="flexCheckChecked"
                    >
                      Electronic Vehicle Charging Points
                    </label>
                  </div>

                  <div className="form-check mb-2">
                    <input
                      className="form-check-input mt-2"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  ${styles.fontFam_poppins}`}
                      htmlFor="flexCheckChecked"
                    >
                      Barbecue Areas
                    </label>
                  </div>
                </div>
              </div>

              <div className={`content-btn d-flex justify-content-end mt-4`}>
                <div className={`d-flex`}>
                  <button className={`bg-white border-0 `}>
                    <span
                      className={`${styles.container_icon_arrowLeftbtn} align-middle me-2`}
                    >
                      <i
                        className={`${styles.icon_arrowLeftbtn} h-100 p-1 ri-arrow-left-line  border mt-1 rounded `}
                      ></i>
                    </span>

                    <span
                      className={` ${styles.color_1D72DB} ${styles.fontFam_poppins} ${styles.font_medium} ${styles.font_18} align-middle`}
                    >
                      Back
                    </span>
                  </button>

                  <button
                    type="submit"
                    className={`${styles.bg_color_1D72DB} text-white d-flex justify-content-between align-items-center rounded-3 border-0 ms-3  px-3 py-2`}
                  >
                    <span
                      className={` ${styles.fontFam_poppins} ${styles.font_medium} ${styles.font_18} align-middle`}
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
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default propertyFeatures;
