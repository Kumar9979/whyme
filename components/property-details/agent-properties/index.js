import React, { useRef } from "react";
import Image from "next/image";
import styles from "../../../styles/propertydetails/agentproperties.module.css";
import image from "../../../assets/images/imagereview/people.png";
import star from "../../../assets/images/star.svg";
import seeall from "../../../assets/images/seeall.svg";
import RelatedProperties from "../../cards/property-details-cards/related-properties";
import arrowleft from "../../../assets/images/arrow_left.svg";
import arrowright from "../../../assets/images/arrow_right.svg";

const AgentProperties = ({ propertyType, data, hide }) => {
  let n = 10;
  const ref = useRef();
  const onScroll = (scroll) => {
    ref.current.scrollLeft += scroll;
  };

  return (
    <div>
      <div className={`${styles.agent_properties} p-2`}>
        {hide === 1 ? null : (
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
        )}

        <div className={`row mt-3 position-relative`}>
          <div className={`${styles.scrollmenu} `}>
            <div ref={ref} className={`${styles.row} d-flex`}>
              {[...Array(n)].map((item, index) => {
                return (
                  <RelatedProperties location={propertyType} data={data} />
                );
              })}
            </div>
          </div>
          <button
            onClick={() => onScroll(-800)}
            className={`${styles.arrow_left_button} p-0 position-absolute d-lg-block d-none`}
          >
            <Image
              width={100}
              height={100}
              src={arrowleft}
              alt="Picture of the author"
            />
          </button>
          <button
            onClick={() => onScroll(+800)}
            className={`${styles.arrow_right_button} p-0 position-absolute d-lg-block d-none`}
          >
            <Image
              width={100}
              height={100}
              src={arrowright}
              alt="Picture of the author"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentProperties;

// const CardSlider = () => {
//   const n = 8;
//   const ref = useRef(null);

//   const scrolls = (scrollOffset) => {
//     ref.current.scrollLeft += scrollOffset;
//   };
//   return (
//     <>
//       <div className={`d-lg-flex justify-content-center mt-lg-5 mt-2`}>
//         <div className={`${styles.scrollmenu} col-lg-7 col-12 `}>
//           <div ref={ref} className={`${styles.row} d-flex p-3 gap-3 gap-lg-5`}>
//             {[...Array(n)].map((e, i) => (
//               <OpportunityCard keys={i} works={false} />
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className={`d-lg-block d-lg-flex justify-content-between d-none`}>
//         <div
//           className={`${styles.card_image_div} position-relative d-flex justify-content-center align-items-center cursor_pointer ${styles.prev_btn} ms-5`}
//           onClick={() => scrolls(-800)}
//         >
//           <span
//             className={`position-relative ${styles.card_image_container} cursor_pointer `}
//           >
//             <Image
//               src={LeftArrow}
//               layout="fill"
//               objectFit="fill"
//               object-position="center"
//             />
//           </span>
//         </div>
//         <div
//           className={`${styles.card_image_div} position-relative d-flex justify-content-center align-items-center cursor_pointer ${styles.next_btn} me-5`}
//           onClick={() => scrolls(+800)}
//         >
//           <span
//             className={`position-relative ${styles.card_image_container} cursor_pointer `}
//           >
//             {" "}
//             <Image
//               src={RightArrow}
//               layout="fill"
//               objectFit="fill"
//               object-position="center"
//             />
//           </span>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CardSlider;
