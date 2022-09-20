import React, { useState } from "react";
import styles from "../../../styles/propertydetails/aboutproperty.module.css";
// import styles from "../styles/propertydetails/aboutproperty.module.css";
import Image from "next/image";
import facing from "../../../assets/images/about-property-images/facing.svg";
// import facing from "../../assets/images/about-property-images/facing.svg";
import floor from "../../../assets/images/about-property-images/floor.svg";
import furniture from "../../../assets/images/about-property-images/furniture.svg";
import bathroom from "../../../assets/images/about-property-images/bathroom.svg";
import transaction from "../../../assets/images/about-property-images/transactions.svg";
import squarearea from "../../../assets/images/about-property-images/sqft.svg";
import bedroom from "../../../assets/images/about-property-images/bedroom.svg";
import cars from "../../../assets/images/about-property-images/car.svg";
import underconstruction from "../../../assets/images/about-property-images/underconstruction.svg";
import boundry from "../../../assets/images/about-property-images/boundry_wall.svg";
import colony from "../../../assets/images/about-property-images/colony.svg";
import construction from "../../../assets/images/about-property-images/construction_done.svg";
import corner from "../../../assets/images/about-property-images/corner_sites.svg";
import floors_allowed from "../../../assets/images/about-property-images/floors_allowed.svg";
import opensides from "../../../assets/images/about-property-images/open_sides.svg";
import western from "../../../assets/images/about-property-images/western.svg";
import Cafetaria from "../../../assets/images/about-property-images/Cafetaria.svg";
import road from "../../../assets/images/about-property-images/road-facing.svg";
const Aboutproperty = ({ data }) => {
  let type;
  switch (data) {
    case 0:
      type = residential;
      break;
    case 1:
      type = PlotandLand;
        break;
    case 2:
      type = officeSpace;
        break;
    case 3:
      type = CommercialShop;
        break;
    case 4:
      type = CommercialShowroom;
        break;
    case 5:
      type = Godown;
        break;
    case 6:
      type = IndustrialShed;
        break;
  }
  const [properties, setProperties] = useState(type);
  // const [properties, setProperties] = useState(data == 1 ? aboutproperties1 : aboutproperties);
  const [readless, setReadless] = useState(false);
  const text = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Know More`;
  const Alltext = readless === true ? text : text.slice(0, 200);
  return (
    <div className={`${styles.aboutproperty} mt-4 p-4`}>
      <h1 className={`${styles.about_property_text}`}>About the Property</h1>
      <hr className={`${styles.about_property_horizontal}`}></hr>
      <div className={`row`}>
        {properties.map((item, index) => {
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
          {readless === true ? "Read Less" : "Know More"}
        </button>
      </p>
    </div>
  );
};

export default Aboutproperty;

const residential = [
  { image: bedroom, heading: "Bedroom", amenity: "3" },
  {
    image: bathroom,
    heading: "Bathrooms",
    amenity: "3",
  },
  {
    image: squarearea,
    heading: "super Area",
    amenity: "2400sqft",
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

const PlotandLand = [
  {
    image: floors_allowed,
    heading: "Floors Allowed",
    amenity: "Floors",
  },
  {
    image: construction,
    heading: "Construction Done",
    amenity: "Yes",
  },
  {
    image: opensides,
    heading: "Open Sides",
    amenity: "2",
  },
  {
    image: boundry,
    heading: "Boundry Wall",
    amenity: "Yes",
  },
  {
    image: colony,
    heading: "Gated Colony",
    amenity: "Yes",
  },
  {
    image: corner,
    heading: "Corner Site",
    amenity: "Yes",
  },
];

const officeSpace = [
  {
    image: squarearea,
    heading: "super Area",
    amenity: "2400sqft",
  },
  {
    image: furniture,
    heading: "Furnishing Status",
    amenity: "Furnished",
  },
  {
    image: western,
    heading: "Washroom",
    amenity: "3 washrooms",
  },
  { image: Cafetaria, heading: "Cafetaria", amenity: "Yes" },
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
const CommercialShop= [
  {
    image: squarearea,
    heading: "super Area",
    amenity: "2400sqft",
  },
  {
    image: furniture,
    heading: "Furnishing Status",
    amenity: "Furnished",
  },
  {
    image: western,
    heading: "Washroom",
    amenity: "3 washrooms",
  },
  {
    image: western,
    heading: "Personal Washroom",
    amenity: "Yes",
  },
  {
    image: floor,
    heading: "Floor",
    amenity: "3 out of 15",
  },
  {
    image: underconstruction,
    heading: "Status",
    amenity: "Ready To Move",
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
    image: corner,
    heading: "Corner Shop",
    amenity: "Yes",
  },
];
const CommercialShowroom = [
  {
    image: squarearea,
    heading: "super Area",
    amenity: "2400sqft",
  },
  {
    image: furniture,
    heading: "Furnishing Status",
    amenity: "Furnished",
  },
  {
    image: western,
    heading: "Washroom",
    amenity: "3 washrooms",
  },
  {
    image: western,
    heading: "Personal Washroom",
    amenity: "Yes",
  },
  {
    image: floor,
    heading: "Floor",
    amenity: "3 out of 15",
  },
  {
    image: underconstruction,
    heading: "Status",
    amenity: "Ready To Move",
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
    image: corner,
    heading: "Corner Shop",
    amenity: "Yes",
  },
  {
    image: road,
    heading: "Main Road Facing",
    amenity: "Yes",
  },
];
const Godown = [
  {
    image: squarearea,
    heading: "super Area",
    amenity: "2400sqft",
  },
  {
    image: furniture,
    heading: "Furnishing Status",
    amenity: "Furnished",
  },
  {
    image: western,
    heading: "Washroom",
    amenity: "3 washrooms",
  },
  {
    image: floors_allowed,
    heading: "Floors Allowed",
    amenity: "Floors",
  },
  {
    image: opensides,
    heading: "Open Sides",
    amenity: "2",
  },
  {
    image: transaction,
    heading: "Transactions",
    amenity: "Resale",
  },
];
const IndustrialShed = [
  {
    image: squarearea,
    heading: "super Area",
    amenity: "2400sqft",
  },
  {
    image: furniture,
    heading: "Furnishing Status",
    amenity: "Furnished",
  },
  {
    image: western,
    heading: "Washroom",
    amenity: "3 washrooms",
  },
  {
    image: floors_allowed,
    heading: "Floors Allowed",
    amenity: "Floors",
  },
  {
    image: floor,
    heading: "Floor",
    amenity: "3 out of 15",
  },
  {
    image: opensides,
    heading: "Open Sides",
    amenity: "2",
  },
  {
    image: underconstruction,
    heading: "Status",
    amenity: "Ready To Move",
  },
  {
    image: transaction,
    heading: "Transactions",
    amenity: "Resale",
  },
  
];
