import styled from "styled-components";

import image from "../assets/images/CI.webp";
import icon from "../assets/images/CI-small.png";

import { NavSearchForm } from "./NavSearchForm";

const Navbar = ({
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
      <div className={countryData ? "nav" : "nav hidden"}>
        <div className="gradient"></div>
        <div className="nav-container">
          <img className="icon-small" src={icon} alt="" />
          {!renderSearch ? (
            <NavSearchForm
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
        <img src={image} alt="country insights logo" />
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

  .gradient {
    height: 0.75rem;
    background: rgb(225, 78, 210);
    background: linear-gradient(
      90deg,
      rgba(225, 78, 210, 1) 0%,
      rgba(237, 150, 229, 1) 100%
    );
  }
  .image-container {
    position: absolute;
    top: 1.25rem;
    left: 1vw;
    transition: 0.5s all linear;
  }
  .icon-small {
    margin: auto 0 auto 0;
    width: 2rem;
    height: 2rem;
  }
`;
