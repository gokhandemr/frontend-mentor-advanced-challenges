import React from "react";
import style from "./style.module.css";
import {useSelector} from "react-redux";

function Loading() {
  const isDark = useSelector((state) => state.theme.isDark);
  return (
    <div className={`${style.ldsGrid} ${isDark && style.darkTheme}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loading;
