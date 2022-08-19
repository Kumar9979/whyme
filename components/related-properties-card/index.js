import React from "react";
import Image from "next/image";
import images from "../../assets/images/proptertyimagegrid1.png";
import styles from "../../styles/propertydetails/relatedproperties.module.css";
import likeimage from "../../assets/images/likeimage.svg"

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
      </div>
    </div>
  );
};

export default RelatedProperties;
