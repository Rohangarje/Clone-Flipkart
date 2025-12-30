// 1. Product Data (More than one product)
const products = [
    {
        id: 1,
        name: "SAMSUNG Galaxy M14",
        price: "₹12,490",
        image: "https://rukminim1.flixcart.com/image/200/200/xif0q/mobile/g/n/k/-original-imagtyv98v9zxg9z.jpeg",
        brand: "4GB | 128GB"
    },
    {
        id: 2,
        name: "Canon EOS Camera",
        price: "₹45,990",
        image: "https://rukminim1.flixcart.com/image/200/200/xif0q/camera/s/b/m/-original-imagn9hcqz79v7d2.jpeg",
        brand: "24.1 MP"
    },
    {
        id: 3,
        name: "Noise Smartwatch",
        price: "₹1,999",
        image: "https://rukminim1.flixcart.com/image/200/200/xif0q/smartwatch/5/h/m/-original-imagxp7ccmsh3vzp.jpeg",
        brand: "Calling Feature"
    },
    {
        id: 4,
        name: "Gaming Laptop",
        price: "₹56,000",
        image: "https://rukminim1.flixcart.com/image/200/200/xif0q/computer/v/y/z/-original-imagp7pfgnm7m9db.jpeg",
        brand: "HP Victus"
    }
];

let cartCount = 0;

// 2. Function to Render Products to the Screen
function displayProducts() {
    const container = document.getElementById('product-container');
    
    container.innerHTML = products.map(product => `
        <div class="item-card">
            <img src="${product.image}" alt="${product.name}">
            <p class="p-name">${product.name}</p>
            <p class="p-price">${product.price}</p>
            <p class="p-brand">${product.brand}</p>
            <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

// 3. Action: Add to Cart
function addToCart(productId) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    
    // Feedback to user
    const product = products.find(p => p.id === productId);
    alert(`${product.name} added to cart!`);
}

// Initialize the page
displayProducts();