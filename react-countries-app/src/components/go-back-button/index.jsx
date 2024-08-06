import React from "react";
// Router DOM
import {useNavigate} from "react-router-dom";
// Style
import style from "./style.module.css";
// Redux
import {useSelector} from "react-redux";

function GoBackButton() {
  const navigate = useNavigate();
  let isDark = useSelector((state) => state.theme.isDark);

  return (
    <section className={`${style.goBackButtonWrapper} ${isDark ? style.darkTheme : ""}`}>
      <button className={style.goBackButton} onClick={() => navigate(-1)}>
        <ion-icon name="arrow-back-outline"></ion-icon>Back
      </button>
    </section>
  );
}

export default GoBackButton;
