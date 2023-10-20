import styled from "styled-components";
import { useWindowSize } from "react-use";

const InfoContainer = ({ children, title }) => {
  const { width } = useWindowSize();

  const handleClick = (e) => {
    e.currentTarget
      .querySelector(".center.content")
      .classList.toggle("minimized");
  };

  return (
    <Wrapper
      onClick={(e) => {
        handleClick(e);
      }}
    >
      <header>
        <h1 className="center">{title}</h1>
      </header>

      <div
        className={width >= 800 ? "center content minimized" : "center content"}
      >
        {children}
      </div>
    </Wrapper>
  );
};
export default InfoContainer;

const Wrapper = styled.article`
  box-shadow: 5px 10px 8px #888888;
  position: relative;
  width: 90%;
  /* aspect-ratio: 1; */
  margin: 1.25rem auto;
  border-radius: 20px;
  header {
    height: 3rem;
    color: white;
    background-color: #e14ed2;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    border-radius: 20px;
    text-align: center;
    h1 {
      font-size: calc(1.25rem + 0.390625vw);
      line-height: 3rem;
    }
  }
  .center {
    width: 97%;
    margin: 0 auto;
  }
  @media (min-width: 800px) {
    transition: 0.1s all linear;
    .minimized {
      height: 0rem;
      overflow-y: hidden;
    }
    &:hover {
      cursor: pointer;
    }
  }
`;
