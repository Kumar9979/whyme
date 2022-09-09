import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../../../styles/modals/apartmentsModals/apartmentEditAmenities.module.css";
import Modal from "react-bootstrap/Modal";
import closeIcon from "../../../../assets/icons/close.png";
import Image from "next/image";

const OfficeSpaceAmenities = ({ show, handleClose }) => {
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
              <div className="px-3 ">
                <div className=" text-start">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Sauna Steam Room"
                          name="Sauna Steam Room"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Sauna Steam Room"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Sauna Steam Room"
                        >
                          Sauna Steam Room
                        </label>
                      </div>

                      <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Guest Parking Spaces"
                          name="Guest Parking Spaces"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Guest Parking Spaces"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Guest Parking Spaces"
                        >
                          Guest Parking Spaces
                        </label>
                      </div>
                     
                      <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Play Ground"
                          name="Play Ground"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Play Ground"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Play Ground"
                        >
                          Play Ground
                        </label>
                      </div>
                      <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Gym"
                          name="Gym"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes("Gym")}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Gym"
                        >
                          Gym
                        </label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Private Parking Space"
                          name="Private Parking Space"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Private Parking Space"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Private Parking Space"
                        >
                          Private Parking Space
                        </label>
                      </div>

                      <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Pet Washing Stations"
                          name="Pet Washing Stations"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Pet Washing Stations"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Pet Washing Stations"
                        >
                          Pet Washing Stations
                        </label>
                      </div>
                     
                      <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Rooftop Lounge Areas"
                          name="Rooftop Lounge Areas"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Rooftop Lounge Areas"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Rooftop Lounge Areas"
                        >
                          Rooftop Lounge Areas
                        </label>
                      </div>
                      <div className="form-check me-4  fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Garden"
                          name="Garden"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes("Garden")}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Garden"
                        >
                          Garden
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`d-flex justify-content-end`}>
                  <button
                    type="submit"
                    className={`${styles.save_btn} px-4 px-lg-5 py-lg-2 py-1 fs_14 fs_sm_15 mt-2`}
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

export default OfficeSpaceAmenities;
