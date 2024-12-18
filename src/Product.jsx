import React from 'react';

const Product = ({ product }) => {
    return (
        <div className="product">
            <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: 'auto' }} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Цвет: {product.color}</p>
            <p>Категория: {product.category}</p>
            <p>Цена: ${product.price}</p>
            <p>Рейтинг: {product.rating}</p>
        </div>
    );
};

export default Product;