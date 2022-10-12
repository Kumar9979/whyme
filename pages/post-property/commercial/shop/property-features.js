import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../../../styles/postProperty/propertyfeatures.module.css";
import { useRouter } from "next/router";
import PostPropertyLayout from "../../../../components/postproperty/components/propertyLayout";
import InputFieldGenerator from "../../../../components/postproperty/formData/inputFieldGenerator";
import { FormikErrorGenerator } from "../../../../components/postproperty/formData/formikErrorGenerator";
import SelectGenerator, {
  furnishingOptions,
  statusOptions,
  transactionOptions,
} from "../../../../components/postproperty/formData/selectGenerator";
import PostPropertySubmitButton from "../../../../components/postproperty/components/submitButton";
import {
  AmnetiesGenerator,
  ShopList,
} from "../../../../components/postproperty/formData/amnetiesListGenerator";
import RadioButtonGenerator from "../../../../components/postproperty/formData/radioButtonGenerator";

const propertyFeatures = () => {
  const router = useRouter();
  const numRegex = /^[0-9]+$/;

  const formik = useFormik({
    // enableReinitialize: true,
    initialValues: {
      floorsNumber: "",
      floorAllowed: "",
      totalFloors: "",
      washRooms: "",
      pantry: "",
      transaction: "",
      furnishedStatus: "",
      status: "",
      personalWashroom: "yes",
      pantry:"yes",
      Amenities: [],
    },

    validationSchema: Yup.object({
      floorsNumber: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      washRooms: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      totalFloors: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),

      
      furnishedStatus: Yup.string().required("Required"),
      status: Yup.string().required("Required"),
      transaction: Yup.string().required("Required"),
      personalWashroom: Yup.string().required("Required"),
      pantry:Yup.string().required("Required"),
      Amenitities: Yup.string(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      router.push(
        "/post-property/commercial/shop/property-price-rent"
      );
    },
  });

  console.log(formik.values);

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
            <div className={`mt-5`}>
              <div className={`d-block d-lg-flex gap-0 gap-lg-5 `}>
                {" "}
                <div
                  className={`${styles.propertyFeature_width_25_to_100} mb-1`}
                >
                  <InputFieldGenerator
                    title={"Floor Number"}
                    itemName={"floorsNumber"}
                    inputValue={formik.values.floorsNumber}
                    onChangeFn={formik.handleChange}
                    inputClassName={"w-100"}
                  />
                  <FormikErrorGenerator
                    formikError={formik.errors.floorsNumber}
                    formikTouched={formik.touched.floorsNumber}
                  />
                </div>
                <div
                  className={`${styles.propertyFeature_width_25_to_100} mb-1`}
                >
                  <InputFieldGenerator
                    title={"TotalFloors"}
                    itemName={"totalFloors"}
                    inputValue={formik.values.totalFloors}
                    onChangeFn={formik.handleChange}
                    inputClassName={"w-100"}
                  />
                  <FormikErrorGenerator
                    formikError={formik.errors.totalFloors}
                    formikTouched={formik.touched.totalFloors}
                  />
                </div>
              </div>
              <div className={`d-block d-lg-flex gap-0 gap-lg-5  mb-2 mt-2`}>
               
                <div
                  className={`${styles.propertyFeature_width_25_to_100} mb-1`}
                >
                  <InputFieldGenerator
                    title={"Washrooms"}
                    itemName={"washRooms"}
                    inputValue={formik.values.washRooms}
                    onChangeFn={formik.handleChange}
                  />
                  <FormikErrorGenerator
                    formikError={formik.errors.washRooms}
                    formikTouched={formik.touched.washRooms}
                  />
                </div>
                <div className={` `}>
                  <RadioButtonGenerator
                    formik={formik}
                    title={"Pantry/Cafeteria"}
                    containerClassName="mt-1"
                    itemName={"pantry"}
                  />
                </div>{" "}
                <div className={` `}>
                  <RadioButtonGenerator
                    formik={formik}
                    title={"Personal Washroom"}
                    containerClassName="mt-1"
                    itemName={"personalWashroom"}
                  />
                </div>
              </div>
              <div className={`d-block d-lg-flex gap-0 gap-lg-3  mt-2`}>
                <div className={` me-0  mb-1`}>
                  <label
                    htmlFor="FurnishedStatus"
                    className={`form-label text-nowrap fs_16 fw_500 fontFam_poppins`}
                  >
                    Furnishing Status{" "}
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
                    Status{" "}
                  </label>
                  <div className={`w-100`}>
                    <SelectGenerator
                      option={statusOptions}
                      itemName={"status"}
                      formikValue={formik.values.status}
                      formik={formik}
                    />
                    <FormikErrorGenerator
                      formikError={formik.errors.status}
                      formikTouched={formik.touched.status}
                    />
                  </div>
                </div>
                <div className={` me-0  ms-0 ms-lg-3 mb-1`}>
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
              <div className={`content-fourth-name mb-1 mt-2`}>
                <h5 className={`fs_16 fw_400 fontFam_poppins mb-1`}>
                  Suitable for
                </h5>
              </div>
              <div className={`d-block d-lg-flex`}>
                <AmnetiesGenerator
                  list={ShopList}
                  startIndex={0}
                  endIndex={2}
                  formik={formik}
                />
              </div>{" "}
              <div className={`d-block d-lg-flex`}>
                <AmnetiesGenerator
                  list={ShopList}
                  startIndex={3}
                  endIndex={5}
                  formik={formik}
                />
              </div>
              <div className={`d-block d-lg-flex`}>
                <AmnetiesGenerator
                  list={ShopList}
                  startIndex={6}
                  endIndex={8}
                  formik={formik}
                />
              </div>{" "}
              <div className={`d-block d-lg-flex`}>
                <AmnetiesGenerator
                  list={ShopList}
                  startIndex={9}
                  endIndex={11}
                  formik={formik}
                />
              </div>{" "}
              <div className={`d-block d-lg-flex`}>
                <AmnetiesGenerator
                  list={ShopList}
                  startIndex={12}
                  endIndex={14}
                  formik={formik}
                />
              </div>
              <PostPropertySubmitButton paddingTop="0rem" />
            </div>
          </form>
        </div>
      </div>
    </PostPropertyLayout>
  );
};

export default propertyFeatures;
