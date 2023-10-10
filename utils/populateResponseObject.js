import createArrayOfObjects from "./createArrayOfObjects.js";
import isEmpty from "./isEmpty.js";
import { smallJpgMainFacts } from "./config.js";
import arrayOfObjectsFromKeyValue from "./arrayOfObjFromKeyValue.js";

const populateResponseObject = ({
  object,
  createResponseObject,
  languageObject,
  currencyObject,
}) => {
  const responseObject = createResponseObject();
  const {
    demographics,
    general,
    additional,
    intlRelations,
    geography,
    communications,
    codes,
  } = responseObject;

  const {
    flag,
    name,
    name: { common, official },
    population,
    coatOfArms,
    coatOfArms: { png, svg },
    cca2,
    cca3,
    ccn3,
    cioc,
    fifa,
    tld,
    independent,
    status,
    unMember,
    currencies,
    altSpellings,
    flags: { png: flagPng, svg: flagSvg, flagAlt },
    car: { signs, side },
    idd,
    postalCode,
    demonyms,
    gini,
    languages,
    startOfWeek,
    translations,
    capitalInfo,
    region,
    subRegion,
    capital,
    area,
    landlocked,
    maps: { googleMaps, openStreetMaps },
    continents,
    borders,
    latlng,
    timezones,
  } = object;

  //** GENERAL **/
  general.nameCommon = common;
  general.nameOfficial = official;
  general.altSpellings = altSpellings; // []
  general.flagPng = flagPng;
  general.flagSvg = flagSvg;
  general.flagAlt = flagAlt ? flagAlt : `The flag of ${common}.`;
  general.carSigns = signs; //[]
  general.carSide = side;

  // nativeName

  if (name.nativeName) {
    general.nameNative = createArrayOfObjects({
      object: name.nativeName,
      newObjProp: "lang",
      lookUp: languageObject,
      useLookUp: true,
    });
  }

  // coatOfArms
  if (!isEmpty(coatOfArms)) {
    general.coatOfArmsSvgUrl = svg;
    general.coatOfArmsPngUrl = png;
    general.coatOfArmsAlt = `Coat of arms for ${official}`;
    general.coatOfArmsJpgUrl = `${smallJpgMainFacts}${cca2.toLowerCase()}.jpg`;
  }

  // currencies

  general.currencies = currencies
    ? createArrayOfObjects({
        object: currencies,
        newObjProp: "iso4217",
        lookUp: currencyObject,
        useLookUp: false,
      })
    : null;

  //** END OF GENERAL **/

  //** INTERNATIONAL RELATIONS **/
  intlRelations.unMember = unMember;
  intlRelations.independent = independent;
  intlRelations.status = status;
  //** END OF INTERNATIONAL RELATIONS **/

  //** DEMOGRAPHICS **/
  demographics.population = population;

  // demonyms
  if (!isEmpty(demonyms) && demonyms !== undefined) {
    demographics.demonyms = createArrayOfObjects({
      object: demonyms,
      newObjProp: "lang",
      lookUp: languageObject,
      useLookUp: true,
    });
  }
  // end of demonyms

  // gini
  if (gini === undefined) {
    demographics.gini = [];
  } else if (!isEmpty(gini)) {
    demographics.gini = arrayOfObjectsFromKeyValue({
      object: gini,
      newKeyName: "year",
      newValueName: "gini",
    });
  }

  // languages
  if (languages !== undefined) {
    if (!isEmpty(languages)) {
      demographics.languages = arrayOfObjectsFromKeyValue({
        object: languages,
        newKeyName: "iso6392T",
        newValueName: "lang",
      });
    }
  }

  //** ADDITIONAL **/
  additional.startOfWeek = startOfWeek;

  // translations
  if (!isEmpty(translations)) {
    additional.translations = createArrayOfObjects({
      object: translations,
      newObjProp: "lang",
      lookUp: languageObject,
      useLookUp: true,
    });
  }
  //** COMMUNICATIONS **/
  communications.tld = tld;

  // internatonal dialing
  if (!isEmpty(idd)) {
    const iddCodes = [];
    idd.suffixes.forEach((suffix) => {
      iddCodes.push(`${idd.root}${suffix}`);
    });
    communications.idd = iddCodes;
  }

  //postal
  communications.postalCode = postalCode ? postalCode : null;

  //** CODES **/
  codes.cca2 = cca2;
  codes.cca3 = cca3;
  codes.ccn3 = ccn3;
  codes.cioc = cioc;
  codes.flag = flag;
  codes.fifa = fifa;

  //** GEOGRAPHY **/
  geography.continents = continents;
  geography.region = region;
  geography.subregion = subRegion ? subRegion : null;
  geography.latlng = latlng;
  geography.borders = borders ? borders : null;
  geography.capital = capital ? capital : "None"; // can be missing for island nations
  geography.capitalLatlng = capitalInfo?.latlng ? capitalInfo.latlng : null; // can be empty object
  geography.area = area ? area : 0;
  geography.timezones = timezones;
  geography.landlocked = landlocked;
  geography.googleMaps = googleMaps; // all map objects contain 2 values
  geography.openStreetMaps = openStreetMaps;

  return responseObject;
};

export default populateResponseObject;
