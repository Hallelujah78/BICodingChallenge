// libraries
import Select from "react-select";
import styled from "styled-components";

// utils
import URL from "../utils/config.js";
// hooks
import useAxiosFetch from "../hooks/useAxios.js";

const Search = ({ setCountry }) => {
  const { data, isLoading } = useAxiosFetch(URL);

  const handleChange = (selectedOption) => {
    setCountry(selectedOption.value);
  };

  return (
    <Wrapper>
      <Select
        styles={{
          input: (baseStyles, state) => ({
            ...baseStyles,
            width: "13rem",
            height: "auto",
          }),
        }}
        onChange={handleChange}
        placeholder="Select a country"
        options={data}
        autoFocus={true}
        isLoading={isLoading}
        aria-label="select an option"
      />
    </Wrapper>
  );
};
export default Search;

const Wrapper = styled.div``;
