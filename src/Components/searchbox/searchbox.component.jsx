import './search-box.styles.css';

const SearchBox = ({ onChangeHandler, value }) => (
  <input
    aria-label="Search monsters by name"
    className="search-box-container"
    type="search"
    placeholder="Search monsters"
    value={value}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
