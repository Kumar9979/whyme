import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../../../styles/modals/apartmentsModals/apartmentEditAmenities.module.css";
import Modal from "react-bootstrap/Modal";
import closeIcon from "../../../../assets/icons/close.png";
import Image from "next/image";

const CommercialShopAmenities = ({ show, handleClose }) => {
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
              <div className="px-3 mt-lg-5 mt-3">
                <div className=" text-start">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Jewelry Mart"
                          name="Jewelry Mart"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Jewelry Mart"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Jewelry Mart"
                        >
                          Jewelry Mart
                        </label>
                      </div>
                      <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Department Store"
                          name="Department Store"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Department Store"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Department Store"
                        >
                          Department Store
                        </label>
                      </div>
                      <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Chemist And Medical Store"
                          name="Chemist And Medical Store"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Chemist And Medical Store"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Chemist And Medical Store"
                        >
                          Chemist And Medical Store
                        </label>
                      </div>
                      <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Stationery"
                          name="Stationery"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Stationery"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Stationery"
                        >
                          Stationery
                        </label>
                      </div>
                      <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Beauty Parlor/Hairdresser"
                          name="Beauty Parlor/Hairdresser"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Beauty Parlor/Hairdresser"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Beauty Parlor/Hairdresser"
                        >
                          Beauty Parlor/Hairdresser
                        </label>
                      </div>
                      <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Butcher Shop"
                          name="Butcher Shop"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Butcher Shop"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Butcher Shop"
                        >
                          Butcher Shop
                        </label>
                      </div>
                      <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Super Markets"
                          name="Super Markets"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Super Markets"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Super Markets"
                        >
                          Super Markets
                        </label>
                      </div>
                      <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Clinics And Polyclinics"
                          name="Clinics And Polyclinics"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Clinics And Polyclinics"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Clinics And Polyclinics"
                        >
                          Clinics And Polyclinics
                        </label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Pet Shop/ Pet Clinic"
                          name="Pet Shop/ Pet Clinic"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Pet Shop/ Pet Clinic"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Pet Shop/ Pet Clinic"
                        >
                          Pet Shop/ Pet Clinic
                        </label>
                      </div>
                      <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Clothing And Fashion Stores"
                          name="Clothing And Fashion Stores"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Clothing And Fashion Stores"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Clothing And Fashion Stores"
                        >
                          Clothing And Fashion Stores
                        </label>
                      </div>
                      <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Grocery Shop"
                          name="Grocery Shop"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Grocery Shop"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Grocery ShopGrocery Shop"
                        >
                          Grocery Shop
                        </label>
                      </div>
                      <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Nursing Home"
                          name="Nursing Home"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Nursing Home"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Nursing Home"
                        >
                          Nursing Home
                        </label>
                      </div>
                      <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Optician"
                          name="Optician"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes("Optician")}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Optician"
                        >
                          Optician
                        </label>
                      </div>
                      <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Book Shop"
                          name="Book Shop"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Book Shop"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Book Shop"
                        >
                          Book Shop
                        </label>
                      </div>
                      <div className="form-check me-4  fs_12 fs_sm_12">
                        <input
                          className="form-check-input mt-2 "
                          type="checkbox"
                          id="Gyms"
                          name="Gyms"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes("Gyms")}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_600`}
                          htmlFor="Gyms"
                        >
                          Gyms
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

export default CommercialShopAmenities;
