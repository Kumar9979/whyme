import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import saved from "../../../assets/icons/saved.svg";
import save from "../../../assets/icons/save.svg";
import people from "../../../assets/images/imagereview/people.png";
import seeall from "../../../assets/images/seeall.svg";
import styles from "../../../styles/profile/sidebar-pages/plot-similar.module.css";
import proptertyimagegrid1 from "../../../assets/images/proptertyimagegrid1.png";
import facing from "../../../assets/images/about-property-images/facing.svg";
import floor from "../../../assets/images/about-property-images/floor.svg";
import furniture from "../../../assets/images/about-property-images/furniture.svg";
import bathroom from "../../../assets/images/about-property-images/bathroom.svg";
import transaction from "../../../assets/images/about-property-images/transactions.svg";
import squarearea from "../../../assets/images/about-property-images/sqft.svg";
import homeimage from "../../../assets/images/home.png";

const PlotProperties = () => {
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

  const [readless, setReadless] = useState(false);
  const text = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,`;
  const Alltext = readless === true ? text : text.slice(0, 150);
  return (
    <div className="">
      <div className={`${styles.similar_properties_card} p-2 row mt-3 mb-5`}>
        <div className={`position-relative col-lg-3 col-md-3  `}>
          <Image
            src={homeimage}
            alt="Picture of the autho"
            className={`${styles.home_image}`}
            width={230}
            height={300}
            layout="fill"
          />
          <div className={`${styles.like_image} position-absolute`}>
            <button
              onMouseEnter={() => likeHovered("hovered")}
              onMouseLeave={() => likeHovered("leaved")}
              onClick={() => setLiked(!liked)}
              className={`${styles.save_image_button} `}
            >
              <Image
                className="d-flex justify-content-center pt-2"
                src={saveIcon}
                alt="Picture of the author"
                width={25}
                height={25}
              />
            </button>
          </div>
          <div
            className={`${styles.luxurius} position-absolute fs_13 fw_500 fontFam_poppins`}
          >
            Luxurious
          </div>
        </div>

        <div className={`d-flex flex-column ps-2 col-lg-7 col-md-7`}>
          <div className="d-flex align-items-center">
            <div
              className={`${styles.similar_property_location} fs_14 fw_500 fontFam_poppins`}
            >
              2BHK flat in Vijayanagar, Mysuru
            </div>
            <div
              className={`px-1 py-1 ms-2 fw_500 fontFam_poppins ${styles.ready_house} `}
            >
              Ready to move
            </div>
          </div>
          <div className={`${styles.exact_location} pt-1 d-flex `}>
            <i className="ri-map-pin-2-fill "></i>
            <span className="ps-1">
              2Nd Floor, Dejgow Building, Kannada Sahithya Parishath Rd,
              <br />
              Mysuru - 570017
            </span>
          </div>
          <div className={`row ps-2 ${styles.amenties_width} `}>
            {aboutproperties.map((item, index) => {
              return (
                <div className={`col-lg-4 col-6 d-flex mb-3`}>
                  <div className="d-flex align-items-center">
                    <Image
                      src={item.image}
                      alt="Picture of the author"
                      width={20}
                      height={20}
                    />
                    <div className="d-flex flex-column ps-2">
                      <span
                        className={`${styles.about_property_heading} fs_8  fw_500 fontFam_poppins`}
                      >
                        {item.heading}
                      </span>
                      <span
                        className={`${styles.about_property_amenity} fs_8 fw_500 fontFam_poppins`}
                      >
                        {item.amenity}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p
            className={`${styles.about_readmore_text} fs_8  fw_500 fontFam_poppins`}
          >
            {Alltext}
            <button
              className={`${styles.about_readmore_button}`}
              onClick={() => setReadless(!readless)}
            >
              {readless === true ? "Read Less" : "Read More"}
            </button>
          </p>
        </div>

        <div className="col-lg-2 col-md-2 d-flex flex-column justify-content-between">
          <div
            className={`fs_16 fw_700 text-nowrap  fontFam_poppins d-flex justify-content-end`}
          >
            ₹ 30 Lac
          </div>
          <div className="pb-4">
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
            <div className="d-flex justify-content-end mt-2 w-100">
              <button
                className={` py-1  ${styles.contact_button} d-flex align-items-center`}
              >
                {" "}
                <Image
                  className={`${styles.owner_image} `}
                  src={people}
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
                <span className={` ps-2 pe-4`}>Contact</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default PlotProperties;
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
