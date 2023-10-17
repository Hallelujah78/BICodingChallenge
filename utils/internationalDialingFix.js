const internationalDialingFix = (commonName) => {
  const correctIntlCodes = {
    "United States": ["+1"],
    "Western Sahara": ["+212"],
    "Dominican Republic": ["+1"],
    "Saint Helena, Ascension and Tristan da Cunha": ["+290", "+247"],
    "Puerto Rico": ["+1"],
    Kazakhstan: ["+7"],
    Russia: ["+7"],
    "Vatican City": ["+39"],
  };

  return correctIntlCodes?.[commonName];
};

export default internationalDialingFix;
