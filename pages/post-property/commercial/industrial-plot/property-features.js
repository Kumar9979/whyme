import React from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import styles from "../../../../styles/postProperty/propertyfeatures.module.css";
import PostPropertySubmitButton from "../../../../components/postproperty/components/submitButton";
import {
  AmnetiesGenerator,
  IndustrialPlotSuitableList,
} from "../../../../components/postproperty/formData/amnetiesListGenerator";
import { FormikErrorGenerator } from "../../../../components/postproperty/formData/formikErrorGenerator";
import RadioButtonGenerator from "../../../../components/postproperty/formData/radioButtonGenerator";
import PostPropertyLayout from "../../../../components/postproperty/components/propertyLayout";
import InputFieldGenerator from "../../../../components/postproperty/formData/inputFieldGenerator";

const IndustrialPlotPropertyFeatures = () => {
  const router = useRouter();
  const numRegex = /^[0-9]+$/;
  const formik = useFormik({
    // enableReinitialize: true,
    initialValues: {
      floorsAllowed: "",
      NoOfOpenSides: "",
      constructionDone: "",
      boundaryWall:"yes",
      cornerSite:"yes",
      reraReg:"yes",
      Amenities: [],
    },

    validationSchema: Yup.object({
      constructionDone: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      NoOfOpenSides: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      floorsAllowed: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
        boundaryWall:Yup.string()      
        .required("Required"),
        cornerSite:Yup.string()      
        .required("Required"),
      reraReg:Yup.string()      
      .required("Required"),
      Amenitities: Yup.string(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      router.push(
        "/post-property/commercial/industrial-plot/property-price-sell"
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
            <h5 className={`color_light_blue  fontFam_poppins fw_500 fs_20`}>
              Property Features
            </h5>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className={` mt-5 `}>
              <div className={`d-block d-lg-flex  `}>
                <div className="me-0 me-lg-5 ">
                  <InputFieldGenerator
                    inputClassName="w-100"
                    title={"Floors Allowed for Construction"}
                    itemName={"floorsAllowed"}
                    inputValue={formik.values.floorsAllowed}
                    onChangeFn={formik.handleChange}
                  />
                  <FormikErrorGenerator
                    formikError={formik.errors.floorsAllowed}
                    formikTouched={formik.touched.floorsAllowed}
                  />
                </div>
                <div className="mb-1">
                  <InputFieldGenerator
                    inputClassName="w-100"
                    title={"Any construction Done"}
                    itemName={"constructionDone"}
                    inputValue={formik.values.constructionDone}
                    onChangeFn={formik.handleChange}
                  />
                  <FormikErrorGenerator
                    formikError={formik.errors.constructionDone}
                    formikTouched={formik.touched.constructionDone}
                  />
                </div>
              </div>
              <div className={`d-block d-lg-flex gap-0 gap-lg-3 mb-2 mt-2`}>
                {" "}
                <div className="mb-1">
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
                <RadioButtonGenerator
                  formik={formik}
                  title={"Boundary Wall made"}
                  itemName={"boundaryWall"}
                  containerClassName={"mt-1"}
                />
                <RadioButtonGenerator
                  formik={formik}
                  title={"Corner Site"}
                  itemName={"cornerSite"}
                  containerClassName={"mt-1"}
                />
              </div>
              <div className={`d-block d-lg-flex  mt-2`}>
                <RadioButtonGenerator
                  formik={formik}
                  title={"RERA Registration Status"}
                  itemName={"reraReg"}
                  containerClassName={"mt-1"}
                />
              </div>
              <div className={` mt-4 mt-lg-4 `}>
                <div className={` mb-2`}>
                  <h6 className={`fs_18 fw_400  fontFam_poppins`}>
                    Suitable for
                  </h6>
                </div>
                <div className={`d-block d-lg-flex`}>
                  <AmnetiesGenerator
                    list={IndustrialPlotSuitableList}
                    startIndex={0}
                    endIndex={1}
                    formik={formik}
                  />
                </div>
                <div className={`d-block d-lg-flex`}>
                  <AmnetiesGenerator
                    list={IndustrialPlotSuitableList}
                    startIndex={2}
                    endIndex={4}
                    formik={formik}
                  />
                </div>
              </div>
              <PostPropertySubmitButton paddingTop="2rem" />
            </div>
          </form>
        </div>
      </div>
    </PostPropertyLayout>
  );
};

export default IndustrialPlotPropertyFeatures;
