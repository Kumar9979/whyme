import React from "react";
import Image from "next/image";
import images from "../../assets/images/proptertyimagegrid1.png";
import styles from "../../styles/propertydetails/relatedproperties.module.css";
import likeimage from "../../assets/images/likeimage.svg";
import squarearea from "../../assets/icons/square-area.svg";
import facing from "../../assets/icons/facing.svg";
import floor from "../../assets/icons/floor.svg";
import bathroom from "../../assets/icons/bathroom.svg";

const RelatedProperties = () => {
  return (
    <div>
      <div className={`${styles.related_image} `}>
        <div className={`position-relative`}>
          <Image
            src={images}
            alt="Picture of the author"
            width={600}
            height={400}
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
            className={`${styles.ready_to_move} pt-1 d-flex align-items-center`}
          >
            <i className="ri-map-pin-2-fill "></i>
            <span>Mysuru | Ready To Move</span>
          </div>
          <div className="row mt-1">
            {aboutproperties.map((item, index) => {
              return (
                <div className={`col-6 d-flex mb-2`}>
                  <Image
                    src={item.image}
                    alt="Picture of the author"
                    width={10}
                    height={10}
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

          <div className={`d-flex justify-content-between`}>
            <div className={`${styles.posted_date}`}>Posted on <br/>20 July 2020</div>
            <div>
                <button className={`${styles.view_details_button} px-3 py-1`}>View Details</button>
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
    image: floor,
    heading: "Floor",
    amenity: "3 out of 15",
  },
  {
    image: facing,
    heading: "Facing",
    amenity: "North",
  },
];
