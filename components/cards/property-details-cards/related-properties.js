import React, { useEffect, useState } from "react";
import western from "../../../assets/images/about-property-images/western.svg";

import saved from "../../../assets/icons/saved.svg";
import save from "../../../assets/icons/save.svg";
import Image from "next/image";
import home from "../../../assets/images/home.png";
import styles from "../../../styles/cards/property-details-cards/relatedproperties.module.css";
import likeimage from "../../../assets/images/likeimage.svg";
import squarearea from "../../../assets/images/about-property-images/sqft.svg";
import bathroom from "../../../assets/images/about-property-images/bathroom.svg";
import furniture from "../../../assets/images/about-property-images/furniture.svg";
const RelatedProperties = ({ location, data, }) => {
  let type;
  switch (data) {
    case 0:
      type = aboutproperties;
      break;
    case 1:
      type = aboutproperties1;
      break;
  }
  const [properties, setProperties] = useState(type);
  const [liked, setLiked] = useState(false);
  const [mobile, setMobile] = useState(false);

  const [like, setLike] = useState(false);
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
  const number = 20;
  return (
    <div className="me-4">
      <div className={`${styles.related_image} mb-1 p-2 mb-lg-2 mt-3 ms-2`}>
        <div className={`position-relative`}>
          <Image
            src={home}
            alt="Picture of the author"
            width={900}
            height={600}
            className={`${styles.property_photo}`}
          />
          <div className={`${styles.luxurius} position-absolute`}>
            Luxurious
          </div>
          <div className={`${styles.like_image} position-absolute`}>
            {mobile ? (
              <button
                onClick={() => setLike(!like)}
                className={`${styles.save_image_button} `}
              >
                <Image
                  className="d-flex justify-content-center pt-2"
                  src={like ? save : saved}
                  alt="Picture of the author"
                  width={25}
                  height={25}
                />
              </button>
            ) : (
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
            )}
          </div>
        </div>

        <div className="p-2">
          <div className={`${styles.related_properties_price}`}>₹ 70 Lac</div>
          <div className={`${styles.related_properties_location} `}>
            {location}
          </div>
          <div className={`${styles.ready_to_move} pt-1 d-flex `}>
            <i className="ri-map-pin-2-fill "></i>
            <span className={`${styles.text_elipses}`}>
              2Nd Floor, Dejgow Building, Kannada Sahithya <br />
              Parishath Rd, Mysuru - 570017
            </span>
          </div>
          <div className="row mt-2">
            {properties.map((item, index) => {
              return (
                <div className={`col-4 d-flex mb-2 alignn-items-center`}>
                  <div className="d-flex align-items-center">
                    <div/>
                    <div className=""><Image
                      src={item.image}
                      alt="Picture of the author"
                      width={25}
                    /></div>
                    
                    <div className=" ps-1 ">
                      <span className={`${styles.card_heading} text-nowrap`}>
                        {item.amenity}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={`d-flex justify-content-between mt-2`}>
            <div className={`${styles.posted_date}`}>
              Listed on <br />
              27/sep/2021
            </div>
            <div className="mt-2">
              <button className={`${styles.view_details_button} px-3 py-1`}>
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProperties;

const aboutproperties = [
  {
    image: squarearea,
    amenity: "2400sqft",
  },
  {
    image: bathroom,
    amenity: "3 Bath",
  },

  {
    image: furniture,
    amenity: "3 out of 15",
  },
];
const aboutproperties1 = [
  {
    image: squarearea,
    amenity: "2400sqft",
  },
  {
    image: western,
    amenity: "3 washrooms",
  },

  {
    image: furniture,
    amenity: "3 out of 15",
  },
];
