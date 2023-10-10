import styled from "styled-components";
const InfoContainer = ({ children }) => {
  return (
    <Wrapper>
      <header></header>
      {children}
    </Wrapper>
  );
};
export default InfoContainer;

const Wrapper = styled.article`
  box-shadow: 5px 10px 8px #888888;
  position: relative;
  width: 90vw;
  min-height: 90vw;
  margin: 1rem 0;
  border-radius: 20px;
  header {
    height: 3rem;
    background-color: #e14ed2;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  }
`;
