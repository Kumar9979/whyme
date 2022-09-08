import { React, useState, useEffect } from "react";
import ProfileLayout from "../../../components/sidebarLayout/Sidebar";
import styles from "../../../styles/profile/sidebar-pages/settings.module.css";
import arrow_left from "../../../assets/images/arrow_left.svg";
import Image from "next/image";
import EmptySearch from "../../../components/profile/saved-properties/empty-properties";
import SavedProperties from "../../../components/profile/saved-properties/properties-saved";
import Notification from "../../../components/profile/settings/settings-notificaation";
import SettingFaq from "../../../components/profile/settings/settings-faqs";
import TermsAndCondition from "../../../components/profile/settings/terms-condition";
import PrivacyPolicy from "../../../components/profile/settings/privacy-policy";
import UseResponisve from "../../../components/useResponsive";

const Settings = () => {
  const [show, setShow] = useState(true);
  const [rendered, setRendered] = useState("notification");
  function clickHandler(value) {
    switch (value) {
      case "notification":
        setRendered("notification");
        mobile ? setShow(false) : null;
        break;
      case "faq":
        setRendered("faq");
        mobile ? setShow(false) : null;

        break;
      case "terms":
        setRendered("terms");
        mobile ? setShow(false) : null;
        break;
      case "privacy":
        setRendered("privacy");
        mobile ? setShow(false) : null;
    }
  }

  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobile(true);
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <ProfileLayout>
      {mobile ? (
        <div className={`${styles.recent_activities} mt-5 pt-4`}>
          <div className={`${styles.recent_activities_card} p-lg-4 mt-3 p-3 `}>
            {show ? (
              <div>
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
                    className={`${styles.edit_profile_heading} fs_20 fw_600 ms-2`}
                  >
                    Settings
                  </span>
                </div>
                <hr className={`${styles.edit_horizontal_line}`}></hr>
              </div>
            ) : null}

            <div className="row">
              {show ? (
                <div className="col-12 col-md-3 col-lg-2">
                  <ul className="list-unstyled">
                    <li
                      className={`${styles.setting_list} fs_13 fw_600 fontFam_poppins mb-4`}
                    >
                      <a
                        className={`${
                          rendered == "notification"
                            ? styles.selected_component
                            : styles.not_selected_component
                        }`}
                        onClick={() => clickHandler("notification")}
                      >
                        Notification Settings
                      </a>
                    </li>
                    <li
                      className={`${styles.setting_list} fs_13 fw_600 fontFam_poppins mb-4`}
                    >
                      <a
                        className={`${
                          rendered == "faq"
                            ? styles.selected_component
                            : styles.not_selected_component
                        }`}
                        onClick={() => clickHandler("faq")}
                      >
                        FAQ's
                      </a>
                    </li>
                    <li
                      className={`${styles.setting_list} fs_13 fw_600 fontFam_poppins mb-4`}
                    >
                      <a
                        className={`${
                          rendered == "terms"
                            ? styles.selected_component
                            : styles.not_selected_component
                        }`}
                        onClick={() => clickHandler("terms")}
                      >
                        Terms & Condition
                      </a>
                    </li>
                    <li className={` fs_13 fw_600 fontFam_poppins mb-4`}>
                      <a
                        className={`${
                          rendered == "privacy"
                            ? styles.selected_component
                            : styles.not_selected_component
                        }`}
                        onClick={() => clickHandler("privacy")}
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="col-12 col-md-8 col-lg-10">
                  {/* {mobile == false ? null : (
                    <button >back</button>
                  )} */}
                  {rendered === "notification" ? (
                    <div>
                      <div>
                        <div className="d-flex align-items-center ">
                          <button
                            onClick={() => setShow(true)}
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
                            className={`${styles.edit_profile_heading} fs_20 fw_600 pe-4 text-center w-100`}
                          >
                            Notification Settings
                          </span>
                        </div>
                        <hr className={`${styles.edit_horizontal_line}`}></hr>
                      </div>
                      <Notification />
                    </div>
                  ) : null}
                  {rendered === "faq" ? (
                    <div>
                      <div>
                        <div className="d-flex align-items-center">
                          <button
                            onClick={() => setShow(true)}
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
                            className={`${styles.edit_profile_heading} fs_20 fw_600 pe-4 text-center w-100`}
                          >
                            Frequently asked question{" "}
                          </span>
                        </div>
                        <hr className={`${styles.edit_horizontal_line}`}></hr>
                      </div>
                      <SettingFaq />
                    </div>
                  ) : null}
                  {rendered === "terms" ? (
                    <div>
                      <div>
                        <div className="d-flex align-items-center ">
                          <button
                            onClick={() => setShow(true)}
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
                            className={`${styles.edit_profile_heading} fs_20 fw_600 pe-4 text-center w-100`}
                          >
                            Terms & Condition
                          </span>
                        </div>
                        <hr className={`${styles.edit_horizontal_line}`}></hr>
                      </div>
                      <TermsAndCondition/>
                    </div>
                  ) : null}
                  {rendered === "privacy" ? (
                    <div>
                      <div>
                        <div className="d-flex align-items-center ">
                          <button
                            onClick={() => setShow(true)}
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
                            className={`${styles.edit_profile_heading} fs_20 fw_600 pe-4 text-center w-100`}
                          >
                            Privact Policy{" "}
                          </span>
                        </div>
                        <hr className={`${styles.edit_horizontal_line}`}></hr>
                      </div>
                      <PrivacyPolicy />
                    </div>
                  ) : null}

             
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className={`${styles.recent_activities} mt-5 pt-4`}>
          <div className={`${styles.recent_activities_card} p-lg-4 mt-3 p-3 `}>
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
                className={`${styles.edit_profile_heading} fs_20 fw_600 ms-2`}
              >
                Settings
              </span>
            </div>
            <hr className={`${styles.edit_horizontal_line}`}></hr>
            <div className="row">
              <div className="col-12 col-md-3 col-lg-2">
                <ul className="list-unstyled">
                  <li
                    className={`${styles.setting_list} fs_13 fw_600 fontFam_poppins mb-4`}
                  >
                    <a
                      className={`${
                        rendered == "notification"
                          ? styles.selected_component
                          : styles.not_selected_component
                      }`}
                      onClick={() => clickHandler("notification")}
                    >
                      Notification Settings
                    </a>
                  </li>
                  <li
                    className={`${styles.setting_list} fs_13 fw_600 fontFam_poppins mb-4`}
                  >
                    <a
                      className={`${
                        rendered == "faq"
                          ? styles.selected_component
                          : styles.not_selected_component
                      }`}
                      onClick={() => clickHandler("faq")}
                    >
                      FAQ's
                    </a>
                  </li>
                  <li
                    className={`${styles.setting_list} fs_13 fw_600 fontFam_poppins mb-4`}
                  >
                    <a
                      className={`${
                        rendered == "terms"
                          ? styles.selected_component
                          : styles.not_selected_component
                      }`}
                      onClick={() => clickHandler("terms")}
                    >
                      Terms & Condition
                    </a>
                  </li>
                  <li className={` fs_13 fw_600 fontFam_poppins mb-4`}>
                    <a
                      className={`${
                        rendered == "privacy"
                          ? styles.selected_component
                          : styles.not_selected_component
                      }`}
                      onClick={() => clickHandler("privacy")}
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-12 col-md-8 col-lg-10">
                {mobile == false ? null : (
                  <button onClick={() => setShow(true)}>back</button>
                )}
                {rendered === "notification" ? (
                  <div>
                    <Notification />
                  </div>
                ) : null}
                {rendered === "faq" ? <SettingFaq /> : null}
                {rendered === "terms" ? <TermsAndCondition /> : null}
                {rendered === "privacy" ? <PrivacyPolicy /> : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </ProfileLayout>
  );
};

export default Settings;
