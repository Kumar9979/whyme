import React, { useEffect, useState } from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import styles from "../../../styles/postProperty/propertydetails.module.css";
import { styled } from "@material-ui/styles";
import StepConnector from "@material-ui/core/StepConnector";
import { StepConnectorClasskey } from "@material-ui/core/StepConnector/StepConnector";
import Image from "next/image";
import CheckGreyImages from "../../../assets/icons/checkgrey.png";
import CheckImages from "../../../assets/icons/check.png";

const Steeper = ({ active }) => {
  const steps = [
    "Property Details",
    "Property Features",
    "Price Details",
    "Photos & Description",
  ];

  const [size, setSize] = useState()


  useEffect(()=> {
    if (typeof window !== 'undefined') {
    window.addEventListener('resize', ()=> {

      
          console.log(window.innerWidth<=945);
          setSize(window.innerWidth)
   
      
    })
 }}, )
  return (
    <div className={`${styles.Steeper}`}>
      <Stepper orientation={size<=945?"horizontal":"vertical"} activeStep={active}>
        {steps.map((label) => (
          <Step className={`${styles.circle}`}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default Steeper;

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <div ownerState={{ active }} className={className}>
      {completed ? (
         <Image src={CheckImages} alt="Picture of the author" />
      ) : (
        <Image src={CheckGreyImages} alt="Picture of the author" />
      )}
    </div>
  );
}

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${StepConnectorClasskey}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${StepConnectorClasskey}`]: {
    [`& .${StepConnectorClasskey}`]: {
      borderColor: "#784af4",
    },
  },
  [`&.${StepConnectorClasskey}`]: {
    [`& .${StepConnectorClasskey}`]: {
      borderColor: "#784af4",
    },
  },
}));
