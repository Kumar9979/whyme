import React from "react";

const LocationIcon = ({ fill = "#bcc7ce", width = 10, height = 16 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 14 16"
    >
      <path
        id="Path_15608"
        data-name="Path 15608"
        d="M155.5,341.655a7.009,7.009,0,0,1,14,0,8.146,8.146,0,0,1-1.837,5.035A17.971,17.971,0,0,1,163.1,350.8a1.01,1.01,0,0,1-1.2,0,17.645,17.645,0,0,1-4.562-4.112A8.145,8.145,0,0,1,155.5,341.655Zm4.689.207a2.313,2.313,0,0,0,4.622,0,2.312,2.312,0,0,0-4.622,0Z"
        transform="translate(-155.5 -335)"
        fill={fill}
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default LocationIcon;
