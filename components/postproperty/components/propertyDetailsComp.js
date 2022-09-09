import React from "react";
import styles from "../../../styles/postProperty/propertydetails.module.css";
import LocationAndSearch from "../layout/locationAndSearch";

const PropertyDetailComp = () => {
  return (
    <div className={`${styles.propertydetail_main__container} col-8 bg-white`}>
      <h1 className={`color_light_blue fs_20`}>Property Details</h1>
      <div className={`w-75 `}>
        <h5 className={`fs_16`}>Select Your Property In Map</h5>

        <LocationAndSearch />

        <div>
          <label htmlFor="Address" className={`${styles.labelText} mb-1`}>
            Address
          </label>
          <textarea
            type="text"
            className={`${styles.address} form-control mb-4`}
            id="Address"
            placeholder="Enter your property address"
            name="Address"
            // value={formik.values.Address}
            // onChange={formik.handleChange}
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="BuildingName"
            className={`${styles.labelText} form-label pb-1`}
          >
            Project/Society Name
          </label>
          <input
            type="text"
            className={`${styles.building} form-control mb-3`}
            id="BuildingName"
            placeholder="Project/Society Name"
            name="BuildingName"
            // value={formik.values.BuildingName}
            // onChange={formik.handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailComp;
