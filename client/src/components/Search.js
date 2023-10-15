import useAxiosFetch from "../hooks/useAxios";
import URL from "../utils/config";
import Select from "react-select";

const Search = ({ setCountry }) => {
  const { data } = useAxiosFetch(URL);

  const handleChange = (selectedOption) => {
    setCountry(selectedOption.value);
  };

  return (
    <div>
      <Select
        onChange={handleChange}
        placeholder="Select a country"
        options={data}
        autoFocus={true}
      />
    </div>
  );
};
export default Search;
