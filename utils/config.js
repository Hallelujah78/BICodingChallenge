// URL to get names only
const restCountriesGetNamesUrl = {
  baseUrl: "https://restcountries.com/v3.1/all",
  queryParam: "?fields=name",
};

// base URL to make requests to restcountries.com
const restCountriesSingleCountryUrl = {
  baseUrl: "https://restcountries.com/v3.1/name/",
  queryParam: "?fullText=true",
};

// option for

export { restCountriesGetNamesUrl, restCountriesSingleCountryUrl };
