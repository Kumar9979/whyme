import { React } from "react";
import ProfileLayout from "../../../components/sidebarLayout/Sidebar";
import styles from "../../../styles/profile/profile-pages/every-my-profile.module.css";
import arrow_left from "../../../assets/images/arrow_left.svg";
import Image from "next/image";
import people from "../../../assets/images/imagereview/people.png";
import { useFormik } from "formik";
import verified from "../../../assets/icons/edit-profile-icons/verified.svg";
import { useRouter } from "next/router";

const MyProfile = () => {
  const formik = useFormik({
    initialValues: {
      name: "Iman Khan",
      phone: "6360749419",
      email: "imankhan.coorg@gmail.com",
      city: "Mysore",
      message:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.",
    },
  });
  const router = useRouter();

  return (
    <ProfileLayout className={`${styles.body}`}>
      <div className={`${styles.edit_profile} me-lg-3 me-0 p-2`}>
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
              My Profile
            </span>
          </div>
          <hr className={`${styles.edit_horizontal_line}`}></hr>

          <div className="row ms-lg-4 ms-0 ">
            <div className="col-12 ">
              <div className="row ">
                <div className="col-6 col-lg-3 d-flex justify-content-lg-end justify-content-start ">
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

                <div className="col-12 col-lg-9 d-flex justify-content-start justify-content-lg-start">
                  <div className={`${styles.form_width}`}>
                    <div className="ps-lg-2 ps-0">
                      <form>
                        <div className="">
                          <div className="row">
                            <div className="col-12 col-lg-6 col-md-6">
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
                                  className={` ${styles.form_input} w-100 py-1 mt-1 ps-3 px-5 fs_15 fw_600 fontFam_poppins`}
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
                                  <span className="d-flex align-items-center pe-2">
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
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="col-12 col-lg-6 col-md-6">
                              <div className="form-group ">
                                <label
                                  className={`${styles.contact_us_label}`}
                                  for="exampleInputPassword1"
                                >
                                  Mobile Number
                                </label>
                                <input
                                  readOnly
                                  type="text"
                                  className={` ${styles.form_input} w-100 mt-1 ps-3 py-1 fs_15 fw_600 fontFam_poppins`}
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
                                  className={` ${styles.form_input} mt-1 w-100 py-1 ps-3 fs_15 fw_600 fontFam_poppins`}
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                  placeholder="Enter your name"
                                  name="city"
                                  value={formik.values.city}
                                />
                              </div>
                            </div>
                          </div>
                          <div id="comment-message" className="form-group mt-3">
                            <label
                              className={`${styles.contact_us_label} `}
                              htmlFor="exampleInputEmail1"
                            >
                              Deacription
                            </label>
                            <textarea
                              type="text"
                              readOnly
                              className={`${styles.description_box} w-100 mt-1 ps-2  fs_13 fw_500 fontFam_poppins`}
                              placeholder="Enter desctiption"
                              id="exampleInputEmail1"
                              name="message"
                              value={formik.values.message}
                            ></textarea>
                          </div>
                          <div className="d-flex justify-content-between mt-4 w-75 ">
                            <button
                              type="button"
                              onClick={() => {
                                router.push(
                                  "/profile/profile-pages/agent-edit-profile"
                                );
                              }}
                              className={`${styles.save_button_width} px-5 py-2 fs_15 fw_400`}
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
