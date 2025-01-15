import React from 'react';

const ProductPage = ({ product }) => {
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-page">
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <h2>Price: ${product.price}</h2>
        </div>
    );
};

export default ProductPage;