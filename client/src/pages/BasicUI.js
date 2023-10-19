import { useState, useEffect, useRef } from "react";

import styled from "styled-components";
import { useWindowSize } from "react-use";

import DynamicObjectRenderer from "../components/DynamicObjectRenderer.js";
import worldMap from "../assets/images/globe.svg";
import SearchForm from "../components/SearchForm.js";
import Loading from "../components/Loading.js";
import Navbar from "../components/Navbar.js";

const BasicUI = () => {
  const [renderSearch, setRenderSearch] = useState(true);
  const myRef = useRef(null);
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    const searchForm = myRef.current;
  }, []);

  useEffect(() => {
    if (countryData && myRef.current) {
      myRef.current.classList.add("hide");

      setTimeout(() => {
        setRenderSearch(false);
      }, 300);
    }
  }, [countryData]);

  return (
    <Wrapper>
      <Navbar
        width={width}
        countryData={countryData}
        renderSearch={renderSearch}
        setCountry={setCountry}
        setCountryData={setCountryData}
        country={country}
        setIsLoading={setIsLoading}
        setIsError={setIsError}
      />
      {renderSearch ? (
        <SearchForm
          ref={myRef}
          setCountry={setCountry}
          setCountryData={setCountryData}
          country={country}
          setIsLoading={setIsLoading}
          setIsError={setIsError}
        />
      ) : null}

      {isLoading ? (
        <div className="content-center">
          <Loading />
        </div>
      ) : isError ? (
        <div className="content-center">
          <div className="error">
            <p>
              Whoops. Looks like something went wrong. Try refreshing or please
              try again later...
            </p>
          </div>
        </div>
      ) : !isLoading && !isError && countryData ? (
        <div className="content-center">
          <h2>{countryData?.general.nameOfficial}</h2>
          <DynamicObjectRenderer data={countryData} />
        </div>
      ) : (
        <>
          <section>
            <h5>a world of information</h5>
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
  max-width: 100%;
  min-height: 100vh;

  .content-center {
    margin-top: 2rem;
    display: grid;
    place-content: center;
    min-height: 50vh;
    width: 100%;
    .error {
      display: grid;
      text-align: center;
      max-width: 70vw;
      margin: 10rem auto 0 auto;
      height: 50vh;
      font-size: calc(1.25rem + 0.390625vw);
      p {
        margin: auto;
      }
    }
    h2 {
      text-align: center;
      font-size: calc(1.25rem + 0.390625vw);
    }
  }

  section {
    position: relative;
    z-index: -99;
    aspect-ratio: 1;
    width: 90%;
    height: 100%;
    margin: 30vh auto 0 auto;
    h5 {
      position: absolute;
      text-align: center;
      font-size: calc(1rem + 0.390625vw);
      top: 18vh;
      left: 50%;
      color: white;
      transform: translate(-50%);
      padding: 0.25rem 1rem;
      border-radius: var(--borderRadius);
      background: #e14ed2;
    }
  }

  @media (min-width: 800px) {
    section {
      position: relative;
      z-index: -99;
      width: 100%;
      height: calc(100vh - 4rem);
      margin: 0 auto 0 auto;
      .img-container {
        position: relative;
        width: 100%;
        height: 100%;
        margin: auto;
        display: grid;
        place-content: center;
        z-index: -99;
        img {
          margin-top: 12rem;
          height: 60vh;
        }
      }
      h5 {
        top: 56vh;
      }
    }
  }
  .search-form {
    z-index: 9999999;
  }
`;
