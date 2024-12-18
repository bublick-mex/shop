import React, { useState, useEffect } from 'react';
import { generateProducts } from './data';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import Filters from './Filters';
import SortOptions from './SortOptions';
import './style.css';

const App = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedColors, setSelectedColors] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: 10, max: 999 });
    const [sortOption, setSortOption] = useState('priceAsc');

    useEffect(() => {
        const initialProducts = generateProducts(100);
        setProducts(initialProducts);
    }, []);

    const filters = [
        (product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        product.description.toLowerCase().includes(searchQuery.toLowerCase()),
        (product) => selectedColors.length === 0 || selectedColors.includes(product.color),
        (product) => product.price >= priceRange.min && product.price <= priceRange.max,
    ];
    
    const filteredProducts = products.filter(product => filters.every(filter => filter(product)));
    
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortOption) {
            case 'priceAsc':
                return a.price - b.price;
            case 'priceDesc':
                return b.price - a.price;
            case 'popular':
                return b.rating - a.rating;
            default:
                return 0;
        }
    });
    
    return (
        <div className="app">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <SortOptions sortOption={sortOption} setSortOption={setSortOption} />
            <div className='col'>
              <div className='filtr'>
            <Filters
                selectedColors={selectedColors}
                setSelectedColors={setSelectedColors}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
            />
            <p>Найдено продуктов: {sortedProducts.length}</p> 
            </div>
            <ProductList products={sortedProducts} />
            {sortedProducts.length === 0 && <p>По вашему запросу ничего не найдено</p>}
        </div>
        </div>
    );
  }    

export default App;
