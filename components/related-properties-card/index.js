import React from "react";
import Image from "next/image";
import images from "../../assets/images/proptertyimagegrid1.png";
import styles from "../../styles/propertydetails/relatedproperties.module.css";
import likeimage from "../../assets/images/likeimage.svg";
import squarearea from "../../assets/images/about-property-images/sqft.svg";
import facing from "../../assets/images/about-property-images/facing.svg";
import bathroom from "../../assets/images/about-property-images/bathroom.svg";
import furniture from "../../assets/images/about-property-images/furniture.svg"
const RelatedProperties = () => {
  const number = 20;
  return (
    <div className="me-4">
      <div className={`${styles.related_image} `}>
        <div className={`position-relative`}>
          <Image
            src={images}
            alt="Picture of the author"
            width={900}
            height={600}
            className={``}
          />
          <div className={`${styles.luxurius} position-absolute`}>
            Luxurious
          </div>
          <div className={`${styles.like_image} position-absolute`}>
            <Image
              src={likeimage}
              alt="Picture of the author"
              width={30}
              height={30}
            />
          </div>
        </div>

        <div className="p-2">
          <div className={`${styles.related_properties_price}`}>₹ 70 Lac</div>
          <div className={`${styles.related_properties_location} `}>
            2 BHK flat in Vijayanagar, Mysuru
          </div>
          <div
            className={`${styles.ready_to_move} pt-1 d-flex `}
          >
            <i className="ri-map-pin-2-fill "></i>
            <span>2Nd Floor, Dejgow Building, Kannada Sahithya <br/>Parishath Rd, Mysuru - 570017</span>
          </div>
          <div className="row mt-2">
            {aboutproperties.map((item, index) => {
              return (
                <div className={`col-4 d-flex mb-2`}>
                  <Image
                    src={item.image}
                    alt="Picture of the author"
                    width={20}
                    height={20}
                  />
                  <div className="d-flex flex-column ps-2">
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
    </div>
  );
};

export default RelatedProperties;

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
