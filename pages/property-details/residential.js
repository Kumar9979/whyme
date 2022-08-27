import React, { useEffect, useRef } from "react";
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

const Home = () => {
  const number = 20;
  const ref = useRef();

  const onScroll = (scroll) => {
    ref.current.scrollLeft += scroll;
  };

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
          <SimilarProperties />
        </div>
        <div className="col-lg-3"> </div>
      </div>
    </div>
  );
};

export default Home;
