import { SearchBarStyle } from "../styles";

const SearchBar = ({setQuery}) => {

  return (
    <SearchBarStyle
      placeholder="Search for a hiking trip ..."
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
