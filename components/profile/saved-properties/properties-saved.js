import { React, useRef, useState, useEffect } from "react";
import styles from "../../../styles/profile/sidebar-pages/saved-properties.module.css";
import view from "../../../assets/icons/profile-icons/view.svg";
import Image from "next/image";
import SimilarProperties from "../../property-details/similar-properties";
import RelatedProperties from "../../property-details/related-properties-card";

const SavedProperties = () => {
  let n = 10;
  const ref = useRef();
  const onScroll = (scroll) => {
    ref.current.scrollLeft += scroll;
  };
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1150) {
      setMobile(true);
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1150) {
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
    <div className="d-flex h-100 flex-column pe-1 col-8">
      <div className={`mt-3`}>
        <div>
          {mobile ? (
            <div>
              <div className={`row p-3  mb-5`}>
                <div className={`${styles.scrollmenuMobile}  `}>
                  <div ref={ref} className={`${styles.row} d-flex`}>
                    {[...Array(n)].map((item, index) => {
                      return <RelatedProperties />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={`${styles.scrollmenu} `}>
              <div ref={ref} className={`${styles.row}`}>
                {[...Array(n)].map((item, index) => {
                  return (
                    <div className={`${styles.width_properties} mb-0`}>
                      <SimilarProperties />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default SavedProperties;


