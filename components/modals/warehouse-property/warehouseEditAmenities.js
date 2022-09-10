import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../../styles/modals/apartmentsModals/apartmentEditAmenities.module.css";
import Modal from "react-bootstrap/Modal";
import closeIcon from "../../../assets/icons/close.png";
import Image from "next/image";

const WarehouseEditAmenities = ({ show, handleClose }) => {
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
        //   size={'lg'}
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
            <hr/>
           <form onSubmit={formik.handleSubmit}>
            <div className="px-3 ">
              <div className=" text-start">
                <div className="row">
                  <div className="col-lg-6">
                   
                        <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                          <input
                            className="form-check-input mt-2 "
                            type="checkbox"
                            id="Elevators/Lifts"
                            name="Elevators/Lifts"
                            onChange={handleCheckbox}
                            checked={formik.values.Amenities.includes(
                                "Elevators/Lifts"
                            )}
                          />
                          <label
                            className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_500`}
                            htmlFor="Elevators/Lifts"
                          >
                            Elevators/Lifts
                          </label>
                        </div>
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
                        className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_500`}
                        htmlFor="Sauna Steam Room"
                      >
                        Sauna Steam Room
                      </label>
                    </div>
                    <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                      <input
                        className="form-check-input mt-2 "
                        type="checkbox"
                        id="Kids Play Area"
                        name="Kids Play Area"
                        onChange={handleCheckbox}
                        checked={formik.values.Amenities.includes(
                          "Kids Play Area"
                        )}
                      />
                      <label
                        className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_500`}
                        htmlFor="Kids Play Area"
                      >
                        Kids Play Area
                      </label>
                    </div>
                   
                   
                  </div>
                  <div className="col-6">
                  <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                      <input
                        className="form-check-input mt-2 "
                        type="checkbox"
                        id="CCTV Surveillance"
                        name="CCTV Surveillance"
                        onChange={handleCheckbox}
                        checked={formik.values.Amenities.includes(
                          "CCTV Surveillance"
                        )}
                      />
                      <label
                        className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_500`}
                        htmlFor="CCTV Surveillance"
                      >
                       CCTV Surveillance
                      </label>
                    </div>
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
                        className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_500`}
                        htmlFor="Private Parking Space"
                      >
                       Private Parking Space
                      </label>
                    </div>
                  
                  </div>
                </div>
              </div>
              <div className={`d-flex justify-content-end`}>
            <button type="submit" className={`${styles.save_btn} px-4 px-lg-5 py-lg-2 py-1 fs_14 fs_sm_15 mt-2`}>
                <span>
                Save
                </span>
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

export default WarehouseEditAmenities;


