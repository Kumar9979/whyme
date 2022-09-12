import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../../../styles/postProperty/pricedetails.module.css";
import { useRouter } from "next/router";
import PostPropertySubmitButton from "../../../../components/postproperty/components/submitButton";
import PostPropertyLayout from "../../../../components/postproperty/components/propertyLayout";
import PriceInputGenerator from "../../../../components/postproperty/formData/priceInputGenerator";
import { FormikErrorGenerator } from "../../../../components/postproperty/formData/formikErrorGenerator";
import RadioButtonGenerator from "../../../../components/postproperty/formData/radioButtonGenerator";

const IndustrialPlotPriceDetailsSell = () => {
  const numRegex = /^[0-9]+$/;
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      plotArea: "",
      plotLength: "",
      plotWidth: "",
      depositPrice: "",
      rentAmount: "",
      cornerPlot:"yes"
    },

    validationSchema: Yup.object({
      plotArea: Yup.number()
        .typeError("invalid value")
        .moreThan(Yup.ref("plotLength"), "Must be more then plotLength")
        .required("Required"),
      plotLength: Yup.string()
        .matches(numRegex, "invalid value")
        .required("Required"),
      plotWidth: Yup.string()
        .matches(numRegex, "invalid value")
        .required("Required"),
      depositPrice: Yup.string()
        .matches(numRegex, "invalid value")
        .required("Required"),
      rentAmount: Yup.string()
        .matches(numRegex, "invalid value")
        .required("Required"),
        cornerPlot: Yup.string()
        .matches(numRegex, "invalid value")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      router.push("/post-property/propertyUpload/propertyUpload");
    },
  });

  return (
    <PostPropertyLayout page="priceDetails">
      <div
        className={`  ${styles.property_boxShadow} ${styles.propertyFeature_border_radius}  d-flex justify-content-center align-items-center col-12 col-lg-8 col-xxl-6 pb-4 pt-5`}
      >
        <div className={`${styles.input_container} `}>
          <div className={`mb-4`}>
            <h5
              className={`mx-3 mx-md-0 color_light_blue fontFam_poppins ${styles.font_medium} ${styles.font_24}`}
            >
              Price Details
            </h5>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className={`mx-3 mt-2 mt-sm-5 mx-md-0`}>
              <div className={`row  mb-4`}>
                <div className={`col-lg-6 col-sm-12 mb-4 mb-lg-0 `}>
                  <PriceInputGenerator
                    price={false}
                    title={"Plot Area"}
                    formikValue={formik.values.plotArea}
                    formik={formik}
                    itemName={"plotArea"}
                    placeholder={"Enter plot area"}
                  />
                  <FormikErrorGenerator
                    formikError={formik.errors.plotArea}
                    formikTouched={formik.touched.plotArea}
                  />
                </div>
                <div className={`col-lg-6 col-sm-12`}>
                  <PriceInputGenerator
                    price={false}
                    title={"Plot Length"}
                    formikValue={formik.values.plotLength}
                    formik={formik}
                    itemName={"plotLength"}
                    placeholder={"Enter plot length"}
                  />
                  <FormikErrorGenerator
                    formikError={formik.errors.plotLength}
                    formikTouched={formik.touched.plotLength}
                  />
                </div>
              </div>
              <div className={`row  mb-3`}>
                <div className={`col-lg-6 col-sm-12 mb-2 mb-lg-0 `}>
                  <PriceInputGenerator
                    price={false}
                    title={"Plot Width"}
                    formikValue={formik.values.plotWidth}
                    formik={formik}
                    itemName={"plotWidth"}
                    placeholder={"Enter plot width"}
                  />
                  <FormikErrorGenerator
                    formikError={formik.errors.plotWidth}
                    formikTouched={formik.touched.plotWidth}
                  />
                </div>
                <div className={`col-lg-6 col-sm-12 col mb-3`}>
                  <PriceInputGenerator
                    title={"Rent Amount"}
                    formikValue={formik.values.rentAmount}
                    formik={formik}
                    itemName={"rentAmount"}
                    placeholder={"Enter rent amount"}
                  />
                  <FormikErrorGenerator
                    formikError={formik.errors.rentAmount}
                    formikTouched={formik.touched.rentAmount}
                  />
                </div>
              </div>
              <div className={`row  mb-4`}>
                <div className={`col-lg-6 col-sm-12 mb-4 mb-lg-0 `}>
                  <RadioButtonGenerator
                    title={"Corner Plot"}
                    itemName="cornerPlot"
                    formik={formik}
                  />
                </div>
              </div>
              <div className={`row`}>
                <div className={`col-12 mb-3`}>
                  <PriceInputGenerator
                    title={"Security Deposit/Advance"}
                    formikValue={formik.values.depositPrice}
                    formik={formik}
                    itemName={"depositPrice"}
                    placeholder={"Enter security deposit/advance price"}
                  />
                  <FormikErrorGenerator
                    formikError={formik.errors.depositPrice}
                    formikTouched={formik.touched.depositPrice}
                  />
                </div>
              </div>
            </div>

            <PostPropertySubmitButton paddingTop="0rem" />
          </form>
        </div>
      </div>
    </PostPropertyLayout>
  );
};

export default IndustrialPlotPriceDetailsSell;
