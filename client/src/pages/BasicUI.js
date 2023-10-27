// react
import { useState, useEffect, useRef } from "react";

// libraries
import styled from "styled-components";
import { useWindowSize } from "react-use";
import { VscSettingsGear } from "react-icons/vsc";
import { useLocalStorage } from "react-use";

// assets
import worldMap from "../assets/images/globe.svg";

// components
import DynamicObjectRenderer from "../components/DynamicObjectRenderer.js";
import SearchForm from "../components/SearchForm.js";
import Loading from "../components/Loading.js";
import Navbar from "../components/Navbar.js";
import Sidebar from "../components/Sidebar";
import CustomCategory from "../components/CustomCategory";

const BasicUI = () => {
  const [renderSearch, setRenderSearch] = useState(true);
  const myRef = useRef(null);
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { width } = useWindowSize();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isNewInsightOpen, setIsNewInsightOpen] = useState(false);
  const [value, setValue, remove] = useLocalStorage("customCategories");

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

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
        isSidebarOpen={isSidebarOpen}
        width={width}
        countryData={countryData}
        renderSearch={renderSearch}
        setCountry={setCountry}
        setCountryData={setCountryData}
        country={country}
        setIsLoading={setIsLoading}
        setIsError={setIsError}
      />
      <CustomCategory
        value={value}
        setValue={setValue}
        isNewInsightOpen={isNewInsightOpen}
        setIsNewInsightOpen={setIsNewInsightOpen}
        countryData={countryData}
      />
      <div className={isSidebarOpen ? "cover overlay" : "overlay"}></div>
      <Sidebar
        remove={remove}
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        setSidebarOpen={setSidebarOpen}
        setIsNewInsightOpen={setIsNewInsightOpen}
      />
      <div
        className={
          width >= 800 ? "gear-container top-right" : "gear-container top-left"
        }
      >
        <VscSettingsGear
          onClick={() => toggleSidebar()}
          className={isSidebarOpen ? "gear-icon open" : "gear-icon"}
        />
      </div>

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
          <DynamicObjectRenderer data={countryData} value={value} />
        </div>
      ) : (
        <>
          <section>
            <div className="img-container">
              <h5>a world of information</h5>
              <img
                width="460px"
                height="460px"
                src={worldMap}
                alt="globe of the world"
              />
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
      margin-top: 5rem;
    }
  }

  section {
    position: relative;
    z-index: -99;
    aspect-ratio: 1;
    width: 90%;
    height: 100%;
    margin: 30vh auto 0 auto;
    .img-container {
      h5 {
        position: absolute;
        text-align: center;
        font-size: calc(1rem + 0.390625vw);
        left: 50%;
        top: 50%;
        color: white;
        transform: translate(-50%, -50%);
        padding: 0.25rem 1rem;
        border-radius: var(--borderRadius);
        background: #e14ed2;
      }
      img {
        max-width: 90vw;
        height: auto;
      }
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
        h5 {
          margin-top: 6rem;
          position: absolute;
          text-align: center;
          font-size: calc(1rem + 0.390625vw);
          left: 50%;
          top: 50%;
          color: white;
          transform: translate(-50%, -50%);
          padding: 0.25rem 1rem;
          border-radius: var(--borderRadius);
          background: #e14ed2;
        }
        img {
          margin-top: 12rem;
          height: 60vh;
        }
      }
    }
  }
  .search-form {
    z-index: 9;
  }

  .gear-icon {
    z-index: 12;
    transform: rotate(-90deg);

    font-size: 2rem;
    transition: linear 0.2s all;
    &.open {
      transform: rotate(90deg);
    }

    &:hover {
      cursor: pointer;
    }
  }
  .top-left {
    position: absolute;
    top: 5.5rem;
    left: 1.25rem;
  }
  .top-right {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
`;
