const dataUrl = "/api/v1/country";

// map of response fields to title
export const titleToField = {
  // general
  nameOfficial: "Formal Name",
  nameCommon: "Informal Name",
  nameNative: "Name in Official Language(s)",
  coatOfArmsSvgUrl: "Coat of Arms",
  currencies: "Currencies",
  altSpellings: "Alternative Names",
  flagSvg: "Flag",
  // geography
  continents: "Continents",
  region: "Region",
  subregion: "Subregion",
  latlng: "Latitude & Longitude",
  borders: "Bordering Countries",
  capital: "Capital City",
  capitalLatlng: "Capital Latitude & Longitude",
  area: "Area in Square Kilometres",
  timezones: "Timezones",
  landlocked: "Landlocked",
  googleMaps: "Google Maps Link",
  openStreetMaps: "Open Street Maps Link",
};

export default dataUrl;
