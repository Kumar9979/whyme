import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../../../styles/postProperty/propertyfeatures.module.css";
import { useRouter } from "next/router";
import PostPropertyLayout from "../../../../components/postproperty/components/propertyLayout";
import InputFieldGenerator from "../../../../components/postproperty/formData/inputFieldGenerator";
import { FormikErrorGenerator } from "../../../../components/postproperty/formData/formikErrorGenerator";
import RadioButtonGenerator from "../../../../components/postproperty/formData/radioButtonGenerator";
import PostPropertySubmitButton from "../../../../components/postproperty/components/submitButton";
import {
  AmnetiesGenerator,
  CommercialPlotSuitableList,
} from "../../../../components/postproperty/formData/amnetiesListGenerator";

const CommercialPlotPropertyFeatures = () => {
  const router = useRouter();
  const numRegex = /^[0-9]+$/;

  const formik = useFormik({
    initialValues: {
      floorsAllowed: "",
      NoOfOpenSides: "",
      roadFaceWidth: "",
      boundaryWall: "yes",
      reraReg: "yes",
      Amenities: [],
    },

    validationSchema: Yup.object({
      roadFaceWidth: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      NoOfOpenSides: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      floorsAllowed: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      Amenitities: Yup.string(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      router.push("/post-property/price-details/priceDetailsSell");
    },
  });

  console.log(formik.values);

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
            <div className={`d-block d-lg-flex  `}>
              <div className={`mb-1`}>
                <InputFieldGenerator
                  title={"No. of open Sides"}
                  itemName={"NoOfOpenSides"}
                  inputValue={formik.values.NoOfOpenSides}
                  onChangeFn={formik.handleChange}
                />
                <FormikErrorGenerator
                  formikError={formik.errors.NoOfOpenSides}
                  formikTouched={formik.touched.NoOfOpenSides}
                />
              </div>

              <div className={`mb-1`}>
                <InputFieldGenerator
                  title={"Road facing plot width"}
                  itemName={"roadFaceWidth"}
                  inputValue={formik.values.roadFaceWidth}
                  onChangeFn={formik.handleChange}
                  inputClassName={"w-100"}
                />
                <FormikErrorGenerator
                  formikError={formik.errors.roadFaceWidth}
                  formikTouched={formik.touched.roadFaceWidth}
                />
              </div>
            </div>

            <div className={`d-block d-lg-flex gap-0 gap-lg-5 mb-2 mt-2`}>
              <div className={`mb-1`}>
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
              <RadioButtonGenerator
                formik={formik}
                title={"Boundary Wall"}
                itemName={"boundaryWall"}
                containerClassName="mb-4 mt-1 mb-lg-0"
              />
            </div>
            <RadioButtonGenerator
              formik={formik}
              title={"RERA Registration Status"}
              itemName={"reraReg"}
              containerClassName="mb-4 mt-1 mb-lg-0"
            />
            <div className={` mt-4 mt-lg-4 pt-0 pt-lg-1 `}>
              <h5 className={`fs_18 fw_400 fontFam_poppins`}>Suitable for</h5>
            </div>
            <div className={`d-block d-lg-flex`}>
              <AmnetiesGenerator
                list={CommercialPlotSuitableList}
                formik={formik}
              />
            </div>

            <PostPropertySubmitButton marginEnd={"me-5 "} />
          </form>
        </div>
      </div>
    </PostPropertyLayout>
  );
};

export default CommercialPlotPropertyFeatures;
