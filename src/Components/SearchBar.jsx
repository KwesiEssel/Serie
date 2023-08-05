import React from 'react';

const SearchBar = ({ filterText, onFilterTextChange }) => {
    return (
        <form>
            <input
                id="SearchBar"
                type="text"
                placeholder="Search..."
                value={filterText}
                onChange={(e) => onFilterTextChange(e.target.value)}
            />
            <label>{' '}</label>
        </form>
    );
};

export default SearchBar;
