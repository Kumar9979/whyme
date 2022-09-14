import React from "react";
import styles from "../../../styles/postProperty/propertyfeatures.module.css";

export const AmnetiesGenerator = ({
  list,
  startIndex = 0,
  endIndex = 10,
  formik,
  inputClassName = "",
  labelClassName = "",
}) => {
  const handleCheckbox = (e) => {
    const { checked, name } = e?.target;
    if (e.target.checked) {
      formik?.setFieldValue("Amenities", [
        ...formik?.values?.Amenities,
        e.target.name,
      ]);
    } else {
      formik.setFieldValue(
        "Amenities",
        formik?.values?.Amenities?.filter((item) => item !== e.target.name)
      );
    }
  };
  return list?.map((item, i) => {
    if (i >= startIndex && i <= endIndex) {
      return (
        <div
          key={item}
          className={`form-check me-4 ${styles.margin_bottom} ${inputClassName}`}
        >
          <input
            className="form-check-input cursor_pointer rounded-0 mt-2 "
            type="checkbox"
            id={item}
            name={item}
            onChange={handleCheckbox}
            checked={formik?.values?.Amenities?.includes(item)}
          />
          <label
            className={`${labelClassName} form-check-label mt-1 text-nowrap ms-2 fontFam_poppins fw_500 `}
            htmlFor={item}
          >
            {item}
          </label>
        </div>
      );
    }
  });
};

export const IndustrialPlotSuitableList = [
  "Commercial Constructions",
  "Industrial Construction",
  "Highway Access",
  "Main Road Access",
  "Electricity Line",
];
export const CommercialPlotSuitableList = [
  "Any Constructions",
  "Industrial Construction",
];
export const CommercialIndustrialShed = [
  "Industries For The Production Of Power",
  "Manufacturing Industries",
  "Raw Materials Mining Industries",
  "Textile Industries",
  "Petroleum Products Industries",
  "Industries Of Wood And Paper Products",
];
export const WareHouse = [
  "Godown For Any Dry Storage",
  "Distribution Center",
  "Godown For Cold Storage",
  "Godown With Climate Control",
];
export const ShowRoom = [
  "Jewelry Mart",
  "Car/ Vehicle Showroom",
  "Super Markets",
  "Restaurant/ Diners",
  "Vehicle Showroom",
  "Multi Bran Showroom",
  "Fashion Apparel Showroom",
  "Nursing Home",
  "Optician",
  "Stationery",
  "Beauty Parlor/Hairdresser",
  "Book Shop",
  "Pet Shop/ Pet Clinic",
  "Butcher Shop",
  "Gyms",
];
export const ShopList = [
  "Jewelry Mart",
  "Clothing And Fashion Stores",
  "Super Markets",
  "Department Store",
  "Grocery Shop",
  "Clinics And Polyclinics",
  "Chemist And Medical Store",
  "Nursing Home",
  "Optician",
  "Stationery",
  "Beauty Parlor/Hairdresser",
  "Book Shop",
  "Pet Shop/ Pet Clinic",
  "Butcher Shop",
  "Gyms",
];
export const OfficeList = [
  "Private Parking Space",
  "Guest Parking Spaces",
  "Play Ground",
  "Sauna Steam Room",
  "Hardwood Floors",
  "Pet Room",
  "Lounge Area",
  "Garden Area",
];
export const ResidentialFlatList = [
  "Elevators/Lifts",
  "Guest Parking Spaces",
  "Gym",
  "CCTV Surveillance",
  "Swimming Pool",
  "Play Grounds",
  "Kids Play Area",
  "Community Clubhouse",
  "Garden",
  "Pet Washing Stations",
  "Rooftop Lounge Areas",
  "Electronic Vehicle Charging Points",
  "Barbecue Areas"
];
export const ResidentialhomeList = [
  "Private Parking Space",
  "Guest Parking Spaces",
  "Play Grounds",
  "Sauna Steam Room",
  "Hardwood Floors",  
  "Pet Room",
  "Lounge Area",
  "Garden Area",
  
];
export const ResidentialvillaList = [
  "Private Parking Space",
  "Guest Parking Spaces",
  "Play Ground",
  "Sauna Steam Room",
  "Rooftop Lounge Areas",  
  "Yoga Meditation Area",
  "Kids Play Area",
  "Hardwood Floors",
  "gym", 
  "BBQ Lounge Area",
  "Pet Room",
  "Swimming Pool",  
  "Lounge Area",
  "Garden Area",
  "Electric Car Charging Stations",
  "Barbecue Areas",
  "Pet Wash Station"
  
];
export const ResidentiallandList = [
  "Basic Amenities",
  "Underground Drainage System",
  "Highway Access",
  "Main Road Access",
  "Electricity Line"
  
  
];

