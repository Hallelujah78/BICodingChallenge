import React from "react";
import InfoContainer from "./InfoContainer.js";
import styled from "styled-components";

// our data object (simplified)
//

const DynamicObjectRenderer = ({ data }) => {
  return (
    <Wrapper>
      {Object.keys(data).map((key) => {
        const item = data[key];
        if (item.type === "general") {
          const {
            nameOfficial,
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

            title,
            type,
          } = data.general;
          return (
            <InfoContainer key={key} title={title}>
              <table className="two">
                <tr>
                  <td>Country</td>
                  <td>{nameOfficial}</td>
                </tr>
                <tr>
                  <td>Informal name</td>
                  <td>{nameCommon}</td>
                </tr>
                <tr>
                  <td>Flag</td>
                  <td>
                    <img src={flagSvg} alt={flagAlt} />
                  </td>
                </tr>
              </table>
              <table className="three">
                <tr>
                  <td>Names</td>

                  {nameNative[0] ? (
                    <>
                      <td>{nameNative[0].lang}</td>
                      <td>{nameNative[0].common}</td>
                    </>
                  ) : (
                    <td>no native name</td>
                  )}
                </tr>
              </table>
              <table className="two">
                <tr>
                  <td>Coat of Arms</td>
                  <td>
                    <img src={coatOfArmsSvgUrl} alt={coatOfArmsAlt} />
                  </td>
                </tr>
              </table>
            </InfoContainer>
          );
        } else if (item.type === "communications") {
          const { tld, idd, postalCode, title } = data.communications;
          return (
            <InfoContainer key={key} title={title}>
              <div className="grid-container">
                <div>Top Level Domain</div> <div>{tld}</div>
                <div>Postal Code Format</div>
                <div>{postalCode ? postalCode.format : " No postal Code"}</div>
                <div>International Direct Dialing Code</div>
                <div> {idd?.[0]}</div>
              </div>
            </InfoContainer>
          );
        } else if (item.type === "intlRelations") {
          const { independent, status, unMember, title } = data.intlRelations;
          return (
            <InfoContainer key={key} title={title}>
              <div>
                <p>Independent: {independent ? "Yes" : "No"}</p>
                <p>ISO 3166 code status: {status}</p>
                <p>Member of United Nations: {unMember ? "Yes" : "No"}</p>
              </div>
            </InfoContainer>
          );
        } else if (item.type === "intlRelations") {
          const { independent, status, unMember, title } = data.intlRelations;
          return (
            <InfoContainer key={key} title={title}>
              <div>
                <p>Independent: {independent ? "Yes" : "No"}</p>
                <p>ISO 3166 code status: {status}</p>
                <p>Member of United Nations: {unMember ? "Yes" : "No"}</p>
              </div>
            </InfoContainer>
          );
        }
        // Handle other types similarly if needed
        return null; // Render nothing for unknown types
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: 1fr;
  /* .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  } */
  img {
    width: 90%;
    margin: 0.5rem;
  }
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1150px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  table {
    text-align: left;
  }
  td {
    padding: 15px 0;
  }
  td:nth-of-type(1) {
    font-weight: bold;
    color: rgba(100, 100, 100, 1);
  }
  td:nth-of-type(3) {
    font-size: 2rem;
  }
  td:nth-of-type(2) {
    font-style: italic;
  }
  table.two {
    table-layout: fixed;
    td {
      width: 50%;
    }
  }
  table.three {
    table-layout: auto;
    width: 100%;
    td {
    }
  }
`;

export default DynamicObjectRenderer;
