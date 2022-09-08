import { React, useRef, useState, useEffect } from "react";
import styles from "../../../styles/profile/sidebar-pages/recent-activities.module.css";
import view from "../../../assets/icons/profile-icons/view.svg";
import Image from "next/image";
import SimilarProperties from "../../property-details/similar-properties";
import RelatedProperties from "../../property-details/related-properties-card";
import ProfileRelatedProperties from "../profile-related-properties";
import PlotProperties from "./plot-similar-properties";

const RecentView = () => {
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
                    <h1
                      className={`fs_15 fw_500 fontFam_poppins  ${styles.searched_dates} py-2 px-2 mb-3`}
                    >
                      Yesterday
                    </h1>
                    <div className="mb-4 m-2 d-flex justify-content-center">
                      <ProfileRelatedProperties />
                    </div>
                  </div>

                  <div className="mb-4 m-2 d-flex justify-content-center">
                    <ProfileRelatedProperties />
                  </div>
                  <div>
                    <h1
                      className={`fs_15 fw_500 fontFam_poppins  ${styles.searched_dates} py-2 px-2 mb-3`}
                    >
                      26 Aug 2022
                    </h1>
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
                <h1
                  className={`fs_15 fw_500 fontFam_poppins  ${styles.searched_dates} py-2 px-2 mb-3`}
                >
                  Yesterday
                </h1>
                <div className={`${styles.width_properties} ms-3`}>
                  <SimilarProperties />
                </div>
              </div>
              <div>
                <h1
                  className={`fs_15 fw_500 fontFam_poppins  ${styles.searched_dates} py-2 px-2 mb-3`}
                >
                  26 Aug 2022
                </h1>
                <div className={`${styles.width_properties} mb-0 ms-3`}>
                  <PlotProperties/>
                </div>
                <div className={`${styles.width_properties} mb-0 ms-3`}>
                  <PlotProperties />
                </div>
                <div className={`${styles.width_properties} mb-0 ms-3`}>
                  <PlotProperties />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentView;

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
