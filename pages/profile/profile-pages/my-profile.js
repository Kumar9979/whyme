import { React } from "react";
import ProfileLayout from "../../../components/sidebarLayout/Sidebar";
import styles from "../../../styles/profile/profile-pages/my-profile.module.css";
import arrow_left from "../../../assets/images/arrow_left.svg";
import Image from "next/image";
import people from "../../../assets/images/imagereview/people.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import verified from "../../../assets/icons/edit-profile-icons/verified.svg";
import { useRouter } from "next/router";

const MyProfile = () => {
  const formik = useFormik({
    initialValues: {
      name: "Iman Khan",
      phone: "6360749419",
      email: "imankhan.coorg@gmail.com",
      city: "Mysore",
    },
  });
  const router = useRouter();

  return (
    <ProfileLayout >
      <div className={`${styles.edit_profile} me-lg-5 me-0`}>
        <div className={`${styles.edit_profile_card} p-lg-4 mt-3 p-3 `}>
          <div className="d-flex align-items-center ">
            <button
              className={`${styles.arrow_left_button} d-flex align-items-center p-0`}
              onClick={() => router.back()}
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
              My Profile
            </span>
          </div>
          <hr className={`${styles.edit_horizontal_line}`}></hr>

          <div className="row ms-lg-4 ms-0 ">
            <div className="col-lg-8 col-12">
              <div className="row ">
                <div className="col-6 col-lg-3 d-flex justify-content-center ">
                  <div className="d-flex flex-column">
                    <h3
                      className={`${styles.profile_picture_heading} mt-2 mt-lg-0 fs_15 fw_500 fontFam_poppins`}
                    >
                      Profile Picture
                    </h3>
                    <div className="">
                      <Image
                        src={people}
                        className={`${styles.profile_photo}`}
                        alt="Picture of the author"
                        height={210}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-9 d-flex justify-content-center justify-content-lg-start">
                  <div className={`${styles.form_width}`}>
                    <div className="ps-lg-2 ps-0">
                      <form>
                        <div className="">
                          <div className="form-group">
                            <label
                              className={`${styles.contact_us_label}`}
                              for="exampleInputEmail1"
                            >
                              Full Name
                            </label>

                            <input
                              type="text"
                              readOnly
                              className={` ${styles.form_input} w-100 py-3 mt-1 ps-3 px-5 fs_15 fw_600 fontFam_poppins`}
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder="Enter your name"
                              name="name"
                              value={formik.values.name}
                            />
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
                                readOnly
                                className={` ${styles.email_input} w-75 ps-3  fs_15 fw_600 fontFam_poppins`}
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter your email address"
                                name="email"
                                value={formik.values.email}
                              />
                              {/* <span className="d-flex align-items-center pe-2">
                                <Image
                                  src={verified}
                                  alt="Picture of the author"
                                  width={13}
                                  height={13}
                                />
                                <span
                                  className={`${styles.verified_text} ps-1 fw_500 fs_13 fontFam_poppins`}
                                >
                                  verified
                                </span>
                              </span> */}
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
                              readOnly
                              type="text"
                              className={` ${styles.form_input} w-100 mt-1 py-3 ps-3 py-1 fs_15 fw_600 fontFam_poppins`}
                              id="exampleInputPassword1"
                              placeholder="Enter your contact number"
                              name="phone"
                              value={formik.values.phone}
                            />
                          </div>
                          <div className="form-group mt-3">
                            <label
                              className={`${styles.contact_us_label}`}
                              for="exampleInputEmail1"
                            >
                              City
                            </label>
                            <input
                              readOnly
                              type="text"
                              className={` ${styles.form_input} mt-1 w-100 py-3 ps-3 fs_15 fw_600 fontFam_poppins`}
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder="Enter your name"
                              name="city"
                              value={formik.values.city}
                            />
                          </div>

                          <div className="d-flex justify-content-between mt-5 w-75 ">
                            <button
                              type="button"
                              onClick={() => {
                                router.push(
                                  "/profile/profile-pages/edit-profile"
                                );
                              }}
                              className={`${styles.save_button_width} px-5 py-2 fs_17 fw_400`}
                            >
                              Edit Profile
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

export default MyProfile;
