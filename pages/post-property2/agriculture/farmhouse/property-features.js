import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../../../styles/postProperty/propertyfeatures.module.css";
import { useRouter } from "next/router";
import PostPropertyLayout from "../../../../components/postproperty/components/propertyLayout";
import SelectGenerator, {
  furnishingOptions,
} from "../../../../components/postproperty/formData/selectGenerator";
import { FormikErrorGenerator } from "../../../../components/postproperty/formData/formikErrorGenerator";
import PostPropertySubmitButton from "../../../../components/postproperty/components/submitButton";
import InputFieldGenerator from "../../../../components/postproperty/formData/inputFieldGenerator";

const IndustrialShedPropertyFeatures = () => {
  const router = useRouter();
  const numRegex = /^[0-9]+$/;
  const [optionType, setoptionType] = useState("adf");

  const formik = useFormik({
    initialValues: {
      bedRooms: "",
      bathRooms: "",
      totalFloors: "",
      furnishedStatus: "",
      noOfSides: "",
      roadFace: "",
    },

    validationSchema: Yup.object({
      bedRooms: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      bathRooms: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      totalFloors: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      furnishedStatus: Yup.string().required("Required"),
      noOfSides: Yup.string().required("Required"),
      roadFace: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      router.push("/post-property2/agriculture/farmhouse/property-price-sell");
    },
  });

  return (
    <PostPropertyLayout>
      <div
        className={` ${styles.property_boxShadow} ${styles.propertyFeature_border_radius}  col-lg-9 col-xl-8  col-xxl-6 col-md-12 pt-5 pb-4 px-lg-3  px-2`}
      >
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
                <div
                  className={`${styles.propertyFeature_width_25_to_100} mb-1`}
                >
                  <InputFieldGenerator
                    title={"Bedroom"}
                    itemName={"bedRooms"}
                    inputValue={formik.values.bedRooms}
                    onChangeFn={formik.handleChange}
                    inputClassName={"w-100"}
                  />
                  <FormikErrorGenerator
                    formikError={formik.errors.bedRooms}
                    formikTouched={formik.touched.bedRooms}
                  />
                </div>

                <div
                  className={`mb-1 ${styles.propertyFeature_width_25_to_100}`}
                >
                  <InputFieldGenerator
                    title={"Bathroom"}
                    itemName={"bathRooms"}
                    inputValue={formik.values.bathRooms}
                    onChangeFn={formik.handleChange}
                    inputClassName={"w-100"}
                  />
                  <FormikErrorGenerator
                    formikError={formik.errors.bathRooms}
                    formikTouched={formik.touched.bathRooms}
                  />
                </div>
                <div
                  className={`mb-1 ${styles.propertyFeature_width_25_to_100}`}
                >
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
              </div>

              <div className={`d-block d-lg-flex gap-0 gap-lg-5 mb-3 mt-2`}>
                <div className="mb-1 ">
                  <InputFieldGenerator
                    title={"No. of Open Sides"}
                    itemName={"noOfSides"}
                    inputValue={formik.values.noOfSides}
                    onChangeFn={formik.handleChange}
                    inputClassName={"w-100"}
                  />
                  <FormikErrorGenerator
                    formikError={formik.errors.noOfSides}
                    formikTouched={formik.touched.noOfSides}
                  />
                </div>
                <div className={`mb-1 `}>
                  <InputFieldGenerator
                    title={"Road facing plot width"}
                    itemName={"roadFace"}
                    inputValue={formik.values.roadFace}
                    onChangeFn={formik.handleChange}
                    inputClassName={"w-100"}
                  />
                  <FormikErrorGenerator
                    formikError={formik.errors.roadFace}
                    formikTouched={formik.touched.roadFace}
                  />
                </div>
              </div>

              <div className={`d-block d-lg-flex gap-0  pb-5 mt-2`}>
                {" "}
                <div className={` me-0  mb-1`}>
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
                      formikTouched={formik.touched.furnishedStatus}
                    />
                  </div>
                </div>
              </div>
              <PostPropertySubmitButton />
            </div>
          </form>
        </div>
      </div>
    </PostPropertyLayout>
  );
};

export default IndustrialShedPropertyFeatures;
