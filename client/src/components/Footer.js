import styled from "styled-components";
import wave from "../assets/images/wave1.svg";
const Footer = () => {
  return <Wrapper>This is some footer content</Wrapper>;
};
export default Footer;

const Wrapper = styled.footer`
  border: red solid 1px;
  background-image: url(${wave});
  background-repeat: no-repeat;
  background-size: cover;
  height: 50rem;
  padding-top: 20rem;
  width: 100%;
`;
