import React, { useState } from "react";
import ProfileLayout from "../../components/sidebarLayout/Sidebar";
import styles from "../../styles/profile-pages/edit-profile.module.css";
import arrow_left from "../../assets/images/arrow_left.svg";
import Image from "next/image";
import people from "../../assets/images/imagereview/people.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import camera from "../../assets/icons/camera.png";
import verified from "../../assets/icons/edit-profile-icons/verified.svg";
import dropdown from "../../assets/icons/cityDropdown.svg";
import PlacesAutocomplete from "../post-property/property-details/placesAutocomplete";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import AutoCityLoad from "../../components/profile-pages/auto-city";

const EditProfile = () => {
  const libraries = ["places"];
  const phoneregex = /^([+]\d{2})?\d{10}$/;
  const nameregex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
  const [file, setFile] = useState(people);
  const [uploaded, setuploaded] = useState(true);
  const [size, setSize] = useState(170);
  const [width, setWidth] = useState(160);
  const [markedAddress, setMarkedAddress] = useState("");
  const [selected, setSelected] = useState();
  const [map, setMap] = useState(null);
  const [markerStat, setmarkerStat] = useState(false);
  function markerSetOn() {
    setmarkerStat(true);
  }
  function markerChange() {
    Geocode.fromLatLng(selected.lat, selected.lng).then(
      (response) => {
        setMarkedAddress(response.results[0].formatted_address);
        console.log(markedAddress);
      },

      (error) => {
        console.error(error);
      }
    );
  }

  const formik = useFormik({
    initialValues: {
      name: "Iman Khan",
      phone: "6360749419",
      email: "imankhan.coorg@gmail.com",
      city: "Mysore",
    },
    validationSchema: Yup.object({
      image: Yup.mixed().required("Upload an Image"),
      name: Yup.string()
        .matches(nameregex, "Invalid First Name")
        .required("Required"),
      city: Yup.string().required("Required"),
      phone: Yup.string()
        .matches(phoneregex, "Invalid Phone Number")
        .required("Required"),
      email: Yup.string().email().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      localStorage.setItem("User", JSON.stringify(values));
      alert(values);
      resetForm();
    },
  });
  function handleChange(e) {
    if (e.target?.files.length !== 0) {
      setSize(170);
      setWidth(160);
      setuploaded(true);
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  }

  function formReset() {
    setuploaded(false);
    formik.setFieldValue("image", "");
  }
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAVDzgCl3C4LxYECq149eAYFA_sNyPmpGU",
    libraries,
  });

  return (
    <ProfileLayout>
      <div className={`${styles.edit_profile} me-lg-5 me-0`}>
        <div className={`${styles.edit_profile_card} p-lg-4 mt-3 p-3 `}>
          <div className="d-flex align-items-center ">
            <button
              className={`${styles.arrow_left_button} d-flex align-items-center p-0`}
            >
              <Image
                src={arrow_left}
                alt="Picture of the author"
                width={20}
                height={15}
              />
            </button>
            <span
              className={`${styles.edit_profile_heading} fs_20 fw_400 ms-2`}
            >
              Edit Profile
            </span>
          </div>
          <hr className={`${styles.edit_horizontal_line}`}></hr>

          <div className="row ms-lg-4 ms-0 ">
            <div className="col-lg-8 col-12">
              <div className="row ">
                <div className="col-6 col-lg-3 d-flex justify-content-lg-center  justify-content-start">
                  <div className="d-flex flex-column">
                    <h1
                      className={`${styles.profile_type} fs_15  d-block d-lg-none fw_500 mt-lg-0 d-flex justify-content-start fontFam_poppins`}
                    >
                      Profile Type{" "}
                      <span className={`${styles.type_buyer} fw_600 ps-2`}>
                        Buyer
                      </span>
                    </h1>
                    <h3
                      className={`${styles.profile_picture_heading} mt-2 mt-lg-0 fs_15 fw_500 fontFam_poppins`}
                    >
                      Profile Picture
                    </h3>
                    <div className={`${styles.image_container}`}>
                      <Image
                        src={uploaded ? file : camera}
                        className={`${styles.profile_photo}`}
                        alt="Picture of the author"
                        height={size}
                        width={width}
                      />
                      <input
                        type={"file"}
                        style={{ visibility: "hidden" }}
                        id="profile"
                        name="img"
                        accept="image/*;capture=camera"
                        // onChange={(e) => {
                        //   handleChange(e);
                        // }}
                        onChange={(e) => {
                          formik.setFieldValue("image", e.target.files[0]);
                          handleChange(e);
                        }}
                      />
                    </div>

                    <button
                      className={`${styles.change_photo} fs_13 fw_400 fontFam_poppins py-1 mt-3`}
                      //   onClick={setRemove(!remove)}
                    >
                      <label htmlFor="profile">Change Picture </label>
                    </button>

                    <button
                      className={`${styles.remove_photo} fs_14 fw_500 fontFam_poppins py-1 mt-3 d-flex justify-content-start justify-content-lg-center`}
                      onClick={() => setuploaded(false)}
                    >
                      Remove Picture
                    </button>
                  </div>
                </div>

                <div className="col-12 col-lg-9 d-flex  justify-content-lg-start">
                  <div className={`${styles.form_width} `}>
                    <div className="ps-lg-2 ps-0">
                      <h1
                        className={`${styles.profile_type} fs_15 d-none d-lg-block fw_500 mt-4 mt-lg-0 d-flex justify-content-center fontFam_poppins`}
                      >
                        Profile Type{" "}
                        <span className={`${styles.type_buyer} fw_600 ps-2`}>
                          Buyer
                        </span>
                      </h1>

                      <form onSubmit={formik.handleSubmit}>
                        <div className="">
                          <div className="form-group mt-3">
                            <label
                              className={`${styles.contact_us_label}`}
                              for="exampleInputEmail1"
                            >
                              Full Name
                            </label>

                            <input
                              type="text"
                              className={` ${styles.form_input} w-100  py-1 mt-1 ps-2 px-5 fs_15 fw_600 fontFam_poppins`}
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder="Enter your name"
                              name="name"
                              value={formik.values.name}
                              onChange={formik.handleChange}
                            />
                            <div className={`${styles.nmm}`}>
                              {formik.errors.name && formik.touched.name && (
                                <span className={`text-danger fs_14 mb-0 `}>
                                  {formik.errors.name}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="form-group mt-3">
                            <label
                              className={`${styles.contact_us_label} `}
                              for="exampleInputEmail1"
                            >
                              Email Address
                            </label>
                            <div
                              className={`${styles.verified_input} w-100 py-1 mt-1 d-flex justify-content-between `}
                            >
                              <input
                                type="email"
                                className={` ${styles.email_input} w-75 ps-2  fs_15 fw_600 fontFam_poppins`}
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter your email address"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                              />
                            </div>
                            <div className={`${styles.nmm}`}>
                              {formik.errors.email && formik.touched.email && (
                                <span className={`text-danger fs_14 mb-0 `}>
                                  {formik.errors.email}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="form-group mt-3">
                            <label
                              className={`${styles.contact_us_label}`}
                              for="exampleInputPassword1"
                            >
                              Mobile Number
                            </label>
                            <input
                              type="text"
                              className={` ${styles.form_input} w-100 mt-1 ps-2 py-1 fs_15 fw_600 fontFam_poppins`}
                              id="exampleInputPassword1"
                              placeholder="Enter your contact number"
                              name="phone"
                              value={formik.values.phone}
                              onChange={formik.handleChange}
                            />
                            <div className={`${styles.nmm}`}>
                              {formik.errors.phone && formik.touched.phone && (
                                <span className={`text-danger fs_14 mb-0 `}>
                                  {formik.errors.phone}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="form-group mt-3">
                            <label
                              className={`${styles.contact_us_label} `}
                              for="exampleInputEmail1"
                            >
                              City
                            </label>
                            {/* <div
                              className={`${styles.verified_input} w-100 py-1 mt-1 d-flex justify-content-between `}
                            >
                              <input
                                type="text"
                                className={` ${styles.email_input} w-75 ps-2  fs_15 fw_600 fontFam_poppins`}
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter your city"
                                name="city"
                                value={formik.values.city}
                                onChange={formik.handleChange}
                              />
                              <span className="d-flex align-items-center pe-2">
                                <Image
                                  src={dropdown}
                                  alt="Picture of the author"
                                  width={13}
                                  height={13}
                                />
                              </span>
                            </div> */}
                            <div className={`${styles.nmm}`}>
                              {formik.errors.city && formik.touched.city && (
                                <span className={`text-danger fs_14 mb-0 `}>
                                  {formik.errors.city}
                                </span>
                              )}
                            </div>
                          </div>

                          <div>
                            {isLoaded ? (
                              <>
                                <div>
                                  <AutoCityLoad
                                    markerSetOn={markerSetOn}
                                    markedAddress={markedAddress}
                                    setSelected={setSelected}
                                  />
                                </div>
                                <div className="mt-3">
                                  <GoogleMap
                                    zoom={16}
                                    center={selected}
                                    mapContainerClassName={`${styles.map_container}`}
                                    onLoad={(map) => {
                                      setMap(map);
                                      formik.setFieldValue("Map", selected);
                                    }}
                                  >
                                    {markerStat && (
                                      <Marker
                                        draggable={true}
                                        onDragEnd={(e) => {
                                          markerChange();
                                          setSelected({
                                            lat: e.latLng.lat(),
                                            lng: e.latLng.lng(),
                                          });
                                          formik.setFieldValue("Map", selected);
                                        }}
                                        position={selected}
                                      />
                                    )}
                                  </GoogleMap>
                                </div>
                              </>
                            ) : (
                              <p>Map Loading</p>
                            )}

                            {formik.errors.Map && formik.touched.Map && (
                              <div className="d-flex align-items-center text-danger mt-2">
                                <i className="ri-error-warning-line me-1  "></i>
                                <span>{formik.errors.Map.lat}</span>
                              </div>
                            )}
                          </div>

                          <div className="d-lg-flex justify-content-lg-between d-flex   mt-4 w-75 ">
                            <button
                              className={`${styles.save_button_width} px-4 py-1 fs_15 fw_400`}
                            >
                              Save Changes
                            </button>
                            <button
                              className={`${styles.undo_button_width}  px-4 py-1 ms-4 fs_15 fw_500`}
                            >
                              Undo Changes
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default EditProfile;
