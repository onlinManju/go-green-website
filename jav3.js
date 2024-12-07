// script.js
const products = [
    { 
        name: "Organic Apples", 
        description: "Fresh, organic apples grown without pesticides.", 
        sustainability: ["Organic", "Low Carbon Footprint"], 
        price: "$3.99/kg",
        image: "apple.jpg"  // Add product image
    },
    { 
        name: "Fair Trade Bananas", 
        description: "Fair trade certified bananas from small farms.", 
        sustainability: ["Fair Trade", "Low Carbon Footprint"], 
        price: "$1.99/dozen",
        image: "banana.jpg"  // Add product image
    },
    { 
        name: "Local Carrots", 
        description: "Locally grown carrots, no chemicals or pesticides.", 
        sustainability: ["Organic", "Low Carbon Footprint"], 
        price: "$2.50/kg",
        image: "carrot.jpg"  // Add product image
    },
    { 
        name: "Free-Range Eggs", 
        description: "Free-range eggs from local farms, cruelty-free.", 
        sustainability: ["Organic", "Fair Trade"], 
        price: "$4.50/dozen",
        image: "egg.jpg"  // Add product image
    }
];

// To store cart items
let cart = [];

// Function to display products
function displayProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = ''; // Clear existing products

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <div class="sustainability-tags">
                ${product.sustainability.map(tag => `<span class="sustainability-tag">${tag}</span>`).join('')}
            </div>
            <button onclick="addToCart('${product.name}', '${product.price}')">Add to Cart</button>
        `;
        productsContainer.appendChild(productCard);
    });
}

// Function to add product to cart
function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

// Function to update the cart UI
function updateCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = ''; // Clear existing cart items

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.name} - ${item.price}</p>
        `;
        cartContainer.appendChild(cartItem);
    });

    // Show checkout button if there are items in the cart
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (cart.length > 0) {
        checkoutBtn.style.display = 'block';
    } else {
        checkoutBtn.style.display = 'none';
    }
}

// Function to show checkout form
document.getElementById('checkoutBtn').addEventListener('click', function() {
    document.getElementById('cartSection').style.display = 'none';
    document.getElementById('checkoutForm').style.display = 'block';
});

// Handle order form submission
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to server

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    if (name && email && phone && address) {
        alert('Order placed successfully! You will receive your order soon (Cash on Delivery).');
        
        // Reset cart and form
        cart = [];
        updateCart();
        document.getElementById('checkoutForm').reset();
        document.getElementById('checkoutForm').style.display = 'none';
        document.getElementById('cartSection').style.display = 'block';
    } else {
        alert('Please fill in all the details.');
    }
});

// Initialize product display
displayProducts();
