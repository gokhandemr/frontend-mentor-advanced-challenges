import React, {useEffect, useState} from "react";
// Zustand
import {useDataStore} from "../../zustand/store";
// Router DOM
import {Link, useNavigate} from "react-router-dom";
// Style
import style from "./style.module.css";

export default function StepFour() {
  const {personalInfo, selectPlan, pickAddOns} = useDataStore();
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (personalInfo === null && selectPlan === null) {
      alert("Error: Personal information or plan not available");
      navigate("/step-two");
    } else {
      (() => {
        const onlineServisePrice = pickAddOns.onlineServise.isTrue === true ? Number(selectPlan.isMonthly ? pickAddOns.onlineServise.monthlyPrice : pickAddOns.onlineServise.yearlyPrice) : 0;
        const largerStoragePrice = pickAddOns.largerStorage.isTrue === true ? Number(selectPlan.isMonthly ? pickAddOns.largerStorage.monthlyPrice : pickAddOns.largerStorage.yearlyPrice) : 0;
        const customizableProfilePrice = pickAddOns.customizableProfile.isTrue === true ? Number(selectPlan.isMonthly ? pickAddOns.customizableProfile.monthlyPrice : pickAddOns.customizableProfile.yearlyPrice) : 0;
        let selectPlanPrice = selectPlan.isMonthly === true ? Number(selectPlan.monthlyPrice) : Number(selectPlan.yearlyPrice);
        const total = Number(selectPlanPrice + onlineServisePrice + largerStoragePrice + customizableProfilePrice);
        setTotalPrice(total);
      })();
    }
  }, [selectPlan, pickAddOns]);

  return (
    <>
      <div className={style.checkListWrapper}>
        {selectPlan && (
          <div className={style.planList}>
            <div>
              <h4>
                {selectPlan.planName} {selectPlan.isMonthly ? "(Monthly)" : "(Yearly)"}
              </h4>
              <Link to={"/step-two"} style={{textDecoration: "underline"}}>
                Change
              </Link>
            </div>
            <h4>${selectPlan.isMonthly ? selectPlan.monthlyPrice + "/mo" : selectPlan.yearlyPrice + "/yr"}</h4>
          </div>
        )}
        {pickAddOns !== null && (
          <ul className={style.pickAddOnsList}>
            {pickAddOns.onlineServise.isTrue === true && (
              <li>
                <p>{pickAddOns.onlineServise.title}</p>
                <p>+${selectPlan && selectPlan.isMonthly ? pickAddOns.onlineServise.monthlyPrice + "/mo" : pickAddOns.onlineServise.yearlyPrice + "/yr"}</p>
              </li>
            )}
            {pickAddOns.largerStorage.isTrue === true && (
              <li>
                <p>{pickAddOns.largerStorage.title}</p>
                <p>+${selectPlan && selectPlan.isMonthly ? pickAddOns.largerStorage.monthlyPrice + "/mo" : pickAddOns.largerStorage.yearlyPrice + "/yr"}</p>
              </li>
            )}
            {pickAddOns.customizableProfile.isTrue === true && (
              <li>
                <p>{pickAddOns.customizableProfile.title}</p>
                <p>+${selectPlan && selectPlan.isMonthly ? pickAddOns.customizableProfile.monthlyPrice + "/mo" : pickAddOns.customizableProfile.yearlyPrice + "/yr"}</p>
              </li>
            )}
          </ul>
        )}
      </div>

      <div className={style.totalPrice}>
        <p>Total {selectPlan && selectPlan.isMonthly === true ? "(per month)" : "(per year)"}</p>
        <p>${selectPlan && selectPlan.isMonthly === true ? totalPrice + "/mo" : totalPrice + "/yr"}</p>
      </div>
    </>
  );
}
