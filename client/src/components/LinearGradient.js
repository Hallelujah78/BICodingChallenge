import styled from "styled-components";

const LinearGradient = () => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  height: 0.75rem;
  background: rgb(225, 78, 210);
  background: linear-gradient(
    90deg,
    rgba(225, 78, 210, 1) 0%,
    rgba(237, 150, 229, 1) 100%
  );
`;

export default LinearGradient;
