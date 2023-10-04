const countryInfoAsText = (country) => {
  const {
    name: { common, official },
    population,
  } = country;
  const infoAsText = `The Country of ${official}, commonly called ${common}, has a population of ${population}.`;
};

export default countryInfoAsText;
