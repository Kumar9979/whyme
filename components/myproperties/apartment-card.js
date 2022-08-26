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
    <div className={`ms-2 me-2`}>
      <div className={`${styles.background_card}`}>
        <div className={`${styles.back_icon} ps-3 pt-lg-3 `}>
          <span>
            {" "}
            <Image src={backIcon} />
            <span className={`${styles.back_text} ms-2`}>Back</span>{" "}
          </span>
        </div>
        <div className={`${styles.property_heading} ps-3 pt-lg-3 `}>
          Property Statistics
        </div>
        <hr className={``} />
        <div className={`${styles.card} px-lg-5 px-md-5`}>
          <div className={`${styles.card_body} `}>
            <div className=" text-center">
              <div className="row gx-0">
                {mobile ? (
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <Image
                      src={Luxuries_mobile}
                      className={`${styles.luxuries_image} p-lg-2 p-md-2`}
                      width="320px"
                      height="200px"
                    />
                  </div>
                ) : (
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <Image
                      src={Luxuries}
                      className={`${styles.luxuries_image} p-lg-2 p-md-2`}
                    />
                  </div>
                )}

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className={`d-flex `}>
                    <div className={`pt-lg-2 pt-md-2 ps-2 ps-lg-0 fontFam_poppins`}>
                      <span className={`${styles.flat_heading} `}>2BHK flat in Vijayanagar, Mysuru</span>
                    </div>
                  </div>
                  <div className={`d-flex mb-3`}>
                    <span className={`${styles.location_icon} mt-0`}>
                      <Image src={Location} />
                    </span>
                    <span className={`${styles.address_heading} ms-1`}>
                      2Nd Floor, Dejgow Building, Kannada Sahithya Parishath Rd,
                      Mysuru, Karnataka 570017
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">Column</div>
              </div>
            </div>
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
