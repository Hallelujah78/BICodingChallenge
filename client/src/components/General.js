import styled from "styled-components";
const General = ({ general }) => {
  const {
    nameCommon,
    altSpellings,
    carSide,
    carSigns,
    coatOfArmsAlt,
    coatOfArmsJpgUrl,
    coatOfArmsSvgUrl,
    currencies,
    flagSvg,
    flagAlt,
    flagPng,
    nameNative,
    nameOfficial,
  } = general;
  return (
    <Wrapper>
      <h1>General</h1>
      <div>{nameCommon}</div>
      <img className="flag-img" src={flagSvg} alt={flagAlt} />
    </Wrapper>
  );
};
export default General;

const Wrapper = styled.div`
  margin-left: 1rem;

  font-size: calc(0.75rem + 0.390625vw);
  position: absolute;
  top: 0;
  .flag-img {
    width: 50%;
    height: auto;
  }
  h1 {
    font-size: calc(1.25rem + 0.390625vw);
    color: white;
    margin-top: 0.25rem;
  }
`;
