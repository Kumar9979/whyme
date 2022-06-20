import React from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import styles from "../../../styles/postProperty/propertydetails.module.css";

const Steeper = ({active}) => {
  return (
    <div className={`${styles.Steeper}`} >
      <Stepper  orientation="vertical" activeStep={active}>
        <Step className={`${styles.circle}`} >
          <StepLabel>Property Details</StepLabel>
        </Step>
        <Step>
          <StepLabel>Property Features</StepLabel>
        </Step>
        <Step>
          <StepLabel>Price Details</StepLabel>
        </Step>
        <Step>
          <StepLabel>Photos & Description</StepLabel>
        </Step>
      </Stepper>
    </div>
  );
};

export default Steeper;
