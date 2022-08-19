import React from "react";
import styles from "../../styles/propertydetails/imagereview.module.css";
import reviewimage1 from "../../assets/images/imagereview/reviewimage1.svg";
import reviewimage2 from "../../assets/images/imagereview/reviewimage2.svg";
import reviewimage3 from "../../assets/images/imagereview/reviewimage3.svg";
import reviewimage4 from "../../assets/images/imagereview/reviewimage4.svg";
import people from "../../assets/images/imagereview/people.png";
import Image from "next/image";

const Review = () => {
  return (
    <div className={`row mt-1 `}>
      <div className="col-6 ">
        <div className="d-flex ">
          <div>
            <Image src={reviewimage1} alt="Picture of the author" />
          </div>
          <div className="px-1">
            {" "}
            <Image src={reviewimage2} alt="Picture of the author" />
          </div>
          <div className="px-1">
            <Image src={reviewimage3} alt="Picture of the author" />
          </div>
          <div className="px-1">
            <Image src={reviewimage4} alt="Picture of the author" />
          </div>
        </div>
      </div>
      <div className="col-6 ">
        <div className="row ">
          <div className={`col-12 col-lg-6 ${styles.image_posted}`}>
            <p className="mb-0 d-flex justify-content-end">
              Posted On 20 June 2020
            </p>{" "}
            <span className="d-flex justify-content-end">By Amal Sabu</span>{" "}
          </div>
          <div className={`col-lg-6 col-12  `}>
            <div className={`${styles.contact_button} ps-1 pt-1 `}>
              <div className="d-flex align-items-center ">
                <div className="" >
                  <Image
                    src={people}
                    alt="Picture of the author"
                    width={30}
                    height={30}
                    className={`${styles.people} `}
                  />
                </div>
                <div className={`${styles.contact_text} ps-3`}>Contact</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
