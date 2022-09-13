import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../../../styles/modals/apartmentsModals/apartmentEditAmenities.module.css";
import Modal from "react-bootstrap/Modal";
import closeIcon from "../../../../assets/icons/close.png";
import Image from "next/image";

const IndustryPlotAmenities = ({ show, handleClose }) => {
  const formik = useFormik({
    // enableReinitialize: true,
    initialValues: {
      Amenities: [],
    },
    validationSchema: Yup.object({
      Amenitities: Yup.string(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      handleClose();
    },
  });
  const handleCheckbox = (e) => {
    const { checked, name } = e.target;
    if (e.target.checked) {
      formik.setFieldValue("Amenities", [
        ...formik.values.Amenities,
        e.target.name,
      ]);
    } else {
      formik.setFieldValue(
        "Amenities",
        formik.values.Amenities.filter((item) => item !== e.target.name)
      );
    }
  };
  console.log(formik.values);

  return (
    <div>
      <Modal
        centered
        show={show}
        onHide={handleClose}
        dialogClassName={`${styles.amenities_container}`}
        contentClassName={`${styles.card_radius}`}
      >
        <Modal.Body>
          <div>
            <div
              className={`${styles.heading} d-flex justify-content-between `}
            >
              <div>
                <span
                  className={`${styles.upload_heading_text} fs_20 fw_600 fs_sm_20 `}
                >
                  Amenities
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
              <div className="px-3 mt-lg-4 mt-3">
                <div className=" text-start">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Commercial Construction"
                          name="Commercial Construction"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Commercial Construction"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Commercial Construction"
                        >
                          Commercial Construction
                        </label>
                      </div>
                      <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Highway Access"
                          name="Highway Access"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Highway Access"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Highway Access"
                        >
                          Highway Access
                        </label>
                      </div>
                      <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Electricity Line"
                          name="Electricity Line"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Electricity Line"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Electricity Line"
                        >
                          Electricity Line
                        </label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Industrial Construction"
                          name="Industrial Construction"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Industrial Construction"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Industrial Construction"
                        >
                          Industrial Construction
                        </label>
                      </div>
                      <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Main Road Access"
                          name="Main Road Access"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Main Road Access"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Main Road Access"
                        >
                          Main Road Access
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`d-flex justify-content-end`}>
                  <button
                    type="submit"
                    className={`${styles.save_btn} px-4 px-lg-5 py-lg-2 py-1 fs_14 fs_sm_15 mt-4`}
                  >
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default IndustryPlotAmenities;
