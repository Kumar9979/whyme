import React from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import styles from "../../../styles/postProperty/propertydetails.module.css";


const Steeper = ({ active }) => {
  return (
    <div className={`${styles.Steeper}`}>
      <Stepper orientation="vertical" activeStep={active}>
        <Step className={`${styles.circle}`}>
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

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}
