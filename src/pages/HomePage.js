import React from 'react';
import ProductList from '../components/ProductList';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Our 3D Printing Business</h1>
            <p>Explore our range of 3D printed products.</p>
            <ProductList />
        </div>
    );
};

export default HomePage;