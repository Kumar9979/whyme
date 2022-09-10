import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import saved from "../../../assets/icons/saved.svg";
import save from "../../../assets/icons/save.svg";
import styles from "../../../styles/cards/property-details-cards/similarProperties.module.css";
import facing from "../../../assets/images/about-property-images/facing.svg";
import floor from "../../../assets/images/about-property-images/floor.svg";
import furniture from "../../../assets/images/about-property-images/furniture.svg";
import bathroom from "../../../assets/images/about-property-images/bathroom.svg";
import transaction from "../../../assets/images/about-property-images/transactions.svg";
import squarearea from "../../../assets/images/about-property-images/sqft.svg";
import homeimage from "../../../assets/images/home.png";
import photo from "../../../assets/icons/photo.png";

const SimilarProperties = ({ data }) => {
  let n = 10;
  const ref = useRef();
  const onScroll = (scroll) => {
    ref.current.scrollLeft += scroll;
  };

  const [liked, setLiked] = useState(false);
  const [saveIcon, setSaveIcon] = useState(save);
  const [show, setShow] = useState(false);

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
  const text = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo `;
  const Alltext = readless === true ? text : text.slice(0, 150);
  return (
    <div className="">
      <div
        className={`${styles.similar_properties_card} p-2 row mt-3 mb-5 position-relative`}
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
            className={`${styles.luxurius} position-absolute w-50 fs_14 fw_500 fontFam_poppins`}
          >
            Luxurious
          </div>
        </div>

        <div className={`d-flex flex-column col-lg-7`}>
          <div className="ps-1">
          <div className="d-flex align-items-center">
            <div
              className={`${styles.similar_property_location} fw_600  fontFam_poppins`}
            >
              2BHK flat in Vijayanagar, Mysuru
            </div>
            <div
              className={`px-2 py-1 ms-2 fw_500 fontFam_poppins ${styles.ready_house} `}
            >
              Ready to move
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
          <div className={`row ps-1 mt-2 ${styles.amenties_width} `}>
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
          {data == 1 ? (
            <div>
              <div className="mt-2">
                <ul
                  className={`${styles.amenties_bullet} color_cloudBurst  text-nowrap  fw_500 fontFam_poppins`}
                >
                  <li className={`${styles.amenties_list} ps-1`}>
                    Elevators/Lifts
                  </li>
                  <li className={`${styles.amenties_list} ps-1 `}>
                    Guest Parking Spaces
                  </li>
                  <li className={`${styles.amenties_list} ps-1 `}>
                    CCTV Surveillance
                  </li>
                  <li className={`${styles.amenties_list} ps-1 `}>
                    Swimming Pool
                  </li>
                  <li className={`${styles.amenties_list} ps-1 `}>Gym</li>
                  {show ? (
                    <div>
                      <li className={`${styles.amenties_list} ps-1 `}>
                        Play Grounds
                      </li>
                      <li className={`${styles.amenties_list} ps-1 `}>
                        Vehicle Charging Points
                      </li>
                      <li className={`${styles.amenties_list} ps-1 `}>
                        Community Clubhouse
                      </li>
                      <li className={`${styles.amenties_list} ps-1 `}>
                        Garden
                      </li>
                      <li className={`${styles.amenties_list} ps-1 `}>
                        Barbecue Areas
                      </li>
                      <li className={`${styles.amenties_list} ps-1 `}>
                        Rooftop Lounge Areas
                      </li>
                    </div>
                  ) : null}

                  <li className="p-0">
                    <button
                      onClick={() => setShow(!show)}
                      className={`${styles.slicing_button} color_orange fontFam_poppins fw_500 p-0`}
                    >{
                     show ? "Read Less" : "See More" 
                    }
                      
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : null}

          <p
            className={`${styles.about_readmore_text} fontFam_poppins fw_400 mt-0`}
          >
            {Alltext}
            <button
              className={`${styles.about_readmore_button}`}
              onClick={() => setReadless(!readless)}
            >
              {readless === true ? "Read Less" : "See More"}
            </button>
          </p>
          </div>
        </div>








        <div className="col-lg-2 d-flex flex-column justify-content-between position-relative">
          <div
            className={`fs_20 fw_700 text-nowrap  fontFam_poppins d-flex justify-content-end`}
          >
            ₹ 30 Lac
          </div>
          <div className="pb-4 mb-2 ">
            <div
              className={`d-flex justify-content-end fs_9 fw_600 fontFam_poppins  ${styles.posted_date}`}
            >
              Posted On 20 June 2020
            </div>
            <span
              className={`d-flex justify-content-end fs_8 fw_600 fontFam_poppins ${styles.posted_date} mb-2`}
            >
              By Amal Sabu
            </span>
<<<<<<< HEAD:components/property-details/similar-properties/index.js
            <div
              style={{ minWidth: "100px" }}
              className="d-flex justify-content-end mt-2 "
            >
              <button
                className={`justify-content-between  ${styles.contact_button} d-flex align-items-center `}
              >
                <div className={`pe-2  py-1 pe-1`}>
                  <Image
                    className={`${styles.owner_image}`}
                    src={people}
                    alt="Picture of the author"
                    width={30}
                    height={30}
                  />
                </div>
                <span className={` fs_14 d-flex align-items-center`}>
                  Contact
                </span>
              </button>
            </div>
=======
>>>>>>> 5efba5997961439f764ba11ef11d8c10943fce25:components/cards/property-details-cards/similar-properties.js
          </div>
        </div>

        <button
          className={`  ${styles.contact_button} d-flex align-items-center position-absolute position-relative`}
        >
          <span className={`fs_16 fw_400 pb-1 ps-4 ms-3`}>Contact</span>
          <div className={`position-absolute ${styles.round_image}`}>
            <Image
              className={`${styles.owner_image}`}
              src={photo}
              alt="Picture of the author"
              width={28}
              height={28}
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default SimilarProperties;
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
