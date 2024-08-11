import React from "react";
// Icon
import icon from "../../../assets/images/icon-thank-you.svg";
// Style
import style from './style.module.css'

export default function StepFive() {
  return (
    <div className={style.thanksWrapper}>
      <img src={icon} alt="thank you" />
      <h1>Thank you!</h1>
      <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  );
}
