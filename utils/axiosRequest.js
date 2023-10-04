import axios from "axios";

const URL = "https://restcountries.com/v3.1/name/";
const fullText = "?fullText=true";

const getData = async (country) => {
  const options = {
    method: "GET",
    url: `${URL}${country}${fullText}`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const { data } = await axios(options);

    return data;
  } catch (err) {
    console.log(err);
  }
};

export default getData;
