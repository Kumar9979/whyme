import React from "react";
import styles from "../../styles/myproperties/cardsVTCallbak.module.css"
import EyeIcon from "../../assets/icons/eye-icon.svg"
import Image from "next/image";
import CallBackIcon from "../../assets/icons/callback-icon.svg"

const CardsViewsTotalCallback = () => {
  return (
    <div className="d-flex justify-content-center mt-4 d-none">
        <div className={`${styles.card}`}>
      <div class="container  text-center">
        <div class="row d-flex justify-content-start">
        {ameneties.map((item, index) =>{
            return(
                <div class={` col-lg-3 col-4 `}>
            <div className={`${styles.column}`}>
            <div className={`${styles.card_body} p-1 border bg-light d-lg-flex`}>
            <div className={`${styles.eyeIconContainer}`}>
                <Image
                  className={`${styles.eye_icon} p-lg-1`}
                  src={item.image}
                  alt=""
                  layout="fixed"
                />
              </div>
              <div className="d-lg-flex flex-column me-3">
                <span
                  className={`${styles.eye_text} d-inline-block text-truncate ms-lg-2`}
                >
                  {item.heading}
                </span>
                <span className={`${styles.Eye_subtext} ms-lg-2 me-lg-3 text-start`}>
                  {item.amenity}
                </span>
              </div>
            </div>
            </div>
          </div>
            )
        })
    
        }  
        
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default CardsViewsTotalCallback;

const ameneties = [
    {
        image: EyeIcon,
        heading: "Views Today",
        amenity: "34",
    },
    {
        image: EyeIcon,
        heading: "Total Views",
        amenity: "105",
    },
    {
        image: CallBackIcon,
        heading: "Callbacks Requested",
        amenity: "70",
    },
]