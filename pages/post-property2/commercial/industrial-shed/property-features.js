import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../../../styles/postProperty/propertyfeatures.module.css";
import { useRouter } from "next/router";
import PostPropertyLayout from "../../../../components/postproperty/components/propertyLayout";
import SelectGenerator, { furnishingOptions, statusOptions, transactionOptions } from "../../../../components/postproperty/formData/selectGenerator";
import { FormikErrorGenerator } from "../../../../components/postproperty/formData/formikErrorGenerator";
import PostPropertySubmitButton from "../../../../components/postproperty/components/submitButton";
import { AmnetiesGenerator, CommercialIndustrialShed } from "../../../../components/postproperty/formData/amnetiesListGenerator";
import InputFieldGenerator from "../../../../components/postproperty/formData/inputFieldGenerator";

const IndustrialShedPropertyFeatures = () => {
  const [optionType, setoptionType] = useState("");
  const router = useRouter();
  const numRegex = /^[0-9]+$/;

  const formik = useFormik({
    // enableReinitialize: true,
    initialValues: {
      FloorNumber: "",
      floorAllowed: "",
      TotalFloors: "",
      Washrooms: "",
      TotalFloors: "",
      NoOfOpenSides: "",
      facing: "",
      AgeOfConstruction: "",
      furnishedStatus: "",
      currentStatus: "",
      transaction: "",
      FloorsAllowed: "",
      Amenities: [],
    },

    validationSchema: Yup.object({
      FloorNumber: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      TotalFloors: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      Washrooms: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      TotalFloors: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      NoOfOpenSides: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      AgeOfConstruction: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      FloorsAllowed: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      furnishedStatus: Yup.string().required("Required"),
      currentStatus: Yup.string().required("Required"),
      transaction: Yup.string().required("Required"),
      Amenitities: Yup.string(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      router.push("/post-property/price-details/priceDetailsSell");
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


  return (
    <PostPropertyLayout>

      <div
        className={` ${styles.property_boxShadow} ${styles.propertyFeature_border_radius}  col-lg-9 col-xl-8  col-xxl-7 col-md-12 pt-5 pb-4 px-lg-3  px-2`}
      >
        {/* <div className={`col-lg-6 col-md-12 py-5 px-3` }> */}
        <div className={`${styles.input_container}`}>
          <div className={`  mb-4`}>
            <h5
              className={`color_light_blue fontFam_poppins ${styles.font_medium} ${styles.font_24}`}
            >
              Property Features
            </h5>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className={`${styles.propertyFeature_padding_l_res}`}>
              <div className={`d-block d-flex `}>
                <div className="mb-1">
                  <InputFieldGenerator
                    title={"Floor Number"}
                    itemName={"floorsAllowed"}
                    inputValue={formik.values.floorsAllowed}
                    onChangeFn={formik.handleChange}
                    inputClassName={"w-100"}
                  />
                  <FormikErrorGenerator
                    formikError={formik.errors.floorsAllowed}
                    formikTouched={formik.touched.floorsAllowed}
                  />
                </div>



                <div className="mb-1">
                  <label
                    htmlFor="TotalFloors"
                    className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} fontFam_poppins`}
                  >
                    Total Floors
                  </label>
                  <div>
                    <input
                      type="text"
                      className={` ${styles.propertyFeature_width_75_to_100} mb-1 ps-2 pe-2  pt-2 pb-2 ${styles.propetyfeature_input}`}
                      id="TotalFloors"
                      placeholder="Ex : 7"
                      name="TotalFloors"
                      value={formik.values.TotalFloors}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className={`${styles.error_container}`}>
                    {formik.errors.TotalFloors &&
                      formik.touched.TotalFloors && (
                        <div className="d-flex align-items-center text-danger">
                          <i
                            style={{ fontSize: 12, marginRight: ".1rem" }}
                            className="ri-error-warning-line   "
                          ></i>
                          <span className={`fs_12 lh-base `}>
                            {formik.errors.TotalFloors}
                          </span>
                        </div>
                      )}
                  </div>
                </div>

                <div className="  me-0 me-lg-5  mb-1">
                  <label
                    htmlFor="FurnishedStatus"
                    className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} fontFam_poppins`}
                  >
                    Furnishing Status{" "}
                  </label>
                  <div
                    className={`mb-1`}
                    onClick={() => setoptionType("furnishingStatus")}
                  >
                    <SelectGenerator
                      option={furnishingOptions}
                      itemName={"furnishedStatus"}
                      formikValue={formik.values.furnishedStatus}
                      formik={formik}
                    />
                    <FormikErrorGenerator
                      formikError={formik.errors.furnishedStatus}
                      formikTouched={formik.touched.furnishedStatus} />
                  </div>
                </div>
              </div>

              <div
                className={`${styles.amenities_list_flex_res} gap-0 gap-lg-5 mb-2 mt-2`}
              >
                {" "}
                <div className="mb-1 ">
                  <label
                    htmlFor="Washrooms"
                    className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} fontFam_poppins`}
                  >
                    Washrooms
                  </label>
                  <div>
                    <input
                      type="text"
                      className={` ${styles.propertyFeature_width_75_to_100} mb-1 ps-2 pe-2  pt-2 pb-2 ${styles.propetyfeature_input}`}
                      id="Washrooms"
                      placeholder="Ex : 13"
                      name="Washrooms"
                      value={formik.values.Washrooms}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className={`${styles.error_container}`}>
                    {formik.errors.Washrooms && formik.touched.Washrooms && (
                      <div className="d-flex align-items-center text-danger">
                        <i
                          style={{ fontSize: 12, marginRight: ".1rem" }}
                          className="ri-error-warning-line   "
                        ></i>
                        <span className={`fs_12 lh-base `}>
                          {formik.errors.Washrooms}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-1 ">
                  <label
                    htmlFor="floorAllowed"
                    className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} fontFam_poppins`}
                  >
                    Floors Allowed for Construction
                  </label>
                  <div>
                    <input
                      type="text"
                      className={` mb-1 w-100 ps-2 pe-2  pt-2 pb-2 ${styles.propetyfeature_input}`}
                      id="floorAllowed"
                      placeholder="Ex : 13"
                      name="floorAllowed"
                      value={formik.values.floorAllowed}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className={`${styles.error_container}`}>
                    {formik.errors.floorAllowed &&
                      formik.touched.floorAllowed && (
                        <div className="d-flex align-items-center text-danger">
                          <i
                            style={{ fontSize: 12, marginRight: ".1rem" }}
                            className="ri-error-warning-line   "
                          ></i>
                          <span className={`fs_12 lh-base `}>
                            {formik.errors.floorAllowed}
                          </span>
                        </div>
                      )}
                  </div>
                </div>
              </div>

              <div className={`${styles.amenities_list_flex_res}  mt-2`}>
                <div
                  className={`me-5 ${styles.propertyFeature_width_50_to_100} mb-1`}
                >
                  <label
                    htmlFor="Status"
                    className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} fontFam_poppins`}
                  >
                    Status{" "}
                  </label>
                  <div
                    className={`mb-1`}
                    onClick={() => setoptionType("status")}
                  >
                    <SelectGenerator
                      option={statusOptions}
                      itemName={"currentStatus"}
                      formikValue={formik.values.currentStatus}
                      formik={formik}

                    />
                    <FormikErrorGenerator
                      formikError={formik.errors.currentStatus}
                      formikTouched={formik.touched.currentStatus} />

                  </div>
                </div>
                <div
                  className={`mb-1 ${styles.propertyFeature_width_75_to_100}`}
                >
                  <label
                    htmlFor="Transaction"
                    className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} fontFam_poppins`}
                  >
                    Transaction{" "}
                  </label>
                  <div
                    className={`mb-1 ${styles.propertyFeature_width_50_to_100}`}
                    onClick={() => setoptionType("transaction")}
                  >
                    <SelectGenerator
                      option={transactionOptions}
                      itemName={"transaction"}
                      formikValue={formik.values.transaction}
                      formik={formik}
                    />
                    <FormikErrorGenerator
                      formikError={formik.errors.transaction}
                      formikTouched={formik.touched.transaction} />

                  </div>

                </div>{" "}
              </div>


              <div className={`content-fourth-line mt-4 mt-lg-3 `}>

                <h5
                  className={`${styles.font_20} ${styles.font_regular} fontFam_poppins`}
                >
                  Suitable for
                </h5>
                <div className={`d-block d-lg-flex`}>
                  <AmnetiesGenerator
                    startIndex={0}
                    endIndex={1}
                    list={CommercialIndustrialShed}
                    formik={formik}
                  />
                </div>     <div className={`d-block d-lg-flex`}>
                  <AmnetiesGenerator
                    list={CommercialIndustrialShed}
                    startIndex={2}
                    endIndex={3}
                    formik={formik}
                  />
                </div>      <div className={`d-block d-lg-flex`}>
                  <AmnetiesGenerator
                    list={CommercialIndustrialShed}
                    formik={formik}
                    startIndex={4}
                    endIndex={5}
                  />
                </div>

              </div>

              <PostPropertySubmitButton />
            </div>
          </form>
        </div>
      </div>
    </PostPropertyLayout >
  );
};

export default IndustrialShedPropertyFeatures;
