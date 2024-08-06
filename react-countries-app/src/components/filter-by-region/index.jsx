import React, {useEffect, useState} from "react";
// Style
import style from "./style.module.css";
// Redux
import {useDispatch, useSelector} from "react-redux";
import {filteredCountries} from "../../redux/slices/countriesSlice";

function FilterByRegion() {
  const [region, setRegion] = useState("");
  const dispatch = useDispatch();
  let isDark = useSelector((state) => state.theme.isDark);

  useEffect(() => {
    dispatch(filteredCountries(region));
  }, [region]);

  return (
    <section className={`${style.filterByRegion} ${isDark ? style.darkTheme : ""}`}>
      <select onChange={(e) => setRegion(e.target.value)}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  );
}

export default FilterByRegion;
