import React, { useEffect, useRef, useState } from "react";
import ImageGrid from "../../../../components/property-details/image-grid";
import styles from "../../../../styles/propertydetails/homepage.module.css";
import Aboutproperty from "../../../../components/property-details/about-property";
import Amenties from "../../../../components/property-details/amenties";
import ContactOwner from "../../../../components/property-details/contact_owner";
import PropertyLocation from "../../../../components/property-details/property_location";
import AgentProperties from "../../../../components/property-details/agent-properties";
import LoremIpsum from "../../../../components/property-details/lorem-ipsum";
import RequestCall, { PostedByOwner } from "../../../../components/property-details/request-callback";
import LoremText from "../../../../components/property-details/lorem-text";
import ContactUs from "../../../../components/property-details/contact_us";
import Foter from "../../../../components/footerPage/footer";
import SimilarProperties from "../../../../components/cards/property-details-cards/similar-properties";
import RelatedProperties from "../../../../components/cards/property-details-cards/related-properties";
import OtherProperties from "../../../../components/property-details/other-properties/other-properties";

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
            <ImageGrid propertyType="3BHK House in Vijayanagar, Mysuru" />
            <Aboutproperty data={0}/>
            <Amenties data={0}/>
            <ContactOwner />
            <PropertyLocation />
            <AgentProperties propertyType="2BHK House in Vijayanagar, Mysuru" />
          </div>
          <div className="col-lg-3 col-11">
            <div className="row">
              <div className="col-12 col-lg-12 col-md-6">
                <PostedByOwner />
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

      <div
        className={`${styles.other_properties_background} row d-flex justify-content-center `}
      >
        <div className="col-lg-7">
          <OtherProperties type="3BHK House in Vijayanagar, Mysuru"/>
        </div>

        <div className="col-lg-3"> </div>
      </div>
      <Foter />
    </div>
  );
};

export default Home;
