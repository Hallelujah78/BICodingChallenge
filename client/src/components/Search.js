import useAxiosFetch from "../hooks/useAxios";
import styled from "styled-components";
import URL from "../utils/config";
import Select from "react-select";

const Search = ({ setCountry }) => {
  const { data } = useAxiosFetch(URL);

  const handleChange = (selectedOption) => {
    setCountry(selectedOption.value);
  };

  return (
    <Wrapper>
      <Select
        styles={{
          input: (baseStyles, state) => ({
            ...baseStyles,
            width: "15rem",
          }),
        }}
        onChange={handleChange}
        placeholder="Select a country"
        options={data}
        autoFocus={true}
      />
    </Wrapper>
  );
};
export default Search;

const Wrapper = styled.div``;
