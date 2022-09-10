import { React, useRef, useState, useEffect } from "react";
import styles from "../../../styles/profile/sidebar-pages/my-properties.module.css";
import view from "../../../assets/icons/profile-icons/view.svg";
import Image from "next/image";
import ProfileRelatedProperties from "../../cards/profile-pages-cards/profile-related-properties";
import VerifiedProperties from "../../cards/profile-pages-cards/verified_card";
import UnderReviewProperties from "../../cards/profile-pages-cards/under_review_properties_card";
import RejectedProperties from "../../cards/profile-pages-cards/rejected-properties";

const SentProperties = () => {
  let n = 10;
  const ref = useRef();
  const onScroll = (scroll) => {
    ref.current.scrollLeft += scroll;
  };
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
    <div className="d-flex h-100 flex-column">
      <div className={`mt-3`}>
        {mobile ? (
          <div className="d-flex justify-content-center">
            <div className={`row  mb-5 `}>
              <div className={`${styles.scrollmenu}  `}>
                <div ref={ref} className={`${styles.row}`}>
                  <div>
                    <div className="mb-4 m-2 d-flex justify-content-center">
                      <ProfileRelatedProperties />
                    </div>
                  </div>

                  <div className="mb-4 m-2 d-flex justify-content-center">
                    <ProfileRelatedProperties />
                  </div>
                  <div>
                    <div className="mb-4 m-2 d-flex justify-content-center">
                      <ProfileRelatedProperties />
                    </div>
                  </div>
                  <div className="mb-4 m-2 d-flex justify-content-center">
                    <ProfileRelatedProperties />
                  </div>
                  <div className="mb-4 m-2 d-flex justify-content-center">
                    <ProfileRelatedProperties />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={`${styles.scrollmenu} `}>
            <div ref={ref} className={`${styles.row}`}>
              <div>
                <div className={`${styles.width_properties} mb-0`}>
                  <VerifiedProperties housetype="2BHK flat in Vijayanagar, Mysuru" />
                </div>
              </div>
              <div>
                <div className={`${styles.width_properties} mb-0`}>
                  <UnderReviewProperties housetype="2BHK Villa in Vijayanagar, Mysuru" />
                </div>
                <div className={`${styles.width_properties} mb-0`}>
                  <RejectedProperties housetype="2BHK Villa in Vijayanagar, Mysuru" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SentProperties;

const dates = [
  {
    date: "Yesterday",
  },
  {
    date: "26 Aug 2022",
  },
  {
    date: "26 Aug 2022",
  },
  {
    date: "26 Aug 2022",
  },
];
