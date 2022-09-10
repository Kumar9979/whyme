import React, { useState } from "react";
import styles from "../../../styles/modals/property-details-modals/reportProperty.module.css";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import * as Yup from "yup";

const ReportProperty = ({ show, handleClose }) => {
  const [checked, setChecked] = useState(false);
  const [other, setOther] = useState(false);
  const formik = useFormik({
    // enableReinitialize: true,
    initialValues: {
      Report: [],
      others: false,
      otherDetail: "",
    },
    validationSchema: Yup.object({
      Report: Yup.array().min(1, "at least 1").required(),
      others: Yup.boolean().required(),
      otherDetail: Yup.string().when("others", (others) => {
        if (others) return Yup.string().required("others erquired");
      }),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      handleClose();
      resetForm();
    },
  });
  // console.log(formik.values);

  const handleCheckbox = (e) => {
    const { checked, name } = e.target;
    if (e.target.checked) {
      formik.setFieldValue("Report", [...formik.values.Report, e.target.name]);
    } else {
      formik.setFieldValue(
        "Report",
        formik.values.Report.filter((item) => item !== e.target.name)
      );
    }
  };

  function handleOther(e) {
    setOther(!other);
    formik.handleChange(e);
    handleCheckbox(e);
  }
  // console.log(formik.values);
  // console.log(formik.errors);
  console.log(formik.values);
  console.log(other);
  return (
    <Modal
      className={`d-flex justify-content-center`}
      centered
      show={show}
      onHide={() => {
        handleClose();
        setOther(false);
      }}
      dialogClassName={`${styles.reportProperty_container}`}
      //       contentClassName={`${styles.card_radius}`}
      // size={'lg'}
    >
      <Modal.Body className="p-0">
        <div className="px-lg-3 py-lg-1 px-md-3 py-md-1 px-sm-3 py-sm-1 px-3 py-3  my-lg-2 my-md-2 my-sm-2 ms-lg-2 ms-md-2 ms-sm-2">
          <div
            className={`${styles.report_heading} fs_18 fw_700  fontFam_poppins`}
          >
            Report An Issue
          </div>
          <span className={`${styles.report_text} fs_13 fw_400 `}>
            Let us know your feedback this will allow us to serve you better
          </span>
          <form onSubmit={formik.handleSubmit}>
            <div className={`mt-lg-3 mt-md-3 mt-sm-2`}>
              <span className={`${styles.report_texthead} fs_16 fw_600`}>
                What detail(s) was/were not correct?
              </span>

              <div className={`d-flex align-items-center `}>
                <input
                  type="checkbox"
                  id="Property Sold/Rented Out"
                  name="Property Sold/Rented Out"
                  onChange={handleCheckbox}
                  checked={formik.values.Report.includes(
                    "Property Sold/Rented Out"
                  )}
                />
                <label
                  className={`${styles.checkbox_label} fs_14 fw_500 mt-2 mb-2 ms-1`}
                  htmlFor="Property Sold/Rented Out"
                >
                  Property Sold/Rented Out
                </label>
              </div>
              <div className={`d-flex align-items-center `}>
                <input
                  type="checkbox"
                  onChange={handleCheckbox}
                  id="Inappropriate Price"
                  name="Inappropriate Price"
                  checked={formik.values.Report.includes("Inappropriate Price")}
                />
                <label
                  htmlFor="Inappropriate Price"
                  className={`${styles.checkbox_label} fs_14 fw_500 mt-2 mb-2 ms-1`}
                >
                  Inappropriate Price
                </label>
              </div>
              <div className={`d-flex align-items-center `}>
                <input
                  type="checkbox"
                  id="Fake/Incorrect Photos"
                  name="Fake/Incorrect Photos"
                  onChange={handleCheckbox}
                  checked={formik.values.Report.includes(
                    "Fake/Incorrect Photos"
                  )}
                />
                <label
                  htmlFor="Fake/Incorrect Photos"
                  className={`${styles.checkbox_label} fs_14 fw_500 mt-2 mb-2 ms-1`}
                >
                  Fake/Incorrect Photos
                </label>
              </div>
              <div className={`d-flex align-items-center`}>
                <input
                  type="checkbox"
                  id="Incorrect Price"
                  name="Incorrect Price"
                  onChange={handleCheckbox}
                  checked={formik.values.Report.includes("Incorrect Price")}
                />
                <label
                  htmlFor="Incorrect Price"
                  className={`${styles.checkbox_label} fs_14 fw_500 mt-2 mb-2 ms-1`}
                >
                  Incorrect Price
                </label>
              </div>
              <div className={`d-flex align-items-center`}>
                <input
                  type="checkbox"
                  id="Incorrect Location/Address"
                  name="Incorrect Location/Address"
                  onChange={handleCheckbox}
                  checked={formik.values.Report.includes(
                    "Incorrect Location/Address"
                  )}
                />
                <label
                  htmlFor="Incorrect Location/Address"
                  className={`${styles.checkbox_label} ffs_14 fw_500 mt-2 mb-2 ms-1`}
                >
                  Incorrect Location/Address
                </label>
              </div>
              <div className={`d-flex align-items-center`}>
                <input
                  type="checkbox"
                  id="Incorrect Sale/Rent Type"
                  name="Incorrect Sale/Rent Type"
                  onChange={handleCheckbox}
                  checked={formik.values.Report.includes(
                    "Incorrect Sale/Rent Type"
                  )}
                />
                <label
                  htmlFor="Incorrect Sale/Rent Type"
                  className={`${styles.checkbox_label} fs_14 fw_500 mt-2 mb-2 ms-1`}
                >
                  Incorrect Sale/Rent Type
                </label>
              </div>
              <div className={`d-flex align-items-center`}>
                <input
                  type="checkbox"
                  id="Broker Property As Owner"
                  name="Broker Property As Owner"
                  onChange={handleCheckbox}
                  checked={formik.values.Report.includes(
                    "Broker Property As Owner"
                  )}
                />
                <label
                  htmlFor="Broker Property As Owner"
                  className={`${styles.checkbox_label} fs_14 fw_500 mt-2 mb-2 ms-1`}
                >
                  Broker Property As Owner
                </label>
              </div>
              <div className={`d-flex align-items-center`}>
                <div>
                  <input
                    type="checkbox"
                    id="others"
                    name="others"
                    onChange={handleOther}
                  />
                  <label
                    className={`${styles.checkbox_label} fs_14 fw_500 mt-2 mb-2 ms-1`}
                  >
                    Other
                  </label>
                </div>
              </div>
              <div>
                {formik.values.Report.includes("others") ? (
                  <textarea
                    name="otherDetail"
                    className={`${styles.check_textarea}  `}
                    placeholder="Write the reason here"
                    value={formik.values.otherDetail}
                    onChange={formik.handleChange}
                  ></textarea>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div className="d-flex justify-content-start my-lg-2  my-md-2 my-sm-2 w-100">
              <button
                className={`${styles.cancel_button} px-1  fs_15 fw_500 `}
                onClick={() => {
                  handleClose();
                  setOther(false);
                  formik.resetForm();
                }}
                type="button"
              >
                Cancel
              </button>
              <button
                className={`${styles.report_button}  px-1 py-2 ms-4 fs_15 fw_400`}
                type="submit"
              >
                Report Property
              </button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ReportProperty;
