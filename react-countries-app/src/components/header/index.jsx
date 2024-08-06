import React from "react";
// Router DOM
import {Link} from "react-router-dom";
// Style
import style from "./style.module.css";
// Redux
import {useDispatch, useSelector} from "react-redux";
import {changeThemeColor} from "../../redux/slices/themeColorSlice";

function Header() {
  const dispatch = useDispatch();
  let isDark = useSelector((state) => state.theme.isDark);

  const body = document.querySelector("body");
  if (isDark) {
    body.className = "dark-theme";
  } else {
    body.className = "";
  }

  return (
    <header className={`${style.header} ${isDark ? style.darkTheme : ""}`}>
      <div className="wrapper">
        <Link to={"/"} className={style.headerLogo}>
          <h1>Where in the world?</h1>
        </Link>
        <button className={style.themeModeButton} onClick={() => dispatch(changeThemeColor())}>
          {isDark ? (
            <>
              <ion-icon name="sunny-outline"></ion-icon>Light Mode
            </>
          ) : (
            <>
              <ion-icon name="moon-outline"></ion-icon> Dark Mode
            </>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
