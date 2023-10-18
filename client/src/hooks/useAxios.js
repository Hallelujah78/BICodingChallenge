import { useState, useEffect } from "react";
import axios from "axios";

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
          setIsError(err.message);
          setData([]);
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
