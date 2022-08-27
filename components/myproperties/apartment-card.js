import React, { useEffect, useState } from "react";
import backIcon from "../../assets/icons/back-icon.svg";
import Image from "next/image";
import styles from "../../styles/myproperties/propertyStatistics.module.css";
import Luxuries from "../../assets/images/luxuries-image.png";
import Luxuries_mobile from "../../assets/images/luxuries-mobile-image.png";
import square from "../../assets/icons/square-area.svg";
import bathroom from "../../assets/icons/bathroom.svg";
import furniture from "../../assets/icons/furniture.svg";
import floor from "../../assets/icons/floor.svg";
import facing from "../../assets/icons/facing.svg";
import transaction from "../../assets/icons/transaction.svg";
import Delete from "../../assets/icons/delete.svg";
import Edit from "../../assets/icons/edit-icon.svg";
import Location from "../../assets/icons/location-icon.svg";
import Tick from "../../assets/icons/tick-icon.svg";

const ApartmentCard = () => {
  const [ReadLess, setReadLess] = useState(false);

  const text = ` Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Diam. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Diam. `;
  const allText = ReadLess === true ? text : text.slice(0, 122);

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 480) {
      setMobile(true);
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
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
    <div className={`d-flex justify-content-center`}>
      <div className={`${styles.abcd} `}>
        <div
          className={`${styles.back_icon} d-flex justify-content-start ps-2 ps-lg-4 pt-lg-2`}
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
        <span
          className={`${styles.property_heading} color_cloudBurst ps-2 ps-lg-4 fs_22 fw_500 fs_sm_18 fontFam_poppins`}
        >
          Property Statistics
        </span>
        <hr />
        <div
          className={`${styles.card} d-flex justify-content-center px-2 pt-2 px-lg-5`}
        >
          <div className={`${styles.card_body}   `}>
            <div className="">
              <div className="row gx-0 gy-0">
                <div className="col-sm-3">
                  {mobile ? (
                    <div>
                      <Image src={Luxuries_mobile} />
                    </div>
                  ) : (
                    <div >
                      <Image src={Luxuries} />
                    </div>
                  )}
                </div>
                <div className="col-sm-6">Column</div>
                <div className="col-sm-3">Column</div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.card}  px-2 pt-3 `}>
          <div className={`${styles.card_body}  pt-2 pt-lg-3 pb-2`}>
            <div className="d-flex  justify-content-between"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;

const ameneties = [
  {
    image: square,
    heading: "Super Area",
    amenity: "2400sqft",
  },
  {
    image: bathroom,
    heading: "Bathrooms",
    amenity: "3",
  },
  {
    image: furniture,
    heading: "Furnishing Status",
    amenity: "Furnished",
  },
];

const ameneties2 = [
  {
    image: floor,
    heading: "Floor",
    amenity: "3 out of 15",
  },
  {
    image: facing,
    heading: "Facing",
    amenity: "3",
  },
  {
    image: transaction,
    heading: "Transactions",
    amenity: "Resale",
  },
];
