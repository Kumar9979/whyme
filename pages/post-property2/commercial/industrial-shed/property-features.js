import React from "react";
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
  const router = useRouter();
  const numRegex = /^[0-9]+$/;

  const formik = useFormik({
    initialValues: {
      floorsNumber: "",
      washRooms: "",
      totalFloors: "",
      furnishedStatus: "",
      currentStatus: "",
      transaction: "",
      floorsAllowed: "",
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
      floorsAllowed: Yup.string()
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
            <div className={``}>
              <div className={`d-block d-lg-flex gap-4 `}>
                <div className={`${styles.propertyFeature_width_25_to_100} mb-1`}>
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



                <div className={`mb-1 ${styles.propertyFeature_width_25_to_100}`}>

                  <InputFieldGenerator
                    title={"Total Floors"}
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

                <div className={`${styles.propertyFeature_width_25_to_100} me-0  mb-1`}>
                  <label
                    htmlFor="FurnishedStatus"
                    className={`form-label text-nowrap fs_16 fw_500 fontFam_poppins`}
                  >
                    Furnishing Status{" "}
                  </label>
                  <div
                    className={``}
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
                className={`d-block d-lg-flex gap-0 gap-lg-5 mb-2 mt-2`}
              >
                {" "}
                <div className="mb-1 ">
                  <InputFieldGenerator
                    title={"Washrooms"}
                    itemName={"washRooms"}
                    inputValue={formik.values.washRooms}
                    onChangeFn={formik.handleChange}
                    inputClassName={"w-100"}
                  />
                  <FormikErrorGenerator
                    formikError={formik.errors.washRooms}
                    formikTouched={formik.touched.washRooms}
                  />

                </div>
                <div className="mb-1 ">
                  <InputFieldGenerator
                    title={"Floors Allowed for Construction"}
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
              </div>

              <div className={`d-block d-lg-flex gap-0  mt-2`}>
                <div
                  className={` ${styles.propertyFeature_width_50_to_100} mb-1`}
                >
                  <label
                    htmlFor="Status"
                    className={`form-label text-nowrap fs_16 fw_500 fontFam_poppins`}
                  >
                    Status{" "}
                  </label>
                  <div
                    className={`mb-1 ${styles.propertyFeature_width_75_to_100}`}
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
                  className={`mb-1 ${styles.propertyFeature_width_50_to_100}`}
                >
                  <label
                    htmlFor="Transaction"
                    className={`form-label text-nowrap fs_16 fw_500 fontFam_poppins`}
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


              <div className={` mt-4 mt-lg-3 `}>

                <h5
                  className={`fs_18 fw_500 fontFam_poppins`}
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
