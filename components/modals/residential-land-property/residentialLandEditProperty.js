import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import closeIcon from "../../../assets/icons/close.png";
import Image from "next/image";
import styles from "../../../styles/modals/apartmentEditProperty.module.css";
import Select from "react-select";

import { useFormik } from "formik";
import * as Yup from "yup";

const ResidentialLandEditProperty = ({ show, handleClose }) => {
  function handleRadioButton(e) {
    setDiscloseIdentity(e.target.value);
  }
  const [discloseIdentity, setDiscloseIdentity] = useState("yes");


  function handleBoundaryWallRadioButton(e) {
    setBoundaryWallIdentity(e.target.value);
  }
  const [boundaryWallIdentity, setBoundaryWallIdentity] = useState("yes");

  function handleGatedColonyRadioButton(e) {
    setGatedColonyIdentity(e.target.value);
  }
  const [gatedColonyIdentity, setGatedColonyIdentity] = useState("yes");

    function handleConerSiteRadioButton(e) {
    setConerSiteIdentity(e.target.value);
  }
  const [conerSiteIdentity, setConerSiteIdentity] = useState("yes");

  const [value, setValue1] = useState("4");
  const [optionType, setoptionType] = useState("");
  const numRegex = /^[0-9]+$/;
  const [menuOpen, setMenuOpen] = useState(false);
  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#F4F8FB",
      // match with the menu
      borderRadius: "7px",
      width: "100%",
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
    valueContainer: (provided, state) => ({
      ...provided,
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

  const formik = useFormik({
    // enableReinitialize: true,
    initialValues: {
      FloorsAllowedForConstruction: "",
      NoOfOpenSides: "",

      FurnishedStatus: "",
      Status: "",
      Transaction: "",
      Amenities: [],
    },

    validationSchema: Yup.object({
      FloorsAllowedForConstruction: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      NoOfOpenSides: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),

      FurnishedStatus: Yup.string().required("Required"),
      Status: Yup.string().required("Required"),
      Transaction: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      handleClose();
    },
  });

  const status = [
    { value: "Ready To Move", label: "Ready To Move" },
    { value: "Under Construction", label: "Under Construction" },
  ];

  const furnishingStatus = [
    { value: "Furnished", label: "Furnished" },
    { value: "Unfurnished", label: "Unfurnished" },
  ];
  const transaction = [
    { value: "Resale", label: "Resale" },
    { value: "Fresh", label: "Fresh" },
  ];

  return (
    <Modal
      centered
      show={show}
      onHide={handleClose}
      dialogClassName={`${styles.property_features_container}`}
      contentClassName={`${styles.card_radius}`}
    >
      <Modal.Body contentClassName={`${styles.card_radius}`}>
        {" "}
        <div className="px-lg-2">
          <div className={`${styles.heading} d-flex justify-content-between `}>
            <div>
              <span
                className={`${styles.upload_heading_text} fs_20 fw_600 fs_sm_20 `}
              >
                Property Features
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
            <div>
              <div className=" text-start mt-3">
                <div className="d-flex gx-0">
                  <div className="col-8">
                    <div className="">
                      <label
                        htmlFor="floorsAllowedForConstruction"
                        className={`form-label text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500`}
                      >
                        Floors allowed for construction
                      </label>
                      <div>
                        <input
                          type="text"
                          className={`form-label ${styles.total_floors_input} ${styles.floor_allowed}  fs_15 fs_sm_12 p-2`}
                          id="floorsAllowedForConstruction"
                          placeholder="Ex : 13"
                          name="FloorsAllowedForConstruction"
                          value={formik.values.FloorsAllowedForConstruction}
                          onChange={formik.handleChange}
                        />
                      </div>
                      {formik.errors.FloorsAllowedForConstruction &&
                        formik.touched.FloorsAllowedForConstruction && (
                          <div className="d-flex align-items-center text-danger fs_sm_12 fs_13 ">
                            <i className="ri-error-warning-line me-1  "></i>
                            <span>
                              {formik.errors.FloorsAllowedForConstruction}
                            </span>
                          </div>
                        )}
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="">
                      <label
                        htmlFor="NoOfOpenSides"
                        className={`form-label text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500 `}
                      >
                        No. of Open Sides
                      </label>
                      <div>
                        <input
                          type="text"
                          className={`form-label ${styles.total_floors_input} w-100  fs_15 fs_sm_12 p-2`}
                          id="NoOfOpenSides"
                          placeholder="Ex : 13"
                          name="NoOfOpenSides"
                          value={formik.values.NoOfOpenSides}
                          onChange={formik.handleChange}
                        />
                      </div>
                      {formik.errors.NoOfOpenSides &&
                        formik.touched.NoOfOpenSides && (
                          <div className="d-flex align-items-center text-danger fs_sm_12 fs_13 ">
                            <i className="ri-error-warning-line me-1  "></i>
                            <span>{formik.errors.NoOfOpenSides}</span>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </div>
              <div className=" text-start mt-3">
        
                <div className="row gx-0">
                  <div className="d-flex">
                  <div className="col-6">
                  <div className={`text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500 mb-1`}>Any construction Done</div>
                    <div className="d-flex">
                    <input
                      className={` ms-1 cursor_pointer`}
                      name="disclose"
                      id="yes"
                      type="radio"
                      value="yes"
                      checked={discloseIdentity === "yes"}
                      onChange={handleRadioButton}
                    />
                    <label
                      htmlFor="yes"
                      className={
                        discloseIdentity === "yes"
                          ? ` ${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                          : `${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                      }
                    >
                      Yes
                    </label>
                    <input
                      className={`  ${styles.membertrade_modal_offer_radiobox} cursor_pointer ms-3`}
                      name="disclose"
                      id="no"
                      type="radio"
                      value="no"
                      checked={discloseIdentity === "no"}
                      onChange={handleRadioButton}
                    />{" "}
                    <label
                      htmlFor="no"
                      className={
                        discloseIdentity === "no"
                        ? ` ${styles.total_floors_text} fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                        : `${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                      }
                    >
                      No
                    </label>
                    </div>
                  </div>
                  
                  <div className="col-6">
                  <div className={`text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500 mb-1`}>Boundary Wall made</div>
                    <div className="d-flex">
                    <input
                      className={` ms-1 cursor_pointer`}
                      name="boundaryWall"
                      id="yes"
                      type="radio"
                      value="yes"
                      checked={boundaryWallIdentity === "yes"}
                      onChange={handleBoundaryWallRadioButton}
                    />
                    <label
                      htmlFor="yes"
                      className={
                        boundaryWallIdentity === "yes"
                          ? `${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                          : `${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                      }
                    >
                      Yes
                    </label>
                    <input
                      className={`  ${styles.membertrade_modal_offer_radiobox} cursor_pointer ms-3`}
                      name="boundaryWall"
                      id="no"
                      type="radio"
                      value="no"
                      checked={boundaryWallIdentity === "no"}
                      onChange={handleBoundaryWallRadioButton}
                    />{" "}
                    <label
                      htmlFor="no"
                      className={
                        boundaryWallIdentity === "no"
                        ? `${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                        : `${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                      }
                    >
                      No
                    </label>
                  </div>
                  </div>
                  </div>
                </div>
                <div className="row gx-0 mt-3">
                  <div className="d-flex">
                  <div className="col-6">
                  <div className={`text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500 mb-1`}>Gated colony</div>
                    <div className="d-flex">
                    <input
                      className={` ms-1 cursor_pointer`}
                      name="gatedColony"
                      id="yes"
                      type="radio"
                      value="yes"
                      checked={gatedColonyIdentity === "yes"}
                      onChange={handleGatedColonyRadioButton}
                    />
                    <label
                      htmlFor="yes"
                      className={
                        gatedColonyIdentity === "yes"
                          ? ` ${styles.total_floors_text} fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                          : `${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                      }
                    >
                      Yes
                    </label>
                    <input
                      className={`  ${styles.membertrade_modal_offer_radiobox} cursor_pointer ms-3`}
                      name="gatedColony"
                      id="no"
                      type="radio"
                      value="no"
                      checked={gatedColonyIdentity === "no"}
                      onChange={handleGatedColonyRadioButton}
                    />{" "}
                    <label
                      htmlFor="no"
                      className={
                        gatedColonyIdentity === "no"
                        ? ` ${styles.total_floors_text} fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                        : `${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                      }
                    >
                      No
                    </label>
                    </div>
                  </div>
                  
                  <div className="col-6">
                  <div className={`text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500 mb-1`}>Corner site</div>
                    <div className="d-flex">
                    <input
                      className={` ms-1 cursor_pointer`}
                      name="conerSite"
                      id="yes"
                      type="radio"
                      value="yes"
                      checked={conerSiteIdentity === "yes"}
                      onChange={handleConerSiteRadioButton}
                    />
                    <label
                      htmlFor="yes"
                      className={
                        conerSiteIdentity === "yes"
                          ? `${styles.total_floors_text} fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                          : `${styles.total_floors_text} fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                      }
                    >
                      Yes
                    </label>
                    <input
                      className={`  ${styles.membertrade_modal_offer_radiobox} cursor_pointer ms-3`}
                      name="conerSite"
                      id="no"
                      type="radio"
                      value="no"
                      checked={conerSiteIdentity === "no"}
                      onChange={handleConerSiteRadioButton}
                    />{" "}
                    <label
                      htmlFor="no"
                      className={
                        conerSiteIdentity === "no"
                        ? `${styles.total_floors_text}   fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
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
            </div>
            <div className={`d-flex justify-content-end mt-3`}>
              <button
                type="submit"
                className={`${styles.save_btn} px-4 px-lg-5 py-lg-2 py-1 fs_12 fs_sm_15 mt-2`}
              >
                <span>Save</span>
              </button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ResidentialLandEditProperty;

/*

import React from "react";
import styles from "../../../styles/component/modals/memebertradeoffer.module.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import HoldingProgressBar from "../../../pages/profile/holdingProgressBar";
import logo from "../../../assets/icons/myholdings/logo.svg";
import ModalTopSection from "../modalTopSection";
import InputRangeSlider from "../../inputRangeSlider";

const MemberTradeOfferModal = (props) => {
  const closeModal = () => setShow(false);

  const [show, setShow] = useState(props.modalShow);

  const [discloseIdentity, setDiscloseIdentity] = useState("no");

  const currentAmount = 0.6;
  const totalAmount = 1.13;
  const percentage = (currentAmount / totalAmount) * 100;

  function handleRadioButton(e) {
    setDiscloseIdentity(e.target.value);
  }

  return (
    <>
      <button
        className={` d-flex align-items-center px-3 py-2 ${styles.memebertrade_modal_offer_btn_generatecode}`}
        onClick={() => {
          setShow(true);
        }}
      >
        <span className={`secondary_color fontFam_montserrat fw_600 fs_14`}>
          offer popup
        </span>
      </button>
      <Modal
        show={show}
        backdropClassName={`${styles.membertrade_modal_offer_backdrop}`}
        dialogClassName={`${styles.membertrade_modal_offer_container}`}
        centered
        contentClassName={`${styles.membertrade_modal_offer_modal_content}`}
      >
        {" "}
        <Modal.Body bsPrefix={`${styles.membertrade_modal_offer_modal_body} `}>
          <ModalTopSection closeModalFn={closeModal} />

          <h5
            className={`fontFam_montserrat fs_16 fw_500 secondary_color mb-0 `}
          >
            Buy in Disclosure:
          </h5>
          <p
            className={`fontFam_nunito fw_600 secondary_color mb-2 mt-1 ${styles.membertrade_modal_offer_fs_13} ${styles.membertrade_modal_offer_lh_small}`}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>

          <div
            className={`d-flex w-100 flex-column mb-3 justify-content-center align-items-center`}
          >
            <div className={`fs_12 fontFam_montserrat fw_600`}>
              <span className={`secondary_color pe-1`}>₹ XX,XX,XX,XX,XXX</span>
              <span
                className={`${styles.membertrade_modal_offer_color_green_2} fs_12`}
              >
                O/S OF ₹ XX,XX,XX,XX,XXX
              </span>
            </div>

            <HoldingProgressBar height={"12px"} done={percentage} />
          </div>

          <h6
            className={`black_color fs_13 fontFam_montserrat fw_600 fs_md_12`}
          >
            YOUR BUY IN AMOUNT:
          </h6>

          <div
            className={`d-flex  ${styles.membertrade_modal_offer_inputrange_container} justify-content-center align-items-center position-relative mb-5 mb-sm-4  mx-auto flex-column`}
          >
            <InputRangeSlider />
            <div
              className={`d-flex justify-content-between w-100 fontFam_roboto fw_600 fs_12 mt-1 secondary_color`}
            >
              <span className={``}>50,000</span>{" "}
              <span className={` `}>25,00,000</span>
            </div>
          </div>

          <div className={`d-flex mx-2 mx-sm-4  pt-2  justify-content-between`}>
            <span
              className={`black_color fontFam_montserrat fw_600 text-nowrap  fs_13 fs_md_12 `}
            >
              DISCLOSE IDENTITY :
            </span>

            <div className={`d-flex mb-2`}>
              <div className={`d-flex align-items-center`}>
                <input
                  className={`  ${styles.membertrade_modal_offer_radiobox} cursor_pointer`}
                  name="disclose"
                  id="yes"
                  type="radio"
                  value="yes"
                  checked={discloseIdentity === "yes"}
                  onChange={handleRadioButton}
                />
                <label
                  htmlFor="yes"
                  className={
                    discloseIdentity === "yes"
                      ? `ps-1 secondary_color fs_13 fs_md_12 cursor_pointer`
                      : `${styles.membertrade_modal_offer_color_gray} ps-1 fs_13 fs_md_12 cursor_pointer`
                  }
                >
                  Yes
                </label>
              </div>

              <div className={`d-flex align-items-center ms-3`}>
                <input
                  className={`  ${styles.membertrade_modal_offer_radiobox} cursor_pointer`}
                  name="disclose"
                  id="no"
                  type="radio"
                  value="no"
                  checked={discloseIdentity === "no"}
                  onChange={handleRadioButton}
                />{" "}
                <label
                  htmlFor="no"
                  className={
                    discloseIdentity === "no"
                      ? `ps-1 secondary_color fs_13 fs_md_12 cursor_pointer`
                      : `${styles.membertrade_modal_offer_color_gray} ps-1 fs_13 fs_md_12 cursor_pointer`
                  }
                >
                  No
                </label>
              </div>
            </div>
          </div>

          <span
            className={`${styles.membertrade_modal_offer_color_gray} d-block  fontFam_nunito fs_12 lh-base`}
          >
            Lorem ipsum dolor sit amet, consetetur adipscingelit dsats
          </span>

          <div className="d-flex w-100 align-items-center justify-content-start mt-2">
            <div
              className={`${styles.membertrade_modal_offer_icon_logo} me-3 me-sm-2  `}
            >
              <Image
                src={logo}
                alt="upcide logo"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <span
              className={`fs_12 fontFam_nunito fw_600 ${styles.membertrade_modal_offer_color_gray_2}  ${styles.membertrade_modal_offer_text_size}`}
            >
              Lorem ipsum dolor sit{" "}
              <span className={`secondary_color`}> 10% is my commission</span>{" "}
              itr,se diam nonumy eirmod tempori nvidunt ut labore et
            </span>
          </div>

          <div className={`w-100 d-flex justify-content-end mx-auto mt-3`}>
            <button
              className={`${styles.membertrade_modal_offer_btn_submit}  me-2 rounded  border-0 primary_bg  fs_12 fontFam_montserrat fw_600 `}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MemberTradeOfferModal;
*/
