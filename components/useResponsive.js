import React, { useEffect, useState } from "react";
const UseResponisve = () => {
  const [responsive, setResponsive] = useState({
    width: "",
    mobile: false,
  });

  const handleResize = () => {
    setResponsive((prevValue) => ({
      ...prevValue,
      width: window?.innerWidth,
    }));

    if (window?.innerWidth > 992) {
      setResponsive((prevValue) => ({
        ...prevValue,
        mobile: false,
      }));
    } else if((window?.innerWidth < 992)) {
      setResponsive((prevValue) => ({
        ...prevValue,
        mobile: true,
      }));
    }
  };
  useEffect(() => {
    setResponsive((prevValue) => ({
      ...prevValue,
      width: window.innerWidth,
      mobile:window?.innerWidth<992?true:false
    }));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return responsive;
};

export default UseResponisve;
