import { useState } from "react";
import useAxios from "../hooks/useAxios.js";

const Search = () => {
  const [country, setCountry] = useState("");
  const {
    results: countryData,
    isLoading,
    isError,
    fetchDataUsingAxios: fetchCountryData,
  } = useAxios();

  const handleChange = (e) => {
    setCountry(e.target.value);
  };
  const clearValues = () => {
    setCountry("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCountryData(country);
    clearValues();
  };

  return (
    <div>
      <form
        className={
          countryData ? "search-container search-move" : "search-container"
        }
      >
        <label htmlFor="country name" className="form-label">
          Enter a country
          <input
            id="country name"
            type="text"
            value={country}
            name="country name"
            className="form-input"
            onChange={(e) => handleChange(e)}
          />{" "}
        </label>
        <div className="btn-container">
          <button
            disabled={!country}
            className="btn submit-btn"
            type="submit"
            onClick={handleSubmit}
          >
            submit
          </button>
          <button
            // disabled={isLoading}
            onClick={(e) => {
              e.preventDefault();
              clearValues();
            }}
            className="btn clear-btn"
          >
            clear
          </button>
        </div>
      </form>
    </div>
  );
};
export default Search;
