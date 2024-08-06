import React from "react";
// Style
import style from "./style.module.css";
// Redux
import {useDispatch, useSelector} from "react-redux";
import {searchCountry} from "../../redux/slices/countriesSlice";

function SearchInput() {
  const dispatch = useDispatch();
  let isDark = useSelector((state) => state.theme.isDark);

  return (
    <section className={`${style.searchInputWrapper} ${isDark ? style.darkTheme : ""}`}>
      <ion-icon name="search-outline"></ion-icon>
      <input type="search" className={style.searchInput} placeholder="Search for a country..." onChange={(e) => dispatch(searchCountry(e.target.value))} />
    </section>
  );
}
export default SearchInput;
