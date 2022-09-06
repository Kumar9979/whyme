import { React, useState } from "react";
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

const Settings = () => {
  const [component, setComponent] = useState("notification");
  const [rendered, setRendered] = useState();
  function clickHandler(component) {
    switch (component) {
      case "notification":
        setRendered(<Notification />);
        break;
      case "faq":
        setRendered(<SettingFaq />);
        break;
      case "terms":
        setRendered(<TermsAndCondition />);
      case "privacy":
        setRendered(<PrivacyPolicy />);
    }
  }

  return (
    <ProfileLayout>
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
            <div className="col-4">
              <ul className="list-unstyled">
                <li
                  className={`${styles.setting_list} fs_13 fw_600 fontFam_poppins mb-4`}
                >
                  <a
                    className={`${
                      rendered == <Notification/>
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
                      rendered == <SettingFaq/>
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
            <div className="col-8">{rendered}</div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default Settings;
