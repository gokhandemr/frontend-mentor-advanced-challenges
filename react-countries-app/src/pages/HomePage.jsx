import React, {useEffect, useState} from "react";
// Components
import Country from "../components/country";
import SearchInput from "../components/search-input";
import FilterByRegion from "../components/filter-by-region";
import Loading from "../components/loading";
import ShowMoreButton from "../components/show-more-button";
// Redux
import {useDispatch, useSelector} from "react-redux";
import {getCountries} from "../redux/slices/countriesSlice";

function HomePage() {
  const countriesFilteredData = useSelector((state) => state.countries.filteredData);
  const isLoading = useSelector((state) => state.countries.isLoading);
  const dispatch = useDispatch();

  const [countryCount, setCountryCount] = useState(12);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  // SEO
  document.title = "Vite + React | Countries App";
  document.querySelector('meta[name="description"]').setAttribute("content", "Home page description...");

  return (
    <>
      <SearchInput />
      <FilterByRegion />
      <main>
        <div className="wrapper" style={{padding: "0", width: "100%"}}>
          {isLoading ? <Loading /> : countriesFilteredData && countriesFilteredData.slice(0, countryCount).map((country, index) => <Country key={index} country={country} isHomePage={true} />)}
        </div>
        {!isLoading && countriesFilteredData.length > 12 && <ShowMoreButton countryCount={countryCount} setCountryCount={setCountryCount} />}
      </main>
    </>
  );
}

export default HomePage;
