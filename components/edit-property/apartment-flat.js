import React, { useState } from "react";
import styles from "../../styles/edit-property/apartment-flat.module.css";
import Image from "next/image";
import backIcon from "../../assets/icons/back-icon.svg";
import Location from "../../assets/icons/location-icon.svg";
import { Progress } from "antd";
const ApartmentFlat = ({ show, handleClose }) => {
  //     const [show, setShow] = useState(false);
  //   const handleClose = () => setShow(false);
  //   const handleShow =() => setShow(true)
  return (
    <div className={`d-flex justify-content-center`}>
      <div className={`${styles.abcd}`}>
        <div
          className={`${styles.back_icon} d-flex justify-content-start ps-2`}
        >
          <span>
            {" "}
            <Image src={backIcon} />
            <span
              className={`${styles.back_text} ms-2 fs_15 fw_500 fontFam_poppins`}
            >
              Back
            </span>{" "}
          </span>
        </div>
        <div
          className={`${styles.card} d-flex justify-content-center px-2 pt-3 `}
        >
          <div className={`${styles.card_body} p-2 pt-lg-3 pb-2`}>
            <div className=" ">
              <div className="d-lg-flex d-md-flex d-sm-block justify-content-between">
                <div className="col-lg-6 ">
                  <span
                    className={`${styles.flat_heading} fs_18 fw_500 ps-2 ps-lg-3 fontFam_poppins`}
                  >
                    2BHK Flat in Vijayanagar, Mysuru
                  </span>
                  <div className={`d-flex`}>
                    <span
                      className={`${styles.location_icon} mt-0 ps-2 ps-lg-3`}
                    >
                      <Image src={Location} />
                    </span>
                    <span
                      className={`${styles.address_heading} ms-1 fontFam_poppins`}
                    >
                      2Nd Floor, Dejgow Building, Kannada Sahithya Parishath Rd,
                      Mysuru, Karnataka 570017
                    </span>
                  </div>
                  <div
                    className={`${styles.id_text} fs-16 fw_500 ps-2 ps-lg-3 pt-1 fontFam_poppins`}
                  >
                    ID : 1235467890
                  </div>
                </div>

                <div className="col-lg-4 ps-2 ps-lg-0">
                  <div
                    className={`${styles.complete_status_text} fs_16 fw_500 fontFam_poppins pt-2 pt-lg-0`}
                  >
                    Complete Status
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <ul
                        className={`${styles.complete_list} fontFam_poppins fs_14 fw_400 pt-1`}
                      >
                        <li className="text-nowrap">Facing</li>
                        <li className="text-nowrap">Ownership Status</li>
                        <li className="text-nowrap">Property Images</li>
                      </ul>
                    </div>
                    <div className="">
                      <Progress
                        type="circle"
                        percent={70}
                        width={60}
                        strokeWidth={15}
                        strokeColor="#50BF97"
                      />
                    </div>
                  </div>
                  <br/>
                  <span
                    className={`${styles.response_text} fs_12 fw_500 p-1 fontFam_poppins`}
                  >
                    Get 5 times more response! just add the following
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.card} d-flex justify-content-center px-2 pt-3 `}
        >
          <div
            className={`${styles.card_body} d-flex justify-content-between pt-2 pt-lg-3 pb-2`}
          >
            <span
              className={`${styles.photo_text} color_cloudBurst fs_20 fw_500 ps-2 ps-lg-3`}
            >
              Photos
            </span>
            <button
              className={`${styles.add_photo_btn} me-3 px-3 px-lg-4 fs_13 fontFam_poppins`}
            >
              Add Photos
            </button>
          </div>
        </div>
      </div>
      <ApartmentUploadPhoto
        handleClose={handleClose}
        handleImageUpload={handleImageUpload}
        show={show}
      />
      <ApartmentDeletePhoto
        deleteFn={onImageRemove}
        index={imageNumber}
        handleClose={handleDeleteModalClose}
        show={showDeleteModal}
      />
    </div>
  );
};

export default ApartmentFlat;
