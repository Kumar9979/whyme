import React, { useEffect, useRef, useState } from "react";
import ImageGrid from "../../components/property-details/image-grid";
import styles from "../../styles/propertydetails/homepage.module.css";
import Aboutproperty from "../../components/property-details/about-property";
import Amenties from "../../components/property-details/amenties";
import ContactOwner from "../../components/property-details/contact_owner";
import PropertyLocation from "../../components/property-details/property_location";
import AgentProperties from "../../components/property-details/agent-properties";
import seeall from "../../assets/images/seeall.svg";
import Image from "next/image";
import RelatedProperties from "../../components/property-details/related-properties-card";
import LoremIpsum from "../../components/property-details/lorem-ipsum";
import RequestCall from "../../components/property-details/request-callback";
import LoremText from "../../components/property-details/lorem-text";
import SimilarProperties from "../../components/property-details/similar-properties";
import ContactUs from "../../components/property-details/contact_us";
import { Footer } from "antd/lib/layout/layout";
import Foter from "../../components/footerPage/footer";

const Home = () => {
  const number = 20;
  let n = 10;

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
    <div>
      <div className={`${styles.body_background} pb-5`}>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-7 col-11">
            <ImageGrid />
            <Aboutproperty />
            <Amenties />
            <ContactOwner />
            <PropertyLocation />
            <AgentProperties />
          </div>
          <div className="col-lg-3 col-11">
            <div className="row">
              <div className="col-12 col-lg-12 col-md-6">
                <RequestCall />
              </div>
              <div className="col-12 col-lg-12 col-md-6">
                <ContactUs />
              </div>
            </div>
            <LoremIpsum />
            <LoremText />
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center pt-4">
        <div className="col-lg-7">
        <div className="d-flex justify-content-between px-2 ">
        <div
          className={`fs_24 fw_600 fontFam_poppins ${styles.similar_properties_heading}`}
        >
          Related Properties
        </div>
        <div>
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
      </div>
      <div>
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
        <SimilarProperties />
      )}
      </div>
        </div>
        <div className="col-lg-3"> </div>
      </div>
      <Foter/>
    </div>
  );
};

export default Home;
