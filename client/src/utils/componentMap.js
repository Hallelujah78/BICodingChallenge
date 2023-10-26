import {
  NameOfficial,
  NameCommon,
  NameNative,
  CoatOfArms,
  Currencies,
  AltName,
  Flag,
} from "../components/field_components";

const componentMap = {
  nameOfficial: NameOfficial,
  nameCommon: NameCommon,
  nameNative: NameNative,
  coatOfArmsSvgUrl: CoatOfArms,
  currencies: Currencies,
  flagSvg: Flag,
  altSpellings: AltName,
  // Add more types and corresponding components as needed
};

export default componentMap;
