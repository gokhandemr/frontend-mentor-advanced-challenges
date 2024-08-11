import React, {useEffect, useState} from "react";
// Style
import style from "./style.module.css";
// Router DOM
import {useNavigate} from "react-router-dom";
// Zustand
import {useDataStore} from "../../zustand/store";

export default function StepOne() {
  // Zustand Store
  const {personalInfo, setPersonalInfo} = useDataStore();
  // States
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  // Navigate
  const navigate = useNavigate();

  useEffect(() => {
    if (personalInfo !== null) {
      setNameValue(personalInfo.name);
      setEmailValue(personalInfo.email);
      setPhoneValue(personalInfo.phone);
    }
  }, []);

  const stepOneFunction = (e) => {
    e.preventDefault();
    const newPersonalInfo = {name: nameValue, email: emailValue, phone: phoneValue};
    setPersonalInfo(newPersonalInfo);
    navigate("/step-two");
  };

  return (
    <>
      <form onSubmit={(e) => stepOneFunction(e)} className={style.formWrapper}>
        <label>Name</label>
        <input type="text" placeholder="e.g. Stephen King" value={nameValue} onChange={(e) => setNameValue(e.target.value)} required />

        <label>Email Address</label>
        <input type="email" placeholder="e.g. stephenking@lorem.com" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} required />

        <label>Phone Number</label>
        <input type="tel" placeholder="e.g. +1 234 567 890" value={phoneValue} onChange={(e) => setPhoneValue(e.target.value)} required />
        <div className={style.buttonWrapper}>
          <button type="submit">Next Step</button>
        </div>
      </form>
    </>
  );
}
