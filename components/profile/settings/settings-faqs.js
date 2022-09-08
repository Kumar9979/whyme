import { React, useState } from "react";
import styles from "../../../styles/profile/sidebar-pages/settings.module.css";
import upward from "../../../assets/icons/profile-icons/upward_icon.svg";
import downward from "../../../assets/icons/profile-icons/downward_icon.svg";
import Image from "next/image";

const SettingFaq = () => {
  const [show, setShow] = useState(true);
  const [rendered, setRendered] = useState("");
  function clickHandler(value) {
    switch (value) {
      case "question1":
        setRendered("question1");

        break;
      case "question2":
        setRendered("question2");

        break;
      case "question3":
        setRendered("question3");

        break;
      case "question4":
        setRendered("question4");
        break;

      case "question5":
        setRendered("question5");
    }
  }
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

          <div className={`${styles.question_container} p-2 mb-2 `}>
            <div className={` d-flex justify-content-between `}>
              <span
                className={`mt-0 pt-0 color_cloudBurst fs_14  fontFam_poppins fw_600 `}
              >
                Frequently asked question 1{" "}
              </span>

              {show == true ? (
                <div onClick={() => setShow(false)}>
                  {" "}
                  <Image src={upward} alt="Picture of the author" width={20} />
                </div>
              ) : (
                <div
                  onClick={() => {
                    clickHandler("question1");
                    setShow(true);
                  }}
                >
                  <Image
                    src={downward}
                    alt="Picture of the author"
                    width={20}
                  />
                </div>
              )}
            </div>
            {show ? (
              <div>
                {" "}
                {rendered == "question1" ? (
                  <p className="mt-0 pt-0 ms-2 color_cloudBurst fs_11 fontFam_poppins fw_600 w-75">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diamnonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam.{" "}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>
          <div className={`${styles.question_container} p-2 mb-2 `}>
            <div className={` d-flex justify-content-between `}>
              <span
                className={`mt-0 pt-0 color_cloudBurst fs_14  fontFam_poppins fw_600 `}
              >
                Frequently asked question 1{" "}
              </span>

              {show == true ? (
                <div onClick={() => setShow(false)}>
                  {" "}
                  <Image src={upward} alt="Picture of the author" width={20} />
                </div>
              ) : (
                <div
                  onClick={() => {
                    clickHandler("question2");
                    setShow(true);
                  }}
                >
                  <Image
                    src={downward}
                    alt="Picture of the author"
                    width={20}
                  />
                </div>
              )}
            </div>
            {show ? (
              <div>
                {" "}
                {rendered == "question2" ? (
                  <p className="mt-0 pt-0 ms-2 color_cloudBurst fs_11 fontFam_poppins fw_600 w-75">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diamnonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam.{" "}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>
          <div className={`${styles.question_container} p-2 mb-2 `}>
            <div className={` d-flex justify-content-between `}>
              <span
                className={`mt-0 pt-0 color_cloudBurst fs_14  fontFam_poppins fw_600 `}
              >
                Frequently asked question 1{" "}
              </span>

              {show == true ? (
                <div onClick={() => setShow(false)}>
                  {" "}
                  <Image src={upward} alt="Picture of the author" width={20} />
                </div>
              ) : (
                <div
                  onClick={() => {
                    clickHandler("question3");
                    setShow(true);
                  }}
                >
                  <Image
                    src={downward}
                    alt="Picture of the author"
                    width={20}
                  />
                </div>
              )}
            </div>
            {show ? (
              <div>
                {" "}
                {rendered == "question3" ? (
                  <p className="mt-0 pt-0 ms-2 color_cloudBurst fs_11 fontFam_poppins fw_600 w-75">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diamnonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam.{" "}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>
          <div className={`${styles.question_container} p-2 mb-2 `}>
            <div className={` d-flex justify-content-between `}>
              <span
                className={`mt-0 pt-0 color_cloudBurst fs_14  fontFam_poppins fw_600 `}
              >
                Frequently asked question 1{" "}
              </span>

              {show == true ? (
                <div onClick={() => setShow(false)}>
                  {" "}
                  <Image src={upward} alt="Picture of the author" width={20} />
                </div>
              ) : (
                <div
                  onClick={() => {
                    clickHandler("question4");
                    setShow(true);
                  }}
                >
                  <Image
                    src={downward}
                    alt="Picture of the author"
                    width={20}
                  />
                </div>
              )}
            </div>
            {show ? (
              <div>
                {" "}
                {rendered == "question4" ? (
                  <p className="mt-0 pt-0 ms-2 color_cloudBurst fs_11 fontFam_poppins fw_600 w-75">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diamnonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam.{" "}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>
          <div className={`${styles.question_container} p-2 mb-2 `}>
            <div className={` d-flex justify-content-between `}>
              <span
                className={`mt-0 pt-0 color_cloudBurst fs_14  fontFam_poppins fw_600 `}
              >
                Frequently asked question 1{" "}
              </span>

              {show == true ? (
                <div onClick={() => setShow(false)}>
                  {" "}
                  <Image src={upward} alt="Picture of the author" width={20} />
                </div>
              ) : (
                <div
                  onClick={() => {
                    clickHandler("question5");
                    setShow(true);
                  }}
                >
                  <Image
                    src={downward}
                    alt="Picture of the author"
                    width={20}
                  />
                </div>
              )}
            </div>
            {show ? (
              <div>
                {" "}
                {rendered == "question5" ? (
                  <p className="mt-0 pt-0 ms-2 color_cloudBurst fs_11 fontFam_poppins fw_600 w-75">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diamnonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam.{" "}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>

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
    answeer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
  },
  {
    question: "Frequently asked question 2",
    answeer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
  },
  {
    question: "Frequently asked question 3",
    answeer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
  },
  {
    question: "Frequently asked question 4",
    answeer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
  },
  {
    question: "Frequently asked question 5",
    answeer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
  },
];
