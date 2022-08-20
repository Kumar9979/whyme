import React from "react";
import styles from "../../styles/myproperties/cardsVTCallbak.module.css";
import EyeIcon from "../../assets/icons/eye-icon.svg";
import Image from "next/image";
import CallBackIcon from "../../assets/icons/callback-icon.svg";
import { useMediaQuery } from "react-responsive";
const CardsViewsTotalCallback = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <div className={`${styles.main_card} d-flex justify-content-start `}>
      <div className="mt-4">
        <div className={`${styles.cards_container} ms-2 text-center`}>
          <div className="d-flex ">
            <div className={`${styles.first_card} mb-2 col-5`}>
              <div className={`${styles.card_body} border`}>
                <div className={` card-body p-1 d-lg-flex`}>
                  <div className={`${styles.eyeIconContainer}`}>
                    <Image
                      className={`${styles.eye_icon} px-lg-1`}
                      src={EyeIcon}
                      alt=""
                      width={isTabletOrMobile ? 30 : 50}
                      height={isTabletOrMobile ? 35 : 50}
                    />
                  </div>
                  <div className="d-flex flex-column me-2">
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
            <div className={`${styles.first_card} col-5 ms-2`}>
            <div className={`${styles.card_body} border`}>
                <div className={` card-body p-1 d-lg-flex`}>
                  <div className={`${styles.eyeIconContainer}`}>
                    <Image
                      className={`${styles.eye_icon} px-lg-1`}
                      src={EyeIcon}
                      alt=""
                      width={isTabletOrMobile ? 30 : 50}
                      height={isTabletOrMobile ? 35 : 50}
                    />
                  </div>
                  <div className="d-flex flex-column me-2">
                    <span
                      className={`${styles.eye_text} ms-lg-2 me-lg-3 text-start`}
                    >
                      Total Views
                    </span>
                    <span
                      className={`${styles.Eye_subtext} ms-lg-2 me-lg-3 text-start`}
                    >
                      105
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.first_card} col-5 ms-2`}>
            <div className={`${styles.card_body} border`}>
                <div className={` card-body p-1 d-lg-flex`}>
                  <div className={`${styles.eyeIconContainer}`}>
                    <Image
                      className={`${styles.eye_icon} px-lg-1`}
                      src={CallBackIcon}
                      alt=""
                      width={isTabletOrMobile ? 30 : 50}
                      height={isTabletOrMobile ? 35 : 50}
                    />
                  </div>
                  <div className="d-flex flex-column me-2">
                    <span
                      className={`${styles.eye_text} ms-lg-2 me-lg-3 text-start text-nowrap`}
                    >
                      Callbacks Requested
                    </span>
                    <span
                      className={`${styles.Eye_subtext} ms-lg-2 me-lg-3 text-start`}
                    >
                      70
                    </span>
                  </div>
                </div>
              </div>
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
