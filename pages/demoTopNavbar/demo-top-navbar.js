import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import FilterTopNavbar from "../../components/filter-top-navbar/filterTopNavbar";

const DemoTopNavbar = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <FilterTopNavbar />
      
    </>
  );
};

export default DemoTopNavbar;
