import React, { useEffect, useState } from "react";
import backIcon from "../../assets/icons/back-icon.svg";
import Image from "next/image";
import styles from "../../styles/myproperties/propertyStatistics.module.css";
import Luxuries from "../../assets/images/luxuries-image.png";
import Luxuries_mobile from "../../assets/images/luxuries-mobile-image.png";
import square from "../../assets/icons/sqft-new.svg";
import bathroom from "../../assets/icons/bathroom-new.svg";
import furniture from "../../assets/icons/furnish-new.svg";
import floor from "../../assets/icons/floor-new.svg";
import facing from "../../assets/icons/face-new.svg";
import transaction from "../../assets/icons/transaction-new.svg";
import Delete from "../../assets/icons/delete.svg";
import Edit from "../../assets/icons/edit-icon.svg";
import Location from "../../assets/icons/location-icon.svg";
import Tick from "../../assets/icons/tick-icon.svg";

const ApartmentCard = () => {
  const [ReadLess, setReadLess] = useState(false);

  const text = ` Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Diam. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Diam. `;
  const allText = ReadLess === true ? text : text.slice(0, 122);

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobile(true);
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`d-flex justify-content-center`}>
      <div className={`${styles.abcd} `}>
        <div
          className={`${styles.back_icon} d-flex justify-content-start ps-2 ps-lg-4 pt-lg-2`}
        >
          <span className={`${styles.back_ttt}`}>
            {" "}
            <Image src={backIcon} />
            <span
              className={`${styles.back_text} ms-2 fs_15 fw_500 fontFam_poppins`}
            >
              Back
            </span>{" "}
          </span>
        </div>
        <span
          className={`${styles.property_heading} color_cloudBurst ps-2 ps-lg-4 fs_22 fw_500 fs_sm_18 fontFam_poppins`}
        >
          Property Statistics
        </span>
        <hr />
        <div
          className={`${styles.card} d-flex justify-content-center px-2 pt-2 px-lg-5`}
        >
          <div className={`${styles.card_body} pt-2  position-relative`}>
            <div className="">
              <div className="row gx-0 ">
                <div className="col-md-3">
                  {mobile ? (
                    <div
                      className={`${styles.luxuries_image_mobile} card-img px-2 text-center `}
                    >
                      <Image src={Luxuries_mobile} layout="responsive" />
                    </div>
                  ) : (
                    <div className={`${styles.luxuries_image} px-2`}>
                      <Image src={Luxuries} />
                    </div>
                  )}
                </div>
                {mobile === true ? (
                  <>
                    <div className="col-md-3 ">
                      <div className={`d-none d-md-block`}>
                        <div
                          className={`${styles.verified} d-flex  px-2 pb-1  `}
                        >
                          <div className={`${styles.tick_icon}`}>
                            <Image src={Tick} />
                          </div>
                          <div>
                            <span
                              className={`${styles.verified_text} ms-1 fs_12 fw_500 fontFam_poppins`}
                            >
                              Verified
                            </span>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`d-flex justify-content-between h-100 flex-column `}
                      >
                        <span
                          className={`${styles.rupee_text} fontFam_poppins text-md-end mt-auto pb-lg-4 pe-3 fontFam_poppins color_cloudBurst fs_25 fw_600 ps-2 ps-lg-0 pt-3 pt-lg-0`}
                        >
                          ₹ 30 Lac
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6 ">
                      <div
                        className={`${styles.flat_heading} color_black fontFam_poppins pt-2 pt-lg-0 fs_17 fs_sm_15 fw_500 ps-2 ps-lg-1 `}
                      >
                        2BHK flat in Vijayanagar, Mysuru
                      </div>
                      <div className={`d-flex mb-lg-3 ps-2 ps-lg-1 ms-lg-0`}>
                        <span className="">
                          <Image
                            src={Location}
                            className={`${styles.address_icon} `}
                          />
                        </span>
                        <span
                          className={`${styles.address_heading} ms-1 fs_14 fs_sm_12 fw_400 fontFam_poppins`}
                        >
                          2Nd Floor, Dejgow Building, Kannada Sahithya Parishath
                          Rd, Mysuru, Karnataka 570017
                        </span>
                      </div>

                      <div
                        className={`${styles.flat_details} container d-none d-md-block`}
                      >
                        <div>
                          <div className={`container-fluid `}>
                            <div className="row gx-0 ms-2">
                              {ameneties.map((item, index) => {
                                return (
                                  <div className={`col-4 d-flex mb-3`}>
                                    <div className={`${styles.imageContainer}`}>
                                      <Image
                                        className={`${styles.cards_images}`}
                                        src={item.image}
                                        alt=""
                                        layout="fixed"
                                        width={30}
                                        height={30}
                                      />
                                    </div>

                                    <div className="d-flex flex-column">
                                      <div
                                        className={`${styles.super_area} d-inline-block text-truncate ms-3 fs_10 fw_500`}
                                      >
                                        {item.heading}
                                      </div>
                                      <div
                                        className={`${styles.super_area_sub} ms-3 fs_10 fw_500`}
                                      >
                                        {item.amenity}
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className={`container-fluid `}>
                            <div className="row gx-0 ms-2">
                              {ameneties2.map((item, index) => {
                                return (
                                  <div className={`col-4 d-flex mb-3`}>
                                    <div className={`${styles.imageContainer}`}>
                                      <Image
                                        className={`${styles.cards_images}`}
                                        src={item.image}
                                        alt=""
                                        layout="fixed"
                                        width={30}
                                        height={30}
                                      />
                                    </div>

                                    <div className="d-flex flex-column">
                                      <span
                                        className={`${styles.super_area} d-inline-block text-truncate ms-3 fs_10 fw_500`}
                                      >
                                        {item.heading}
                                      </span>
                                      <span
                                        className={`${styles.super_area_sub} ms-3 fs_10 fw_500`}
                                      >
                                        {item.amenity}
                                      </span>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-10 ps-2 ps-lg-1 d-none d-md-block">
                        <div
                          className={`${styles.lorem_text} fs_12 fw_600 fontFam_poppins color_cloudBurst`}
                        >
                          {allText}
                          <button
                            className={`${styles.readmore_btn}`}
                            onClick={() => setReadLess(!ReadLess)}
                          >
                            {ReadLess === true ? "Read less" : "...Read more"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-md-6 ">
                      <div
                        className={`${styles.flat_heading} color_black fontFam_poppins pt-2 pt-lg-0 fs_17 fs_sm_15 fw_500 ps-2 ps-lg-1 `}
                      >
                        2BHK flat in Vijayanagar, Mysuru
                      </div>
                      <div className={`d-flex mb-3 ps-2 ps-lg-1 ms-lg-0`}>
                        <span className="">
                          <Image
                            src={Location}
                            className={`${styles.address_icon} `}
                          />
                        </span>
                        <span
                          className={`${styles.address_heading} ms-1 fs_14 fs_sm_12 fw_400 fontFam_poppins `}
                        >
                          2Nd Floor, Dejgow Building, Kannada Sahithya Parishath
                          Rd, Mysuru, Karnataka 570017
                        </span>
                      </div>

                      <div
                        className={`${styles.flat_details} container d-none d-md-block`}
                      >
                        <div>
                          <div className={`container-fluid `}>
                            <div className="row gx-0 ms-2">
                              {ameneties.map((item, index) => {
                                return (
                                  <div className={`col-4 d-flex mb-3`}>
                                    <div className={`${styles.imageContainer}`}>
                                      <Image
                                        className={`${styles.cards_images}`}
                                        src={item.image}
                                        alt=""
                                        layout="fixed"
                                        width={30}
                                        height={30}
                                      />
                                    </div>

                                    <div className="d-flex flex-column">
                                      <div
                                        className={`${styles.super_area} d-inline-block text-truncate ms-3 fs_10 fw_500`}
                                      >
                                        {item.heading}
                                      </div>
                                      <div
                                        className={`${styles.super_area_sub} ms-3 fs_10 fw_500`}
                                      >
                                        {item.amenity}
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className={`container-fluid `}>
                            <div className="row gx-0 ms-2">
                              {ameneties2.map((item, index) => {
                                return (
                                  <div className={`col-4 d-flex mb-3`}>
                                    <div className={`${styles.imageContainer}`}>
                                      <Image
                                        className={`${styles.cards_images}`}
                                        src={item.image}
                                        alt=""
                                        layout="fixed"
                                        width={30}
                                        height={30}
                                      />
                                    </div>

                                    <div className="d-flex flex-column">
                                      <span
                                        className={`${styles.super_area} d-inline-block text-truncate ms-3 fs_10 fw_500`}
                                      >
                                        {item.heading}
                                      </span>
                                      <span
                                        className={`${styles.super_area_sub} ms-3 fs_10 fw_500`}
                                      >
                                        {item.amenity}
                                      </span>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-10 ps-2 ps-lg-1 d-none d-md-block">
                        <div
                          className={`${styles.lorem_text} fs_12 fw_600 fontFam_poppins color_cloudBurst`}
                        >
                          {allText}
                          <button
                            className={`${styles.readmore_btn}`}
                            onClick={() => setReadLess(!ReadLess)}
                          >
                            {ReadLess === true ? "Read less" : "...Read more"}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 ">
                      <div className={`d-none d-md-block`}>
                        <div
                          className={`${styles.verified} d-flex  px-2 pb-1  `}
                        >
                          <div className={`${styles.tick_icon}`}>
                            <Image src={Tick} />
                          </div>
                          <div>
                            <span
                              className={`${styles.verified_text} ms-1 fs_12 fw_500 fontFam_poppins`}
                            >
                              Verified
                            </span>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`d-flex justify-content-between h-100 flex-column `}
                      >
                        <span
                          className={`${styles.rupee_text} fontFam_poppins text-md-end mt-auto pb-lg-4 pe-3 fontFam_poppins color_cloudBurst fs_25 fw_600 ps-2 ps-lg-0`}
                        >
                          ₹ 30 Lac
                        </span>
                      </div>
                    </div>  
                  </>
                )}

                <div className={`d-flex justify-content-between mb-2`}>
                  <div
                    className={`${styles.posted_text} d-flex flex-column  ps-2 fs_13 fw_500`}
                  >
                    <span className={`lh-sm`}>Posted On </span>
                    <span className={`lh-sm`}>20 June 2020</span>
                  </div>
                  <div>
                    <div className={`${styles.edit_delete} d-flex `}>
                      <div className={`${styles.icon} d-flex mt-2 `}>
                        <button
                          className={`${styles.edit_btn} px-3 fs_14 fw_500 fontFam_poppins`}
                        >
                          <span className={`${styles.edit_icon} `}>
                            <Image src={Edit} alt="" />
                          </span>{" "}
                          <span className="">Edit</span>
                        </button>
                      </div>
                      <div className={`${styles.delete} d-flex ms-3 me-2 mt-2`}>
                        <button 
                          className={`${styles.delete_btn} px-3 pt-1 pb-1 fs_14 fw_500 fontFam_poppins `}
                        >
                          <span className={`${styles.delete_icon} `}>
                            <Image src={Delete} alt="" 
                            className={``}/>
                          </span>{" "}
                          <span className="">Delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.card}  px-2 pt-3 `}>
          <div className={`${styles.card_body}  pt-2 pt-lg-3 pb-2`}>
            <div className="d-flex  justify-content-between"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;

const ameneties = [
  {
    image: square,
    heading: "Super Area",
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
];

const ameneties2 = [
  {
    image: floor,
    heading: "Floor",
    amenity: "3 out of 15",
  },
  {
    image: facing,
    heading: "Facing",
    amenity: "3",
  },
  {
    image: transaction,
    heading: "Transactions",
    amenity: "Resale",
  },
];
