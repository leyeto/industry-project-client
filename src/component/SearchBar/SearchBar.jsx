import filter from "../../assets/icons/filter-icon.svg";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const history = useHistory();
  return (
    <div className="main__top">
      <form
        className="main__submit-form"
        action="submit"
        onSubmit={(e) => {
          e.preventDefault();
          history.push("/fixers");
        }}
      >
        <input
          className="main__search-bar"
          type="text"
          placeholder="Type your postcode"
          id="search-id"
          name="search-box"
        />
      </form>
      <img
        className="main__filter"
        src={filter}
        alt="Filter icon"
        onClick={() => {
          if (isFilterOpen) {
            setIsFilterOpen(false);
          } else {
            setIsFilterOpen(true);
          }
        }}
      />
    </div>
  );
};

export default SearchBar;
