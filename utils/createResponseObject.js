import createArrayOfObjects from "./createArrayOfObjects.js";
import isEmpty from "./isEmpty.js";
import { smallJpgMainFacts } from "./config.js";

const createResponseObject = ({
  object,
  responseObject,
  languageObject,
  currencyObject,
}) => {
  const {
    demographics,
    general,
    additional,
    intlRelations,
    geography,
    communication,
    codes,
  } = responseObject;

  const {
    name: { common, official, nativeName },
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
  } = object;

  general.nameCommon = common;
  general.nameOfficial = official;
  demographics.population = population;
  console.log(currencies);
  // nativeName

  general.nameNative = createArrayOfObjects({
    object: nativeName,
    newObjProp: "lang",
    lookUp: languageObject,
    useLookUp: true,
  });

  // end of nativeName

  if (!isEmpty(coatOfArms)) {
    general.coatOfArmsSvgUrl = svg;
    general.coatOfArmsPngUrl = png;
    general.coatOfArmsAlt = `Coat of arms for ${official}`;
    general.coatOfArmsJpgUrl = `${smallJpgMainFacts}${cca2.toLowerCase()}.jpg`;
  }

  // currencies
  if (!isEmpty(currencies)) {
    general.currencies = createArrayOfObjects({
      object: currencies,
      newObjProp: "isoCode",
      lookUp: currencyObject,
      useLookUp: false,
    });
  }

  return responseObject;
};

export default createResponseObject;
