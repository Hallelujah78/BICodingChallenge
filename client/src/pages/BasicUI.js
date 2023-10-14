import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import DynamicObjectRenderer from "../components/DynamicObjectRenderer.js";
import worldMap from "../assets/images/01.jpg";
import Search from "../components/Search.js";

const BasicUI = () => {
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchCountryData = async (country) => {
    setIsLoading(true);
    setErrorMessage("");
    setIsError(false);
    try {
      const { data: result } = await axios.post("/api/v1/country", { country });
      if (result) {
        console.log(result);
        setCountryData(result);
      }
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.response.data.msg);
    }
    setIsLoading(false);
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
  return (
    <Wrapper>
      <Search />
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
      {isLoading ? (
        <div className="content-center">loading...</div>
      ) : isError ? (
        <div className="content-center">{errorMessage}</div>
      ) : countryData ? (
        <DynamicObjectRenderer data={countryData} />
      ) : (
        <>
          <section>
            <img src={worldMap} alt="" />
          </section>
        </>
      )}
    </Wrapper>
  );
};

export default BasicUI;

const Wrapper = styled.section`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  overflow-x: hidden;
  padding-bottom: 50rem;
  max-width: 100%;
  min-height: 100vh;

  .search-container {
    margin: 5rem auto;
    transition: 0.3s ease-in all;
    width: 80vw;
    height: fit-content;
    .btn-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }

  input {
    display: block;
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
    &:hover {
      background: #ed96e5;
    }
  }
  .content-center {
    display: grid;
    place-content: center;
    min-height: 50vh;
    width: 100%;
  }
  .arms-large {
    width: 200px;
    height: auto;
  }
  section img {
    aspect-ratio: 1;
    width: 100%;
  }
`;
