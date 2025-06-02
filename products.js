// Product data for local e-commerce site

// Product categories
const categories = [
    'Electronics', 'Clothing', 'Home Goods', 'Beauty & Health'
];

// u56fau5b9au4ea7u54c1u76eeu5f55 - u6bcfu4e2au4ea7u54c1u90fdu6709u56fau5b9au7684u540du79f0u3001u7c7bu522bu3001u56feu7247u548cu63cfu8ff0
const productCatalog = [
    // Electronics u4ea7u54c1
    {
        id: 'E001',
        name: 'Smart Watch Pro',
        category: 'Electronics',
        image: 'electronics.svg',
        price: '$199.99',
        description: 'Advanced smartwatch with health monitoring and GPS tracking.',
        features: ['Heart rate monitoring', 'GPS tracking', 'Water resistant', '5-day battery life', 'Sleep tracking']
    },
    {
        id: 'E002',
        name: 'Wireless Earbuds',
        category: 'Electronics',
        image: 'electronics.svg',
        price: '$89.99',
        description: 'Premium wireless earbuds with active noise cancellation.',
        features: ['Active noise cancellation', '24-hour battery', 'Touch controls', 'Water resistant', 'Premium sound']
    },
    {
        id: 'E003',
        name: 'Digital Camera',
        category: 'Electronics',
        image: 'electronics.svg',
        price: '$399.99',
        description: 'Professional digital camera with high resolution sensor.',
        features: ['24MP sensor', '4K video recording', 'Optical stabilization', 'Wi-Fi connectivity', 'Interchangeable lenses']
    },
    {
        id: 'E004',
        name: 'Laptop Computer',
        category: 'Electronics',
        image: 'electronics.svg',
        price: '$899.99',
        description: 'Powerful laptop for work and entertainment.',
        features: ['Intel Core i7', '16GB RAM', '512GB SSD', '15.6" display', 'Backlit keyboard']
    },
    // Clothing u4ea7u54c1
    {
        id: 'C001',
        name: 'Denim Jacket',
        category: 'Clothing',
        image: 'clothing.svg',
        price: '$79.99',
        description: 'Classic denim jacket that never goes out of style.',
        features: ['100% cotton denim', 'Classic fit', 'Multiple pockets', 'Durable design', 'Versatile style']
    },
    {
        id: 'C002',
        name: 'White T-Shirt',
        category: 'Clothing',
        image: 'clothing.svg',
        price: '$19.99',
        description: 'Premium cotton classic white t-shirt for everyday comfort.',
        features: ['100% organic cotton', 'Comfortable fit', 'Pre-shrunk', 'Breathable fabric', 'Classic design']
    },
    {
        id: 'C003',
        name: 'Women\'s Blouse',
        category: 'Clothing',
        image: 'clothing.svg',
        price: '$29.99',
        description: 'Elegant women\'s blouse for any occasion.',
        features: ['Lightweight fabric', 'Flattering cut', 'Versatile style', 'Easy care', 'Multiple colors available']
    },
    {
        id: 'C004',
        name: 'Casual Shoes',
        category: 'Clothing',
        image: 'clothing.svg',
        price: '$49.99',
        description: 'Comfortable casual shoes for everyday wear.',
        features: ['Cushioned insole', 'Breathable material', 'Non-slip sole', 'Lightweight design', 'Durable construction']
    },
    // Home Goods u4ea7u54c1
    {
        id: 'H001',
        name: 'Table Lamp',
        category: 'Home Goods',
        image: 'home.svg',
        price: '$49.99',
        description: 'Elegant table lamp with adjustable brightness.',
        features: ['LED lighting', 'Touch control', 'Multiple brightness levels', 'Energy efficient', 'Modern design']
    },
    {
        id: 'H002',
        name: 'Ceramic Vase Set',
        category: 'Home Goods',
        image: 'home.svg',
        price: '$34.99',
        description: 'Beautiful ceramic vase set for home decoration.',
        features: ['Handcrafted', 'Set of three', 'Different sizes', 'Elegant design', 'Durable material']
    },
    {
        id: 'H003',
        name: 'Throw Pillows',
        category: 'Home Goods',
        image: 'home.svg',
        price: '$29.99',
        description: 'Decorative throw pillows for your living room or bedroom.',
        features: ['Soft fabric', 'Comfortable filling', 'Removable covers', 'Various colors', 'Set of two']
    },
    {
        id: 'H004',
        name: 'Coffee Table',
        category: 'Home Goods',
        image: 'home.svg',
        price: '$149.99',
        description: 'Modern coffee table for your living room.',
        features: ['Solid wood construction', 'Modern design', 'Spacious surface', 'Easy assembly', 'Durable finish']
    },
    // Beauty & Health u4ea7u54c1
    {
        id: 'B001',
        name: 'Skincare Set',
        category: 'Beauty & Health',
        image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800',
        price: '$59.99',
        description: 'Complete skincare routine set for daily care.',
        features: ['Natural ingredients', 'Suitable for all skin types', 'Dermatologist tested', 'Cruelty-free', 'Travel-friendly sizes']
    },
    {
        id: 'B002',
        name: 'Vitamin C Serum',
        category: 'Beauty & Health',
        image: 'beauty.svg',
        price: '$29.99',
        description: 'Brightening Vitamin C serum for radiant skin.',
        features: ['20% Vitamin C', 'Anti-aging formula', 'Brightening effect', 'Hydrating', 'Suitable for daily use']
    },
    {
        id: 'B003',
        name: 'Makeup Set',
        category: 'Beauty & Health',
        image: 'beauty.svg',
        price: '$49.99',
        description: 'Professional makeup set with essential cosmetics.',
        features: ['High pigmentation', 'Long-lasting formula', 'Cruelty-free', 'Various shades', 'Travel case included']
    },
    {
        id: 'B004',
        name: 'Facial Mask',
        category: 'Beauty & Health',
        image: 'beauty.svg',
        price: '$18.99',
        description: 'Deep cleansing facial mask for radiant skin.',
        features: ['Natural clay', 'Deep cleansing', 'Pore minimizing', 'Suitable for all skin types', 'Weekly treatment']
    }
];

// 备用图片，用于图片加载失败时显示
const backupImages = {
    'Electronics': '/electronics.svg',
    'Clothing': '/clothing.svg',
    'Home Goods': '/home.svg',
    'Beauty & Health': '/beauty.svg',
    'default': '/electronics.svg'
};

// 产品类别图片集合 - 使用本地图片
const categoryImagesCollection = {
    'Electronics': [
        '/electronics.svg',
        '/electronics.svg',
        '/electronics.svg'
    ],
    'Clothing': [
        '/clothing.svg',
        '/clothing.svg',
        '/clothing.svg'
    ],
    'Home Goods': [
        '/home.svg',
        '/home.svg',
        '/home.svg'
    ],
    'Beauty & Health': [
        '/beauty.svg',
        '/beauty.svg',
        '/beauty.svg'
    ]
};

// 获取分类图片
function getCategoryImage(category) {
    const images = categoryImagesCollection[category] || categoryImagesCollection['Electronics'];
    return images[0]; // 使用第一张图片作为分类图片
}

// 生成随机价格
function generateRandomPrice(basePrice) {
    const variation = Math.random() * 20 - 10; // -10 到 +10 的随机变化
    const newPrice = parseFloat(basePrice) + variation;
    return `$${Math.max(newPrice, 1).toFixed(2)}`;
}

// 图片库 - 使用本地图片
const imageLibrary = {
    Electronics: [
        '/images/electronics.svg',
        '/images/electronics.svg',
        '/images/electronics.svg'
    ],
    Clothing: [
        '/images/clothing.svg',
        '/images/clothing.svg',
        '/images/clothing.svg'
    ],
    'Home Goods': [
        '/images/home.svg',
        '/images/home.svg',
        '/images/home.svg'
    ],
    'Beauty & Health': [
        '/images/beauty.svg',
        '/images/beauty.svg',
        '/images/beauty.svg'
    ]
};

// 用于跟踪已使用的图片
let usedImages = new Set();

// 在每次页面加载时重置已使用图片集合
function resetUsedImages() {
    usedImages = new Set();
}

// 获取随机图片 - 使用本地图片
function getRandomImage(category) {
    const images = imageLibrary[category] || imageLibrary['Electronics'];
    const availableImages = images.filter(img => !usedImages.has(img));
    
    // 如果所有图片都被使用了，重置集合
    if (availableImages.length === 0) {
        resetUsedImages();
        return getRandomImage(category);
    }
    
    const randomIndex = Math.floor(Math.random() * availableImages.length);
    const selectedImage = availableImages[randomIndex];
    usedImages.add(selectedImage);
    
    return selectedImage;
}

// 获取产品类别图片 - 用于类别页面
function getCategoryImage(category) {
    if (categoryImagesCollection[category]) {
        const images = categoryImagesCollection[category];
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }
    return backupImages['default'];
}

// 获取所有产品
function getAllProducts() {
    return productCatalog.map(product => ({
        ...product,
        image: getRandomImage(product.category),
        price: generateRandomPrice(parseFloat(product.price.replace('$', '')))
    }));
}

// 获取特定类别的产品
function getProductsByCategory(category) {
    return productCatalog
        .filter(product => product.category === category)
        .map(product => ({
            ...product,
            image: getRandomImage(product.category),
            price: generateRandomPrice(parseFloat(product.price.replace('$', '')))
        }));
}

// 根据ID获取产品
function getProductById(id) {
    const product = productCatalog.find(product => product.id === id);
    if (product) {
        return {
            ...product,
            image: getRandomImage(product.category),
            price: generateRandomPrice(parseFloat(product.price.replace('$', '')))
        };
    }
    return null;
}

// 获取首页推荐产品
function getFeaturedProducts() {
    // 返回固定的推荐产品（每个类别的第一个产品）
    const featured = [
        productCatalog[0], // Electronics
        productCatalog[4], // Clothing
        productCatalog[8], // Home Goods
        productCatalog[12] // Beauty & Health
    ];
    
    return featured.map(product => ({
        ...product,
        image: getRandomImage(product.category),
        price: generateRandomPrice(parseFloat(product.price.replace('$', '')))
    }));
}

// 获取相关产品 - 同类别的其他产品
function getRelatedProducts(category, currentProductId) {
    return productCatalog
        .filter(product => 
            product.category === category && product.id !== currentProductId
        )
        .map(product => ({
            ...product,
            image: getRandomImage(product.category),
            price: generateRandomPrice(parseFloat(product.price.replace('$', '')))
        }))
        .slice(0, 4); // 最多返回4个相关产品
}

// 获取随机图片
function getRandomImage(category) {
    const images = categoryImagesCollection[category] || categoryImagesCollection['Electronics'];
    if (!images || images.length === 0) {
        return getBackupImage(category);
    }
    return images[Math.floor(Math.random() * images.length)];
}

// 获取备用图片
function getBackupImage(category) {
    return backupImages[category] || backupImages.default;
}

// Export all functions
window.getAllProducts = getAllProducts;
window.getProductsByCategory = getProductsByCategory;
window.getProductById = getProductById;
window.getFeaturedProducts = getFeaturedProducts;
window.getRelatedProducts = getRelatedProducts;
window.getRandomImage = getRandomImage;
window.getBackupImage = getBackupImage;
window.getCategoryImage = getCategoryImage;
window.resetUsedImages = resetUsedImages;
