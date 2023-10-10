const responseObject = () => {
  const responseObject = {
    geography: {
      title: "geography",
      type: "geography",
      continents: [],
      region: "",
      subregion: "",
      latlng: [],
      borders: [],
      capital: "", // can be missing for island nations
      capitalLatlng: [], // can be empty object
      area: null,
      timezones: [],
      landlocked: null,
      googleMaps: "", // all map objects contain 2 values
      openStreetMaps: "",
    },
    general: {
      title: "general information",
      type: "general",
      nameOfficial: "",
      nameCommon: "",
      nameNative: [], // array of objs
      coatOfArmsSvgUrl: null, // coatOfArms object can be empty
      coatOfArmsPngUrl: null,
      coatOfArmsJpgUrl: null,
      coatOfArmsAlt: "", //
      currencies: null, // can be absent! dynamic keys 'EUR'{symbol, currency}. We'll use array of objects
      altSpellings: [],
      flagPng: "",
      flagSvg: "",
      flagAlt: "", //
    },
    communications: {
      title: "communications",
      type: "communications",
      tld: "", // top lvl domain
      idd: null, // intl direct dialing, we'll combine
      // the root and suffixes
      postalCode: { format: "", regex: "" }, // may have to be massaged, usefulness?
    },
    intlRelations: {
      title: "international relations",
      type: "intlRelations",
      independent: null, // bool
      status: "", // officially-assigned
      unMember: null, // bool
    },
    demographics: {
      title: "demographics",
      type: "demographics",
      demonyms: [],
      population: null, // number can be zero
      gini: [], // array of key (year, 2018), and value (float), will be array of objs
      languages: [], // make array of strings, we won't dispense with the key ('ENG', 'FRA')
    },
    additional: {
      title: "additional info",
      type: "additional",
      translations: [], // alpha-3 language code is key, array of objs [{lang: breton, official, common}]
      startOfWeek: "",
      carSigns: [],
      carSide: "",
    },
    codes: {
      title: "codes",
      type: "codes",
      cca2: "",
      ccn3: "",
      cca3: "",
      cioc: "",
      flag: "",
      fifa: "",
    },
  };
  return responseObject;
};
export default responseObject;

// 6 in codes
//----------------------
// geography: continents[], region"", subregion"", latlng[], borders[IRL], capital, capitalInfo{latlng}, area INT, timezones[], landlocked BOOL, maps{googleMaps, openStreetMaps}

// 11 in geography

// general: X name, coatOfArms{svg, png}, currencies{EUR, USD}, altSpellings[], flags{png, svg, alt}, car{signs[], side}

// 6 in general

// communications: X tld, idd, postalCodes
// 2 in communications

// International Relations: X independent, X status, unMember

// 3 in international relations

// demographics: demonyms {fra{m,f}, eng{m,f}}, population, languages{}, gini {2017: INT, 2018: INT}

// 4 in demographics

// additional:  translations{bre{official, common}, ara{official,commmon}}, startOfWeek

// 2 in additional

// Codes: X cca2, X ccn3, X cca3, X cioc, fifa, flag""
