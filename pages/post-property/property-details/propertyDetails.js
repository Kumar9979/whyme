import React, { useRef, useState, useEffect, useMemo } from "react";
import styles from "../../../styles/postProperty/propertydetails.module.css";
import Mapimages from "../../../assets/icons/download.jpg";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import Steeper from "./Steeper";
import Navbar from "../../navbar/navbar";
import StepperNew from "../../stepper/stepper";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import PlacesAutocomplete from "./placesAutocomplete";
import { usePosition } from "./usePosition";

const PropertyDetails = () =>
  // { latlng, onChange,isEdit, value }
  {
    const {latitude, longitude, error} = usePosition();
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState("propertyDetails");
    const [selected, setSelected] = useState({lat:latitude,lng:longitude});
    const [zoom, setZoom] = useState(10);
    const [center, setCenter] = useState({ lat: 12.2958104, lng: 76.6393805 });
  
console.log(latitude, longitude, error);


    const formik = useFormik({
      initialValues: {
        Map: "",
        Address: "",
        BuildingName: "",
      },

      validationSchema: Yup.object({
        Map: Yup.string("").required("Required"),
        Address: Yup.string("").required("Required"),
        BuildingName: Yup.string("").required("Required"),
      }),
      onSubmit: (values) => {
        console.log(values);

        router.push("/post-property/property-features/propertyFeatures");
      },
    });
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: "AIzaSyAVDzgCl3C4LxYECq149eAYFA_sNyPmpGU",
      libraries: ["places"],
    });

    console.log(selected);
    const handlePlacesChanged = (place) => {};

    return (
      <div>
        <Navbar />
        <div className={`${styles.whole_container} mt-5 container`}>
          <div className="row">
            <div
              className={`col-lg-4 col-md-12  ${styles.property_boxShadow} ${styles.stepper_border_radius} ${styles.bg_color_1D72DB}`}
            >
              <StepperNew currentPage={currentPage} />
            </div>
            <div
              className={` ${styles.property_boxShadow} ${styles.propertyFeature_border_radius} col-lg-7 col-md-12 col-sm-12 px-5 pt-3 `}
            >
              {/* <div className={`col-lg-6 col-md-10 col-sm-10 px-5 pb-1 pt-3 ` }> */}
              <div className={`${styles.input_container} mt-2 `}>
                <h5 className={`${styles.propertyHeading}`}>
                  Property Details
                </h5>
                <form onSubmit={formik.handleSubmit}>
                  <h6 className={`${styles.selectHeading} pt-5 pb-2 `}>
                    Select Your Property In Map
                  </h6>
                  {/* <PlacesAutocomplete handlePlacesChanged={handlePlacesChanged} setSelected={setSelected} /> */}
                  <div className={`${styles.location}form-group`}>
                    {/* <input
                      type="text"
                      className={`${styles.locationform} form-control mb-2`}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your property location"
                      name="Map"
                      value={formik.values.Map}
                      onChange={formik.handleChange}
                    /> */}
                  </div>
                  {/* {formik.errors.Map && formik.touched.Map && (
                    <div className="d-flex align-items-center text-danger">
                      <i className="ri-error-warning-line me-1  "></i>
                      <span>{formik.errors.Map}</span>
                    </div>
                  )} */}
                  <div>
                    {isLoaded ? (
                      <>
                        <div>
                          <PlacesAutocomplete
                            handlePlacesChanged={handlePlacesChanged}
                            setSelected={setSelected}
                          />
                        </div>
                        <div className="mt-3">
                          <GoogleMap
                            zoom={16}
                            center={selected}
                            mapContainerClassName={`${styles.map_container}`}
                          >
                            {selected && <Marker draggable={true} onDragEnd={(e)=>
                              { setSelected({lat:e.latLng.lat(),lng:e.latLng.lng()})
                              }} visible={true} position={selected} />}
                          </GoogleMap>
                        </div>
                      </>
                    ) : (
                      <p>Map Loading</p>
                    )}
                  </div>
                  <div className="mt-3">
                    <label
                      for="exampleFormControlInput1"
                      className={`${styles.labelText} form-label pb-1`}
                    >
                      Address
                    </label>
                    <textarea
                      type="text"
                      className={`${styles.address} form-control mb-4`}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your property location"
                      name="Address"
                      value={formik.values.Address}
                      onChange={formik.handleChange}
                    ></textarea>
                  </div>
                  {formik.errors.Address && formik.touched.Address && (
                    <div className="d-flex align-items-center text-danger">
                      <i className="ri-error-warning-line me-1  "></i>
                      <span>{formik.errors.Address}</span>
                    </div>
                  )}
                  <div className="mt-3">
                    <label
                      for="exampleFormControlInput1"
                      className={`${styles.labelText} form-label pb-1`}
                    >
                      Building Name
                    </label>
                    <input
                      type="text"
                      className={`${styles.building} form-control mb-3`}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your Building Name"
                      name="BuildingName"
                      value={formik.values.BuildingName}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.errors.BuildingName && formik.touched.BuildingName && (
                    <div className="d-flex align-items-center text-danger">
                      <i className="ri-error-warning-line me-1  "></i>
                      <span>{formik.errors.BuildingName}</span>
                    </div>
                  )}
                  <div
                    className={`content-btn d-flex justify-content-end mt-5 mb-3`}
                  >
                    <div className={`d-flex`}>
                      <button
                        type="button"
                        onClick={() => router.push("/sellrent")}
                        className={`bg-white border-0  `}
                      >
                        <span
                          className={`${styles.container_icon_arrowLeftbtn} align-middle me-2`}
                        >
                          <i
                            className={`${styles.icon_arrowLeftbtn} h-100 p-1 ri-arrow-left-line  border mt-1 rounded `}
                          ></i>
                        </span>

                        <span
                          className={` ${styles.color_1D72DB} ${styles.fontFam_poppins} ${styles.font_medium} ${styles.font_18} align-middle `}
                        >
                          Back
                        </span>
                      </button>

                      <button
                        type="submit"
                        className={`${styles.bg_color_1D72DB} bg-primary ms-3 text-white d-flex justify-content-between align-items-center rounded-3 border-0  px-3 py-2`}
                      >
                        <span
                          className={` ${styles.fontFam_poppins} ${styles.font_medium} ${styles.font_18} align-middle`}
                        >
                          Next
                        </span>
                        <div>
                          <i
                            className={`${styles.modal_icon_arrowRightbtn} h-100 p-1 ri-arrow-right-line text-white border-light border mt-1 rounded ms-5 `}
                          ></i>
                        </div>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default PropertyDetails;
