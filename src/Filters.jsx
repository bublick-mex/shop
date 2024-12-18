import React from 'react';
import './style.css';

const Filters = ({ selectedColors, setSelectedColors, priceRange, setPriceRange }) => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

    const handleColorChange = (color) => {
        setSelectedColors(prev =>
            prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
        );
    };

    const handleMinPriceChange = (e) => {
        const value = Number(e.target.value);
        if (value >= 0) {
            setPriceRange({ ...priceRange, min: value });
        }
    };

    const handleMaxPriceChange = (e) => {
        const value = Number(e.target.value);
        if (value >= 0) {
            setPriceRange({ ...priceRange, max: value });
        }
    };

    return (
        <div>
            <div className="color">
                <h3 style={{margin: 0, width: 250}}>По цвету</h3>
                {colors.map(color => (
                    <label key={color}>
                        <input
                            type="checkbox"
                            checked={selectedColors.includes(color)}
                            onChange={() => handleColorChange(color)}
                        />
                        {color}
                    </label>
                ))}
            </div>
            <div className="cost">
                <h3 style={{margin: 0, width: 250}}>По цене</h3>
                <div className='str'>
                    <input
                        style={{width: 40}}
                        type="number"
                        value={priceRange.min}
                        onChange={handleMinPriceChange}
                        placeholder="Минимальная цена"
                    />
                    <p style={{margin:0}}>-</p>
                    <input
                        style={{width: 40}}
                        type="number"
                        value={priceRange.max}
                        onChange={handleMaxPriceChange}
                        placeholder="Максимальная цена"
                    />
                </div>
            </div>
        </div>
    );
};

export default Filters;