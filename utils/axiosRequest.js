import axios from "axios";

const getData = async (country, urlObject) => {
  const { baseUrl, queryParam } = urlObject;
  const options = {
    method: "GET",
    url: `${baseUrl}${country}${queryParam}`,
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

const getNames = async (urlObject) => {
  const { baseUrl, queryParam } = urlObject;
  const options = {
    method: "GET",
    url: `${baseUrl}${queryParam}`,
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

export { getData, getNames };
