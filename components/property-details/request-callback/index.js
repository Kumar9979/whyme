import React, { useState } from "react";
import styles from "../../../styles/propertydetails/requestcall.module.css";
import menu from "../../../assets/images/menu.svg";
import Image from "next/dist/client/image";
import image from "../../../assets/images/imagereview/people.png";
import star from "../../../assets/images/star.svg";
import caution from "../../../assets/images/about-property-images/report_icon.svg";
import companyLogo from "../../../assets/images/about-property-images/brigade.jpeg";
import { useRouter } from "next/router";
import RequestCallBack from "../../modals/property-details/request-call";

const RequestCall = () => {
  const [show, setShow] = useState(false);
  const [showCallBack, setShowCallBack] = useState(false);

  const handleCloseCallBack = () => {
    setShowCallBack(false);
  };
  const router = useRouter();

  return (
    <div className={`${styles.request_call} p-4 mt-4 position-relative`}>
      <div
        className={`d-flex justify-content-between text-left text-lg-center text-md-center ms-auto`}
      >
        <div className={`${styles.posted_by} w-100 `}>Posted By</div>
        <button
          className={`${styles.request_menu} `}
          onClick={() => setShow(!show)}
        >
          <Image src={menu} alt="Picture of the author" width={4} />
        </button>
      </div>
      <div className="row d-flex justify-content-center">
        <div
          className={`pt-2 col-4 col-md-12 col-lg-12 d-flex  justify-content-center`}
        >
          <Image
            src={image}
            alt="Picture of the author"
            width={80}
            height={80}
            className={`${styles.agent_image} `}
          />
        </div>

        <div className="d-flex col-8 col-md-12  col-lg-12  justify-content-start justify-content-lg-center justify-content-md-center">
          <div className={`d-flex flex-column mt-1`}>
            <div
              className={`${styles.agent_name} d-flex justify-content-start justify-content-md-center justify-content-lg-center pt-1`}
            >
              Amal Sabu
            </div>
            <div className="d-flex align-items-center justify-content-start justify-content-md-center justify-content-lg-center pt-1">
              <Image
                src={star}
                alt="Picture of the author"
                width={20}
                height={20}
                className={`${styles.agent_image} `}
              />{" "}
              <span className={`ps-2 ${styles.agent_rating}`}>4.7 Ratings</span>{" "}
              <span className={`${styles.rating_number} pt-1`}>{`(236) `}</span>
            </div>
            <div
              className={`${styles.more_properties} d-flex justify-content-center pt-1`}
            >
              2 More properties by this agent
            </div>
            <div
              className={`${styles.agent_number} d-flex justify-content-start justify-content-md-center justify-content-lg-center pt-2`}
            >
              Call : 9876XXXXXX
            </div>
          </div>
        </div>
      </div>
      <button className={`${styles.request_button} w-100 py-2 mt-3 mt-1`} onClick={() => setShowCallBack(true)}>
        Request Callback
      </button>
      <button
        onClick={() => {
          router.push("/property-details/profile/agent-profile");
        }}
        className={`${styles.agent_profile} w-100 py-2 mt-3`}
      >
        View Profile
      </button>
      {show ? (
        <button
          className={`${styles.share_report_card} p-3  position-absolute`}
        >
          <div className="d-flex align-items-center justify-content-center">
            <Image
              src={caution}
              alt="Picture of the author"
              width={15}
              height={15}
            />
            <span className="fontFam_poppins text-nowrap fs_15 color_red fw_400 ps-3">
              Report
            </span>
          </div>
        </button>
      ) : null}
      <RequestCallBack show={showCallBack} handleClose={handleCloseCallBack} />
    </div>
  );
};

export default RequestCall;

export const CompanyRequestCall = () => {
  const [show, setShow] = useState(false);
  const [showCallBack, setShowCallBack] = useState(false);

  const handleCloseCallBack = () => {
    setShowCallBack(false);
  };
  const router = useRouter();

  return (
    <div className={`${styles.request_call} p-4 mt-4 position-relative`}>
      <div
        className={`d-flex justify-content-between text-left text-lg-center text-md-center ms-auto`}
      >
        <div className={`${styles.posted_by} w-100 `}>Posted By</div>
        <button
          className={`${styles.request_menu} `}
          onClick={() => setShow(!show)}
        >
          <Image src={menu} alt="Picture of the author" width={4} />
        </button>
      </div>
      <div className="row d-flex justify-content-center">
        <div
          className={`pt-2 col-4 col-md-12 col-lg-12 d-flex  justify-content-center`}
        >
          <Image
            src={companyLogo}
            alt="Picture of the author"
            width={100}
            height={100}
            className={`${styles.agent_image} `}
          />
        </div>

        <div className="d-flex col-8 col-md-12  col-lg-12  justify-content-start justify-content-lg-center justify-content-md-center">
          <div className={`d-flex flex-column mt-1`}>
            <div
              className={`${styles.agent_name} d-flex justify-content-start justify-content-md-center justify-content-lg-center pt-1`}
            >
              Brigade Group
            </div>
            <div className="d-flex align-items-center justify-content-start justify-content-md-center justify-content-lg-center pt-1">
              <Image
                src={star}
                alt="Picture of the author"
                width={20}
                height={20}
                className={`${styles.agent_image} `}
              />{" "}
              <span className={`ps-2 ${styles.agent_rating}`}>4.7 Ratings</span>{" "}
              <span className={`${styles.rating_number} pt-1`}>{`(236) `}</span>
            </div>
            <div
              className={`${styles.more_properties} d-flex justify-content-center pt-1`}
            >
              500+ Projects available from this builder
            </div>
            <div
              className={`${styles.agent_number} d-flex justify-content-start justify-content-md-center justify-content-lg-center pt-2`}
            >
              Call : 9876XXXXXX
            </div>
          </div>
        </div>
      </div>
      <button className={`${styles.request_button} w-100 py-2 mt-3 mt-1`} onClick={() => setShowCallBack(true)}>
        Request Callback
      </button>
      <button
        onClick={() => {
          router.push("/property-details/profile/company-profile");
        }}
        className={`${styles.agent_profile} w-100 py-2 mt-3`}
      >
        View Profile
      </button>
      {show ? (
        <button
          className={`${styles.share_report_card} p-3  position-absolute`}
        >
          <div className="d-flex align-items-center justify-content-center">
            <Image
              src={caution}
              alt="Picture of the author"
              width={15}
              height={15}
            />
            <span className="fontFam_poppins text-nowrap fs_15 color_red fw_400 ps-3">
              Report
            </span>
          </div>
        </button>
      ) : null}
      <RequestCallBack show={showCallBack} handleClose={handleCloseCallBack} />
    </div>
  );
};
export const PostedByOwner = () => {
  const [show, setShow] = useState(false);
  const [showCallBack, setShowCallBack] = useState(false);

  const handleCloseCallBack = () => {
    setShowCallBack(false);
  };
  return (
    <div className={`${styles.request_call} p-4 mt-4 position-relative`}>
      <div
        className={`d-flex justify-content-between text-left text-lg-center text-md-center ms-auto`}
      >
        <div className={`${styles.posted_by} w-100 `}>Posted By</div>
        <button
          className={`${styles.request_menu} `}
          onClick={() => setShow(!show)}
        >
          <Image src={menu} alt="Picture of the author" width={4} />
        </button>
      </div>
      <div className="row d-flex justify-content-center">
        <div
          className={`pt-2 col-4 col-md-12 col-lg-12 d-flex  justify-content-center`}
        >
          <Image
            src={companyLogo}
            alt="Picture of the author"
            width={100}
            height={100}
            className={`${styles.agent_image} `}
          />
        </div>

        <div className="d-flex col-8 col-md-12  col-lg-12  justify-content-start justify-content-lg-center justify-content-md-center">
          <div className={`d-flex flex-column mt-1`}>
            <div
              className={`${styles.agent_name} d-flex justify-content-start justify-content-md-center justify-content-lg-center`}
            >
              Rohith
            </div>
            <span className="fs_15 fw_500 color_light_green fontFam_poppins d-flex justify-content-start justify-content-md-center justify-content-lg-center">
              Verified Owner
            </span>

            <div
              className={`${styles.agent_number} d-flex justify-content-start justify-content-md-center justify-content-lg-center`}
            >
              Call : 9876XXXXXX
            </div>
          </div>
        </div>
      </div>
      <button className={`${styles.request_button} w-100 py-2 mt-3 mt-1`} onClick={() => setShowCallBack(true)}>
        Request Callback
      </button>
      {show ? (
        <button
          className={`${styles.share_report_card} p-3  position-absolute`}
        >
          <div className="d-flex align-items-center justify-content-center">
            <Image
              src={caution}
              alt="Picture of the author"
              width={15}
              height={15}
            />
            <span className="fontFam_poppins text-nowrap fs_15 color_red fw_400 ps-3">
              Report
            </span>
          </div>
        </button>
      ) : null}
      <RequestCallBack show={showCallBack} handleClose={handleCloseCallBack} />
    </div>
  );
};
