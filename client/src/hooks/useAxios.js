// react
import { useState, useEffect } from "react";

//libraries
import axios from "axios";
import { toast } from "react-toastify";

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchData = async (url) => {
      setIsLoading(true);

      try {
        const { data } = await axios.get(url, { signal: controller.signal });
        if (isMounted) {
          setData(data);
          setIsError(false);
        }
      } catch (err) {
        if (isMounted) {
          setIsError(err?.response?.status);
          setData([]);
          toast(
            `${
              err?.response?.status
                ? err.response.status
                : "No internet connection"
            }. Unable to retrieve a list of countries from the server. Please try again later!`
          );
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };
    fetchData(dataUrl);

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [dataUrl]);

  return { data, isError, isLoading };
};
export default useAxiosFetch;
