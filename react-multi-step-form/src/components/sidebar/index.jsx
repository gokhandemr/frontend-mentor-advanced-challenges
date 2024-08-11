import React from "react";
// Style
import style from "./style.module.css";
// Router DOM
import {NavLink} from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className={style.aside}>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>
              <div className={style.stepCount}>1</div>
              <div>
                <p className={style.stepText}>Step 1</p>
                <p className={style.stepTitle}>Your info</p>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to={"/step-two"}>
              <div className={style.stepCount}>2</div>
              <div>
                <p className={style.stepText}>Step 2</p>
                <p className={style.stepTitle}>Select plan</p>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to={"/step-three"}>
              <div className={style.stepCount}>3</div>
              <div>
                <p className={style.stepText}>Step 3</p>
                <p className={style.stepTitle}>Add-ons</p>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to={"/step-four"}>
              <div className={style.stepCount}>4</div>
              <div>
                <p className={style.stepText}>Step 4</p>
                <p className={style.stepTitle}>Summary</p>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
