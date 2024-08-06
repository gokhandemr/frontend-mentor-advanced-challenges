import React, {useEffect} from "react";
// Router DOM
import {useParams} from "react-router-dom";
// Components
import GoBackButton from "../components/go-back-button";
import Country from "../components/country";
import Loading from "../components/loading";
// Redux
import {useDispatch, useSelector} from "react-redux";
import {getCountry} from "../redux/slices/countrySlice";

function CountryPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country.data);
  const isLoading = useSelector((state) => state.country.isLoading);

  useEffect(() => {
    dispatch(getCountry(params.alpha3Code));
  }, [params]);

  // SEO
  document.title = country.length > 0 ? country[0].name : "Not Found";
  document.querySelector('meta[name="description"]').setAttribute("content", `${country.length > 0 && country[0].name} Details...`);

  return (
    <>
      <GoBackButton />
      {isLoading ? <Loading /> : country.length > 0 ? <Country country={country[0]} isHomePage={false} /> : <h2 style={{margin: "auto"}}>Country Not Found!</h2>}
    </>
  );
}

export default CountryPage;
