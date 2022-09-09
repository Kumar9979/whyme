import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import saved from "../../../assets/icons/saved.svg";
import save from "../../../assets/icons/save.svg";
import people from "../../../assets/images/imagereview/people.png";
import seeall from "../../../assets/images/seeall.svg";
import styles from "../../../styles/profile/sidebar-pages/post-property.module.css";
import proptertyimagegrid1 from "../../../assets/images/proptertyimagegrid1.png";
import facing from "../../../assets/images/about-property-images/facing.svg";
import floor from "../../../assets/images/about-property-images/floor.svg";
import furniture from "../../../assets/images/about-property-images/furniture.svg";
import bathroom from "../../../assets/images/about-property-images/bathroom.svg";
import transaction from "../../../assets/images/about-property-images/transactions.svg";
import squarearea from "../../../assets/images/about-property-images/sqft.svg";
import homeimage from "../../../assets/images/home.png";
import tick from "../../../assets/icons/profile-icons/tick.svg";
import edit_icon from "../../../assets/icons/profile-icons/editicon.svg";
import delete_icon from "../../../assets/icons/profile-icons/delete.svg";
const VerifiedProperties = () => {
  let n = 10;
  const ref = useRef();
  const onScroll = (scroll) => {
    ref.current.scrollLeft += scroll;
  };

  const [liked, setLiked] = useState(false);
  const [saveIcon, setSaveIcon] = useState(save);
  function likeHovered(state) {
    if (state === "hovered") {
      setSaveIcon(saved);
    } else if (state === "leaved" && liked === false) {
      setSaveIcon(save);
    } else if (state === "leaved" && liked === true) {
      setSaveIcon(saved);
    }
  }

  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 992) {
      setMobile(true);
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
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
    <div className="">
      <div
        className={`${styles.similar_properties_card} p-1 row mt-3 mb-5 position-relative`}
      >
        <div className={`position-relative col-lg-3 `}>
          <Image
            src={homeimage}
            alt="Picture of the autho"
            className={`${styles.home_image}`}
            width={230}
            height={300}
            layout="fill"
          />

          <div
            className={`${styles.luxurius} position-absolute fs_13 fw_500 fontFam_poppins`}
          >
            Luxurious
          </div>
        </div>

        <div className={`d-flex flex-column ps-2 col-lg-6`}>
          <div className="d-flex align-items-center">
            <div
              className={`${styles.similar_property_location} fw_600  fontFam_poppins`}
            >
              2BHK flat in Vijayanagar, Mysuru
            </div>
          </div>
          <div className={`${styles.exact_location}  d-flex `}>
            <i className="ri-map-pin-2-fill "></i>
            <span className="ps-1">
              2Nd Floor, Dejgow Building, Kannada Sahithya Parishath Rd,
              <br />
              Mysuru - 570017
            </span>
          </div>
          <div className={`row ps-3 ${styles.amenties_width} `}>
            {aboutproperties.map((item, index) => {
              return (
                <div className={`col-lg-4 col-6 d-flex ${styles.container} `}>
                  <div className="d-flex align-items-center">
                    <div className={`${styles.image_size} `}>
                      <Image src={item.image} alt="Picture of the author" />
                    </div>

                    <div className="d-flex flex-column ps-2">
                      <span
                        className={`${styles.about_property_heading} fontFam_poppins fw_500`}
                      >
                        {item.heading}
                      </span>
                      <span
                        className={`${styles.about_property_amenity} fontFam_poppins fw_500`}
                      >
                        {item.amenity}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={`d-flex justify-content-between mt-3 ${styles.property_statistics_width}`}>
            {" "}
            <div className={`fs_22 fw_700 text-nowrap  fontFam_poppins `}>
              ₹ 30 Lac
            </div>
            <a className={`${styles.view_properties_statistics} pt-1`}>
              View Property Statistics
            </a>
          </div>
        </div>

        <div className="col-lg-3 d-flex flex-column ">
          <div className=" mt-auto">
            <div
              className={`d-flex justify-content-end fs_9 fw_600 fontFam_poppins ${styles.posted_date}`}
            >
              Posted On 20 June 2020
            </div>
            <span
              className={`d-flex justify-content-end fs_8 fw_600 fontFam_poppins ${styles.posted_date}`}
            >
              By Amal Sabu
            </span>
            <div
              // style={{ width: "" }}
              className={`${styles.buttons_position} d-flex justify-content-end mt-2 pb-1 `}
            >
              <button
                className={`${styles.edit_property_button} fs_9 fw_500  fontFam_poppins color_white px-3 d-flex align-items-center py-1`}
              >
                <Image
                  src={edit_icon}
                  width={15}
                  height={15}
                  alt="Picture of the author"
                />

                <span className="ms-1"> Edit</span>
              </button>
              <button
                className={`${styles.delete_property_button} ms-2 fs_9 fw_500 fontFam_poppins color_white px-2 d-flex align-items-center py-1`}
              >
                <div className={`${styles.edit_image_size}`}>
                  <Image
                    src={delete_icon}
                    width={15}
                    height={15}
                    alt="Picture of the author"
                  />
                </div>
                <span className="ms-1 color_light_blue"> Delete</span>
              </button>
            </div>
          </div>
        </div>
        <div className={`${styles.verified} position-absolute `}>
          <Image
            src={tick}
            alt="Picture of the author"
            width={12}
            height={12}
          />
          <span className="color_white fontFam_poppins fw_400 fs_12 ms-1 ">
            Verified
          </span>
        </div>
      </div>
    </div>
  );
};

export default VerifiedProperties;
const aboutproperties = [
  {
    image: squarearea,
    heading: "super Area",
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
  {
    image: floor,
    heading: "Floor",
    amenity: "3 out of 15",
  },
  {
    image: facing,
    heading: "Facing",
    amenity: "North",
  },
  {
    image: transaction,
    heading: "Transactions",
    amenity: "New",
  },
];
