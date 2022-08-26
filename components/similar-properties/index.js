import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import people from "../../assets/images/imagereview/people.png";
import seeall from "../../assets/images/seeall.svg";
import styles from "../../styles/propertydetails/similarProperties.module.css";
import proptertyimagegrid1 from "../../assets/images/proptertyimagegrid1.png";
import facing from "../../assets/images/about-property-images/facing.svg";
import floor from "../../assets/images/about-property-images/floor.svg";
import furniture from "../../assets/images/about-property-images/furniture.svg";
import bathroom from "../../assets/images/about-property-images/bathroom.svg";
import transaction from "../../assets/images/about-property-images/transactions.svg";
import squarearea from "../../assets/images/about-property-images/sqft.svg";
import RelatedProperties from "../related-properties-card";

const SimilarProperties = () => {
  let n = 10;
  const ref = useRef();
  const onScroll = (scroll) => {
    ref.current.scrollLeft += scroll;
  };
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
  const Alltext = readless === true ? text : text.slice(0, 200);
  return (
    <div>
      <div className="d-flex justify-content-between px-2">
        <div
          className={`fs_24 fw_600 fontFam_poppins ${styles.similar_properties_heading}`}
        >
          Related Properties
        </div>
        <div>
          <button
            className={`${styles.seeall_button} d-flex align-items-center `}
          >
            <span>See All </span>
            <span className={`mt-1 ms-2 `}>
              {" "}
              <Image
                src={seeall}
                alt="Picture of the autho"
                width={15}
                height={15}
              />
            </span>
          </button>
        </div>
      </div>

      {mobile ? (
        <div>
          <div className={`row p-3`}>
            <div className={`${styles.scrollmenu} `}>
              <div ref={ref} className={`${styles.row} d-flex`}>
                {[...Array(n)].map((item, index) => {
                  return <RelatedProperties/>;
                })}
              </div>
            </div>

            {/* <div className={`col-6 col-lg-4 `}>
            <RelatedProperties/>
          </div>
          <div className="col-6 col-lg-4">
          <RelatedProperties/>
          </div> */}
          
          </div>
        </div>
      ) : (
        <div className={`${styles.similar_properties_card} p-2 row mt-3`}>
          <div className={`position-relative col-lg-3 `}>
            <Image
              src={proptertyimagegrid1}
              alt="Picture of the autho"
              width={200}
              height={280}
            />
            <div
              className={`${styles.luxurius} position-absolute fs_15 fw_500 fontFam_poppins`}
            >
              Luxurious
            </div>
          </div>

          <div className={`d-flex flex-column ps-1 col-lg-7`}>
            <div className="d-flex align-items-center">
              <div
                className={`${styles.similar_property_location} fs_18 fw_500 fontFam_poppins`}
              >
                2BHK flat in Vijayanagar, Mysuru
              </div>
              <div
                className={`px-1 py-1 ms-2 fs_10 fw_500 fontFam_poppins ${styles.ready_house} `}
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
            <div className={`row ps-2 pt-1`}>
              {aboutproperties.map((item, index) => {
                return (
                  <div className={`col-lg-4 col-6 d-flex mb-3`}>
                    <Image
                      src={item.image}
                      alt="Picture of the author"
                      width={25}
                      height={25}
                    />
                    <div className="d-flex flex-column ps-2">
                      <span
                        className={`${styles.about_property_heading} fs_9  fw_500 fontFam_poppins`}
                      >
                        {item.heading}
                      </span>
                      <span
                        className={`${styles.about_property_amenity} fs_9 fw_500 fontFam_poppins`}
                      >
                        {item.amenity}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <p
              className={`${styles.about_readmore_text} fs_10 fw_500 fontFam_poppins`}
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

          <div className="col-lg-2 d-flex flex-column justify-content-between">
            <div
              className={`fs_20 fw_700 fontFam_poppins d-flex justify-content-end`}
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
                className={`d-flex justify-content-end fs_9 fw_600 fontFam_poppins ${styles.posted_date}`}
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
      )}
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
