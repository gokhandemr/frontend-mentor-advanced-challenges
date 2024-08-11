import React from "react";
// Components
import MainTitle from "../components/main-title";
import StepOne from "../components/step-one";

export default function HomePage() {
  return (
    <>
      <MainTitle title={"Personal info"} desc={"Please provide your name, email address, and phone number."} />
      <StepOne />
    </>
  );
}
