import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../../../styles/postProperty/pricedetails.module.css";
import { useRouter } from "next/router";
import PostPropertySubmitButton from "../../../../components/postproperty/components/submitButton";
import PostPropertyLayout from "../../../../components/postproperty/components/propertyLayout";
import PriceInputGenerator from "../../../../components/postproperty/formData/priceInputGenerator";
import { FormikErrorGenerator } from "../../../../components/postproperty/formData/formikErrorGenerator";

const VillaPriceDetailsSell = () => {
    const numRegex = /^[0-9]+$/;
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            superArea: "",
            carpetArea: "",
          
          
            expectedPrice: "",
        },

        validationSchema: Yup.object({
            superArea: Yup.number()
                .typeError("invalid value")
                .moreThan(Yup.ref("CarpetArea"), "Must be more then carpet area")
                .required("Required"),
            carpetArea: Yup.string()
                .matches(numRegex, "invalid value")
                .required("Required"),
  
            expectedPrice: Yup.string()
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
                        <div className={`mx-3 mx-md-0`}>
                            <div className={`row  mb-4`}>
                                <div className={`col-lg-6 col-sm-12 mb-4 mb-lg-0 `}>
                                    <PriceInputGenerator
                                        price={false}
                                        title={" Built-up Area"}
                                        formikValue={formik.values.carpetArea}
                                        formik={formik}
                                        itemName={"carpetArea"}
                                        placeholder={"Built-up Area"}
                                    />
                                    <FormikErrorGenerator
                                        formikError={formik.errors.carpetArea} formikTouched={formik.touched.carpetArea}
                                    />
                                </div>
                                <div className={`col-lg-6 col-sm-12`}>
                                    <PriceInputGenerator
                                        price={false}
                                        title={"Carpet Area"}
                                        formikValue={formik.values.carpetArea}
                                        formik={formik}
                                        itemName={"carpetArea"}
                                        placeholder={"Enter carpet area"}
                                    />
                                    <FormikErrorGenerator
                                        formikError={formik.errors.carpetArea} formikTouched={formik.touched.carpetArea}
                                    />

                                </div>
                            </div>
                       
                            <div className={"mb-4"}>
                                <PriceInputGenerator
                                    title={"Expected Price"}
                                    formikValue={formik.values.expectedPrice}
                                    formik={formik}
                                    itemName={"expectedPrice"}
                                />
                                <FormikErrorGenerator
                                    formikError={formik.errors.expectedPrice} formikTouched={formik.touched.expectedPrice}
                                />
                            </div>
                        </div>

                        <PostPropertySubmitButton paddingTop="12rem" />
                    </form>
                </div>
            </div>


        </PostPropertyLayout>
    );
};

export default VillaPriceDetailsSell;
