import React from "react";
// Components
import MainTitle from "../components/main-title";
import StepTwo from "../components/step-two";

export default function StepTwoPage() {
  return (
    <>
      <MainTitle title={"Select your plan"} desc={"You have the option of monthly or yearly billing."} />
      <StepTwo />
    </>
  );
}
