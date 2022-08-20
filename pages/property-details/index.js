import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as dummyApis from "../../redux/actions/josnApisAction";
import ImageGrid from "../../components/image-grid";
import HomeDetails from "../../components/home-details";
import styles from "../../styles/homepage/homepage.module.css";
import Review from "../../components/image-grid-review";
import Aboutproperty from "../../components/about-property";
import Amenties from "../../components/amenties";
import ContactOwner from "../../components/contact_owner";
import PropertyLocation from "../../components/property_location";
import AgentProperties from "../../components/agent-properties";
import seeall from "../../assets/images/seeall.svg";
import Image from "next/image";
import RelatedProperties from "../../components/related-properties-card";
import OwnerContact from "../../components/owner-contact";
import ContactUs from "../../components/contact_us";
import LoremIpsum from "../../components/lorem-ipsum";
import RequestCall from "../../components/request-callback";
import LoremText from "../../components/lorem-text";

const Home = () => {
  const number = 20;
  const ref = useRef();
  const reducer = useSelector((store) => store);
  console.log(reducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dummyApis.jsonAction());
  }, []);

  const onScroll = (scroll) => {
    ref.current.scrollLeft += scroll;
  };
  
  return (
    <div className={`${styles.body_background}`}>
      <HomeDetails />
      <div className="row d-flex justify-content-center">
        <div className="col-lg-7 col-11">
          <ImageGrid />
          <Review />
          <Aboutproperty />
          <Amenties />
          <ContactOwner />
          <PropertyLocation />
          <AgentProperties />
          <div className={`d-flex justify-content-between my-2 `}>
            <div className={`${styles.related_properties}`}>
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
          <div className={`${styles.scrollmenu}`}>
            <div ref={ref} className={`${styles.row} d-flex`}>
              {[...Array(number)].map((item, index) => {
                return <RelatedProperties />;
              })}
            </div>
          </div>
          <button onClick={() => {onScroll(-800)}}>Prev</button>
          <button onClick={() => {onScroll(+800)}}>Next</button>
        </div>
        <div className="col-lg-3 col-11">
          <OwnerContact />
          <ContactUs />
          <RequestCall />
          <LoremIpsum />
          <LoremText />
        </div>
      </div>
    </div>
  );
};

export default Home;
