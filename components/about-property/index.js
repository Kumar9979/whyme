import React, { useState } from "react";
import styles from "../../styles/propertydetails/aboutproperty.module.css";
import Image from "next/image";
import facing from "../../assets/icons/facing.svg";
import floor from "../../assets/icons/floor.svg";
import furniture from "../../assets/icons/furniture.svg";
import bathroom from "../../assets/icons/bathroom.svg";
import transaction from "../../assets/icons/transaction.svg";
import squarearea from "../../assets/icons/square-area.svg";
import bedroom from "../../assets/images/about-property-images/bedroom.svg";
import cars from "../../assets/images/about-property-images/cars.svg";
import underconstruction from "../../assets/images/about-property-images/underconstruction.svg";

const Aboutproperty = () => {
  const [readless, setReadless] = useState(false);
  const text = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Know More`;
  const Alltext = readless === true ? text : text.slice(0, 200);
  return (
    <div className={`${styles.aboutproperty} mt-5 p-4`}>
      <h1 className={`${styles.about_property_text}`}>About the Property</h1>
      <hr className={`${styles.about_property_horizontal}`}></hr>
      <div className={`row ps-2 ps-lg-5 ps-lg-4`}>
        {aboutproperties.map((item, index) => {
          return (
            <div className={`col-lg-4 col-6 d-flex mb-5`}>
              <Image
                src={item.image}
                alt="Picture of the author"
                width={35}
                height={35}
              />
              <div className="d-flex flex-column ps-2">
                <span className={`${styles.about_property_heading}`}>
                  {item.heading}
                </span>
                <span className={`${styles.about_property_amenity}`}>
                  {item.amenity}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <p className={`${styles.property_comprise_heading}`}>
        What does the property comprise of?
      </p>
      <p className={`${styles.about_readmore_text}`}>
        {Alltext}
        <button
          className={`${styles.about_readmore_button}`}
          onClick={() => setReadless(!readless)}
        >
          {readless === true ? "Know Less" : "Know More"}
        </button>
      </p>
    </div>
  );
};

export default Aboutproperty;

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
  {
    image: bedroom,
    heading: "Bedroom",
    amenity: "3",
  },
  {
    image: underconstruction,
    heading: "Status",
    amenity: "Ready To Move",
  },
  {
    image: cars,
    heading: "Car Parking",
    amenity: "1",
  },
];
