import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../../../styles/modals/apartmentsModals/apartmentEditAmenities.module.css";
import Modal from "react-bootstrap/Modal";
import closeIcon from "../../../../assets/icons/close.png";
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
                            id="Godown For Any Dry Storage"
                            name="Godown For Any Dry Storage"
                            onChange={handleCheckbox}
                            checked={formik.values.Amenities.includes(
                                "Godown For Any Dry Storage"
                            )}
                          />
                          <label
                            className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_500`}
                            htmlFor="Godown For Any Dry Storage"
                          >
                            Godown For Any Dry Storage
                          </label>
                        </div>
                    <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                      <input
                        className="form-check-input mt-2 "
                        type="checkbox"
                        id="Godown For Cold Storage"
                        name="Godown For Cold Storage"
                        onChange={handleCheckbox}
                        checked={formik.values.Amenities.includes(
                          "Godown For Cold Storage"
                        )}
                      />
                      <label
                        className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_500`}
                        htmlFor="Godown For Cold Storage"
                      >
                        Godown For Cold Storage
                      </label>
                    </div>
                  
                   
                   
                  </div>
                  <div className="col-6">
                  <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                      <input
                        className="form-check-input mt-2 "
                        type="checkbox"
                        id="Distribution Center"
                        name="Distribution Center"
                        onChange={handleCheckbox}
                        checked={formik.values.Amenities.includes(
                          "Distribution Center"
                        )}
                      />
                      <label
                        className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_500`}
                        htmlFor="Distribution Center"
                      >
                       Distribution Center
                      </label>
                    </div>
                    <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                      <input
                        className="form-check-input mt-2 "
                        type="checkbox"
                        id="Godown With Climate Control"
                        name="Godown With Climate Control"
                        onChange={handleCheckbox}
                        checked={formik.values.Amenities.includes(
                          "Godown With Climate Control"
                        )}
                      />
                      <label
                        className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_500`}
                        htmlFor="Godown With Climate Control"
                      >
                       Godown With Climate Control
                      </label>
                    </div>
                  
                  </div>
                </div>
              </div>
              <div className={`d-flex justify-content-end mt-3`}>
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


