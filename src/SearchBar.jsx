import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Поиск по названию или описанию"
            style={{ width: '100%', height:10, padding: '10px', margin: '10px 0' }}
        />
    );
};

export default SearchBar;