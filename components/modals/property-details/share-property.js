import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import styles from "../../../styles/modals/property-details-modals/shareproperty.module.css";
import FBimg from "../../../assets/icons/modals/FB.svg";
import twtimg from "../../../assets/icons/modals/twt.svg";
import wtspimg from "../../../assets/icons/modals/wtsp.svg";
import igimg from "../../../assets/icons/modals/ig.svg";
import tgimg from "../../../assets/icons/modals/Tg.svg";
import link from "../../../assets/icons/modals/link.svg";
import Image from "next/image";
import { FacebookShareButton } from "react-share";

const Shareproperty = ({ show, handleClose }) => {
  const [referalLink, setReferalLink] = useState(
    "https://www.indiaproperty.com"
  );
  
  const [copied, setCopied] = useState("")



  const copyText = (e) => {
    e.preventDefault();
    navigator?.clipboard?.writeText(referalLink);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <Modal
      className={`${styles.shareproperty_modal} d-flex justify-content-center `}
      centered
      show={show}
      onHide={handleClose}
      dialogClassName={`${styles.shareproperty_container}`}
    >
      <Modal.Body className={``}>
        <div className={``}>
          <div className={`${styles.requestcall_div}  pb-2`}>
            <div className="d-flex align-items-center justify-content-between  ">
              <div
                className={` fs_18 fw_600 fontFam_poppins pt-lg-0 ms-lg-2  pt-md-0 ms-md-1  pt-sm-0 ms-sm-1    ${styles.request_call_heading}`}
              >
                Share Property
              </div>

              <button
                onClick={() => {
                  handleClose();
                }}
                className={`${styles.close_button} mt-lg-0 ms-auto`}
              >
                <i className={`fs_22 fw-700 ri-close-circle-line `}></i>
              </button>
            </div>
            <p className={`${styles.share_label} fs_12 pt-0 mt-0 ms-lg-2 `}>
              Share this property with your friends and family
            </p>
          </div>
          <div className={`pe-lg-2 ms-lg-2 pb-lg-2 pe-md-2 ms-md-2 pb-md-2 pe-sm-2 ms-sm-2 pb-sm-2`}>
            <span className={`${styles.sharevia_label} fs_15 fw_500`}>
              Share link via
            </span>
            <div
              className={`mt-lg-1 mt-md-1 mt-sm-1 d-flex justify-content-start align-items-center `}
            >
              <div className=" ms-lg-1 me-lg-2 me-md-2  ms-sm-1 me-sm-2  ms-2 me-2">
                <div className={`${styles.scoial_image} ms-2 ps-1`}>
               {/* <div>
                <FacebookShareButton url="https://www.youtube.com/watch?v=2BnTYEafRQc"> */}
                <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwww.youtube.com%252Fwatch%253Fv%253D2BnTYEafRQc&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB">
                  <Image
                    src={FBimg}
                    alt="Picture of the author"
                    width={36}
                    height={35.88}
                    className={` `}
                  />
                  </a>
                 
                  {/* </FacebookShareButton></div>*/}
                </div> 

                <span className={`fs_12 fw_500 mt-0 ${styles.scoial_text}`}>
                <a href="www.Faccebook.com">  Facebook </a>
                </span>
              </div>
              <div className=" ms-lg-3 p-lg-2 ms-md-2 p-md-2 ms-sm-3  me-sm-2 ms-2 ">
                <div className={`${styles.scoial_image} ms-0 ps-1`}>
                <a href="https://twitter.com/i/flow/login">
                  <Image
                    src={twtimg}
                    alt="Picture of the author"
                    width={36}
                    height={35.88}
                    className={`${styles.property_photo} `}
                  /></a>
                </div>
                <span className={`fs_12 fw_500 ${styles.scoial_text}`}>
                 <a href="www.twitter.com">Twitter</a>
                  
                </span>
              </div>

              <div className=" ms-lg-3 p-lg-2 ms-md-2 p-md-2 ms-sm-3 me-sm-2 lg-me-4 me-1 ms-2  ">
                <div className={`${styles.scoial_image} ms-2 ps-1`}>
                  <a href="https://www.instagram.com/">
                  <Image
                    src={igimg}
                    alt="Picture of the author"
                    width={36}
                    height={35.88}
                    className={`${styles.property_photo}`}
                  /></a>
                </div>
                <span className={`fs_12 fw_500 ${styles.scoial_text}`}>
                <a href="www.instagram.com"> Instagram </a>
                </span>
              </div>
              <div className="ms-lg-3 p-lg-2 ms-md-2 p-md-2  ms-sm-3  me-sm-2 ms-2 ">
                <div className={`${styles.scoial_image} ms-2 ps-1`}>
                  <a href="https://web.whatsapp.com/">
                  <Image
                    src={wtspimg}
                    alt="Picture of the author"
                    width={36}
                    height={35.88}
                    className={`${styles.property_photo}`}
                  /></a>
                </div>
                <span className={`fs_12 fw_500 ${styles.scoial_text}`}>
                <a href="www.whatsapp.com"> WhatsApp </a>
                </span>
              </div>
              <div className="ms-lg-3 p-lg-2 ms-md-2 p-md-2 me-md-3 ms-sm-3  me-sm-2  ms-2 me-2">
                <div className={`${styles.scoial_image} ms-2 ps-1`}>
                  <a href="https://web.telegram.org/z/">
                  <Image
                    src={tgimg}
                    alt="Picture of the author"
                    width={36}
                    height={35.88}
                    className={`${styles.property_photo}`}
                  /></a>
                </div>
                <span className={`fs_12 fw_500 ${styles.scoial_text}`}>
                <a href="www.telegram.com"> Telegram </a>
                </span>
              </div>
            </div>
            <div className=" mt-lg-3 mt-md-3 mt-sm-3 mt-3">
              <span
                className={`${styles.copy_text} mt-lg-5 mt-md-5 mt-sm-5 mt-4 fs_15 fw_500`}
              >
                Or copy link
              </span>
            </div>
            <div>
              <div
                className={`${styles.shareinput_div} ms-lg-2 mt-lg-3 ps-lg-1 ms-md-2 mt-md-3 ps-md-1  ms-sm-2 mt-sm-3 ps-sm-1  d-flex justify-content-start align-items-center`}
              >
                <div className="mt-1">
                  <Image
                    src={link}
                    alt="Picture of the author"
                    width={28.81}
                    height={30.81}
                    className={`${styles.property_photo} ms-1`}
                  />
                </div>

                <input
                  className={`${styles.copy_input} ms-lg-2 fw_500 fs_16  w-100`}
                  value="https://www.indiaproperty.com..."
                />

                <button
                  onClick={ (e) =>copyText(e) }
                  className={` m-lg-2 fs_18 py-md-1 py-sm-1 py-lg-1 ${styles.copy_button}`}
                >
                 {copied  ? "copied" : "copy"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Shareproperty;
