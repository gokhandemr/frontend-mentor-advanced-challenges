import React from "react";
// Style
import style from "./style.module.css";
// Router DOM
import {useNavigate} from "react-router-dom";

export default function Pagination({prevPage, nextPage}) {
  const navigate = useNavigate();

  return (
    <div className={style.buttonWrapper} style={{justifyContent: `${prevPage === undefined && "flex-end"}`}}>
      {prevPage && (
        <button className={style.goBackButton} onClick={() => navigate(prevPage)}>
          Go Back
        </button>
      )}
      <button onClick={() => navigate(nextPage)}>Next Step</button>
    </div>
  );
}
