import React from "react";
// Style
import style from "./style.module.css";
// Redux
import {useSelector} from "react-redux";

function GoTopButton() {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <button
      className={`${style.goTopButton} ${isDark && style.darkTheme}`}
      onClick={() => {
        window.scrollTo({top: 0, behavior: "smooth"});
      }}
    >
      <ion-icon name="arrow-up-outline"></ion-icon>
    </button>
  );
}

export default GoTopButton;
