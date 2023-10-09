import styled from "styled-components";
import wave from "../assets/images/wave1.svg";
const Footer = () => {
  return <Wrapper></Wrapper>;
};
export default Footer;

const Wrapper = styled.footer`
  background-image: url(${wave});
  background-repeat: no-repeat;
  background-size: cover;
  height: 50rem;
  width: 100%;
`;
