import React, {useEffect, useState} from "react";
// Style
import style from "./style.module.css";
// Component
import Pagination from "../pagination";
// Zustand
import {useDataStore} from "../../zustand/store";
// Router DOM
import {useNavigate} from "react-router-dom";
// Icons
import arcadeIcon from "../../../assets/images/icon-arcade.svg";
import advancedIcon from "../../../assets/images/icon-advanced.svg";
import proIcon from "../../../assets/images/icon-pro.svg";

export default function StepTwo() {
  // Zustand Store
  const {personalInfo, selectPlan, setSelectPlan} = useDataStore();
  // States
  const [isMonthly, setIsMonthly] = useState(true);
  const [plan, setPlan] = useState({planName: "Arcade", isMonthly: isMonthly, monthlyPrice: 9, yearlyPrice: 90});
  // Navigate
  const navigate = useNavigate();

  const plansData = [
    {
      planName: "Arcade",
      monthlyPrice: 9,
      yearlyPrice: 90,
      img: arcadeIcon,
    },
    {
      planName: "Advanced",
      monthlyPrice: 12,
      yearlyPrice: 120,
      img: advancedIcon,
    },
    {
      planName: "Pro",
      monthlyPrice: 15,
      yearlyPrice: 150,
      img: proIcon,
    },
  ];

  useEffect(() => {
    if (personalInfo === null) {
      alert("Error: Personal information not available");
      navigate("/");
    }
    if (selectPlan !== null) {
      setPlan(selectPlan);
      setIsMonthly(selectPlan.isMonthly);
    }
  }, []);

  useEffect(() => {
    const newSelectPlan = {planName: plan.planName, isMonthly: isMonthly, monthlyPrice: plan.monthlyPrice, yearlyPrice: plan.yearlyPrice};
    setSelectPlan(newSelectPlan);
  }, [plan, isMonthly]);

  return (
    <>
      <div className={style.selectWrapper}>
        {plansData &&
          plansData.map((item, index) => (
            <div
              key={index}
              className={`${style.plan} ${plan && plan.planName == item.planName && style.active}`}
              onClick={() => setPlan({planName: item.planName, isMonthly: isMonthly, monthlyPrice: item.monthlyPrice, yearlyPrice: item.yearlyPrice})}
            >
              <img src={item.img} alt={item.planName} />
              <div className={style.planDetails}>
                <h4>{item.planName}</h4>
                {isMonthly ? (
                  <p>{`$${item.monthlyPrice}/mo`}</p>
                ) : (
                  <>
                    <p>{`$${item.yearlyPrice}/yr`}</p>
                    <p className={style.freeText}>2 months free</p>
                  </>
                )}
              </div>
            </div>
          ))}
      </div>
      <div className={style.switchWrapper}>
        <p className={`${isMonthly && style.active}`}>Monthly</p>
        <div className={style.switch}>
          <label className={style.switch}>
            <input type="checkbox" onClick={() => setIsMonthly(!isMonthly)} />
            <span className={`${style.slider} ${style.round} ${isMonthly ? style.monthly : style.yearly}`}></span>
          </label>
        </div>
        <p className={`${!isMonthly && style.active}`}>Yearly</p>
      </div>
      <Pagination prevPage={"/"} nextPage={"/step-three"} />
    </>
  );
}
