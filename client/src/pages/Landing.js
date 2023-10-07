import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Async from "react-select/async";

const Landing = () => {
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState(null);

  const fetchCountryData = async (country) => {
    try {
      const { data: result } = await axios.post("/api/v1/country", { country });
      if (result) {
        console.log(result);
        setCountryData(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

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

  useEffect(() => {
    if (countryData) {
      const myPara = document.querySelector("p");
      myPara.innerText = `The population of ${countryData.general.nameCommon} is ${countryData.demographics.population}`;
    }
  }, [countryData]);

  return (
    <Wrapper>
      <div className="search-container">
        <form action="">
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
      <p></p>
      {countryData ? (
        <img
          src={countryData.general?.coatOfArmsJpgUrl}
          alt={countryData.general?.coatOfArmsAlt}
        />
      ) : null}
      {countryData ? (
        <img
          src={countryData.general?.coatOfArmsPngUrl}
          alt={countryData.general?.coatOfArmsAlt}
        />
      ) : null}
    </Wrapper>
  );
};

export default Landing;

const Wrapper = styled.section`
  header {
    text-align: center;
    height: 6rem;
  }
  h1 {
    margin: auto;
    padding: 1rem 0;
    font-weight: 400;
  }
  .search-container {
    width: 100%;
    height: calc(100vh - 6rem);
    display: grid;
    place-content: center;
    .btn-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    input {
      display: block;
    }
  }
  button {
    border-radius: 35px;
    background: #e14ed2;
    color: white;
    text-transform: uppercase;
    padding: 15px 45px;
    transition: all 0.3s;
    &:hover {
      background: #ed96e5;
    }
  }
`;
