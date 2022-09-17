import React from "react";

const Dropdown = ({ fill = "#bcc7ce", width = 10, height = 16 }) => {
  return (
    <svg
      id="Group_19485"
      data-name="Group 19485"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
    >
      <path
        id="Path_13344"
        data-name="Path 13344"
        d="M0,0H20V20H0Z"
        fill="none"
      />
      <path
        id="Path_15096"
        data-name="Path 15096"
        d="M161,360l4.442,3.794a.86.86,0,0,0,1.116,0L171,360"
        transform="translate(-156 -352)"
        fill="none"
        stroke={fill}
        stroke-linecap="round"
        stroke-width="3"
      />
    </svg>
  );
};

export default Dropdown;
