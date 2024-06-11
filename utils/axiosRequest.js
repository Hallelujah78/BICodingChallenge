import axios from "axios";

const getData = async (country, urlObject) => {
  const { baseUrl, queryParam } = urlObject;
  const options = {
    method: "GET",
    url: `${baseUrl}${country}${queryParam}`,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const { data } = await axios(options);
    return data;
  } catch (err) {
    console.log(err.code);
    console.log(err.message);
  }
};

const getNames = async (urlObject) => {
  const { baseUrl, queryParam } = urlObject;
  const options = {
    method: "GET",
    timeout: 10000,
    url: `${baseUrl}${queryParam}`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const { data } = await axios(options);
    return data;
  } catch (err) {
    console.log(err.code);
  }
};

export { getData, getNames };
