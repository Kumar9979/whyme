import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../../../styles/modals/apartmentsModals/apartmentEditAmenities.module.css";
import Modal from "react-bootstrap/Modal";
import closeIcon from "../../../../assets/icons/close.png";
import Image from "next/image";

const IndustryBuildingAmenities = ({ show, handleClose }) => {
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
        dialogClassName={`${styles.industry_amenities_container}`}
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
              <div className="px-3 px-lg-2 ">
                <div className=" text-start">
                  <div className="row ">
                    <div className="col-lg-6 ">
                      <div className="form-check me-4 mb-3 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Industries For The Production Of Power"
                          name="Industries For The Production Of Power"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Industries For The Production Of Power"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Industries For The Production Of Power"
                        >
                          Industries For The Production Of Power
                        </label>
                      </div>
                      <div className="form-check me-4 mb-3 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Raw Materials Mining Industries"
                          name="Raw Materials Mining Industries"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Raw Materials Mining Industries"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Raw Materials Mining Industries"
                        >
                          Raw Materials Mining Industries
                        </label>
                      </div>
                      <div className="form-check me-4 mb-3 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Industries Of Wood And Paper Products"
                          name="Industries Of Wood And Paper Products"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Industries Of Wood And Paper Products"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Industries Of Wood And Paper Products"
                        >
                          Industries Of Wood And Paper Products
                        </label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-check me-4 mb-3 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Manufacturing Industries"
                          name="Manufacturing Industries"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Manufacturing Industries"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Manufacturing Industries"
                        >
                          Manufacturing Industries
                        </label>
                      </div>
                      <div className="form-check me-4 mb-3 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Petroleum Products Industries"
                          name="Petroleum Products Industries"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Petroleum Products Industries"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Petroleum Products Industries"
                        >
                          Petroleum Products Industries
                        </label>
                      </div>
                      <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Textile Industries"
                          name="Textile Industries"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Textile Industries"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Textile Industries"
                        >
                          Textile Industries
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

export default IndustryBuildingAmenities;
