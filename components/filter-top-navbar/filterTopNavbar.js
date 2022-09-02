import React, { useState } from "react";
import styles from "../../styles/filter-top-navbar/filterTopNavbar.module.css";
import DropDownImage from "../../assets/icons/dropdown.svg";
import Image from "next/image";
import { Space } from "antd";
import Home from "../../assets/icons/home-new.svg";
import Dropdown from "../dropdown/dropdown";
import AddIcon from "../../assets/icons/add-icon.svg";
import TickIcon from "../../assets/icons/tick-icon.svg";
import PlacesAutocomplete from "../../pages/post-property/property-details/placesAutocomplete";
import PlacesAutocompleteSearch from "./placesAutoCompeleteSearch";
import PropertyLocation from "../modal-location";
import DropdownPriceRange from "../dropdown/dropdown-price-range";
import DropdownBedroom from "../dropdown/dropdown-bedroom";
import DropdownPosted from "../dropdown/dropdown-posted";
import PriceRanger from "../dropdown/price-ranger";

const FilterTopNavbar = () => {
  const [label, setLabel] = useState("");
  const [data, setData] = useState([]);

  const handleClick = (text) => {
    data.includes(text) ? null : setData([...data, text]);
  };

  const onTagRemove = (index) => {
    setData([...data.slice(0, index), ...data.slice(index + 1, data.length)]);
  };



  const [dataBedrooom, setDataBedroom] = useState([]);
  const handleClickBedroom = (text) => {
    dataBedrooom.includes(text) ? null : setDataBedroom([...dataBedrooom, text]);
  };
  const onTagRemoveBedroom = (index) => {
    setDataBedroom([...dataBedrooom.slice(0, index), ...dataBedrooom.slice(index + 1, dataBedrooom.length)]);
  };

  const [dataPostedBy, setDataPostedBy] = useState([]);
  const handleClickPostedBy = (text) => {
    dataPostedBy.includes(text) ? null : setDataPostedBy([...dataPostedBy, text]);
  };
  const onTagRemovePostedBy = (index) => {
    setDataPostedBy([...dataPostedBy.slice(0, index), ...dataPostedBy.slice(index + 1, dataPostedBy.length)]);
  };

  const [dataPrice, setDataPrice] = useState([]);
  const handleClickPrice = (text) => {
    dataPrice.includes(text) ? null : setDataPrice([...dataPrice, text]);
  };

  console.log(data);
  return (
    <div className={`${styles.filter_navbar} px-5`}>
      <div className={`d-flex justify-content-start`}>
        <div>
          <div className="dropdown fontFam_poppins">
            <button
              className={`${styles.buy_btn} btn  my-2 py-2`}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <Space
                className={`${styles.buy_text} fs_14 fw_500 fontFam_poppins`}
              >
                {" "}
                Buy{" "}
              </Space>

              <div
                className={`${styles.dropdown_icon} ms-4 d-flex align-items-center`}
              >
                <Image src={DropDownImage} />
              </div>
            </button>
            <div className="dropdown-menu p-2 fontFam_poppins">
              <div className={`d-flex `}>
                <button className={`${styles.second_row_button}`}>
                  <span>Sell</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <PlacesAutocompleteSearch/>              

        <div className="fontFam_poppins ms-2">
          <Dropdown placeholder={data} onRemoveTag={onTagRemove}>
            <span className={`${styles.property_heading_text} fs_12 fw_500 `}>Residential</span>

            <div className={`d-flex mt-1`}>
              {property.map((item, index) => {
                return (
                  <button
                    onClick={(e) => handleClick(item.propertyType)}
                    className={
                      data.includes(item.propertyType)
                        ? `${styles.second_row_button_after} fontFam_poppins fs_12 fw_500 me-2`
                        : `${styles.second_row_button} me-2`
                    }
                  >
                    <span
                      className={
                        data.includes(item.propertyType)
                          ? `${styles.property_types_text} fontFam_poppins fs_12 fw_500 `
                          : `${styles.property_types_text_before} fs_12 fw_500 `
                      }
                    >
                      <Image
                        src={
                          data.includes(item.propertyType) ? TickIcon : AddIcon
                        }
                        width={10}
                        height={10}
                      />
                      <span className="ps-1 text-nowrap"> {item.propertyType}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className={`mt-2 ${styles.property_heading_text} fs_12 fw_500`}>Commercial</div>
            <div className={`d-flex mt-1`}>
              {property2.map((item, index) => {
                return (
                  <button
                    onClick={(e) => handleClick(item.propertyType2)}
                    className={
                      data.includes(item.propertyType2)
                        ? `${styles.second_row_button_after} fontFam_poppins fs_12 fw_500 me-2`
                        : `${styles.second_row_button} me-2`
                    }
                  >
                    <span
                      className={
                        data.includes(item.propertyType2)
                          ? `${styles.property_types_text} fontFam_poppins fs_12 fw_500 `
                          : `${styles.property_types_text_before} fs_12 fw_500 `
                      }
                    >
                      <Image
                        src={
                          data.includes(item.propertyType2) ? TickIcon : AddIcon
                        }
                        width={10}
                        height={10}
                      />
                      <span className="ps-1 text-nowrap"> {item.propertyType2}</span>
                    </span>
                  </button>
                );
              })}
            </div>
            <div className={`d-flex mt-2`}>
              {property3.map((item, index) => {
                return (
                  <button
                    onClick={(e) => handleClick(item.propertyType3)}
                    className={
                      data.includes(item.propertyType3)
                        ? `${styles.second_row_button_after} fontFam_poppins fs_12 fw_500 me-2`
                        : `${styles.second_row_button} me-2`
                    }
                  >
                    <span
                      className={
                        data.includes(item.propertyType3)
                          ? `${styles.property_types_text} fontFam_poppins fs_12 fw_500 `
                          : `${styles.property_types_text_before} fs_12 fw_500 `
                      }
                    >
                      <Image
                        src={
                          data.includes(item.propertyType3) ? TickIcon : AddIcon
                        }
                        width={10}
                        height={10}
                      />
                      <span className="ps-1 text-nowrap"> {item.propertyType3}</span>
                    </span>
                  </button>
                );
              })}
            </div>
            <div className={`d-flex mt-2`}>
              {property4.map((item, index) => {
                return (
                  <button
                    onClick={(e) => handleClick(item.propertyType4)}
                    className={
                      data.includes(item.propertyType4)
                        ? `${styles.second_row_button_after} fontFam_poppins fs_12 fw_500 me-2`
                        : `${styles.second_row_button} me-2`
                    }
                  >
                    <span
                      className={
                        data.includes(item.propertyType4)
                          ? `${styles.property_types_text} fontFam_poppins fs_12 fw_500 `
                          : `${styles.property_types_text_before} fs_12 fw_500 `
                      }
                    >
                      <Image
                        src={
                          data.includes(item.propertyType4) ? TickIcon : AddIcon
                        }
                        width={10}
                        height={10}
                      />
                      <span className="ps-1 text-nowrap"> {item.propertyType4}</span>
                    </span>
                  </button>
                );
              })}
            </div>
            <div className={`mt-2 ${styles.property_heading_text} fs_12 fw_500`}>Agriculture</div>
            <div className={`d-flex mt-1`}>
              {property5.map((item, index) => {
                return (
                  <button
                    onClick={(e) => handleClick(item.propertyType5)}
                    className={
                      data.includes(item.propertyType5)
                        ? `${styles.second_row_button_after} fontFam_poppins fs_12 fw_500 me-2`
                        : `${styles.second_row_button} me-2`
                    }
                  >
                    <span
                      className={
                        data.includes(item.propertyType5)
                          ? `${styles.property_types_text} fontFam_poppins fs_12 fw_500 `
                          : `${styles.property_types_text_before} fs_12 fw_500 `
                      }
                    >
                      <Image
                        src={
                          data.includes(item.propertyType5) ? TickIcon : AddIcon
                        }
                        width={10}
                        height={10}
                      />
                      <span className="ps-1 text-nowrap"> {item.propertyType5}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </Dropdown>
        </div>
      
        <div className="fontFam_poppins ms-2">
        <DropdownPriceRange placeholder={dataPrice} >
            <span className={`${styles.property_heading_text} fs_12 fw_500 `}>Select your budget moving Arrows</span>

            <div className={`d-flex mt-1`}>
              
              <PriceRanger/>
              
            </div>
            </DropdownPriceRange>
            </div>
      
        <div className="fontFam_poppins ms-2">
        <DropdownBedroom placeholder={dataBedrooom} onRemoveTag={onTagRemoveBedroom}>
            <span className={`${styles.property_heading_text} fs_12 fw_500 `}>Select number of bedrooms here</span>

            <div className={`d-flex mt-1`}>
              {Bedroom1.map((item, index) => {
                return (
                  <button
                    onClick={(e) => handleClickBedroom(item.Bedroom)}
                    className={
                      dataBedrooom.includes(item.Bedroom)
                        ? `${styles.second_row_button_after} fontFam_poppins fs_12 fw_500 me-2`
                        : `${styles.second_row_button} me-2`
                    }
                  >
                    <span
                      className={
                        dataBedrooom.includes(item.Bedroom)
                          ? `${styles.property_types_text} fontFam_poppins fs_12 fw_500 `
                          : `${styles.property_types_text_before} fs_12 fw_500 `
                      }
                    >
                      <Image
                        src={
                          dataBedrooom.includes(item.Bedroom) ? TickIcon : AddIcon
                        }
                        width={10}
                        height={10}
                      />
                      <span className="ps-1 text-nowrap"> {item.Bedroom}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className={`d-flex mt-1`}>
              {Bedroom2.map((item, index) => {
                return (
                  <button
                    onClick={(e) => handleClickBedroom(item.Bedroom)}
                    className={
                      dataBedrooom.includes(item.Bedroom)
                        ? `${styles.second_row_button_after} fontFam_poppins fs_12 fw_500 me-2`
                        : `${styles.second_row_button} me-2`
                    }
                  >
                    <span
                      className={
                        dataBedrooom.includes(item.Bedroom)
                          ? `${styles.property_types_text} fontFam_poppins fs_12 fw_500 `
                          : `${styles.property_types_text_before} fs_12 fw_500 `
                      }
                    >
                      <Image
                        src={
                          dataBedrooom.includes(item.Bedroom) ? TickIcon : AddIcon
                        }
                        width={10}
                        height={10}
                      />
                      <span className="ps-1 text-nowrap"> {item.Bedroom}</span>
                    </span>
                  </button>
                );
              })}
            </div>
            </DropdownBedroom>
            </div>

            <div className="fontFam_poppins ms-2">
        <DropdownPosted placeholder={dataPostedBy} onRemoveTag={onTagRemovePostedBy}>
            <span className={`${styles.property_heading_text} fs_12 fw_500 `}>Select posted by here</span>

            <div className={`d-flex mt-1`}>
              {PostedBy.map((item, index) => {
                return (
                  <button
                    onClick={(e) => handleClickPostedBy(item.postedBy)}
                    className={
                      dataPostedBy.includes(item.postedBy)
                        ? `${styles.second_row_button_after} fontFam_poppins fs_12 fw_500 me-2`
                        : `${styles.second_row_button} me-2`
                    }
                  >
                    <span
                      className={
                        dataPostedBy.includes(item.postedBy)
                          ? `${styles.property_types_text} fontFam_poppins fs_12 fw_500 `
                          : `${styles.property_types_text_before} fs_12 fw_500 `
                      }
                    >
                      <Image
                        src={
                          dataPostedBy.includes(item.postedBy) ? TickIcon : AddIcon
                        }
                        width={10}
                        height={10}
                      />
                      <span className="ps-1 text-nowrap"> {item.postedBy}</span>
                    </span>
                  </button>
                );
              })}
            </div>
            </DropdownPosted>
            </div>

      </div>
    </div>
  );
};

export default FilterTopNavbar;

const property = [
  {
    propertyType: "Flat",
  },
  {
    propertyType: " House/Villa",
  },
  {
    propertyType: "Plot/Land",
  },
];

const property2 = [
  {
    propertyType2: "Office Space",
  },
  {
    propertyType2: "Shop/Showroom",
  },
];
const property3 = [
  {
    propertyType3: "Warehouse/Godown",
  },
  {
    propertyType3: "Industrial Shed",
  },
];
const property4 = [
  {
    propertyType4: "Industrial Building",
  },
  {
    propertyType4: "Commercial Land",
  },
];
const property5 = [
  {
    propertyType5: "Agriculture Land",
  },
  {
    propertyType5: "Farm House",
  },
];

const Bedroom1 = [
  {
    Bedroom: "Any",
  },
  {
    Bedroom: "1 BHK",
  },
  {
    Bedroom: "2 BHK",
  },
  {
    Bedroom: "3 BHK",
  },
];
const Bedroom2 = [
  {
    Bedroom: "4 BHK",
  },
  {
    Bedroom: "5 BHK",
  },
  {
    Bedroom: "5+ BHK",
  },
];

const PostedBy = [
  {
    postedBy: "Owner",
  },
  {
    postedBy: "Agent",
  },
  {
    postedBy: "Builder",
  },
];