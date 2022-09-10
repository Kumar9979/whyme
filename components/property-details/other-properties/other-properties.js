import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../../styles/propertydetails/other-properties.module.css";
import image from "../../../assets/images/imagereview/people.png";
import star from "../../../assets/images/star.svg";
import arrowleft from "../../../assets/images/arrow_left.svg";
import arrowright from "../../../assets/images/arrow_right.svg";
import seeall from "../../../assets/images/seeall.svg";
import RelatedProperties from "../../cards/property-details-cards/related-properties";
import SimilarProperties from "../../cards/property-details-cards/similar-properties";

const OtherProperties = () => {
  let n = 10;
  const ref = useRef();
  const onScroll = (scroll) => {
    ref.current.scrollLeft += scroll;
  };
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1200) {
      setMobile(true);
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
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
    <div>
      <div className={`${styles.agent_properties} p-4  `}>
        <div className="d-flex justify-content-between align-items-center ">
          <div className={`${styles.agent_properties_text}`}>
            Related Properties
          </div>
          <button
            className={`${styles.seeall_button} d-flex align-items-center `}
          >
            <span>See All </span>
            <span className={`mt-1 ms-2 `}>
              {" "}
              <Image
                src={seeall}
                alt="Picture of the autho"
                width={15}
                height={15}
              />
            </span>
          </button>
        </div>

        <div className="mt-4">
          {mobile ? (
            <div>
              <div className={`row p-3  mb-5`}>
                <div className={`${styles.scrollmenu}  `}>
                  <div ref={ref} className={`${styles.row} d-flex`}>
                    {[...Array(n)].map((item, index) => {
                      return <RelatedProperties />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="d-flex justify-content-center">
                <SimilarProperties />
              </div>
              <div className="d-flex justify-content-center">
                <SimilarProperties />
              </div>
              <div className="d-flex justify-content-center">
                <SimilarProperties data = {1} />
              </div>
              <div className="d-flex justify-content-center">
                <SimilarProperties data = {1} />
              </div>
              <div className="d-flex justify-content-center">
                <SimilarProperties data = {1} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OtherProperties;
