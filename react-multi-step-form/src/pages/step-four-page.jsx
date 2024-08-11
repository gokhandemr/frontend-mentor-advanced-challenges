import React from "react";
// Components
import MainTitle from "../components/main-title";
import StepFour from "../components/step-four";
import Pagination from "../components/pagination";

export default function StepFourPage() {
  return (
    <>
      <MainTitle title={"Finishing up"} desc={"Double-check everything looks OK before confirming."} />
      <StepFour />
      <Pagination goBack={true} prevPage={"/step-three"} nextPage={"/step-five"} />
    </>
  );
}
