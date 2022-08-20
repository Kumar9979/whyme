import React from "react";
import Image from "next/image";
import styles from "../../styles/propertydetails/agentproperties.module.css";
import image from "../../assets/images/imagereview/people.png";
import star from "../../assets/images/star.svg";
import RelatedProperties from "../related-properties-card";

const AgentProperties = () => {
  return (
    <div>
      <div className={`${styles.agent_properties} p-4 mt-4`}>
        <div className={`row `}>
          <div className="col-12 col-lg-4">
            <div className={`${styles.agent_properties_text}`}>
              Want to see more <br />
              Properties by this Agent?
            </div>
            <div className={`${styles.agent_help_text} pt-2`}>
              Our Agent can help you with:
            </div>
            {agenthelp.map((item, index) => {
              return (
                <div className={`mb-2 mt-2`}>
                  <i
                    className={`d-flex align-items-center ${styles.agent_properties_icon} ri-checkbox-circle-line`}
                  >
                    <span className={`${styles.agent_properties_list} ps-3`}>
                      {item.text}
                    </span>
                  </i>
                </div>
              );
            })}
            <hr></hr>
            <div className="d-flex">
              <div>
                <Image
                  src={image}
                  alt="Picture of the author"
                  width={60}
                  height={60}
                  className={`${styles.agent_image} `}
                />
              </div>

              <div className={`d-flex flex-column ps-3 pt-3`}>
                <div className={`${styles.agent_name}`}>Amal Sabu</div>
                <div className="d-flex justify-content-center">
                  <Image
                    src={star}
                    alt="Picture of the author"
                    width={20}
                    height={20}
                    className={`${styles.agent_image} `}
                  />{" "}
                  <span className={`ps-2 ${styles.agent_rating}`}>4.7 Ratings</span>
                </div>
              </div>
            </div>
          </div>
         
          <div className={`col-6 col-lg-3 `}>
            <RelatedProperties/>
          </div>
          <div className="col-6 col-lg-3">
          <RelatedProperties/>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AgentProperties;

const agenthelp = [
  {
    text: "Residential Spaces",
  },
  {
    text: "Agricultural Land",
  },
  {
    text: "Commercial Spaces",
  },
];
