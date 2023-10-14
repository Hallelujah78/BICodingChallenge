import { useState } from "react";
import axios from "axios";

const useAxios = (configParams) => {
  axios.defaults.baseURL = "/api/v1/country";
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchDataUsingAxios = async () => {
    setLoading(true);
    try {
      const { data } = await axios.request(configParams);
      setResult(data);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  return [result, error, loading];
};
export default useAxios;
