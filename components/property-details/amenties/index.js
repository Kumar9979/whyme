import React from "react";
import { useState } from "react";
import styles from "../../../styles/propertydetails/amenties.module.css";

const Amenties = ({ data }) => {
  let type;
  switch (data) {
    case 0:
      type = amenties;
      break;
    case 1:
      type = amenties1;
      break;
    case 2:
      type = amenties2;
      break;
  }
  const [properties, setProperties] = useState(type);
  return (
    <div className={`${styles.amenties} p-4 mt-4`}>
      <p className={`${styles.amenties_text}`}>Amenities</p>
      <hr className={`${styles.amenties_horizontal}`}></hr>
      <div >
        {
          <div className="row">
            {properties.map((item, index) => {
              return (
                <div className="col-lg-4 col-12 ">
                  <ul
                    className={`${styles.amenties_bullet} d-flex align-items-center`}
                  >
                    <li className={`${styles.amenties_list}  ps-2 `}>
                      {item.list}
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        }
      </div>
    </div>
  );
};

export default Amenties;

const amenties = [
  {
    list: "Elevators/Lifts",
  },

  {
    list: "Swimming Pool",
  },

  {
    list: "Yoga Meditation Area",
  },

  {
    list: " Guest Parking Spaces",
  },

  {
    list: "Gym",
  },

  {
    list: "Pet Room",
  },

  {
    list: "CCTV Surveillance",
  },

  {
    list: "Play Ground",
  },
];

const amenties1 = [
  {
    list: "Basic Amenities",
  },

  {
    list: "Underground Drainage System",
  },

  {
    list: "Highway Access",
  },

  {
    list: "Main Road Access",
  },

  {
    list: "Electricity Line",
  },

  {
    list: "Pet Room",
  },
];
const amenties2 = [
  {
    list: "Private Parking Space",
  },

  {
    list: "Guest Parking Spaces",
  },

  {
    list: "Play Ground",
  },

  {
    list: "Sauna Steam Room",
  },

  {
    list: "Hardwood Floors",
  },

  {
    list: "Pet Room",
  },
  {
    list: "Lounge Area",
  },
  {
    list: "Garden Area",
  },
 
];
