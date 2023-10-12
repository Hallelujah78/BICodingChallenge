import React from "react";
import InfoContainer from "./InfoContainer.js";
import styled from "styled-components";
import TableRow from "./TableRow.js";

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
            coatOfArmsAlt,
            coatOfArmsJpgUrl,
            coatOfArmsSvgUrl,
            currencies,
            flagSvg,
            flagAlt,
            flagPng,
            nameNative,
            title,
          } = data.general;
          return (
            <InfoContainer key={key} title={title}>
              <div className="title">
                <h3>{nameOfficial}</h3>
              </div>
              <table className="table-2-col">
                <tbody>
                  <tr>
                    <td>Formal Name</td>
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
                </tbody>
              </table>
              <table className="th-3-col">
                <tbody>
                  <tr>
                    <th>Official Languages</th>
                    <th>Informal Name</th>
                    <th>Official Name</th>
                  </tr>
                  {nameNative?.length > 0 ? (
                    nameNative.map((name) => {
                      return (
                        <tr key={name.lang}>
                          <td>{name.lang}</td>
                          <td>{name.common}</td>
                          <td>{name.official}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td>None</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                  )}
                </tbody>
              </table>
              <table className="table-2-col">
                <tbody>
                  <tr>
                    <td>Coat of Arms</td>
                    <td>
                      {coatOfArmsSvgUrl ? (
                        <img src={coatOfArmsSvgUrl} alt={coatOfArmsAlt} />
                      ) : (
                        "None"
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="th-3-col">
                <tbody>
                  <tr>
                    <th>Currency</th>
                    <th>Currency Symbol</th>
                    <th>3-Letter Code</th>
                  </tr>
                  {currencies?.length > 0 ? (
                    currencies.map((currency) => {
                      return (
                        <tr key={currency.symbol}>
                          <td>{currency.name}</td>
                          <td>{currency.symbol}</td>
                          <td>{currency.iso4217}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td>None</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </InfoContainer>
          );
        } else if (item.type === "communications") {
          const { tld, idd, postalCode, title } = data.communications;
          return (
            <InfoContainer key={key} title={title}>
              <table className="table-2-col">
                <tbody>
                  <tr>
                    <td>Top Level Domain</td>
                    <td>{tld}</td>
                  </tr>
                  <tr>
                    <td>Postal Code Format</td>
                    <td>
                      {postalCode ? postalCode.format : " No postal Code"}
                    </td>
                  </tr>
                  <tr>
                    <td>Postal Code Regular Expression</td>
                    <td>
                      {postalCode ? (
                        <code>{postalCode.regex}</code>
                      ) : (
                        " No postal Code"
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Postal Code Validator</td>
                    <td>
                      {postalCode ? (
                        <input pattern={postalCode.regex} />
                      ) : (
                        " No postal Code"
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>International Direct Dialing</td>
                    <td>{idd?.[0] ? idd[0] : "None"}</td>
                  </tr>
                </tbody>
              </table>
            </InfoContainer>
          );
        } else if (item.type === "intlRelations") {
          const { independent, status, unMember, title } = data.intlRelations;
          return (
            <InfoContainer key={key} title={title}>
              <table className="table-2-col">
                <tbody>
                  <tr>
                    <td>Independent</td>
                    <td>{independent ? "Yes" : "No"}</td>
                  </tr>
                  <tr>
                    <td>ISO 3166 country code status</td>
                    <td>{status}</td>
                  </tr>
                  <tr>
                    <td>Member of United Nations</td>
                    <td>{unMember ? "Yes" : "No"}</td>
                  </tr>
                </tbody>
              </table>
            </InfoContainer>
          );
        } else if (item.type === "additional") {
          const { carSigns, carSide, startOfWeek, translations, title } =
            data.additional;
          return (
            <InfoContainer key={key} title={title}>
              <table className="table-2-col">
                <tbody>
                  <tr>
                    <td>Start of Week</td>
                    <td>{startOfWeek}</td>
                  </tr>
                  <tr>
                    <td>Driving Side</td>
                    <td>Drive on the {carSide} side of the road</td>
                  </tr>
                  <tr>
                    <td>International Vehicle Registration Codes</td>
                    <td>
                      {carSigns?.length > 0
                        ? carSigns.map((sign, index) => {
                            if (index === carSigns.length - 1) {
                              return `${sign}`;
                            }
                            return `${sign}, `;
                          })
                        : "None"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="th-3-col">
                <tbody>
                  <tr>
                    <th colSpan="3" className="table-heading">
                      Name in Different Languages
                    </th>
                  </tr>
                  <tr>
                    <th>Language</th>
                    <th>Informal Name</th>
                    <th>Official Name</th>
                  </tr>
                  {translations?.length > 0 ? (
                    translations.map((translation) => {
                      const { lang, common, official } = translation;
                      return (
                        <tr key={lang}>
                          <td>{lang}</td>
                          <td>{common}</td>
                          <td>{official}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td>None</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </InfoContainer>
          );
        } else if (item.type === "geography") {
          const {
            title,
            continents,
            region,
            subregion,
            latlng,
            borders,
            capital,
            capitalLatlng,
            area,
            timezones,
            landlocked,
            googleMaps,
            openStreetMaps,
          } = data.geography;
          return (
            <InfoContainer key={key} title={title}>
              <table className="table-2-col">
                <tbody>
                  <TableRow label="Capital City" property={capital} />
                  <TableRow
                    label="Capital Latitude and Longitude"
                    property={capitalLatlng}
                  />
                  <TableRow
                    label="Area in Square Kilometres"
                    property={area}
                    nullValue="None"
                  />
                  <TableRow
                    label="Google Maps Link"
                    property={
                      <a
                        style={{ textDecoration: "underline", color: "green" }}
                        href={googleMaps}
                      >
                        Google Maps
                      </a>
                    }
                  />
                  <TableRow
                    label="Open Street Maps Link"
                    property={
                      <a
                        style={{ textDecoration: "underline", color: "green" }}
                        href={openStreetMaps}
                      >
                        Open Street Maps
                      </a>
                    }
                  />
                  <TableRow label="Region" property={region} />
                  <TableRow
                    label="Subregion"
                    property={subregion}
                    nullValue="None"
                  />

                  <tr>
                    <td>Continents</td>
                    <td>
                      {continents?.length > 0
                        ? continents.map((continent, index) => {
                            if (continents.length - 1 === index) {
                              return `${continent}`;
                            } else {
                              return `${continent}, `;
                            }
                          })
                        : "None"}
                    </td>
                  </tr>
                  <TableRow label="Latitude & Longitude" property={latlng} />
                  <TableRow label="Bordering Countries" property={borders} />
                  <TableRow label="Timezones" property={timezones} />
                  <TableRow
                    label="Landlocked"
                    property={landlocked}
                    nullValue="No"
                    value="Yes"
                  />
                </tbody>
              </table>
            </InfoContainer>
          );
        } else if (item.type === "demographics") {
          const { title, demonyms, population, gini, languages } =
            data.demographics;
          return (
            <InfoContainer key={key} title={title}>
              <table className="table-2-col">
                <tbody>
                  <TableRow label="Population" property={population} />
                </tbody>
              </table>
              <table className="table-2-col">
                <tbody>
                  <tr>
                    <th colSpan="2" className="table-heading">
                      Official Languages
                    </th>
                  </tr>
                  <tr>
                    <th>Language</th>
                    <th>3-letter Code</th>
                  </tr>
                  {languages?.length > 0 ? (
                    languages.map((language) => {
                      return (
                        <tr key={language.iso6392T}>
                          <td>{language.lang}</td>
                          <td>{language.iso6392T}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td>None</td>

                      <td>-</td>
                    </tr>
                  )}
                </tbody>
              </table>
              {/* array of objects */}
              <table className="table-2-col">
                <tbody>
                  <tr>
                    <th colSpan="2" className="table-heading">
                      Gini Index
                    </th>
                  </tr>
                  <tr>
                    <th>Year</th>
                    <th>Gini Index</th>
                  </tr>

                  {gini ? (
                    gini.map((item) => {
                      return (
                        <tr>
                          <td>{item.year}</td>
                          <td>{item.gini}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td>none</td>
                      <td>none</td>
                    </tr>
                  )}
                </tbody>
              </table>
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
  hyphens: auto;
  width: 100%;
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: 1fr;

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
    width: 100%;
    border-collapse: collapse;
  }

  td,
  th {
    padding: 15px 5px;
    word-wrap: break-word;
    hyphens: auto;
  }
  td:nth-of-type(1) {
    font-weight: bold;
    color: rgba(100, 100, 100, 1);
  }
  td:nth-of-type(3) {
    /* font-size: 1rem; */
  }

  table.table-2-col {
    table-layout: fixed;
    td,
    th {
      width: 50%;
      hyphens: auto;
    }
  }
  table.table-3-col {
    table-layout: auto;
    width: 100%;
    td,
    th {
      word-wrap: break-word;
      hyphens: auto;
    }
    td:nth-of-type(2) {
      font-style: italic;
    }
  }
  table.th-3-col {
    table-layout: fixed;
    width: 100%;
    td {
      hyphens: auto;
    }
  }
  .table-heading {
    text-align: center;
  }

  h3 {
    margin-top: 1rem;
    font-size: calc(1.25rem + 0.390625vw);
  }
  code {
    font-size: 0.7rem;
  }
`;

export default DynamicObjectRenderer;
