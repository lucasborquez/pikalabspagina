document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Pikachus', price: 999, image: 'img/Leonardo IA negro y dorado.jpg', description: 'Descripción del Producto 1' },
        { id: 2, name: 'Ropa', price: 999, image: 'img/oja de mari.jpg', description: 'Descripción del Producto 2' },
        { id: 3, name: 'Semillas', price: 999, image: 'img/mendo mulchers 2.jpg', description: 'Descripción del Producto 3' },
    ];

    const productList = document.getElementById('product-list');
    const productDetail = document.getElementById('product-detail');

    function renderProductList() {
        productList.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <h2>${product.name}</h2>
                <img src="${product.image}" alt="${product.name}">
                <p>Precio: $${product.price}</p>
            `;
            productCard.addEventListener('click', () => showProductDetail(product));
            productList.appendChild(productCard);
        });
    }

    function showProductDetail(product) {
        productList.style.display = 'none';
        productDetail.style.display = 'block';
        productDetail.innerHTML = `
            <h1>${product.name}</h1>
            <img src="${product.image}" alt="${product.name}">
            <p>${product.description}</p>
            <h2>Precio: $${product.price}</h2>
            <button id="back-button">Volver</button>
        `;
        document.getElementById('back-button').addEventListener('click', () => {
            productDetail.style.display = 'none';
            productList.style.display = 'flex';
        });
    }

    renderProductList();
});
