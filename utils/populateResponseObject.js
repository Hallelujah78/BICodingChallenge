import createArrayOfObjects from "./createArrayOfObjects.js";
import isEmpty from "./isEmpty.js";
import { smallJpgMainFacts } from "./config.js";
import arrayOfObjectsFromKeyValue from "./arrayOfObjFromKeyValue.js";

const populateResponseObject = ({
  object,
  createResponseObject,
  languageObject,
  currencyObject,
  countryObject,
}) => {
  const responseObject = createResponseObject();
  const {
    demographics,
    general,
    additional,
    intlRelations,
    geography,
    communicationsAndCodes,
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
    subregion,
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
  demographics.population = population ? population.toLocaleString() : 0;
  try {
    // demonyms
    if (demonyms !== undefined && !isEmpty(demonyms)) {
      demographics.demonyms = createArrayOfObjects({
        object: demonyms,
        newObjProp: "lang",
        lookUp: languageObject,
        useLookUp: true,
      });
    }
  } catch (err) {
    console.log(err);
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
  additional.startOfWeek = startOfWeek
    .charAt(0)
    .toUpperCase()
    .concat(startOfWeek.slice(1));
  if (signs !== undefined && signs[0] !== "") {
    additional.carSigns = signs; //[]
  }
  additional.carSide = side;

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
  communicationsAndCodes.tld = tld !== undefined && tld[0] ? tld : []; // this is actually an array of strings

  // internatonal dialing
  if (idd !== undefined && !isEmpty(idd)) {
    const iddCodes = [];
    if (idd.suffixes?.length > 0) {
      idd.suffixes.forEach((suffix) => {
        iddCodes.push(`${idd.root}${suffix}`);
      });
    } else {
      iddCodes.push(idd?.root);
    }
    communicationsAndCodes.idd = iddCodes;
  }

  //postal
  communicationsAndCodes.postalCode = postalCode ? postalCode : null;

  //** CODES **/
  communicationsAndCodes.cca2 = cca2;
  communicationsAndCodes.cca3 = cca3;
  communicationsAndCodes.ccn3 = ccn3;
  communicationsAndCodes.cioc = cioc;
  communicationsAndCodes.flag = flag;
  communicationsAndCodes.fifa = fifa;

  //** GEOGRAPHY **/
  geography.continents = continents;
  geography.region = region;
  geography.subregion = subregion ? subregion : null;
  geography.latlng = [
    Number.parseFloat(latlng[0].toFixed(6)),
    Number.parseFloat(latlng[1].toFixed(6)),
  ];

  geography.borders = borders
    ? borders.map((country) => {
        return countryObject[country];
      })
    : [];
  geography.capital = capital ? capital : "None"; // can be missing for island nations
  geography.capitalLatlng = capitalInfo?.latlng
    ? [
        Number.parseFloat(capitalInfo.latlng[0].toFixed(6)),
        Number.parseFloat(capitalInfo.latlng[1].toFixed(6)),
      ]
    : null; // can be empty object
  geography.area = area ? area.toLocaleString() : 0;
  geography.timezones = timezones;
  geography.landlocked = landlocked;
  geography.googleMaps = googleMaps; // all map objects contain 2 values
  geography.openStreetMaps = openStreetMaps;

  return responseObject;
};

export default populateResponseObject;
