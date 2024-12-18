import React from 'react';

const SortOptions = ({ sortOption, setSortOption }) => {
    return (
        <div className="sort-options">
            <button 
                className={sortOption === 'priceAsc' ? 'active' : ''} 
                onClick={() => setSortOption('priceAsc')}
            >
                Сначала дешевые
            </button>
            <button 
                className={sortOption === 'priceDesc' ? 'active' : ''} 
                onClick={() => setSortOption('priceDesc')}
            >
                Сначала дорогие
            </button>
            <button 
                className={sortOption === 'popular' ? 'active' : ''} 
                onClick={() => setSortOption('popular')}
            >
                Сначала популярные
            </button>
        </div>
    );
};

export default SortOptions;