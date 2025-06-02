// DOM content loaded event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize shopping cart
    initCart();
    
    // Initialize search functionality
    initSearch();
    
    // Load page-specific functions
    loadPageSpecificFunctions();
});

// Load featured products on homepage
function loadFeaturedProducts() {
    const featuredProductsContainer = document.getElementById('featured-products');
    if (!featuredProductsContainer) return;

    // 重置已使用的图片集合
    resetUsedImages();
    const featuredProducts = getFeaturedProducts();
    
    featuredProductsContainer.innerHTML = '';
    
    featuredProducts.forEach(product => {
        const productCard = createProductCard(product);
        featuredProductsContainer.appendChild(productCard);
    });
}

// Create product card
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    // 获取该产品类别的备用图片
    const backupImg = getBackupImage(product.category);
    
    // Create product card with error handling for images
    productCard.innerHTML = `
        <div class="product-image">
            <a href="/product?id=${product.id}">
                <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.src='${backupImg}';"> 
            </a>
        </div>
        <div class="product-info">
            <h3>
                <a href="/product?id=${product.id}">
                    ${product.name}
                </a>
            </h3>
            <div class="product-price">${product.price}</div>
            <div class="product-actions">
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                <a href="product.html?id=${product.id}" class="view-details">View Details</a>
            </div>
        </div>
    `;
    
    // Add event listener for add to cart button
    const addToCartBtn = productCard.querySelector('.add-to-cart');
    addToCartBtn.addEventListener('click', function() {
        addToCart(product);
    });
    
    return productCard;
}

// Initialize shopping cart
function initCart() {
    // Load cart from local storage
    loadCartFromStorage();
    
    // Update cart count
    updateCartCount();
    
    // Add click event to cart icon
    const cartIcon = document.querySelector('.cart a');
    if (cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'cart.html';
        });
    }
}

// Load cart from local storage
function loadCartFromStorage() {
    const cartItems = localStorage.getItem('cart');
    if (cartItems) {
        window.cart = JSON.parse(cartItems);
    } else {
        window.cart = [];
    }
}

// Save cart to local storage
function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(window.cart));
}

// Update cart count
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = window.cart ? window.cart.length : 0;
    }
}

// Add to cart
function addToCart(product) {
    if (!window.cart) {
        window.cart = [];
    }
    
    // Check if product is already in cart
    const existingItem = window.cart.find(item => item.id === product.id);
    
    if (existingItem) {
        // If already exists, increase quantity
        existingItem.quantity += 1;
    } else {
        // If not exists, add new item
        window.cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // Save cart to local storage
    saveCartToStorage();
    
    // Update cart count
    updateCartCount();
    
    // Show success notification
    showNotification(`${product.name} has been added to your cart`);
}

// Show notification
function showNotification(message) {
    // Check if notification element already exists
    let notification = document.querySelector('.notification');
    
    if (!notification) {
        // Create notification element
        notification = document.createElement('div');
        notification.className = 'notification';
        document.body.appendChild(notification);
    }
    
    // Set message content
    notification.textContent = message;
    notification.style.display = 'block';
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Initialize search functionality
function initSearch() {
    const searchForm = document.querySelector('.search');
    const searchInput = document.querySelector('.search input');
    const searchButton = document.querySelector('.search button');
    
    if (searchForm && searchInput && searchButton) {
        searchButton.addEventListener('click', function(e) {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = `search.html?q=${encodeURIComponent(query)}`;
            }
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const query = searchInput.value.trim();
                if (query) {
                    window.location.href = `search.html?q=${encodeURIComponent(query)}`;
                }
            }
        });
    }
}

// Load category page
function loadCategoryPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('id');
    
    if (!categoryId) return;
    
    const categoryName = getCategoryNameById(categoryId);
    const categoryTitle = document.getElementById('category-title');
    if (categoryTitle) {
        categoryTitle.textContent = categoryName;
    }
    
    const productsContainer = document.getElementById('category-products');
    if (!productsContainer) return;
    
    const products = getProductsByCategory(categoryName);
    
    productsContainer.innerHTML = '';
    
    if (products.length === 0) {
        productsContainer.innerHTML = '<div class="empty-category">No products found in this category</div>';
        return;
    }
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
}

// Get category name by ID
function getCategoryNameById(id) {
    // Map category IDs to names
    const categoryMap = {
        'electronics': 'Electronics',
        'clothing': 'Clothing',
        'home': 'Home Goods',
        'beauty': 'Beauty & Health'
    };
    
    return categoryMap[id] || 'Unknown Category';
}

// Load product page
function loadProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (!productId) return;
    
    // 重置已使用的图片集合
    resetUsedImages();
    
    const product = getProductById(productId);
    
    if (!product) {
        document.querySelector('.product-detail').innerHTML = '<div class="not-found">Product not found</div>';
        return;
    }
    
    // Get backup image for error handling
    const backupImg = getBackupImage(product.category);
    
    // Update product details
    let productImage = document.getElementById('product-image');
    if (productImage) {
        productImage.src = product.image;
        productImage.alt = product.name;
        // Add error handling for product image
        productImage.onerror = function() {
            this.onerror = null;
            this.src = backupImg;
        };
    }
    document.getElementById('product-title').textContent = product.name;
    document.getElementById('product-price').textContent = product.price;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-category').textContent = product.category;
    document.getElementById('product-sku').textContent = product.id;
    
    // Add features list
    let featuresList = document.getElementById('product-features');
    featuresList.innerHTML = '';
    
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // Add to cart button functionality
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            addToCart(product);
        });
    }
    
    // Load related products
    loadRelatedProducts(product.category, product.id);
}

// Load related products
function loadRelatedProducts(category, currentProductId) {
    const relatedProductsContainer = document.getElementById('related-products');
    if (!relatedProductsContainer) return;
    
    const relatedProducts = getRelatedProducts(category, currentProductId);
    
    relatedProductsContainer.innerHTML = '';
    
    if (relatedProducts.length === 0) {
        relatedProductsContainer.style.display = 'none';
        return;
    }
    
    // 重置已使用的图片集合
    resetUsedImages();
    
    relatedProducts.forEach(product => {
        const productCard = createProductCard(product);
        relatedProductsContainer.appendChild(productCard);
    });
}

// Load cart page
function loadCartPage() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartSummaryContainer = document.getElementById('cart-summary');
    const emptyCartMessage = document.getElementById('empty-cart');
    
    if (!cartItemsContainer || !cartSummaryContainer || !emptyCartMessage) return;
    
    // Load cart from local storage
    loadCartFromStorage();
    
    if (!window.cart || window.cart.length === 0) {
        cartItemsContainer.style.display = 'none';
        cartSummaryContainer.style.display = 'none';
        emptyCartMessage.style.display = 'block';
        return;
    }
    
    cartItemsContainer.style.display = 'block';
    cartSummaryContainer.style.display = 'block';
    emptyCartMessage.style.display = 'none';
    
    // Clear cart items container
    cartItemsContainer.innerHTML = '';
    
    // Add each cart item
    window.cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        // Get backup image for error handling
        const backupImg = getBackupImage(item.category);
        
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.src='${backupImg}';">
            </div>
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">${item.price}</div>
            <div class="cart-item-quantity">
                <button class="decrease-quantity" data-id="${item.id}">-</button>
                <span>${item.quantity}</span>
                <button class="increase-quantity" data-id="${item.id}">+</button>
            </div>
            <div class="cart-item-remove" data-id="${item.id}"><i class="fas fa-trash"></i></div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Add event listeners for quantity buttons and remove buttons
    document.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            decreaseQuantity(id);
            loadCartPage(); // Reload cart page
        });
    });
    
    document.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            increaseQuantity(id);
            loadCartPage(); // Reload cart page
        });
    });
    
    document.querySelectorAll('.cart-item-remove').forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            removeFromCart(id);
            loadCartPage(); // Reload cart page
        });
    });
    
    // Update cart summary
    updateCartSummary();
}

// Decrease quantity of cart item
function decreaseQuantity(id) {
    const item = window.cart.find(item => item.id === id);
    if (item && item.quantity > 1) {
        item.quantity -= 1;
        saveCartToStorage();
        updateCartCount();
    }
}

// Increase quantity of cart item
function increaseQuantity(id) {
    const item = window.cart.find(item => item.id === id);
    if (item) {
        item.quantity += 1;
        saveCartToStorage();
        updateCartCount();
    }
}

// Remove item from cart
function removeFromCart(id) {
    window.cart = window.cart.filter(item => item.id !== id);
    saveCartToStorage();
    updateCartCount();
}

// Update cart summary
function updateCartSummary() {
    const subtotalElement = document.getElementById('cart-subtotal');
    const shippingElement = document.getElementById('cart-shipping');
    const totalElement = document.getElementById('cart-total');
    
    if (!subtotalElement || !shippingElement || !totalElement) return;
    
    // Calculate subtotal
    let subtotal = 0;
    window.cart.forEach(item => {
        const price = parseFloat(item.price.replace('$', ''));
        subtotal += price * item.quantity;
    });
    
    // Fixed shipping cost
    const shipping = 10;
    
    // Calculate total
    const total = subtotal + shipping;
    
    // Update elements
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    shippingElement.textContent = `$${shipping.toFixed(2)}`;
    totalElement.textContent = `$${total.toFixed(2)}`;
}

// Load search page
function loadSearchPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    
    if (!query) return;
    
    const searchQueryElement = document.getElementById('search-query');
    const searchResultsContainer = document.getElementById('search-results');
    
    if (!searchQueryElement || !searchResultsContainer) return;
    
    // Update search query display
    searchQueryElement.textContent = query;
    
    // Get all products
    const allProducts = getAllProducts();
    
    // Filter products by search query
    const results = allProducts.filter(product => {
        return (
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );
    });
    
    // Clear results container
    searchResultsContainer.innerHTML = '';
    
    if (results.length === 0) {
        searchResultsContainer.innerHTML = '<div class="no-results">No products found matching your search</div>';
        return;
    }
    
    // 重置已使用的图片集合
    resetUsedImages();
    
    results.forEach(product => {
        const productCard = createProductCard(product);
        searchResultsContainer.appendChild(productCard);
    });
}

// Load all products page
function loadAllProductsPage() {
    const productsContainer = document.getElementById('all-products');
    if (!productsContainer) return;
    
    const allProducts = getAllProducts();
    
    productsContainer.innerHTML = '';
    
    // 重置已使用的图片集合
    resetUsedImages();
    
    allProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
}

// Load categories page
function loadCategoriesPage() {
    const categoriesContainer = document.getElementById('all-categories');
    if (!categoriesContainer) return;
    
    categoriesContainer.innerHTML = '';
    
    categories.forEach((category, index) => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        
        // Get category image
        const categoryImage = getCategoryImage(category);
        
        // Map category names to IDs
        const categoryIdMap = {
            'Electronics': 'electronics',
            'Clothing': 'clothing',
            'Home Goods': 'home',
            'Beauty & Health': 'beauty'
        };
        
        const categoryId = categoryIdMap[category];
        
        categoryCard.innerHTML = `
            <div class="category-image">
                <a href="category.html?id=${categoryId}">
                    <img src="${categoryImage}" alt="${category}">
                </a>
            </div>
            <div class="category-info">
                <h3><a href="category.html?id=${categoryId}">${category}</a></h3>
            </div>
        `;
        
        categoriesContainer.appendChild(categoryCard);
    });
}

// Load page-specific functions based on current page
function loadPageSpecificFunctions() {
    const currentPath = window.location.pathname;
    const currentUrl = window.location.href;
    
    if (currentPath === '/' || currentPath.endsWith('index.html') || currentPath === '') {
        loadFeaturedProducts();
        loadCategories();
    } else if (currentUrl.includes('/product')) {
        loadProductPage();
    } else if (currentUrl.includes('/category')) {
        loadCategoryPage();
    } else if (currentUrl.includes('/cart')) {
        loadCartPage();
    } else if (currentUrl.includes('/search')) {
        loadSearchPage();
    } else if (currentUrl.includes('/products')) {
        loadAllProductsPage();
    } else if (currentUrl.includes('/categories')) {
        loadCategoriesPage();
    }
}

// Load page-specific functions when DOM is loaded
document.addEventListener('DOMContentLoaded', loadPageSpecificFunctions);

// Load categories on homepage
function loadCategories() {
    const categoryGrid = document.getElementById('category-grid');
    if (!categoryGrid) return;
    
    categoryGrid.innerHTML = '';
    
    // Map category names to IDs
    const categoryIdMap = {
        'Electronics': 'electronics',
        'Clothing': 'clothing',
        'Home Goods': 'home',
        'Beauty & Health': 'beauty'
    };
    
    categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        
        // Get category image and backup image
        const categoryImage = getCategoryImage(category);
        const backupImg = backupImages[category] || backupImages['default'];
        
        // Get category ID
        const categoryId = categoryIdMap[category];
        
        categoryCard.innerHTML = `
            <div class="category-image">
                <a href="/category?id=${categoryId}">
                    <img src="${categoryImage}" alt="${category}" onerror="this.onerror=null; this.src='${backupImg}';">
                </a>
            </div>
            <div class="category-info">
                <h3><a href="/category?id=${categoryId}">${category}</a></h3>
            </div>
        `;
        
        categoryGrid.appendChild(categoryCard);
    });
}
