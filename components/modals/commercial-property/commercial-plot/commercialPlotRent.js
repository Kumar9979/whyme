import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import styles from "../../../../styles/modals/apartmentsModals/apartmentAreaPriceRent.module.css";
import Modal from "react-bootstrap/Modal";
import closeIcon from "../../../../assets/icons/close.png";
import Image from "next/image";
import { useFormik } from "formik";
import { useRouter } from "next/router";

const CommercialPlotRent = ({ show, handleClose }) => {
  const [cornerShop, setCornerShop] = useState("no");
  const numRegex = /^[0-9]+$/;
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      PlotArea: "",
      PlotLength: "",
      PlotWidth: "",
      DepositPrice: "",
      RentAmount: "",
      CornerShop: "no",
    },

    validationSchema: Yup.object({
      PlotArea: Yup.string()
        .matches(numRegex, "invalid value")
        .required("Required"),
      PlotLength: Yup.string()
        .matches(numRegex, "invalid value")
        .required("Required"),
      DepositPrice: Yup.string()
        .matches(numRegex, "invalid value")
        .required("Required"),
      RentAmount: Yup.string()
        .matches(numRegex, "invalid value")
        .required("Required"),
      PlotWidth: Yup.string()
        .matches(numRegex, "invalid value")
        .required("Required"),
      CornerShop: Yup.string(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      handleClose();
      resetForm();
    },
  });
  console.log(formik.values);

  console.log(formik.values);
  function handleCornerShopButton(e) {
    setCornerShop(e.target.value);
    let event = {
      target: {
        name: "CornerShop",
        value: e.target.value,
      },
    };
    formik.handleChange(event);
  }

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
                        placeholder="Enter Plot Area"
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
                  <div class="col mt-3 mt-lg-0">
                    <label
                      htmlFor="PlotLength"
                      className={`form-label text-nowrap ${styles.built_text} fs_16 fw_500`}
                    >
                      Plot Length
                    </label>
                    <div
                      className={`${styles.propetyfeature_input} w-100  d-flex`}
                    >
                      <input
                        type="text"
                        className={`pb-2 ps-2 pe-2  pt-2 w-100 fs_sm_12 fs_15 ${styles.propetyfeature_input_placeholder}`}
                        id="PlotLength"
                        placeholder="Enter Plot length"
                        name="PlotLength"
                        value={formik.values.PlotLength}
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
                    {formik.errors.PlotLength && formik.touched.PlotLength && (
                      <div className="d-flex align-items-center text-danger fs_12 mt-1">
                        <i className="ri-error-warning-line me-1 fs_12 "></i>
                        <span className="">{formik.errors.PlotLength}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-start">
                <div className="row">
                  <div class="col-lg-6 col-sm-12 mt-3 ">
                    <label
                      htmlFor="PlotWidth"
                      className={`form-label text-nowrap ${styles.built_text} fs_16 fw_500`}
                    >
                      Plot Width
                    </label>
                    <div
                      className={`${styles.propetyfeature_input} w-100  d-flex`}
                    >
                      <input
                        type="text"
                        className={`pb-2 ps-2 pe-2  pt-2 w-100 fs_sm_12 fs_15 ${styles.propetyfeature_input_placeholder}`}
                        id="PlotWidth"
                        placeholder="Enter Plot width"
                        name="PlotWidth"
                        value={formik.values.PlotWidth}
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
                  <div className="col-lg-6 col-sm-12 mt-3 ">
                    <div className={`mb-2  `}>
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
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <div class=" text-start">
                  <div class="row mb-lg-2 mt-3">
                    <div className={`col-lg-6 col-sm-12 `}>
                      <label
                        htmlFor="DepositPrice"
                        className={`form-label text-nowrap ${styles.built_text} fs_16 fw_500`}
                      >
                        Deposit Price
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
                      {formik.errors.DepositPrice &&
                        formik.touched.DepositPrice && (
                          <div className="d-flex align-items-center text-danger fs_12 mt-1">
                            <i className="ri-error-warning-line me-1  "></i>
                            <span>{formik.errors.DepositPrice}</span>
                          </div>
                        )}
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-3 mt-lg-0">
                      <label
                        htmlFor="CornerShop"
                        className={`form-label text-nowrap ${styles.built_text} fs_16 fw_500`}
                      >
                        Corner Plot
                      </label>
                      <div className="d-flex mt-2">
                        <input
                          className={` ms-1 cursor_pointer`}
                          id="yes"
                          type="radio"
                          value="yes"
                          checked={cornerShop === "yes"}
                          onChange={handleCornerShopButton}
                        />
                        <label
                          htmlFor="yes"
                          className={
                            cornerShop === "yes"
                              ? ` ${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                              : `${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                          }
                        >
                          Yes
                        </label>
                        <input
                          className={`  ${styles.membertrade_modal_offer_radiobox} cursor_pointer ms-3`}
                          id="no"
                          type="radio"
                          value="no"
                          checked={cornerShop === "no"}
                          onChange={handleCornerShopButton}
                        />{" "}
                        <label
                          htmlFor="no"
                          className={
                            cornerShop === "no"
                              ? ` ${styles.total_floors_text} fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                              : `${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                          }
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
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

export default CommercialPlotRent;
