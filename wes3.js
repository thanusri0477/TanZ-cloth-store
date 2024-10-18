const products = [
    { id: 1, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/474x/1f/ed/f4/1fedf405185541161002f49944b8ceea.jpg' },
{ id: 2, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/236x/85/59/3f/85593f591242c01c4cea93eaded86ec2.jpg' },
{ id: 3, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/236x/1b/88/53/1b8853553e44a0f5bc5f094a2cf993d4.jpg' },
{ id: 4, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/236x/2c/63/cd/2c63cd73e582af47936a9f5fbca0bf4c.jpg' },
{ id: 5, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/474x/7e/63/aa/7e63aaec2c408db13973fe46600cb82b.jpg' },
{ id: 6, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/236x/50/a1/9c/50a19c9b2d20169098c028d62515ca63.jpg' },
{ id: 7, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/236x/1a/2e/a8/1a2ea89e00ee2fcc3d5e85ef70c1619d.jpg' },
{ id: 8, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/236x/59/e2/b4/59e2b4c4bffd69c5db2b9c5cfd7c98b6.jpg' },
{ id: 9, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/236x/e0/9e/4e/e09e4e68896bdbfdd460d58423e6466e.jpg' },
{ id: 10, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/236x/e7/e0/4b/e7e04b021f3e6e2c580a24403060fc14.jpg' },
{ id: 11, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/474x/e0/81/17/e08117a7c0bd89c41650ef2c77a511b7.jpg' },
{ id: 12, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/474x/68/20/75/682075f45b61aa8a7b511f9c682a5614.jpg' },
{ id: 13, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/474x/4d/f3/8b/4df38b00c2ed9a08fcca4088205997f2.jpg' },
{ id: 14, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/236x/9b/5f/36/9b5f362d27b9d07186590e97541071b2.jpg' },
{ id: 15, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/236x/83/b8/64/83b86453509cf2ef6865ca36b2a45dcd.jpg' },
{ id: 16, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/474x/25/0c/e1/250ce123e528610ddbe11db8da205990.jpg' },
{ id: 17, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/474x/18/0a/88/180a888fb1f333045657bfbfab77a763.jpg' },
{ id: 18, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/474x/b2/35/5e/b2355e0992ab453d3aaba0cd43ad9cb0.jpg' },
{ id: 19, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/474x/12/9a/48/129a48b0cb484b9204ae7695ebf9938c.jpg' },
{ id: 20, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/236x/9e/26/c9/9e26c99adec433e2a7f31e1b6c6af5b9.jpg' },
{ id: 21, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/236x/22/2d/4d/222d4d0bc9dfac2eb8da9147ec9b6a80.jpg' },
{ id: 22, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/236x/a9/07/14/a90714b31ef3a5321b697c3c2e712d53.jpg' },
{ id: 23, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/236x/19/11/52/1911527af139c7861f3a6ea9df70c7c5.jpg' },
{ id: 24, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/236x/2c/55/6b/2c556bb2a4818bcb4696844846c5ca2c.jpg' },
{ id: 25, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/236x/13/49/91/134991224ba241059f5d1bb557c123fa.jpg' },
{ id: 26, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/236x/dd/6c/39/dd6c3971d6f04fd12321292c043b7bf2.jpg' },
{ id: 27, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/236x/e8/b8/7b/e8b87b2226abd7f5256e4f43290361f3.jpg' },
{ id: 28, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/236x/28/d6/88/28d6889d467bfb89fe7491b663da2fdf.jpg' },
{ id: 29, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/236x/d7/81/fb/d781fbe93728ba9dc61625893c9edf94.jpg' },
{ id: 30, name: 'Loose Light Jeans', price: 999, category: 'Tops', img: 'https://i.pinimg.com/236x/c0/2a/20/c02a205ba056ff933e61e433196006a7.jpg' },
{ id: 31, name: 'Bootcut Jeans', price: 999, category: 'Bottoms', img: 'https://i.pinimg.com/236x/68/f3/b8/68f3b80951a6b4c1b2fd82044e613b3e.jpg' },
{ id: 32, name: 'Blue Boyfriend Jeans', price: 999, category: 'Bottoms', img: 'https://i.pinimg.com/236x/ed/5e/1c/ed5e1ccb84a1bbc58b08bd6346eaf993.jpg' },
{ id: 33, name: 'Loose Light Jeans', price: 999, category: 'Bottoms', img: 'https://i.pinimg.com/736x/de/9f/5e/de9f5e3655ca768b9494acf476d0028e.jpg' },
{ id: 34, name: 'Cargo Jean', price: 999, category: 'Bottoms', img: 'https://i.pinimg.com/236x/b3/3a/cf/b33acf78d9286a674331c654f0ae6d22.jpg' },
{ id: 35, name: 'Black Baggy Jeans', price: 999, category: 'Bottoms', img: 'https://i.pinimg.com/236x/35/12/00/351200f7bb9ffcfef3031d91330885cf.jpg' },
{ id: 36, name: 'Bootcut Jean', price: 999, category: 'Bottoms', img: 'https://i.pinimg.com/236x/cc/43/1c/cc431c1b5e74b593247731a192cc1fe9.jpg' },
{ id: 37, name: 'Trouser Tan', price: 999, category: 'Bottoms', img: 'https://i.pinimg.com/564x/2c/e2/0d/2ce20d221b1a683ee377b8e75f9fa184.jpg' },
{ id: 38, name: ' Dark Blue Baggy Jeans', price: 999, category: 'Bottoms', img: 'https://i.pinimg.com/236x/5b/b7/da/5bb7daac82ec23222c2417e36e2bb4bd.jpg' },
{ id: 39, name: 'Loose Pants', price: 999, category: 'Bottoms', img: 'https://i.pinimg.com/236x/1d/d7/81/1dd78154f2bb2420b34aee60c9208f9a.jpg' },
{ id: 40, name: 'Baggy Jeans', price: 999, category: 'Bottoms', img: 'https://i.pinimg.com/236x/ce/35/68/ce35681aaccd42e62b453b723d29e5b1.jpg' },
{ id: 41, name: 'Work Outwear', price: 999, category: 'Outerwear', img: 'https://i.pinimg.com/474x/74/02/33/740233a46cafb617502ff18fea429be9.jpg' },
{ id: 42, name: 'Western Jacket', price: 999, category: 'Outerwear', img: 'https://i.pinimg.com/236x/d8/2d/6d/d82d6dc2a36032f3c45e6f396d8ab96d.jpg' },
{ id: 43, name: 'Oversized Shirt', price: 999, category: 'Outerwear', img: 'https://i.pinimg.com/236x/d4/df/1e/d4df1ef4c8b82a48cd7a556e69e97810.jpg' },
{ id: 44, name: 'Winter Coat Tan', price: 999, category: 'Outerwear', img: 'https://i.pinimg.com/564x/10/48/13/10481388eabe4582e4caaf4a2249f239.jpg' },
{ id: 45, name: 'Bottlegreen Jacket', price: 999, category: 'Outerwear', img: 'https://i.pinimg.com/236x/27/b8/1f/27b81f1b4e342251e490093ad917ff58.jpg' },
{ id: 46, name: 'Winter outwear', price: 999, category: 'Outerwear', img: 'https://i.pinimg.com/736x/13/31/79/133179bd92333221b2b9d4da8475dfa5.jpg' },
{ id: 47, name: 'Long Shirt', price: 999, category: 'Outerwear', img: 'https://i.pinimg.com/564x/70/ab/0c/70ab0c825638ea65461ae49f24195a6e.jpg' },
{ id: 48, name: 'Women Hoodie ', price: 999, category: 'Outerwear', img: 'https://i.pinimg.com/236x/66/b9/fd/66b9fd32c3a1bf87f03b0031e27f9b37.jpg' },
{ id: 49, name: 'Work wear', price: 999, category: 'Outerwear', img: 'https://i.pinimg.com/736x/59/eb/2d/59eb2dbc27e46d9d3d80f9eafe6ca737.jpg' },
{ id: 50, name: 'Grey Hoodie', price: 999, category: 'Outerwear', img: 'https://i.pinimg.com/236x/cd/1e/ed/cd1eed8e0c976fe885d9de47f4e2aac0.jpg' },
];

let filteredProducts = products.slice(); // Start with all products
let currentPage = 1;
const itemsPerPage = 7;

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const productsToDisplay = filteredProducts.slice(start, end);

    productsToDisplay.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h2>${product.name}</h2>
            <div class="price">₹${product.price}</div>
        `;
        productList.appendChild(productDiv);
    });

    updatePagination();
}

function updatePagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.innerText = i;
        pageLink.classList.toggle('active', i === currentPage);
        pageLink.addEventListener('click', (event) => {
            event.preventDefault();
            currentPage = i;
            displayProducts();
        });
        pagination.appendChild(pageLink);
    }
}

function filterProducts() {
    const genderFilter = document.getElementById('women').checked;
    const categoryFilter = document.querySelector('input[name="category"]:checked').value;
    const priceFilter = document.querySelector('input[name="price"]:checked')?.value;

    filteredProducts = products.filter(product => {
        const matchesGender = genderFilter; // Placeholder for gender filter
        const matchesCategory = product.category === categoryFilter;
        const matchesPrice = filterByPrice(product.price, priceFilter);

        return matchesGender && matchesCategory && matchesPrice;
    });

    currentPage = 1; // Reset to the first page
    displayProducts();
}

function filterByPrice(price, filter) {
    if (!filter) return true; // No price filter applied

    switch (filter) {
        case 'under500':
            return price < 500;
        case '500to1000':
            return price >= 500 && price < 1000; // Changed to "< 1000"
        case '1000to2000':
            return price >= 1000 && price < 2000; // Changed to "< 2000"
        case 'above2000':
            return price >= 2000; // Changed to ">= 2000"
        default:
            return true;
    }
}

function sortItems() {
    const sortOrder = document.getElementById('sort').value;

    if (sortOrder === 'price-low') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-high') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'new-arrivals') {
        filteredProducts = products.slice(); // Reset to original order
    }

    currentPage = 1; // Reset to the first page
    displayProducts();
}

// Initial display
displayProducts();