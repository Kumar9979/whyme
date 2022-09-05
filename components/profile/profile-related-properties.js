import React, { useEffect, useState } from "react";
import saved from "../../assets/icons/saved.svg";
import save from "../../assets/icons/save.svg";
import Image from "next/image";
import home from "../../assets/images/home.png";
import styles from "../../styles/profile/profile-related.module.css";
import likeimage from "../../assets/images/likeimage.svg";
import squarearea from "../../assets/images/about-property-images/sqft.svg";
import bathroom from "../../assets/images/about-property-images/bathroom.svg";
import furniture from "../../assets/images/about-property-images/furniture.svg";
const ProfileRelatedProperties = () => {
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
      <div className={`${styles.related_image} mb-1 p-1 mb-lg-2`}>
        <div className={`position-relative`}>
          <Image
            src={home}
            alt="Picture of the author"
            width={900}
            height={600}
            className={`${styles.property_photo}`}
            priority
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
            2 BHK flat in Vijayanagar, Mysuru
          </div>
          <div className={`${styles.ready_to_move} pt-1 d-flex `}>
            <i className="ri-map-pin-2-fill "></i>
            <span className={`${styles.text_elipses}`}>
              2Nd Floor, Dejgow Building, Kannada Sahithya <br />
              Parishath Rd, Mysuru - 570017
            </span>
          </div>
          <div className="row mt-2">
            {aboutproperties.map((item, index) => {
              return (
                <div className={`col-4 d-flex mb-2 alignn-items-center`}>
                  <Image
                    src={item.image}
                    alt="Picture of the author"
                    width={20}
                  />
                  <div className="d-flex flex-column ps-1 pt-2">
                    <span className={`${styles.card_heading}`}>
                      {item.heading}
                    </span>
                    <span className={`${styles.card_amenity}`}>
                      {item.amenity}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={`d-flex justify-content-between mt-2`}>
            <div className={`${styles.posted_date}`}>
              Posted on <br />
              20 July 2020
            </div>
            <div>
              <button className={`${styles.view_details_button} px-3 py-1`}>
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default ProfileRelatedProperties;

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
    heading: "Floor",
    amenity: "3 out of 15",
  },
];
