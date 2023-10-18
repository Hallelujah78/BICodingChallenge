import Search from "../components/Search.js";
import styled from "styled-components";
import axios from "axios";
import { forwardRef } from "react";

const SearchForm = forwardRef((props, ref) => {
  const {
    setCountry,
    country,
    setCountryData,
    setIsLoading,
    setIsError,
    className,
  } = props;
  const fetchCountryData = async (country) => {
    setIsLoading(true);
    try {
      const { data: result } = await axios.post("/api/v1/country", {
        country,
      });
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
  };

  return (
    <Wrapper className={className} ref={ref}>
      <Search
        setCountry={setCountry}
        id="country name"
        name="country name"
        className="form-input"
      />

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
    </Wrapper>
  );
});
export default SearchForm;

const Wrapper = styled.form`
  transition: 0.5s ease-in all;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin: 5rem auto;
  height: fit-content;
  .btn-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  button {
    border: transparent;
    width: 45%;
    border-radius: 35px;
    background: #e14ed2;
    color: white;
    text-transform: uppercase;
    padding: 15px 20px;
    transition: all 0.3s;
    margin-top: 1rem;
    &:hover {
      background: #ed96e5;
    }
  }
`;
