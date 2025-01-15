import React from 'react';
import ProductCard from './ProductCard';

const products = [
    {
        id: 1,
        name: '3D Printed Vase',
        image: 'path/to/vase-image.jpg',
        price: '$25.00'
    },
    {
        id: 2,
        name: 'Custom Phone Case',
        image: 'path/to/phone-case-image.jpg',
        price: '$15.00'
    },
    {
        id: 3,
        name: 'Miniature Figurine',
        image: 'path/to/figurine-image.jpg',
        price: '$10.00'
    }
];

const ProductList = () => {
    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard 
                    key={product.id} 
                    name={product.name} 
                    image={product.image} 
                    price={product.price} 
                />
            ))}
        </div>
    );
};

export default ProductList;