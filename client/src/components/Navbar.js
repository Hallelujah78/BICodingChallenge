import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="gradient"></div>
      <h3>Navbar</h3>
    </Wrapper>
  );
};
export default Navbar;

const Wrapper = styled.header`
  box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.15);
  text-align: center;
  width: 100%;
  height: 4rem;
  background: white;
  color: white;
  .gradient {
    height: 0.75rem;
    background: rgb(180, 58, 58);
    background: linear-gradient(
      90deg,
      rgba(180, 58, 58, 1) 0%,
      rgba(153, 53, 153, 1) 13%,
      rgba(180, 47, 120, 1) 26%,
      rgba(209, 40, 84, 1) 39%,
      rgba(253, 29, 29, 1) 52%,
      rgba(253, 67, 39, 1) 65%,
      rgba(253, 111, 51, 1) 78%,
      rgba(253, 141, 59, 1) 89%,
      rgba(252, 69, 69, 1) 100%
    );
  }
`;
