import styled from "styled-components";
import { useState } from "react";
import DynamicObjectRenderer from "../components/DynamicObjectRenderer.js";
import worldMap from "../assets/images/globe.svg";
import SearchForm from "../components/SearchForm.js";
import Loading from "../components/Loading.js";

const BasicUI = () => {
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <Wrapper>
      <SearchForm
        setCountry={setCountry}
        setCountryData={setCountryData}
        country={country}
        setIsLoading={setIsLoading}
        setIsError={setIsError}
      />
      {isLoading ? (
        <div className="content-center">
          <Loading />
        </div>
      ) : isError ? (
        <div className="content-center">{errorMessage}</div>
      ) : !isLoading && !isError && countryData ? (
        <div className="content-center">
          <h2>{countryData?.general.nameOfficial}</h2>
          <DynamicObjectRenderer data={countryData} />
        </div>
      ) : (
        <>
          <section>
            <div className="img-container">
              <img src={worldMap} alt="globe of the world" />
            </div>
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
  position: relative;
  overflow-x: hidden;
  padding-bottom: 50rem;
  max-width: 100%;
  min-height: 100vh;

  .search-container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 5rem auto;
    transition: 0.5s ease-in all;
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
    margin-top: 2rem;
    display: grid;
    place-content: center;
    min-height: 50vh;
    width: 100%;
    h2 {
      text-align: center;
      font-size: calc(2rem + 0.390625vw);
    }
  }
  .arms-large {
    width: 200px;
    height: auto;
  }
  section {
    aspect-ratio: 1;
    width: 90%;
    height: 100%;
    margin: 30vh auto 0 auto;
  }
  .hide {
    transform: translate(-50%, -150vh);
    left: 50%;
  }
  @media (min-width: 800px) {
    section {
      width: 100%;
      height: calc(100vh - 4rem);
      margin: 0 auto 0 auto;
      .img-container {
        width: 100%;
        height: 100%;
        margin: auto;

        display: grid;
        place-content: center;
        img {
          margin-top: 12rem;
          height: 60vh;
        }
      }
    }
  }
`;
