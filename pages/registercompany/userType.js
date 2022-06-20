import React, { useState } from "react";

import close from "../../assets/icons/close.png";
import agent from "../../assets/icons/agent.png";
import building from "../../assets/icons/building.png";
import owner from "../../assets/icons/owner.png";

import Image from "next/image";

import styles from "../../styles/modals/registerModal.module.css";
import { useRouter } from "next/router";

const UserType = () => {
  const router = useRouter();

  function navigation(type) {
    if (type === "Builder") {
      router.push("/registercompany");
    } else if (type === "agent/owner") router.push("/sellrent");
  }

  return (
    <>
      <div
        className={`vh-100 d-flex align-items-center justify-content-center mx-2`}
      >
        <div
          className={`${styles.register_form_container} ${styles.max_height_500}`}
        >
          <div className="d-flex justify-content-end mt-4 me-4 mb-1">
            {" "}
            <Image
              src={close}
              alt="close icon"
              width={30}
              height={30}
              className={`${styles.cursor_pointer}`}
            />
          </div>
          <div className={styles.modal_body_register}>
            <div className="mb-1">
              <h5
                className={`${styles.fontFam_poppins} ${styles.font_semibold} ${styles.color_323D5A} ${styles.font_24}`}
              >
                What you are
              </h5>

              <p
                className={`${styles.opacity_6} ${styles.fontFam_poppins} ${styles.color_323D5A} ${styles.font_regular} ${styles.font_18}`}
              >
                Please select the Preferred option that are right here
              </p>
            </div>

            <div className="d-flex flex-column justify-content-around mt-5 ">
              <div
                onClick={() => {
                  navigation("Builder");
                }}
                className={`${styles.modal_box_type}  ${styles.color_1D72DB} ${styles.cursor_pointer} d-flex  px-2 mb-3 w-100`}
              >
                <div className="d-flex  justify-content-between    align-items-center">
                  {" "}
                  <div className="ms-1 my-2">
                    <Image
                      src={building}
                      alt="building icon"
                      width={40}
                      height={40}
                      className={`${styles.cursor_pointer}`}
                    />
                  </div>
                  <span
                    className={`${styles.font_20} ${styles.fontFam_poppins} ${styles.font_medium} ${styles.padding_l_4}`}
                  >
                    Builder/Developer
                  </span>
                </div>
                <i
                  className={`${styles.modal_icon_arrowRight} ri-arrow-right-s-line mt-1 ms-auto`}
                ></i>
              </div>

              <div
                className={`${styles.modal_box_type} ${styles.color_1D72DB} ${styles.cursor_pointer}  d-flex justify-content-between  mb-3`}
                onClick={() => {
                  navigation("agent/owner");
                }}
              >
                <div className="d-flex  justify-content-between align-items-center ">
                  <div className="mx-3 my-2">
                    <Image
                      src={agent}
                      alt="building icon"
                      width={35}
                      height={35}
                      className={`${styles.cursor_pointer}`}
                    />
                  </div>
                  <span
                    className={`${styles.font_20} ${styles.fontFam_poppins} ${styles.font_medium} ms-3`}
                  >
                    Agent
                  </span>
                </div>
                <i
                  className={`${styles.modal_icon_arrowRight} ri-arrow-right-s-line mt-1 ms-auto`}
                ></i>
              </div>
              <div
                className={`${styles.modal_box_type} ${styles.color_1D72DB} ${styles.cursor_pointer} d-flex justify-content-between`}
                onClick={() => {
                  navigation("agent/owner");
                }}
              >
                <div className="d-flex  justify-content-between align-items-center">
                  {" "}
                  <div className="mx-3 my-2">
                    <Image
                      src={owner}
                      alt="building icon"
                      width={35}
                      height={35}
                      className={`${styles.cursor_pointer}`}
                    />
                  </div>
                  <span
                    className={`${styles.font_20} ${styles.fontFam_poppins} ${styles.font_medium} ms-3`}
                  >
                    Owner
                  </span>
                </div>

                <i
                  className={`${styles.modal_icon_arrowRight} ri-arrow-right-s-line mt-1 ms-auto`}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserType;
