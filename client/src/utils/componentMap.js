// components
import {
  NameOfficial,
  NameCommon,
  NameNative,
  CoatOfArms,
  Currencies,
  AltName,
  Flag,
  Continents,
  Region,
  Subregion,
  LatLng,
  BorderingCountries,
  CapitalCity,
  CapitalLatLng,
  AreaSquareKm,
  Timezones,
  Landlocked,
  GoogleMaps,
  OpenStreetMaps,
} from "../components/field_components";

const componentMap = {
  nameOfficial: NameOfficial,
  nameCommon: NameCommon,
  nameNative: NameNative,
  coatOfArmsSvgUrl: CoatOfArms,
  currencies: Currencies,
  flagSvg: Flag,
  altSpellings: AltName,
  // geography
  continents: Continents,
  region: Region,
  subregion: Subregion,
  latlng: LatLng,
  borders: BorderingCountries,
  capital: CapitalCity,
  capitalLatlng: CapitalLatLng,
  area: AreaSquareKm,
  timezones: Timezones,
  landlocked: Landlocked,
  googleMaps: GoogleMaps,
  openStreetMaps: OpenStreetMaps,
  // Add more types and corresponding components as needed
};

export default componentMap;
