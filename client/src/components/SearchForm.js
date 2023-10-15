import Search from "../components/Search.js";
import axios from "axios";

const SearchForm = ({
  setCountry,
  country,
  setCountryData,
  setIsLoading,
  setIsError,
}) => {
  const fetchCountryData = async (country) => {
    setIsLoading(true);
    try {
      const { data: result } = await axios.post("/api/v1/country", { country });
      if (result) {
        setCountryData(result);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCountryData(country);
    const form = document.querySelector("form");
    form.classList.add("hide");
  };

  return (
    <form className="search-container">
      <label htmlFor="country name" className="form-label">
        Select a Country
        <Search
          setCountry={setCountry}
          id="country name"
          name="country name"
          className="form-input"
        />
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
      </div>
    </form>
  );
};
export default SearchForm;
