import React from "react";
// Style
import style from "./style.module.css";
// Components
import GoTopButton from "../go-top-button";
//  Router DOM
import {Link} from "react-router-dom";
// Redux
import {useSelector} from "react-redux";

function Footer() {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <footer className={`${style.attribution} ${isDark && style.darkTheme}`}>
      <div>
        Challenge by{" "}
        <Link to="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </Link>
        . Coded by{" "}
        <Link to="https://github.com/gokhandemr" target="_blank">
          Gökhan DEMİR
        </Link>
        .
      </div>
      <GoTopButton />
    </footer>
  );
}

export default Footer;
