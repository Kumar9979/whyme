import React, { useState } from "react";
import styles from "../../../styles/modals/property-details-modals/reportProperty.module.css";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import * as Yup from "yup";

const ReportAdvertiser = ({ show, handleClose }) => {
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
              What was wrong?
              </span>

              <div className={`d-flex align-items-center `}>
                <input
                  type="checkbox"
                  id="Wrong or invalid Number"
                  name="Wrong or invalid Number"
                  onChange={handleCheckbox}
                  checked={formik.values.Report.includes("Wrong or invalid Number")}
                />
                <label
                  className={`${styles.checkbox_label} fs_14 fw_500 mt-2 mb-2 ms-1`}
                  htmlFor="Wrong or invalid Number"
                >
                  Wrong or invalid Number
                </label>
              </div>
              <div className={`d-flex align-items-center `}>
                <input
                  type="checkbox"
                  onChange={handleCheckbox}
                  id="Switched Off/Not Reachable"
                  name="Switched Off/Not Reachable"
                  checked={formik.values.Report.includes("Switched Off/Not Reachable")}
                />
                <label
                  htmlFor="Switched Off/Not Reachable"
                  className={`${styles.checkbox_label} fs_14 fw_500 mt-2 mb-2 ms-1`}
                >
                 Switched Off/Not Reachable
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
                onClick={() => {
                    
                    setOther(false);
                    formik.resetForm();
                  }}
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

export default ReportAdvertiser;
