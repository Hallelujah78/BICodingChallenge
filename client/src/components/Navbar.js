import styled from "styled-components";
import image from "../assets/images/CI.svg";

const Navbar = ({ countryData }) => {
  return (
    <Wrapper>
      <div className={countryData ? "nav" : "nav hidden"}>
        <div className="gradient"></div>
        <div className="nav-container"></div>
      </div>
      <div className="image-container">
        <img src={image} alt="country insights logo" />
      </div>
    </Wrapper>
  );
};
export default Navbar;

const Wrapper = styled.header`
  position: relative;
  .nav {
    box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.15);
    text-align: center;
    width: 100%;
    background: white;
    transition: 0.5s all linear;
  }

  height: 4rem;
  .nav-container {
    display: flex;
    max-width: 95vw;
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
  }
`;
