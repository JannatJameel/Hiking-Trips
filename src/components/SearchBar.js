import { SearchBarStyle } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyle
      placeholder="Search for a hiking trip ..."
      onChange={(event) => props.setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
