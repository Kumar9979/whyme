import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import styles from "../../../../styles/modals/apartmentsModals/apartmentDescription.module.css";
import Modal from "react-bootstrap/Modal";
import closeIcon from "../../../../assets/icons/close.png";
import Image from "next/image";
import { useFormik } from "formik";

const VillaDescription = ({show, handleClose}) => {
    const formik = useFormik({
        initialValues: {
            Description: "",
        },
        validationSchema: Yup.object({
            Description: Yup.string("").required("Required"),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            handleClose();
            resetForm();
          },
      });
  return (
    <div>
        <Modal
        centered
        show={show}
        onHide={handleClose}
        dialogClassName={`${styles.description_container}`}
        contentClassName={`${styles.card_radius}`}
        //   size={'lg'}
      >
        <Modal.Body>
            <div>
            <form onSubmit={formik.handleSubmit}>
            <div
              className={`${styles.heading} d-flex justify-content-between `}
            >
              <div>
                <span
                 htmlFor="Description"
                  className={`${styles.upload_heading_text} fs_20 fw_600 fs_sm_20 `}
                >
                  Description
                </span>
              </div>
              <div>
                <span onClick={handleClose} className={`${styles.close_icon}`}>
                  <Image src={closeIcon} width="23px" height="23px" />
                </span>
              </div>
            </div>

            <div className="mt-3 px-lg-2">
                  <textarea
                    type="text"
                    className={`${styles.description}   ps-2`}
                    id="Description"
                    placeholder="Enter the description"
                    name="Description"
                    value={formik.values.Description}
                    onChange={formik.handleChange}
                  ></textarea>
                </div>
                {formik.errors.Description && formik.touched.Description && (
                  <div className="d-flex align-items-center text-danger">
                    <i className="ri-error-warning-line me-1 ps-2 "></i>
                    <span>{formik.errors.Description}</span>
                  </div>
                )}
                <div className={`d-flex justify-content-end`}>
                <button
                  type="submit"
                  className={`${styles.save_btn} px-4 px-lg-5 py-lg-2 py-1 fs_14 fs_sm_15 mt-3 me-2`}
                >
                  <span>Save</span>
                </button>
              </div>
                </form>
            </div>
        </Modal.Body>
       

      </Modal>
    </div>
  )
}

export default VillaDescription