import React, {useEffect, useState} from "react";
// Style
import style from "./style.module.css";
import Pagination from "../pagination";
// Zustand
import {useDataStore} from "../../zustand/store";
import {useNavigate} from "react-router-dom";

export default function StepThree() {
  // Zustand Store
  const {personalInfo, selectPlan, pickAddOns, setPickAddOns} = useDataStore();
  // States
  const [onlineServise, setOnlineService] = useState({title: "Online service", desc: "Access to multiplayer games", monthlyPrice: "1", yearlyPrice: "10", isTrue: true});
  const [largerStorage, setLargerStorage] = useState({title: "Larger storage", desc: "Extra 1TB of cloud save", monthlyPrice: "2", yearlyPrice: "20", isTrue: true});
  const [customizableProfile, setCustomizableProfile] = useState({title: "Customizable Profile", desc: "Custom theme on your profile", monthlyPrice: "2", yearlyPrice: "20", isTrue: false});
  // Navigate
  const navigate = useNavigate();

  useEffect(() => {
    if (personalInfo === null && selectPlan === null) {
      alert("Error: Personal information or plan not available");
      navigate("/step-two");
    }
    if (pickAddOns !== null) {
      setOnlineService(pickAddOns.onlineServise);
      setLargerStorage(pickAddOns.largerStorage);
      setCustomizableProfile(pickAddOns.customizableProfile);
    }
  }, []);

  useEffect(() => {
    const newPickAddOns = {onlineServise: onlineServise, largerStorage: largerStorage, customizableProfile: customizableProfile};
    setPickAddOns(newPickAddOns);
  }, [onlineServise, largerStorage, customizableProfile]);

  return (
    <>
      <div className={style.multiSelectWrapper}>
        <div className={`${style.option} ${onlineServise.isTrue && style.active}`} onClick={() => setOnlineService({...onlineServise, isTrue: !onlineServise.isTrue})}>
          <div className={style.checkBox}></div>
          <div>
            <h4>Online service</h4>
            <p>Access to multiplayer games</p>
          </div>
          <div className={style.price}>{selectPlan && !selectPlan.isMonthly ? "+$10/yr" : "+$1/mo"}</div>
        </div>
        <div className={`${style.option} ${largerStorage.isTrue && style.active}`} onClick={() => setLargerStorage({...largerStorage, isTrue: !largerStorage.isTrue})}>
          <div className={style.checkBox}></div>
          <div>
            <h4>Larger storage</h4>
            <p>Extra 1TB of cloud save</p>
          </div>
          <div className={style.price}>{selectPlan && !selectPlan.isMonthly ? "+$20/yr" : "+$2/mo"}</div>
        </div>
        <div className={`${style.option} ${customizableProfile.isTrue && style.active}`} onClick={() => setCustomizableProfile({...customizableProfile, isTrue: !customizableProfile.isTrue})}>
          <div className={style.checkBox}></div>
          <div>
            <h4>Customizable Profile</h4>
            <p>Custom theme on your profile</p>
          </div>
          <div className={style.price}>{selectPlan && !selectPlan.isMonthly ? "+$20/yr" : "+$2/mo"}</div>
        </div>
      </div>
      <Pagination prevPage={"/step-two"} nextPage={"/step-four"} />
    </>
  );
}
