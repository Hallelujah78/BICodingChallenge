import React from "react";
import InfoContainer from "./InfoContainer.js";
import styled from "styled-components";
import TableRow from "./TableRow.js";
import TableElementWithToolTip from "./TableElementWithToolTip.js";
import PostalCodeValidation from "./PostalCodeValidation.js";

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
            coatOfArmsSvgUrl,
            currencies,
            flagSvg,
            flagAlt,
            nameNative,
            title,
          } = data.general;
          return (
            <InfoContainer key={key} title={title}>
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
                  <TableRow
                    label="Alternative Names and Abbreviations"
                    property={altSpellings}
                  />
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
                    <th>
                      <TableElementWithToolTip
                        isHeading={true}
                        headingText="3-letter code"
                        toolTipText="The 3-letter currency code comes <br/> from ISO 4217 which is a standard<br/> published by the International <br/>Organization for Standardization."
                      />
                    </th>
                  </tr>
                  {currencies?.length > 0 ? (
                    currencies.map((currency) => {
                      return (
                        <tr key={currency.iso4217}>
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
        } else if (item.type === "communicationsAndCodes") {
          const {
            tld,
            idd,
            postalCode,
            title,
            cca2,
            ccn3,
            cca3,
            cioc,
            flag,
            fifa,
          } = data.communicationsAndCodes;
          return (
            <InfoContainer key={key} title={title}>
              <table className="table-2-col">
                <tbody>
                  <TableRow
                    label={
                      <TableElementWithToolTip
                        isHeading={false}
                        headingText="Country Code Top-Level Domain"
                        toolTipText="A country code top-level <br/> domain is an Internet <br/>top-level domain generally<br/> used or reserved for a country, <br/>sovereign state, or dependent <br/>territory identified with a country<br/> code."
                      />
                    }
                    property={tld}
                  />
                  <tr>
                    <td>
                      <TableElementWithToolTip
                        isHeading={false}
                        headingText=" Postal Code Format"
                        toolTipText="A # (number sign) indicates<br/> a digit between 0 and 9. An <br/>@ symbol represents an <br/>alphabetic character."
                      />
                    </td>
                    <td>
                      {postalCode ? postalCode.format : " No postal Code"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <TableElementWithToolTip
                        isHeading={false}
                        headingText="Postal Code Regular Expression"
                        toolTipText="A regular expression <br/> is a sequence of characters <br/> that can be used to match<br/> a pattern in text. Postal<br/>  codes have  particular <br/>formats and so we can <br/>use regular expressions <br/>to find out if a given group<br/> of numbers and alphabetic<br/> characters could be a valid <br/>postal code."
                      />
                    </td>
                    <td>
                      {postalCode?.regex ? (
                        <code>{postalCode?.regex}</code>
                      ) : (
                        " No regular expression provided"
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Postal Code Format Validator</td>
                    <td>
                      {postalCode?.regex ? (
                        <PostalCodeValidation regex={postalCode?.regex} />
                      ) : (
                        " No regular expression provided"
                      )}
                    </td>
                  </tr>

                  <TableRow
                    label={
                      <TableElementWithToolTip
                        isHeading={false}
                        headingText="International Direct Dialing"
                        toolTipText="An international direct<br/>dialing code is the code <br/>you must dial to place <br/>a call to a given country."
                      />
                    }
                    property={idd}
                  />

                  <TableRow
                    label={
                      <TableElementWithToolTip
                        isHeading={false}
                        headingText="ISO 3166-1 Alpha-2 Country Code"
                        toolTipText="These 2-letter country<br/> codes are part of ISO <br/>3166 published by the <br/>International Standards <br/>Organization."
                      />
                    }
                    property={cca2}
                  />
                  <TableRow
                    label={
                      <TableElementWithToolTip
                        isHeading={false}
                        headingText="ISO 3166-1 Alpha-3 Country Code"
                        toolTipText="These 3-letter country<br/> codes are part of ISO <br/>3166 published by the <br/>International Standards <br/>Organization."
                      />
                    }
                    property={cca3}
                  />
                  <TableRow
                    label={
                      <TableElementWithToolTip
                        isHeading={false}
                        headingText="ISO 3166-1 Numeric-3 Country Code"
                        toolTipText="These 3-digit country<br/> codes are part of ISO <br/>3166 published by the <br/>International Standards <br/>Organization."
                      />
                    }
                    property={ccn3}
                  />

                  <TableRow
                    label={
                      <TableElementWithToolTip
                        isHeading={false}
                        headingText="International Olympic Committee Country Code"
                        toolTipText="These 3-letter country<br/> codes are used by the <br/>International Olympic <br/>Committee.<br/>"
                      />
                    }
                    property={cioc}
                  />
                  <TableRow
                    label={
                      <TableElementWithToolTip
                        isHeading={false}
                        headingText="Unicode Emoji Flag Sequence"
                        toolTipText="This sequence of two <br/> Unicode characters will <br/>appear as either a flag <br/>or a sequence of two <br/>letters depending on the <br/>operating system or browser <br/>you are using. Unicode is a<br/> character encoding standard."
                      />
                    }
                    property={flag}
                  />
                  <TableRow
                    label={
                      <TableElementWithToolTip
                        isHeading={false}
                        headingText="FIFA Country Code"
                        toolTipText="These 3-letter country<br/> codes are used by FIFA,<br/> the international governing<br/> body of soccer."
                      />
                    }
                    property={fifa}
                  />
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
                    <td>
                      <TableElementWithToolTip
                        isHeading={false}
                        headingText="ISO 3166 country code status"
                        toolTipText="ISO 3166 country  codes<br/> are assigned by the<br/> United Nations."
                      />
                    </td>
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
                    <td>
                      <TableElementWithToolTip
                        isHeading={false}
                        headingText="International Vehicle Registration Codes"
                        toolTipText="The country in which <br/> a motor vehicle's <br/>vehicle registration <br/>plate was issued <br/>may be indicated <br/>by an international <br/>licence plate country <br/>code."
                      />
                    </td>
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
                  <TableRow
                    label="Bordering Countries"
                    property={borders}
                    value="None"
                  />
                  <TableRow
                    label={
                      <TableElementWithToolTip
                        isHeading={false}
                        headingText="Timezones"
                        toolTipText="UTC means Coordinated <br/> Universal Time, and it is<br/> the primary central time <br/>standard by which the <br/>world synchronizes clock <br/>and time, nowadays, which <br/>also is based on time<br/> in Greenwich, London."
                      />
                    }
                    property={timezones}
                  />
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
                    <th>
                      <TableElementWithToolTip
                        headingText="3-letter code"
                        toolTipText="The 3-letter language code <br/> comes  from ISO 639-2/T <br/>which is a standard<br/> published by the International <br/>Organization for Standardization."
                      />
                    </th>
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
                    <th>
                      <TableElementWithToolTip
                        headingText="Gini Index"
                        toolTipText="The Gini Index is a  <br/> measure, on a 0 to 100 scale, <br/> of how equal a country's  <br/>distribution of income is.<br/> Lower is better."
                      />
                    </th>
                  </tr>

                  {gini.year ? (
                    gini.map((item) => {
                      return (
                        <tr key={item.year}>
                          <td>{item.year}</td>
                          <td>{item.gini}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td>-</td>
                      <td>not available</td>
                    </tr>
                  )}
                </tbody>
              </table>
              <table className="th-3-col">
                <tbody>
                  <tr>
                    <th className="table-heading" colSpan="3">
                      <TableElementWithToolTip
                        headingText="Demonyms"
                        toolTipText="A demonym is a <br/>
                                    noun used to denote<br/>
                                    the natives or <br/>
                                    inhabitants of a <br/>
                                    particular country, <br/>
                                    state, city, etc."
                      />
                    </th>
                  </tr>
                  <tr>
                    <th>Language</th>
                    <th>Male</th>
                    <th>Female</th>
                  </tr>
                  {demonyms?.length > 0 ? (
                    demonyms.map((demonym) => {
                      return (
                        <tr key={demonym.lang}>
                          <td>{demonym.lang}</td>
                          <td>{demonym.m}</td>
                          <td>{demonym.f}</td>
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
        }

        return null;
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
  article {
    align-self: start;
  }

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
