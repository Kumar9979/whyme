import React from "react";
import styles from "../../styles/myproperties/cardsVTCallbak.module.css";
import EyeIcon from "../../assets/icons/eye-icon.svg";
import Image from "next/image";
import CallBackIcon from "../../assets/icons/callback-icon.svg";

const CardsViewsTotalCallback = () => {
  return (
    <div className={`${styles.main_card} d-flex justify-content-start`}>
      <div className="mt-4">
      <div className={`${styles.cards_container} container text-center`}>
        <div className="d-flex ms-2">
          <div className={`${styles.first_card} col-4`}>
            <div className=" border bg-light">
            <div
                      className={`${styles.card_body} card-body p-1 border bg-light d-lg-flex`}
                    >
                      <div className={`${styles.eyeIconContainer}`}>
                        <Image
                          className={`${styles.eye_icon} px-lg-1`}
                          src={EyeIcon}
                          alt=""
                          layout="fixed"
                        />
                      </div>
                      <div className="d-flex flex-column me-3">
                        <span
                          className={`${styles.eye_text} ms-lg-2 me-lg-3 text-start`}
                        >
                          Views Today
                        </span>
                        <span
                          className={`${styles.Eye_subtext} ms-lg-2 me-lg-3 text-start`}
                        >
                          34
                        </span>
                      </div>
                    </div>
            </div>
          </div>
          <div className={`${styles.second_card} col-4 ms-2`}>
            <div className=" border bg-light">hjkjhg</div>
          </div>
          <div className="col-4">
            <div className=" border bg-light">kljhgfgh</div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default CardsViewsTotalCallback;

const ameneties = [
  {
    image: EyeIcon,
    heading: "Views Today",
    amenity: "34",
  },
  {
    image: EyeIcon,
    heading: "Total Views",
    amenity: "105",
  },
  {
    image: CallBackIcon,
    heading: "Callbacks Requested",
    amenity: "70",
  },
];
