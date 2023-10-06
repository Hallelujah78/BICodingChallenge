const responseObject = {
  geography: {
    continents: [],
    region: "",
    subregion: "",
    latlng: [],
    borders: [],
    capital: "", // can be missing for island nations
    capitalLatlng: [], // can be empty object: capitalInfo?.latlng
    area: null,
    timezones: [],
    landlocked: null,
    googleMaps: "", // all map objects contain 2 values
    openStreetMaps: "",
  },
  general: {
    name: "",
    coatOfArmsSvg: "", // coatOfArms object can be empty
    coatOfArmsPng: "",
    currencies: [], // can be absent! dynamic keys 'EUR'{symbol, currency}. We'll use array of objects
  },
};

// general: X name, coatOfArms{svg, png}, currencies{EUR, USD}, altSpellings, flags{png, svg, alt}, car{signs[], side}

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

// 6 in codes

// geography: continents[], region"", subregion"", latlng[], borders[IRL], capital, capitalInfo{latlng}, area INT, timezones[], landlocked BOOL, maps{googleMaps, openStreetMaps}

// 11 in geography
