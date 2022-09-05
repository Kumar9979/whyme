import React from "react";

const SearchIcon = ({ fill = "#bcc7ce", width = 10, height = 16 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 18 18">
    <path id="Path_1455" data-name="Path 1455" d="M98,230.8a7.762,7.762,0,0,1,7.72-7.8,7.678,7.678,0,0,1,5.459,2.285,7.846,7.846,0,0,1,2.261,5.518,7.72,7.72,0,1,1-15.44,0Zm15.312,6.286,2.3,1.856h.04a1.213,1.213,0,0,1,0,1.7,1.181,1.181,0,0,1-1.684,0l-1.908-2.187a.976.976,0,0,1,0-1.372A.886.886,0,0,1,113.312,237.089Z" transform="translate(-98 -223)" fill={fill} fill-rule="evenodd"/>
  </svg>
  
  );
};

export default SearchIcon;
