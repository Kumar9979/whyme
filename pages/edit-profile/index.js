import React from "react";
import ProfileLayout from "../../components/sidebarLayout/Sidebar";
import styles from "../../styles/Edit-profile/edit-profile.module.css";
import arrow_left from "../../assets/images/arrow_left.svg";
import Image from "next/image";
import people from "../../assets/images/imagereview/people.png";
import { useFormik } from "formik";
import * as Yup from "yup";

const EditProfile = () => {
  const phoneregex = /^([+]\d{2})?\d{10}$/;
  const nameregex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
  const emailregex =
    /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(nameregex, "Invalid First Name")
        .required("Required"),
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
  return (
    <ProfileLayout>
      <div className={`${styles.edit_profile} mt-5 pt-5`}>
        <div className={`${styles.edit_profile_card} p-5`}>
          <div className="d-flex align-items-center">
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
          <div className="row">
            <div className="col-9">
              <div className="row">
                <div className="col-4 d-flex flex-column">
                  <h3
                    className={`${styles.profile_picture_heading} fs_15 fw_500 fontFam_poppins`}
                  >
                    Profile Picture
                  </h3>
                  <Image
                    src={people}
                    className={`${styles.profile_photo}`}
                    alt="Picture of the author"
                    width={120}
                    height={190}
                  />
                  <button
                    className={`${styles.change_photo} py-1 mt-4 fs_14 fw_400 w-100`}
                  >
                    Change Picture
                  </button>
                  <button
                    className={`${styles.remove_photo} py-1 mt-4 fs_14 fw_400 w-100`}
                  >
                    Remove Picture
                  </button>
                </div>
                <div className="col-8 ">
                  <div className={`${styles.form_width}`}>
                  <div className="ps-2">
                    <h1
                      className={`${styles.profile_type} fs_15 fw_500 fontFam_poppins`}
                    >
                      Profile Type{" "}
                      <span className={`${styles.type_buyer} fw_600 ps-3`}>
                        Buyer
                      </span>
                    </h1>

                    <form onSubmit={formik.handleSubmit}>
                      <div className=" mt-3">
                        <div className="form-group">
                          <label
                            className={`${styles.contact_us_label}`}
                            for="exampleInputEmail1"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            className={` ${styles.form_input} w-100 ps-3 px-5`}
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter your name"
                            name="name"
                            value={formik.name}
                            onChange={formik.handleChange}
                          />
                          <div className={`${styles.error_height}`}>
                            {formik.errors.name && formik.touched.name && (
                              <span className={`text-danger fs_14 mb-0 `}>
                                {formik.errors.name}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="form-group ">
                          <label
                            className={`${styles.contact_us_label}`}
                            for="exampleInputEmail1"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            className={` ${styles.form_input} w-100 ps-3`}
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter your email address"
                            name="email"
                            value={formik.email}
                            onChange={formik.handleChange}
                          />
                          <div className={`${styles.error_height}`}>
                            {formik.errors.email && formik.touched.email && (
                              <p className={`text-danger fs_14`}>
                                {formik.errors.email}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="form-group ">
                          <label
                            className={`${styles.contact_us_label}`}
                            for="exampleInputPassword1"
                          >
                            Mobile Number
                          </label>
                          <input
                            type="text"
                            className={` ${styles.form_input} w-100 ps-3`}
                            id="exampleInputPassword1"
                            placeholder="Enter your contact number"
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                          />
                          <div className={`${styles.error_height}`}>
                            {formik.errors.phone && formik.touched.phone && (
                              <p className="text-danger fs_14">
                                {formik.errors.phone}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className={`${styles.contact_us_label}`}
                            for="exampleInputEmail1"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            className={` ${styles.form_input} w-100 ps-3`}
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter your name"
                            name="name"
                            value={formik.name}
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

                        <div className="d-flex justify-content-between mt-5 w-75 ">
                          <button
                            className={`${styles.save_button_width} px-3 py-1 fs_15 fw_400`}
                          >
                            Save Changes
                          </button>
                          <button
                            className={`${styles.undo_button_width}  px-3 py-1 ms-4 fs_15 fw_500`}
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
