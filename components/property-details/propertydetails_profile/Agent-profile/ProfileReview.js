import React, { useEffect, useState } from "react";
import styles from "../../../../styles/propertydetails/profile/ProfileReview.module.css";
import Image from "next/image";
import star from "../../../../assets/images/star.svg";
import profile from "../../../../assets/images/property-details/profile.png";
import { FaStar } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";

const colors = {
  orange: "#FFBA5A",
  grey: "#DBE9F2",
};

const PropertyReview = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const formik = useFormik({
    // enableReinitialize: true,
    initialValues: {
      review: "",
    },
    validationSchema: Yup.object({
      review: Yup.string().required(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);

      resetForm();
    },
  });
  console.log(formik.values);

  return (
    <div className="mt-5   ">
      <div className={`${styles.review_container} mt-5`}>
        <div className="  d-lg-flex d-md-flex d-sm-flex align-items-center justify-content-start  ">
         
            <span
              className={`${styles.reviewtext} col- text-nowrap fw_500 me-lg-3 me-md-3 fs_sm_16  me-sm-3 me-1 `}
            >
              Review & Rating
            </span>
          
          <div className=" col- d-flex align-items-center mt-lg-1 mt-md-1 mt-sm-1 mt-1 ">
            <Image src={star} alt="Picture of the author" />
            <span
              className={`${styles.reviewrating_number}  fs_24 fw_400 ms-lg-1  ms-md-1 ms-sm-1 ms-0`}
            >
              4.7
              <span
                className={`${styles.reviewrating_text} ms-md-1 ms-sm-1 ms-1 fontFam_poppins fs_22 fw_400`}
              >
                Ratings
                <span
                  className={`${styles.reviewcount} fs_22 ms-lg-1 ms-md-1 ms-sm-1 ms-1 color_cloudBurst`}
                >
                  (236)
                </span>
              </span>
            </span>
          </div>
        </div>
        <div
          className={`mt-lg-4 mt-md-3 mt-sm-3 mt-3  d-flex align-items-center `}
        >
          <div style={starstyles.stars}>
            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  className={`${styles.stars} mx-lg-2 px-lg-0 mx-md-2 px-md-0 mx-sm-2 px-sm-0 mx-2 px-`}
                  onClick={() => handleClick(index + 1)}
                  cls
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  color={
                    (hoverValue || currentValue) > index
                      ? colors.orange
                      : colors.grey
                  }
                  style={{
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className={`mt-lg-4 mt-md-4 mt-sm-4 mt-4`}>
          <form onSubmit={formik.handleSubmit}>
            <label className=" fs_20 fw_500 fontFam_poppins ">Review</label>
            <br />
            <textarea
              className={`${styles.reviewtextarea} my-lg-2 my-ms-3 my-sm-2 my-2 fs_18 `}
              placeholder="Write your review here"
              name="review"
              value={formik.values.review}
              onChange={formik.handleChange}
            ></textarea>
            <br />
            <button
              className={`${styles.review_submit} fs_17 my-3`}
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
        <div>
          <div>
            <div
              className={`${styles.review_card} my-lg-3 py-lg-3 my-md-3 py-md-3 my-sm-3 py-sm-3 my-3 py-3 `}
            >
              <div
                className={`${styles.review_cardhead} d-flex justify-content-between ms-lg-3 `}
              >
                <div className="  ">
                  <div className="d-flex justify-content-start ms-1">
                    <div >
                      <Image
                        src={profile}
                        alt="Picture of the author"
                        width={65}
                        height={65}
                        className={`${styles.review_profile}`}
                      />
                    </div>
                    <div className="ms-lg-2  ms-md-2 ms-sm-2 ms-2  ">
                      <span
                        className={`${styles.profilename} fs_24 fw_500 fontFam_poppins`}
                      >
                        {name.map((item, index) => {
                    return <span className="">{item}</span>;
                  })}
                      </span>
                      <br />
                      <div className="d-flex align-items-center ">
                        <Image
                          src={star}
                          alt="Picture of the author"
                          className={` `}
                        />
                        <span
                          className={`${styles.hiderating_number}  fs_16 fw_400 ms-1 `}
                        >
                          4.7
                          <span
                            className={`${styles.hiderating_number} ms-1 fontFam_poppins fs_14 fw_400`}
                          >
                            Ratings
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <span
                  className={`${styles.reviewdate} mx-lg-3 my-lg-2 mx-md-3 my-md-2 mx-sm-3 my-sm-2 mx-1 my-1 `}
                >
                  3 days ago
                </span>
              </div>
              <div className="mx-lg-3 my-lg-2">
                <span>
                  {data.map((item, index) => {
                    return <div className="">{item}</div>;
                  })}
                </span>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const starstyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
};

export default PropertyReview;
const data = [
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
];
const name = [
  "Rohit",
];

