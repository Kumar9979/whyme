import React, { useRef } from "react";
import Image from "next/image";
import styles from "../../../styles/propertydetails/agentproperties.module.css";
import image from "../../../assets/images/imagereview/people.png";
import star from "../../../assets/images/star.svg";
import arrowleft from "../../../assets/images/arrow_left.svg";
import arrowright from "../../../assets/images/arrow_right.svg";
import seeall from "../../../assets/images/seeall.svg";
import RelatedProperties from "../../cards/property-details-cards/related-properties";

const AgentProperties = ({propertyType, data}) => {
  let n = 10;
  const ref = useRef();
  const onScroll = (scroll) => {
    ref.current.scrollLeft += scroll;
  };

  return (
    <div>
      <div className={`${styles.agent_properties} p-3 mt-4 `}>
        <div className="d-flex justify-content-between align-items-center ">
          <div className={`${styles.agent_properties_text}`}>
            See More Properties By{" "}
            <span className={`${styles.agent_name}`}>Amal Sabu</span>
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

        <div className={`row mt-3`}>
          <div className={`${styles.scrollmenu} `}>
            <div ref={ref} className={`${styles.row} d-flex`}>
              {[...Array(n)].map((item, index) => {
                return <RelatedProperties location={propertyType} data={data} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentProperties;
