import React from "react";
import styles from "../../../styles/profile/sidebar-pages/settings.module.css";
import upward from "../../../assets/icons/profile-icons/upward_icon.svg";
import downward from "../../../assets/icons/profile-icons/downward_icon.svg";
import Image from "next/image";

const SettingFaq = () => {
  return (
    <div>
      <div className={`${styles.faqsContainer}`}>
        <div className="">
          <h1 className={`color_light_blue fw_600 fs_20 fontFam_poppins`}>
            Frequently asked question
          </h1>
          <p className="mt-0 pt-0 color_grey fs_11 fontFam_poppins fw_500 w-75">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
          </p>
          <div className={`${styles.container} p-2 mb-3 `}>
            <div className="d-flex justify-content-between ms-2">
              <h2 className={`color_light_green fw_500 fs_15 fontFam_poppins`}>
                Frequently asked question 1
              </h2>
              <Image src={upward} alt="Picture of the author" width={20} />
            </div>

            <p className="mt-0 pt-0 ms-2 color_cloudBurst fs_11 fontFam_poppins fw_600 w-75">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
            </p>
          </div>
          {questions.map((item, index) => {
            return (
              <div
                className={`${styles.question_container} mb-2 d-flex justify-content-between p-2`}
              >
                <span
                  className={`mt-0 pt-0 color_cloudBurst fs_14  fontFam_poppins fw_600 `}
                >
                  {item.question}
                </span>
                <Image src={downward} alt="Picture of the author" width={20} />
              </div>
            );
          })}
          <h1
            className={`color_cloudBurst fs_18 fontFam_poppins fw_600 text-center mt-4`}
          >
            Still have a questions
          </h1>
          <div className="d-flex justify-content-center">
            <p
              className={`color_grey fs_11 fontFam_poppins fw_600 text-center w-50`}
            >
              If you cannot find answer to your question in our FAQ, you can
              always contact us. We will answer to you shortly!
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className={`color_light_blue fs_15 py-1 px-5 fontFam_poppins fw_500 text-center mt-2  ${styles.contact_button} `}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingFaq;

const questions = [
  {
    question: "Frequently asked question 1",
  },
  {
    question: "Frequently asked question 2",
  },
  {
    question: "Frequently asked question 3",
  },
  {
    question: "Frequently asked question 4",
  },
];
