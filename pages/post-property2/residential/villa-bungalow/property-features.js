import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../../../styles/postProperty/propertyfeatures.module.css";
import { useRouter } from "next/router";
import PostPropertyLayout from "../../../../components/postproperty/components/propertyLayout";
import InputFieldGenerator from "../../../../components/postproperty/formData/inputFieldGenerator";
import { FormikErrorGenerator } from "../../../../components/postproperty/formData/formikErrorGenerator";
// import RadioButtonGenerator from "../../../../components/postproperty/formData/radioButtonGenerator";
import PostPropertySubmitButton from "../../../../components/postproperty/components/submitButton";
import {
  AmnetiesGenerator,
  ResidentialvillaList,
} from "../../../../components/postproperty/formData/amnetiesListGenerator";
import SelectGenerator, {
  furnishingOptions,
  statusOptions,
  facingOptions,
  transactionOptions,
} from "../../../../components/postproperty/formData/selectGenerator";

const  VillaPropertyFeatures = () => {
  const router = useRouter();
  const numRegex = /^[0-9]+$/;

  const formik = useFormik({
    initialValues: {
      Totalfloors: "",
      NoofOpenSides: "",
      Balconies: "",
      Bedroom: "",
      Bathroom: "",
      Ageofconstruction: "",
      transaction: "",
      furnishedStatus: "",
      status: "",
      facing: "",
      Amenities: [],
    },

    validationSchema: Yup.object({
      Totalfloors: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      NoofOpenSides: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      Balconies: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      Bedroom: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      Bathroom: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      Ageofconstruction: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      furnishedStatus: Yup.string().required("Required"),
      status: Yup.string().required("Required"),
      transaction: Yup.string().required("Required"),
      facing: Yup.string().required("Required"),

      Amenitities: Yup.string(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      router.push(
        "/post-property2/residential/villa-bungalow/property-price-rent"
      );
    },
  });

  console.log(formik.values);

  return (
    <PostPropertyLayout>
      <div
        className={` ${styles.property_boxShadow} ${styles.propertyFeature_border_radius}  col-lg-9 col-xl-8  col-xxl-7 col-md-12 pt-5 pb-4 px-lg-3  px-2`}
      >
        <div className={`${styles.input_container}`}>
          <div className={`  mb-4`}>
            <h5 className={`color_light_blue fontFam_poppins  fs_20`}>
              Property Features
            </h5>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className={`d-block d-lg-flex  `}>
              <div className={`mb-1`}>
                <InputFieldGenerator
                  title={"Bedroom"}
                  itemName={"Bedroom"}
                  inputValue={formik.values.Bedroom}
                  onChangeFn={formik.handleChange}
                  inputClassName={"w-50"}
                />
                <FormikErrorGenerator
                  formikError={formik.errors.Bedroom}
                  formikTouched={formik.touched.Bedroom}
                />
              </div>
              <div className={`mb-1`}>
                <InputFieldGenerator
                  title={"Bathroom"}
                  itemName={"Bathroom"}
                  inputValue={formik.values.Bathroom}
                  onChangeFn={formik.handleChange}
                  inputClassName={"w-50"}
                />
                <FormikErrorGenerator
                  formikError={formik.errors.Bathroom}
                  formikTouched={formik.touched.Bathroom}
                />
              </div>
              <div className={`mb-1`}>
                <InputFieldGenerator
                  title={"Balconies"}
                  itemName={"Balconies"}
                  inputValue={formik.values.Balconies}
                  onChangeFn={formik.handleChange}
                  inputClassName={"w-50"}
                />
                <FormikErrorGenerator
                  formikError={formik.errors.Balconies}
                  formikTouched={formik.touched.Balconies}
                />
              </div>
              <div className={`mb-1`}>
                <InputFieldGenerator
                  title={"Total Floors"}
                  itemName={"Totalfloors"}
                  inputValue={formik.values.Totalfloors}
                  onChangeFn={formik.handleChange}
                  inputClassName={"w-50"}
                />
                <FormikErrorGenerator
                  formikError={formik.errors.Totalfloors}
                  formikTouched={formik.touched.Totalfloors}
                />
              </div>
            </div>
            <div className={`d-block d-lg-flex gap-0 gap-lg-4 mb-2 mt-2`}>
              <div className={`mb-1`}>
                <InputFieldGenerator
                  title={"No. of Open Sides"}
                  itemName={"NoofOpenSides"}
                  inputValue={formik.values.NoofOpenSides}
                  onChangeFn={formik.handleChange}
                  inputClassName={"w-75"}
                />
                <FormikErrorGenerator
                  formikError={formik.errors.NoofOpenSides}
                  formikTouched={formik.touched.NoofOpenSides}
                />
              </div>

              <div className={` me-0  mb-1`}>
                <label
                  htmlFor="FurnishedStatus"
                  className={`form-label text-nowrap fs_16 fw_500 fontFam_poppins`}
                >
                  Facing
                </label>
                <div className={`w-100`}>
                  <SelectGenerator
                    option={facingOptions}
                    itemName={"facing"}
                    formikValue={formik.values.facing}
                    formik={formik}
                  />
                  <FormikErrorGenerator
                    formikError={formik.errors.facing}
                    formikTouched={formik.touched.facing}
                  />
                </div>
              </div>
              <div className={`mb-1`}>
                <InputFieldGenerator
                  title={"Age of construction"}
                  itemName={"Ageofconstruction"}
                  inputValue={formik.values.Ageofconstruction}
                  onChangeFn={formik.handleChange}
                  inputClassName={"w-75"}
                />
                <FormikErrorGenerator
                  formikError={formik.errors.Ageofconstruction}
                  formikTouched={formik.touched.Ageofconstruction}
                />
              </div>
            </div>
            <div className={`d-block d-lg-flex gap-0 gap-lg-5  mt-2`}>
              <div className={` me-0  mb-1`}>
                <label
                  htmlFor="FurnishedStatus"
                  className={`form-label text-nowrap fs_16 fw_500 fontFam_poppins`}
                >
                  Furnishing Status
                </label>
                <div className={``}>
                  <SelectGenerator
                    option={furnishingOptions}
                    itemName={"furnishedStatus"}
                    formikValue={formik.values.furnishedStatus}
                    formik={formik}
                  />
                  <FormikErrorGenerator
                    formikError={formik.errors.furnishedStatus}
                    formikTouched={formik.touched.furnishedStatus}
                  />
                </div>
              </div>

              <div
                className={` ${styles.propertyFeature_width_35_to_100} me-0  mb-1`}
              >
                <label
                  htmlFor="status"
                  className={`form-label text-nowrap fs_16 fw_500 fontFam_poppins`}
                >
                  Status
                </label>
                <div className={`w-120`}>
                  <SelectGenerator
                    option={statusOptions}
                    itemName={"status"}
                    formikValue={formik.values.status}
                    formik={formik}
                    className={`w-120`}
                  />
                  <FormikErrorGenerator
                    formikError={formik.errors.status}
                    formikTouched={formik.touched.status}
                  />
                </div>
              </div>
              <div className={` me-0  ms-0 ms-lg-2 mb-1`}>
                <label
                  htmlFor="transaction"
                  className={`form-label text-nowrap fs_16 fw_500 fontFam_poppins`}
                >
                  Transaction{" "}
                </label>
                <div className={``}>
                  <SelectGenerator
                    option={transactionOptions}
                    itemName={"transaction"}
                    formikValue={formik.values.transaction}
                    formik={formik}
                  />
                  <FormikErrorGenerator
                    formikError={formik.errors.transaction}
                    formikTouched={formik.touched.transaction}
                  />
                </div>
              </div>
            </div>
            <div className={` mt-3 mt-lg-3 pt-0 pt-lg-1 `}>
              <h5 className={`fs_16 fw_500 fontFam_poppins`}>Amenities</h5>
            </div>
            <div className={`d-block d-lg-flex`}>
              <AmnetiesGenerator
                list={ResidentialvillaList}
                startIndex={0}
                endIndex={2}
                formik={formik}
              />
            </div>{" "}
            <div className={`d-block d-lg-flex`}>
              <AmnetiesGenerator
                list={ResidentialvillaList}
                startIndex={3}
                endIndex={5}
                formik={formik}
              />
            </div>
            <div className={`d-block d-lg-flex`}>
              <AmnetiesGenerator
                list={ResidentialvillaList}
                startIndex={6}
                endIndex={9}
                formik={formik}
              />
            </div>
            <div className={`d-block d-lg-flex`}>
              <AmnetiesGenerator
                list={ResidentialvillaList}
                startIndex={10}
                endIndex={13}
                formik={formik}
              />
            </div>
            <div className={`d-block d-lg-flex`}>
              <AmnetiesGenerator
                list={ResidentialvillaList}
                startIndex={14}
                endIndex={16}
                formik={formik}
              />
            </div>
            <PostPropertySubmitButton marginEnd={"me-1 "} paddingTop="0rem" />
          </form>
        </div>
      </div>
    </PostPropertyLayout>
  );
};

export default VillaPropertyFeatures;
