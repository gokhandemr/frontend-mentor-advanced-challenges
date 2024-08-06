import React from "react";
// Style
import style from "./style.module.css";
// Router DOM
import {Link} from "react-router-dom";
// Redux
import {useSelector} from "react-redux";

function Country({country, isHomePage}) {
  const {alpha3Code, name, region, capital, population, flags, nativeName, subregion, topLevelDomain, currencies, languages, borders} = country;
  let isDark = useSelector((state) => state.theme.isDark);

  return isHomePage ? (
    <>
      <article className={`${style.country} ${isDark ? style.darkTheme : ""}`}>
        <Link to={"/" + alpha3Code}>
          <img src={flags.png} alt="text" className={style.countryImg} />
        </Link>
        <div className={style.countryDetailsWrapper}>
          <h2>{name}</h2>
          <div className={style.countryDetails}>
            <p>
              <strong>Populatin:</strong> {population}
            </p>
            <p>
              <strong>Region:</strong> {region}
            </p>
            <p>
              <strong>Capital:</strong> {capital}
            </p>
          </div>
        </div>
      </article>
    </>
  ) : (
    <>
      <img src={flags.png} alt="text" className={style.singlePageCountryImg} />
      <div className={`${style.singlePageCountryWrapper} ${isDark ? style.darkTheme : ""}`}>
        <h2>{name}</h2>
        <div className={style.singlePageCountryDetails}>
          <div>
            <p>
              <strong>Native Name:</strong> {nativeName}
            </p>
            <p>
              <strong>Populatin:</strong> {population}
            </p>
            <p>
              <strong>Region:</strong> {region}
            </p>
            <p>
              <strong>Sub Region:</strong> {subregion}
            </p>
            <p>
              <strong>Capital:</strong> {capital}
            </p>
          </div>
          <div>
            <p>
              <strong>Top Level Domain:</strong> {topLevelDomain}
            </p>
            <p>
              <strong>Currencies:</strong> {currencies && currencies.map((item, index) => <span key={index}>{item.name}</span>)}
            </p>
            <p>
              <strong>Languages:</strong> {languages && languages.map((item, index) => <span key={index}>{item.name}</span>)}
            </p>
          </div>
        </div>
        <div className={style.borderCountries}>
          <p>
            <strong>Border Countries:</strong>

            {borders
              ? borders.map((country, index) => (
                  <Link to={"../" + country} key={index}>
                    {country}
                  </Link>
                ))
              : "No border countries.."}
          </p>
        </div>
      </div>
    </>
  );
}

export default Country;
