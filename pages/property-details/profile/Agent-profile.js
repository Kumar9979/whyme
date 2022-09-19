import React, { useRef, useState, useEffect } from "react";
import styles from "../../../styles/propertydetails/profile/propertyprofile.module.css";

import PropertyReview from "../../../components/property-details/propertydetails_profile/Agent-profile/ProfileReview";
import Profilehead from "../../../components/property-details/propertydetails_profile/Agent-profile/profile-header/ProfileheadContainer";
import OtherProperties from "../../../components/property-details/other-properties/other-properties";
import SimilarProperties from "../../../components/cards/property-details-cards/similar-properties";
import RelatedProperties from "../../../components/cards/property-details-cards/related-properties";

const Agentprofile = () => {
  let n = 2;
  const ref = useRef();
  const onScroll = (scroll) => {
    ref.current.scrollLeft += scroll;
  };
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 992) {
      setMobile(true);
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
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
    <div className={`${styles.container} pb-lg-3 `}>
      <div className={` mt-lg-5 pt-5   mx-lg-4 px-lg-4 mx-md-5 px-md-2 `}>
        <div>
          <div
            className={`${styles.profile_container} pb-lg-2 mt-lg-5 mx-lg-3 px-lg-4 pt-lg-4  mx-md-2 px-md-2 mx-sm-0 px-sm-0 mx-xs-0 px-xs-0 `}
          >
            <div>
              <Profilehead />
            </div>

            <div className={`ms-4 ms-lg-5 ps-lg-3 ms-md-5 ms-sm-5  mt-md-2`}>
              <div className="mt-5 pt-5">
                <div className="pt-5 w-75 mt-md-4">
                  {mobile ? (
                    <div>
                      <div className={`d-flex  p-3  mb-5`}>
                        <div className={`${styles.scrollmenu}  `}>
                          <div
                            ref={ref}
                            className={`${styles.row} d-flex flex-column`}
                          >
                            {[...Array(n)].map((item, index) => {
                              return <RelatedProperties data={0} />;
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={`${styles.similar_properties_width}`}>
                      <div className="d-flex justify-content-center">
                        <SimilarProperties
                          plot={0}
                          type={"2BHK Villa in Vijayanagar, Mysuru"}
                        />
                      </div>
                      <div className="d-flex justify-content-center">
                        <SimilarProperties
                          plot={0}
                          type={"2BHK Villa in Vijayanagar, Mysuru"}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-5">
                <PropertyReview />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agentprofile;
