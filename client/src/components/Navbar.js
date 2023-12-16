// libraries
import styled from "styled-components";

// assets
import image from "../assets/images/CI.webp";
import icon from "../assets/images/CI-small.png";

// components
import { NavSearchForm } from "./NavSearchForm";
import LinearGradient from "./LinearGradient.js";

const Navbar = ({
  width,
  countryData,
  renderSearch,
  setCountry,
  setCountryData,
  country,
  setIsLoading,
  setIsError,
}) => {
  return (
    <Wrapper>
      <div className={countryData ? "nav show" : "nav hidden"}>
        <LinearGradient />
        <div className="nav-container">
          {width < 650 ? (
            <>
              <img
                data-test="small-icon-logo"
                onClick={() => {
                  window.location.reload();
                }}
                className="icon-small"
                src={icon}
                alt=""
              />
            </>
          ) : (
            <>
              <img
                onClick={() => {
                  window.location.reload();
                }}
                className="icon-small"
                src={icon}
                alt=""
              />
              <img
                data-test="country-insights-logo"
                height="44px"
                width="124px"
                className="logo"
                src={image}
                alt="country insights logo"
                onClick={() => {
                  window.location.reload();
                }}
              />
            </>
          )}

          {!renderSearch ? (
            <NavSearchForm
              renderSearch={renderSearch}
              width={width}
              className="nav-search-form"
              setCountry={setCountry}
              setCountryData={setCountryData}
              country={country}
              setIsLoading={setIsLoading}
              setIsError={setIsError}
            />
          ) : null}
        </div>
      </div>

      <div
        className={countryData ? "image-container hidden" : "image-container"}
      >
        <img
          data-test="logo-main"
          className="logo-main"
          onClick={() => {
            window.location.reload();
          }}
          src={image}
          alt="country insights logo"
        />
      </div>
    </Wrapper>
  );
};
export default Navbar;

const Wrapper = styled.header`
  width: 100%;
  height: 4rem;
  position: relative;
  .nav {
    box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.15);
    text-align: center;
    width: 100%;
    background: white;
    transition: 0.5s all linear;
  }

  .nav-container {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 6fr;
    place-content: center;
    max-width: 95%;
    margin: 0 auto;
    height: 4rem;
  }

  .image-container {
    position: absolute;
    top: 1.25rem;
    left: 2vw;
    transition: 0.5s all linear;
  }

  .icon-small {
    margin: auto 0 auto 0;
    width: 2rem;
    height: 2rem;
    &:hover {
      cursor: pointer;
    }
  }
  @media (min-width: 650px) {
    .nav-container {
      grid-template-columns: 1fr 1fr 5fr;
    }
  }
  .logo {
    margin-top: 0.5rem;
    &:hover {
      cursor: pointer;
    }
  }
  .logo-main {
    &:hover {
      cursor: pointer;
    }
  }
`;
