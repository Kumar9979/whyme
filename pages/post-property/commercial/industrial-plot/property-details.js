import React from "react";
import styles from "../../../../styles/postProperty/propertydetails.module.css";
import Image from "next/image";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import PostPropertyLayout from "../../../../components/postproperty/components/propertyLayout";
import PostPropertySubmitButton from "../../../../components/postproperty/components/submitButton";
import LocationAndSearch from "../../../../components/postproperty/layout/locationAndSearch";
import { FormikErrorGenerator } from "../../../../components/postproperty/formData/formikErrorGenerator";


const IndustrialPlotPropertyDetails = () => {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            map: {},
            address: "",
            buildingName: "",
        },
        validationSchema: Yup.object({
            map: Yup.object("").shape({
                lat: Yup.string(),
                // .required("Select your location in the map"),
                lng: Yup.string()
                // .required("Select your location in the map"),
            }),
            address: Yup.string("").required("Required"),
            buildingName: Yup.string("").required("Required"),
        }),
        onSubmit: (values) => {
            console.log(values);
            router.push("/post-property/commercial/industrial-plot/property-features");
        },
    });
    console.log(formik.values);



    return (
        <>

            <PostPropertyLayout>
                <div
                    className={` ${styles.property_boxShadow} ${styles.propertyFeature_border_radius} col-lg-7 col-md-12 col-sm-12 pt-5 pb-5 px-2 px-lg-3  px-xl-5  `}
                >                    <form
                    onSubmit={formik.handleSubmit}

                >
                        <div className={`${styles.input_container} mt-2`}>
                            <h5 className={`${styles.propertyHeading} mb-4`}>
                                Property Details
                            </h5>

                            <h6 className={`${styles.selectHeading}   `}>
                                Select Your Property In Map
                            </h6>

                            <LocationAndSearch formik={formik} />

                            <div className="mt-3">
                                <label
                                    htmlFor="address"
                                    className={`${styles.labelText} fw_500 form-label pb-1`}
                                >
                                    Address
                                </label>
                                <textarea
                                    type="text"
                                    className={`${styles.address} form-control mb-1`}
                                    id="address"
                                    placeholder="Enter your property address"
                                    name="address"
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                ></textarea>
                            </div>
                            <FormikErrorGenerator
                                formikError={formik.errors.address}
                                formikTouched={formik.touched.address}
                            />
                            <div className="mt-2">
                                <label
                                    htmlFor="buildingName"
                                    className={`${styles.labelText} fw_500 form-label pb-1`}
                                >
                                    Building Name
                                </label>
                                <input
                                    type="text"
                                    className={`${styles.building} form-control mb-1 p-2`}
                                    id="buildingName"
                                    placeholder="Enter Building Name"
                                    name="buildingName"
                                    value={formik.values.buildingName}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <FormikErrorGenerator
                                formikError={formik.errors.buildingName}
                                formikTouched={formik.touched.buildingName}
                            />
                            <PostPropertySubmitButton marginTop="mt-3" marginEnd={"me-2 "} paddingTop="0rem" />

                        </div>
                    </form>
                </div>
            </PostPropertyLayout>

        </>
    );
};

export default IndustrialPlotPropertyDetails;
