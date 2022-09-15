import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../../../styles/postProperty/propertyfeatures.module.css";
import { useRouter } from "next/router";
import PostPropertyLayout from "../../../../components/postproperty/components/propertyLayout";
import { FormikErrorGenerator } from "../../../../components/postproperty/formData/formikErrorGenerator";
import PostPropertySubmitButton from "../../../../components/postproperty/components/submitButton";
import InputFieldGenerator from "../../../../components/postproperty/formData/inputFieldGenerator";
import { useState } from "react";
import RadioButtonGenerator from "../../../../components/postproperty/formData/radioButtonGenerator";

const IndustrialShedPropertyFeatures = () => {
  const router = useRouter();
  const numRegex = /^[0-9]+$/;
  const [optionType, setoptionType] = useState("adf");
  const formik = useFormik({
    initialValues: {
      noOfSides: "",
      roadFace: "",
      boundaryWall: "",
    },

    validationSchema: Yup.object({
      noOfSides: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      roadFace: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      boundaryWall: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      router.push("/post-property2/agriculture/land/property-price-rent");
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
              <div className={`d-block d-lg-flex gap-5 `}>
                <div
                  className={`${styles.propertyFeature_width_25_to_100} mb-1`}
                >
                  <InputFieldGenerator
                    title={"No. of open Sides"}
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

                <div
                  className={`mb-1 ${styles.propertyFeature_width_50_to_100}`}
                >
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

              <div className={`d-block d-lg-flex gap-0 gap-lg-5 pb-5 mt-2`}>
                <RadioButtonGenerator
                  formik={formik}
                  title={"Boundary Wall"}
                  itemName={"boundaryWall"}
                  containerClassName=" mt-1 "
                />
              </div>

              <PostPropertySubmitButton paddingTop={"11rem"} />
            </div>
          </form>
        </div>
      </div>
    </PostPropertyLayout>
  );
};

export default IndustrialShedPropertyFeatures;
