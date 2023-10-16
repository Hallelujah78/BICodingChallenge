import styled from "styled-components";

const InfoContainer = ({ children, title }) => {
  return (
    <Wrapper>
      <header>
        <h1 className="center">{title}</h1>
      </header>
      <div className="center">{children}</div>
    </Wrapper>
  );
};
export default InfoContainer;

const Wrapper = styled.article`
  box-shadow: 5px 10px 8px #888888;
  position: relative;
  width: 90%;
  aspect-ratio: 1;
  margin: 1.25rem auto;
  border-radius: 20px;
  header {
    height: 3rem;
    color: white;
    background-color: #e14ed2;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
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
`;
