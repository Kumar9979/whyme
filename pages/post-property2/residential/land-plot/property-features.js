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
  ResidentiallandList,
} from "../../../../components/postproperty/formData/amnetiesListGenerator";
import RadioButtonGenerator from "../../../../components/postproperty/formData/radioButtonGenerator";

const propertyFeatures = () => {
  const router = useRouter();
  const numRegex = /^[0-9]+$/;

  const formik = useFormik({
    // enableReinitialize: true,
    initialValues: {
      
      floorAllowed: "",
      NoofOpenSides: "",
      Cornersite: "",
      Gatedcolony:"",
      BoundaryWallmade:"",
      AnyconstructionDone:"",
      
      Amenities: [],
    },

    validationSchema: Yup.object({
     
        NoofOpenSides: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),

      floorsAllowed: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),

      // furnishedStatus: Yup.string().required("Required"),
      // status: Yup.string().required("Required"),
      // transaction: Yup.string().required("Required"),

      Cornersite: Yup.string().required("Required"),
      Gatedcolony: Yup.string().required("Required"),
      BoundaryWallmade: Yup.string().required("Required"),
      AnyconstructionDone: Yup.string().required("Required"),
      Amenitities: Yup.string(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      router.push(
        "/post-property/commercial/industrial-buildings/property-price-rent"
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
               
                <div
                  className={`${styles.propertyFeature_width_25_to_100} mb-1`}
                >
                  <InputFieldGenerator
                    title={"Floors allowed for construction"}
                    itemName={"Floorsallowedforconstruction"}
                    inputValue={formik.values.floorAllowed}
                    onChangeFn={formik.handleChange}
                    inputClassName={"w-90"}
                  />
                  <FormikErrorGenerator
                    formikError={formik.errors.floorAllowed}
                    formikTouched={formik.touched.floorAllowed}
                  />
                </div>
                <div
                  className={`${styles.propertyFeature_width_25_to_100} mb-1 ps-lg-5 ms-lg-5`}
                >
                  <InputFieldGenerator
                    title={"No. of Open Sides"}
                    itemName={"NoofOpenSides"}
                    inputValue={formik.values.NoofOpenSides}
                    onChangeFn={formik.handleChange}
                    inputClassName={"w-60"}
                  />
                  <FormikErrorGenerator
                    formikError={formik.errors.NoofOpenSides}
                    formikTouched={formik.touched.NoofOpenSides}
                  />
                </div>
               
              </div>
              <div className={`d-block d-lg-flex gap-0 gap-lg-5  mb-2 mt-2`}>
            
                <div className={` `}>
                  <RadioButtonGenerator
                    formik={formik}
                    title={"Any construction Done"}
                    containerClassName="mt-1"
                    itemName={"AnyconstructionDone"}
                  />
                </div>
                <div className={` `}>
                  <RadioButtonGenerator
                    formik={formik}
                    title={"Boundary Wall made"}
                    containerClassName="mt-1"
                    itemName={"BoundaryWallmade"}
                  />
                </div>
              </div>
              <div className={`d-block d-lg-flex gap-0 gap-lg-5  mt-4`}>
                <div className={` `}>
                  <RadioButtonGenerator
                    formik={formik}
                    title={"Gated colony"}
                    containerClassName="mt-1"
                    itemName={"Gatedcolony"}
                  />
                </div>
                <div className={` `}>
                  <RadioButtonGenerator
                    formik={formik}
                    title={"Corner site"}
                    containerClassName="mt-1"
                    itemName={"Cornersite"}
                  />
                </div>


               
                
              </div>
              <div className={`content-fourth-name mb-1 mt-5`}>
                <h5 className={`fs_16 fw_500 fontFam_poppins mb-1`}>
                Amenities
                </h5>
              </div>
              <div className={`d-block d-lg-flex`}>
                <AmnetiesGenerator
                  list={ResidentiallandList}
                  startIndex={0}
                  endIndex={1}
                  formik={formik}
                />
              </div>
              <div className={`d-block d-lg-flex`}>
                <AmnetiesGenerator
                  list={ResidentiallandList}
                  startIndex={2}
                  endIndex={4}
                  formik={formik}
                />
              </div>
              
              <PostPropertySubmitButton marginEnd={"me-5"} paddingTop="0rem" />
            </div>
          </form>
        </div>
      </div>
    </PostPropertyLayout>
  );
};

export default propertyFeatures;
