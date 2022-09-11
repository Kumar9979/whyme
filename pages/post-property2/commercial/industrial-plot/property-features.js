import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../../../styles/postProperty/propertyfeatures.module.css";
import StepperNew from "../../../stepper/stepper";
import PostPropertySubmitButton from "../../../../components/postproperty/components/submitButton";
import { AmnetiesGenerator, IndustrialPlotSuitableList } from "../../../../components/postproperty/formData/amnetiesList";
import { FormikErrorGenerator } from "../../../../components/postproperty/formData/formikErrorGenerator";
import RadioButtonGenerator from "../../../../components/postproperty/formData/radioButtonGenerator";

const IndustrialPlotPropertyFeatures = () => {
    const numRegex = /^[0-9]+$/;
    const formik = useFormik({
        // enableReinitialize: true,
        initialValues: {
            floorsAllowed: "",
            NoOfOpenSides: "",
            constructionDone: "",
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
            Amenitities: Yup.string(),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            router.push("/post-property/price-details/priceDetailsSell");
        },
    });
    console.log(formik.values);

    return (

        <div className={`${styles.whole_container} container mb-5 mb-lg-5`}>
            <div className={`row justify-content-center mx-0 mx-lg-2 mx-lg-0`}>
                <div
                    className={`col-lg-3 col-md-12  ${styles.property_boxShadow} ${styles.stepper_border_radius} ${styles.bg_color_1D72DB} `}
                >
                    {" "}
                    <StepperNew currentPage={"propertyFeatures"} />
                </div>

                <div
                    className={` ${styles.property_boxShadow} ${styles.propertyFeature_border_radius}  col-lg-9 col-xl-8  col-xxl-7 col-md-12 pt-5 pb-4 px-lg-3  px-2`}
                >
                    <div className={`${styles.input_container}`}>
                        <div className={`  mb-4`}>
                            <h5
                                className={`${styles.color_1D72DB} fontFam_poppins fw_500 fs_24`}
                            >
                                Property Features
                            </h5>
                        </div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className={`${styles.propertyFeature_padding_l_res} `}>
                                <div className={`d-block d-lg-flex  `}>
                                    <div className="mb-1 ">
                                        <label
                                            htmlFor="floorAllowed"
                                            className={`form-label text-nowrap fs_20 fontFam_poppins`}
                                        >
                                            Floors Allowed for Construction
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                className={` mb-1 w-100 ps-2 pe-2  pt-2 pb-2 ${styles.propetyfeature_input}`}
                                                id="floorsAllowed"
                                                placeholder="Ex : 13"
                                                name="floorsAllowed"
                                                value={formik.values.floorsAllowed}
                                                onChange={formik.handleChange}
                                            />
                                        </div>
                                        <FormikErrorGenerator formikError={formik.errors.floorsAllowed} formikTouched={formik.touched.floorsAllowed} />
                                    </div>
                                    <div className="mb-1">
                                        <label
                                            htmlFor="constructionDone"
                                            className={`form-label text-nowrap fs_20  fontFam_poppins`}
                                        >
                                            Any construction Done
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                className={` ${styles.propertyFeature_width_75_to_100} mb-1 ps-2 pe-2  pt-2 pb-2 ${styles.propetyfeature_input}`}
                                                id="constructionDone"
                                                placeholder="Ex : 7"
                                                name="constructionDone"
                                                value={formik.values.constructionDone}
                                                onChange={formik.handleChange}
                                            />
                                        </div>
                                        <FormikErrorGenerator formikError={formik.errors.constructionDone} formikTouched={formik.touched.constructionDone} />
                                    </div>
                                </div>
                                <div
                                    className={`d-block d-lg-flex gap-0 gap-lg-5 mb-2 mt-2`}
                                >
                                    {" "}
                                    <div className="mb-1">
                                        <label
                                            htmlFor="NoOfOpenSides"
                                            className={`form-label text-nowrap fs_20  fontFam_poppins`}
                                        >
                                            No. of open Sides
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                className={` ${styles.propertyFeature_width_75_to_100} mb-1 ps-2 pe-2  pt-2 pb-2 ${styles.propetyfeature_input}`}
                                                id="NoOfOpenSides"
                                                placeholder="Ex : 7"
                                                name="NoOfOpenSides"
                                                value={formik.values.NoOfOpenSides}
                                                onChange={formik.handleChange}
                                            />
                                        </div>
                                        <FormikErrorGenerator formikError={formik.errors.NoOfOpenSides} formikTouched={formik.touched.NoOfOpenSides} />
                                    </div>
                                    <RadioButtonGenerator
                                        formik={formik} title={"Boundary Wall made"}
                                        itemName={"boundaryWall"}
                                    />
                                    <RadioButtonGenerator
                                        formik={formik} title={"Corner Site"}
                                        itemName={"cornerSite"}
                                    />
                                </div>
                                <div className={`d-block d-lg-flex  mt-2`}>
                                    <RadioButtonGenerator
                                        formik={formik} title={"RERA Registration Status"}
                                        itemName={"reraReg"}
                                    />
                                </div>
                                <div className={` mt-4 mt-lg-4 `}>
                                    <div className={` mb-2`}>
                                        <h6
                                            className={`fs_20  fontFam_poppins`}
                                        >
                                            Suitable for
                                        </h6>
                                    </div>
                                    <div className={`d-block d-lg-flex`}>
                                        {AmnetiesGenerator(IndustrialPlotSuitableList, 0, 1, formik,)}
                                    </div>
                                    <div className={`d-block d-lg-flex`}>
                                        {AmnetiesGenerator(IndustrialPlotSuitableList, 2, 4, formik,)}
                                    </div>
                                </div>
                                <PostPropertySubmitButton />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustrialPlotPropertyFeatures;
