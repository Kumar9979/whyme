import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../../../styles/modals/apartmentsModals/apartmentEditAmenities.module.css";
import Modal from "react-bootstrap/Modal";
import closeIcon from "../../../../assets/icons/close.png";
import Image from "next/image";

const CommercialShowroomEditAmenities = ({ show, handleClose }) => {
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
                            id=" JewelryMart"
                            name=" JewelryMart"
                            onChange={handleCheckbox}
                            checked={formik.values.Amenities.includes(
                                " JewelryMart"
                            )}
                          />
                          <label
                            className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_500`}
                            htmlFor=" JewelryMart"
                          >
                            Jewelry Mart
                          </label>
                        </div>
                  
                    <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                      <input
                        className="form-check-input mt-2 "
                        type="checkbox"
                        id="DepartmentStore"
                        name="DepartmentStore"
                        onChange={handleCheckbox}
                        checked={formik.values.Amenities.includes(
                          "DepartmentStore"
                        )}
                      />
                      <label
                        className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_500`}
                        htmlFor="DepartmentStore"
                      >
                        Department Store
                      </label>
                    </div>
                    <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                      <input
                        className="form-check-input mt-2 "
                        type="checkbox"
                        id="ChemistAndMedicalStore"
                        name="ChemistAndMedicalStore"
                        onChange={handleCheckbox}
                        checked={formik.values.Amenities.includes(
                          "ChemistAndMedicalStore"
                        )}
                      />
                      <label
                        className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_500`}
                        htmlFor="ChemistAndMedicalStore"
                      >
                        Chemist And Medical Store
                      </label>
                    </div>
                    <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                      <input
                        className="form-check-input mt-2 "
                        type="checkbox"
                        id=" Stationary"
                        name=" Stationary"
                        onChange={handleCheckbox}
                        checked={formik.values.Amenities.includes(
                          " Stationary"
                        )}
                      />
                      <label
                        className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_500`}
                        htmlFor=" Stationary"
                      >
                        Stationary
                      </label>
                    </div>
                    <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                      <input
                        className="form-check-input mt-2 "
                        type="checkbox"
                        id=" BeautyParlor/Hairdresser"
                        name=" BeautyParlor/Hairdresser"
                        onChange={handleCheckbox}
                        checked={formik.values.Amenities.includes(
                          " BeautyParlor/Hairdresser"
                        )}
                      />
                      <label
                        className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_500`}
                        htmlFor=" BeautyParlor/Hairdresser"
                      >
                        Beauty Parlor/Hairdresser
                      </label>
                    </div>
                    <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                      <input
                        className="form-check-input mt-2 "
                        type="checkbox"
                        id="ButcherShop"
                        name="ButcherShop"
                        onChange={handleCheckbox}
                        checked={formik.values.Amenities.includes(
                          "ButcherShop"
                        )}
                      />
                      <label
                        className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_500`}
                        htmlFor="ButcherShop"
                      >
                       Butcher Shop
                      </label>
                    </div>
                    <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                      <input
                        className="form-check-input mt-2 "
                        type="checkbox"
                        id="SuperMarkets"
                        name="SuperMarkets"
                        onChange={handleCheckbox}
                        checked={formik.values.Amenities.includes(
                          "SuperMarkets"
                        )}
                      />
                      <label
                        className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_500`}
                        htmlFor="SuperMarkets"
                      >
                       Super Markets
                      </label>
                    </div>
                    <div className="form-check me-4 mb-2 mb-lg-0 fs_12 fs_sm_12">
                      <input
                        className="form-check-input mt-2 "
                        type="checkbox"
                        id="ClinicsAndPolyclinics"
                        name="ClinicsAndPolyclinics"
                        onChange={handleCheckbox}
                        checked={formik.values.Amenities.includes(
                          "ClinicsAndPolyclinics"
                        )}
                      />
                      <label
                        className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_500`}
                        htmlFor="ClinicsAndPolyclinics"
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
                        id="PetShop/PetClinic"
                        name="PetShop/PetClinic"
                        onChange={handleCheckbox}
                        checked={formik.values.Amenities.includes(
                          "PetShop/PetClinic"
                        )}
                      />
                      <label
                        className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_500`}
                        htmlFor="PetShop/PetClinic"
                      >
                       Pet Shop/ Pet Clinic
                      </label>
                    </div>
                    <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                      <input
                        className="form-check-input mt-2 "
                        type="checkbox"
                        id="ClothingAndFashionStores"
                        name="ClothingAndFashionStores"
                        onChange={handleCheckbox}
                        checked={formik.values.Amenities.includes(
                          "ClothingAndFashionStores"
                        )}
                      />
                      <label
                        className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_500`}
                        htmlFor="ClothingAndFashionStores"
                      >
                       Clothing And Fashion Stores
                      </label>
                    </div>
                    <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                      <input
                        className="form-check-input mt-2 "
                        type="checkbox"
                        id="GroceryShop"
                        name="GroceryShop"
                        onChange={handleCheckbox}
                        checked={formik.values.Amenities.includes(
                          "GroceryShop"
                        )}
                      />
                      <label
                        className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_500`}
                        htmlFor="GroceryShop"
                      >
                       Grocery Shop
                      </label>
                    </div>
                    <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                      <input
                        className="form-check-input mt-2 "
                        type="checkbox"
                        id="NursingHome"
                        name="NursingHome"
                        onChange={handleCheckbox}
                        checked={formik.values.Amenities.includes(
                          "NursingHome"
                        )}
                      />
                      <label
                        className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_500`}
                        htmlFor="NursingHome"
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
                        checked={formik.values.Amenities.includes(
                          "Optician"
                        )}
                      />
                      <label
                        className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_500`}
                        htmlFor="Optician"
                      >
                       Optician
                      </label>
                    </div>
                    <div className="form-check me-4 mb-2 fs_12 fs_sm_12">
                      <input
                        className="form-check-input mt-2 "
                        type="checkbox"
                        id="BookShop"
                        name="BookShop"
                        onChange={handleCheckbox}
                        checked={formik.values.Amenities.includes(
                          "BookShop"
                        )}
                      />
                      <label
                        className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_500`}
                        htmlFor="BookShop"
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
                        checked={formik.values.Amenities.includes(
                          "Gyms"
                        )}
                      />
                      <label
                        className={`form-check-label mt-1 text-nowrap ${styles.amenities_title} fs_13 fs_sm_13 fw_500`}
                        htmlFor="Gyms"
                      >
                       Gyms
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

export default CommercialShowroomEditAmenities;


