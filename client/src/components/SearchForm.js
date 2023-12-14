// react
import { forwardRef, useEffect, useRef } from "react";

// libraries
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";

// components
import Search from "../components/Search.js";
// utils
import URL from "../utils/config.js";

const SearchForm = forwardRef((props, ref) => {
  const {
    setCountry,
    country,
    setCountryData,
    setIsLoading,
    setIsError,
    className,
  } = props;
  const controllerRef = useRef(null);

  useEffect(() => {
    controllerRef.current = new AbortController();
    return () => {
      controllerRef.current.abort();
    };
  }, []);

  const fetchCountryData = async (country) => {
    setIsLoading(true);
    try {
      const { data: result } = await axios.post(
        URL,
        {
          country,
        },
        { signal: controllerRef.signal, timeout: 3000 }
      );
      if (result) {
        setCountryData(result);
      }
    } catch (err) {
      if (!controllerRef.current.signal.aborted) {
        setIsError(true);
        toast(
          `${
            err?.response?.status
              ? err.response.status
              : "Cannot contact the server"
          }. Unable to retrieve country information right now. Please try again later!`
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCountryData(country);
  };

  return (
    <Wrapper data-test="form-input" className={className} ref={ref}>
      <Search
        setCountry={setCountry}
        id="country name"
        name="country name"
        className="form-input"
      />

      <div className="btn-container">
        <button
          data-test="submit-button"
          disabled={!country}
          className="btn submit-btn"
          type="submit"
          onClick={handleSubmit}
        >
          submit
        </button>
      </div>
    </Wrapper>
  );
});
export default SearchForm;

const Wrapper = styled.form`
  transition: 0.5s ease-in all;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin: 5rem auto;
  height: fit-content;
  .btn-container {
    display: grid;
    align-items: right;
    width: 100%;
  }

  button {
    border: transparent;
    width: 100%;
    border-radius: 35px;
    background: #e14ed2;
    color: white;
    text-transform: uppercase;
    padding: 15px 20px;
    transition: all 0.3s;
    margin-top: 1rem;

    &:hover {
      background: #ed96e5;
    }
  }
`;
