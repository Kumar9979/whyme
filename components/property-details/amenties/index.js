import React from "react";
import { useState } from "react";
import styles from "../../../styles/propertydetails/amenties.module.css";

const Amenties = ({ data }) => {
  let type;
  switch (data) {
    case 0:
      type = residential;
      break;
    case 1:
      type = PlotAndLand;
      break;
    case 2:
      type = OfficeSpace;
      break;
    case 3:
      type = CommercialShop;
      break;
    case 4:
      type = CommercialShop;
      break;
    case 5:
      type = Gowdown;
      break;
    case 6:
      type = IndustrialShed;
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
                <div className="col-lg-4 col-12 ps-0">
                  <ul
                    className={`${styles.amenties_bullet} d-flex align-items-center`}
                  >
                    <li className={`${styles.amenties_list}  ps-2 text-nowrap`}>
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

const residential = [
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

const PlotAndLand = [
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

const OfficeSpace = [
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
const CommercialShop = [
  {
    list: "Jewelry Mart",
  },

  {
    list: "Clothing And Fashion Stores",
  },

  {
    list: "Super Markets",
  },

  {
    list: "Department Store",
  },

  {
    list: "Grocery Shop",
  },
  {
    list: "Clinics And Polyclinics",
  },
  {
    list: "Chemist And Medical Store",
  },
 
  {
    list: "Nursing Home",
  },
  {
    list: "Optician",
  },
 
];
const Gowdown = [
  {
    list: "Godown For Any Dry Storage",
  },

  {
    list: "Distribution Center",
  },

  {
    list: "Godown For Cold Storage",
  },

  {
    list: "Godown With Climate Control",
  },
 
];
const IndustrialShed = [
  {
    list: "The Production Of Power",
  },

  {
    list: "Manufacturing Industries",
  },

  {
    list: "Raw Materials Mining Industries",
  },

  {
    list: "Textile Industries",
  },
  {
    list: "Petroleum Products Industries",
  },
  {
    list: "Wood And Paper Products",
  },
 
];

