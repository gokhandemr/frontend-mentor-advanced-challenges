import React from "react";
// Style
import style from "./style.module.css";
// Redux
import {useSelector} from "react-redux";

function ShowMoreButton({countryCount, setCountryCount}) {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <button
      className={`${style.showMoreButton} ${isDark && style.darkTheme}`}
      onClick={() => {
        setCountryCount(countryCount + 4);
      }}
    >
      show more
    </button>
  );
}

export default ShowMoreButton;
