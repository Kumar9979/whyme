import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import styles from "../../../../styles/modals/apartmentsModals/apartmentAreaPriceRent.module.css";
import Modal from "react-bootstrap/Modal";
import closeIcon from "../../../../assets/icons/close.png";
import Image from "next/image";
import { useFormik } from "formik";
import { useRouter } from "next/router";

const IndustryBuildingRent = ({ show, handleClose }) => {
  const numRegex = /^[0-9]+$/;
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      BuildUpArea: "",
      CarpetArea: "",
      PlotArea: "",
      DepositPrice: "",
      RentAmount: "",
    },

    validationSchema: Yup.object({
      BuildUpArea: Yup.number()
        .typeError("invalid value")
        .moreThan(Yup.ref("CarpetArea"), "Must be more then carpet area")
        .required("Required"),
      CarpetArea: Yup.string()
        .matches(numRegex, "invalid value")
        .required("Required"),
      DepositPrice: Yup.string()
        .matches(numRegex, "invalid value")
        .required("Required"),
      RentAmount: Yup.string()
        .matches(numRegex, "invalid value")
        .required("Required"),
      PlotArea: Yup.string()
        .matches(numRegex, "invalid value")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      handleClose();
      resetForm();
    },
  });
  console.log(formik.values);

  return (
    <div>
      <Modal
        centered
        show={show}
        onHide={handleClose}
        dialogClassName={`${styles.deleteCard_width}`}
        contentClassName={`${styles.card_radius}`}
      >
        <Modal.Body>
          <div className="px-lg-2">
            <div
              className={`${styles.heading} d-flex justify-content-between `}
            >
              <div>
                <span
                  className={`${styles.upload_heading_text} fs_20 fw_600 fs_sm_20 `}
                >
                  Area & Price
                </span>
              </div>
              <div>
                <span onClick={handleClose} className={`${styles.close_icon}`}>
                  <Image src={closeIcon} width="23px" height="23px" />
                </span>
              </div>
            </div>
            <hr />
            <form onSubmit={formik.handleSubmit}>
              <div class=" text-start">
                <div class="row mb-lg-2">
                  <div class="col-lg-6 col-sm-12">
                    <label
                      htmlFor="BuildUpArea"
                      className={`form-label text-nowrap ${styles.built_text} fs_16 fw_500`}
                    >
                      Build-up Area
                    </label>
                    <div
                      className={`${styles.propetyfeature_input} w-100  d-flex`}
                    >
                      <input
                        type="text"
                        className={`pb-2 ps-2 pe-2  pt-2 w-100 fs_sm_12 fs_15 ${styles.propetyfeature_input_placeholder}`}
                        id="BuildUpArea"
                        placeholder="Enter Build up Area"
                        name="BuildUpArea"
                        value={formik.values.BuildUpArea}
                        onChange={formik.handleChange}
                      />
                      <div
                        className={`d-flex ${styles.propetyfeature_input_sqft} justify-content-center align-items-center`}
                      >
                        <span className={`${styles.input_bar} mx-2`}></span>
                        <span
                          className={`align-middle ${styles.sqft_text} me-3 fs_12  fw_500`}
                        >
                          Sqft
                        </span>
                      </div>
                    </div>
                    {formik.errors.BuildUpArea && formik.touched.BuildUpArea && (
                      <div className="d-flex align-items-center text-danger fs_12 mt-1">
                        <i className="ri-error-warning-line me-1 "></i>
                        <span>{formik.errors.BuildUpArea}</span>
                      </div>
                    )}
                  </div>
                  <div class="col mt-3 mt-lg-0">
                    <label
                      htmlFor="CarpetArea"
                      className={`form-label text-nowrap ${styles.built_text} fs_16 fw_500`}
                    >
                      Carpet Area
                    </label>
                    <div
                      className={`${styles.propetyfeature_input} w-100  d-flex`}
                    >
                      <input
                        type="text"
                        className={`pb-2 ps-2 pe-2  pt-2 w-100 fs_sm_12 fs_15 ${styles.propetyfeature_input_placeholder}`}
                        id="CarpetArea"
                        placeholder="Enter Carpet Area"
                        name="CarpetArea"
                        value={formik.values.CarpetArea}
                        onChange={formik.handleChange}
                      />
                      <div
                        className={`d-flex ${styles.propetyfeature_input_sqft} justify-content-center align-items-center`}
                      >
                        <span className={`${styles.input_bar} mx-2`}></span>
                        <span
                          className={` align-middle ${styles.sqft_text} me-3 fs_12  fw_500`}
                        >
                          Sqft
                        </span>
                      </div>
                    </div>
                    {formik.errors.CarpetArea && formik.touched.CarpetArea && (
                      <div className="d-flex align-items-center text-danger fs_12 mt-1">
                        <i className="ri-error-warning-line me-1 fs_12 "></i>
                        <span className="">{formik.errors.CarpetArea}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-start">
                <div className="row">
                  <div class="col-lg-6 col-sm-12 mt-3 ">
                    <label
                      htmlFor="PlotArea"
                      className={`form-label text-nowrap ${styles.built_text} fs_16 fw_500`}
                    >
                      Plot Area
                    </label>
                    <div
                      className={`${styles.propetyfeature_input} w-100  d-flex`}
                    >
                      <input
                        type="text"
                        className={`pb-2 ps-2 pe-2  pt-2 w-100 fs_sm_12 fs_15 ${styles.propetyfeature_input_placeholder}`}
                        id="PlotArea"
                        placeholder="Enter Build up Area"
                        name="PlotArea"
                        value={formik.values.PlotArea}
                        onChange={formik.handleChange}
                      />
                      <div
                        className={`d-flex ${styles.propetyfeature_input_sqft} justify-content-center align-items-center`}
                      >
                        <span className={`${styles.input_bar} mx-2`}></span>
                        <span
                          className={`align-middle ${styles.sqft_text} me-3 fs_12  fw_500`}
                        >
                          Sqft
                        </span>
                      </div>
                    </div>
                    {formik.errors.PlotArea && formik.touched.PlotArea && (
                      <div className="d-flex align-items-center text-danger fs_12 mt-1">
                        <i className="ri-error-warning-line me-1 "></i>
                        <span>{formik.errors.PlotArea}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <div className={`mb-2 mt-4 `}>
                  <label
                    htmlFor="RentAmount"
                    className={`form-label text-nowrap ${styles.built_text} fs_16 fw_500`}
                  >
                    Rent Amount
                  </label>
                  <div className={`${styles.propetyfeature_input} d-flex`}>
                    <div
                      className={`d-flex ${styles.rupee_text} justify-content-center align-items-center`}
                    >
                      <span className={`  align-middle ms-3 fs_14 fw_500`}>
                        ₹
                      </span>
                      <span className={`${styles.input_bar} mx-2`}></span>
                    </div>
                    <input
                      type="text"
                      className={`py-2 ps-2 pe-2  pt-2  fs_sm_12 fs_15 w-100 ${styles.propetyfeature2_input_placeholder} `}
                      id="RentAmount"
                      placeholder="Enter rent amount"
                      name="RentAmount"
                      value={formik.values.RentAmount}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.errors.RentAmount && formik.touched.RentAmount && (
                    <div className="d-flex align-items-center text-danger fs_12 mt-1">
                      <i className="ri-error-warning-line me-1  "></i>
                      <span>{formik.errors.RentAmount}</span>
                    </div>
                  )}
                </div>
                <div className={`mb-2 mt-4 `}>
                  <label
                    htmlFor="DepositPrice"
                    className={`form-label text-nowrap ${styles.built_text} fs_16 fw_500`}
                  >
                    Security Deposit/Advance
                  </label>
                  <div className={`${styles.propetyfeature_input} d-flex`}>
                    <div
                      className={`d-flex ${styles.rupee_text} justify-content-center align-items-center`}
                    >
                      <span className={`  align-middle ms-3 fs_14 fw_500`}>
                        ₹
                      </span>
                      <span className={`${styles.input_bar} mx-2`}></span>
                    </div>
                    <input
                      type="text"
                      className={`py-2 ps-2 pe-2  pt-2  fs_sm_12 fs_15 w-100 ${styles.propetyfeature2_input_placeholder} `}
                      id="DepositPrice"
                      placeholder="Enter rent amount"
                      name="DepositPrice"
                      value={formik.values.DepositPrice}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.errors.DepositPrice && formik.touched.DepositPrice && (
                    <div className="d-flex align-items-center text-danger fs_12 mt-1">
                      <i className="ri-error-warning-line me-1  "></i>
                      <span>{formik.errors.DepositPrice}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className={`d-flex justify-content-end`}>
                <button
                  type="submit"
                  className={`${styles.save_btn} px-4 px-lg-5 py-lg-2 py-1 fs_14 fs_sm_15 mt-lg-4 mt-3`}
                >
                  <span>Save</span>
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default IndustryBuildingRent;
