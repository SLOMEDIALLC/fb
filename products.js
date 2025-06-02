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
        image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800',
        price: '$199.99',
        description: 'Advanced smartwatch with health monitoring and GPS tracking.',
        features: ['Heart rate monitoring', 'GPS tracking', 'Water resistant', '5-day battery life', 'Sleep tracking']
    },
    {
        id: 'E002',
        name: 'Wireless Earbuds',
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800',
        price: '$89.99',
        description: 'Premium wireless earbuds with active noise cancellation.',
        features: ['Active noise cancellation', '24-hour battery', 'Touch controls', 'Water resistant', 'Premium sound']
    },
    {
        id: 'E003',
        name: 'Digital Camera',
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800',
        price: '$399.99',
        description: 'Professional digital camera with high resolution sensor.',
        features: ['24MP sensor', '4K video recording', 'Optical stabilization', 'Wi-Fi connectivity', 'Interchangeable lenses']
    },
    {
        id: 'E004',
        name: 'Laptop Computer',
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800',
        price: '$899.99',
        description: 'Powerful laptop for work and entertainment.',
        features: ['Intel Core i7', '16GB RAM', '512GB SSD', '15.6" display', 'Backlit keyboard']
    },
    // Clothing u4ea7u54c1
    {
        id: 'C001',
        name: 'Denim Jacket',
        category: 'Clothing',
        image: 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=800',
        price: '$79.99',
        description: 'Classic denim jacket that never goes out of style.',
        features: ['100% cotton denim', 'Classic fit', 'Multiple pockets', 'Durable design', 'Versatile style']
    },
    {
        id: 'C002',
        name: 'White T-Shirt',
        category: 'Clothing',
        image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800',
        price: '$19.99',
        description: 'Premium cotton classic white t-shirt for everyday comfort.',
        features: ['100% organic cotton', 'Comfortable fit', 'Pre-shrunk', 'Breathable fabric', 'Classic design']
    },
    {
        id: 'C003',
        name: 'Women\'s Blouse',
        category: 'Clothing',
        image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800',
        price: '$29.99',
        description: 'Elegant women\'s blouse for any occasion.',
        features: ['Lightweight fabric', 'Flattering cut', 'Versatile style', 'Easy care', 'Multiple colors available']
    },
    {
        id: 'C004',
        name: 'Casual Shoes',
        category: 'Clothing',
        image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800',
        price: '$49.99',
        description: 'Comfortable casual shoes for everyday wear.',
        features: ['Cushioned insole', 'Breathable material', 'Non-slip sole', 'Lightweight design', 'Durable construction']
    },
    // Home Goods u4ea7u54c1
    {
        id: 'H001',
        name: 'Table Lamp',
        category: 'Home Goods',
        image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800',
        price: '$49.99',
        description: 'Elegant table lamp with adjustable brightness.',
        features: ['LED lighting', 'Touch control', 'Multiple brightness levels', 'Energy efficient', 'Modern design']
    },
    {
        id: 'H002',
        name: 'Ceramic Vase Set',
        category: 'Home Goods',
        image: 'https://images.unsplash.com/photo-1612196808214-b40ab6eb6539?w=800',
        price: '$34.99',
        description: 'Beautiful ceramic vase set for home decoration.',
        features: ['Handcrafted', 'Set of three', 'Different sizes', 'Elegant design', 'Durable material']
    },
    {
        id: 'H003',
        name: 'Throw Pillows',
        category: 'Home Goods',
        image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800',
        price: '$29.99',
        description: 'Decorative throw pillows for your living room or bedroom.',
        features: ['Soft fabric', 'Comfortable filling', 'Removable covers', 'Various colors', 'Set of two']
    },
    {
        id: 'H004',
        name: 'Coffee Table',
        category: 'Home Goods',
        image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800',
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
        image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800',
        price: '$29.99',
        description: 'Brightening Vitamin C serum for radiant skin.',
        features: ['20% Vitamin C', 'Anti-aging formula', 'Brightening effect', 'Hydrating', 'Suitable for daily use']
    },
    {
        id: 'B003',
        name: 'Makeup Set',
        category: 'Beauty & Health',
        image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800',
        price: '$49.99',
        description: 'Professional makeup set with essential cosmetics.',
        features: ['High pigmentation', 'Long-lasting formula', 'Cruelty-free', 'Various shades', 'Travel case included']
    },
    {
        id: 'B004',
        name: 'Facial Mask',
        category: 'Beauty & Health',
        image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800',
        price: '$18.99',
        description: 'Deep cleansing facial mask for radiant skin.',
        features: ['Natural clay', 'Deep cleansing', 'Pore minimizing', 'Suitable for all skin types', 'Weekly treatment']
    }
];

// 备用图片，用于图片加载失败时显示
const backupImages = {
    'Electronics': 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800',
    'Clothing': 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=800',
    'Home Goods': 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800',
    'Beauty & Health': 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800',
    'default': 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800'
};

// 产品类别图片集合
const categoryImagesCollection = {
    'Electronics': [
        'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800',
        'https://images.unsplash.com/photo-1468436139062-f60a71c5c892?w=800',
        'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800',
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800',
        'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800',
        'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=800',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
        'https://images.unsplash.com/photo-1504707748692-419802cf939d?w=800'
    ],
    'Clothing': [
        'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=800',
        'https://images.unsplash.com/photo-1544441893-675973e31985?w=800',
        'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800',
        'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800',
        'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=800',
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800',
        'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800',
        'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800'
    ],
    'Home Goods': [
        'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800',
        'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800',
        'https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?w=800',
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800',
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800',
        'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800',
        'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800',
        'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800'
    ],
    'Beauty & Health': [
        'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800',
        'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800',
        'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800',
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800',
        'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800',
        'https://images.unsplash.com/photo-1570194065650-d99fb4d8a609?w=800',
        'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800',
        'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=800',
        'https://images.unsplash.com/photo-1607779097040-26e80aa4576d?w=800'
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

// 图片库
const imageLibrary = {
    Electronics: [
        'https://images.unsplash.com/photo-1546868871-7041f2a55e12',
        'https://images.unsplash.com/photo-1593642702749-b7d2b2363e24',
        'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6',
        'https://images.unsplash.com/photo-1593642634367-d91a135587b5',
        'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9',
        'https://images.unsplash.com/photo-1593642634524-b40b5baae6bb'
    ],
    Clothing: [
        'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a',
        'https://images.unsplash.com/photo-1544441893-675973e31985',
        'https://images.unsplash.com/photo-1551028719-00167b16eac5',
        'https://images.unsplash.com/photo-1434389677669-e08b4cac3105',
        'https://images.unsplash.com/photo-1479064555552-3ef4979f8908',
        'https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe'
    ],
    'Home Goods': [
        'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6',
        'https://images.unsplash.com/photo-1556228720-195a672e8a03',
        'https://images.unsplash.com/photo-1556228578-0d85b1a4d571',
        'https://images.unsplash.com/photo-1556228841-a3c527ebefe5',
        'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6',
        'https://images.unsplash.com/photo-1556228720-195a672e8a03'
    ],
    'Beauty & Health': [
        'https://images.unsplash.com/photo-1571781926291-c477ebfd024b',
        'https://images.unsplash.com/photo-1571781926287-5d1abb859262',
        'https://images.unsplash.com/photo-1571781926285-a04b4704f613',
        'https://images.unsplash.com/photo-1571781926283-8137ced63a80',
        'https://images.unsplash.com/photo-1571781926280-5cb585b9f81b',
        'https://images.unsplash.com/photo-1571781926279-76b1a475c289'
    ]
};

// 用于跟踪已使用的图片
let usedImages = new Set();

// 在每次页面加载时重置已使用图片集合
function resetUsedImages() {
    usedImages = new Set();
}

// 获取随机图片
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
    
    return `${selectedImage}?w=800&random=${Date.now()}`;
}

// 获取产品类别图片 - 用于类别页面
function getCategoryImage(category) {
    if (categoryImagesCollection[category]) {
        const images = categoryImagesCollection[category];
        const randomIndex = Math.floor(Math.random() * images.length);
        const baseUrl = images[randomIndex].split('?')[0];
        return `${baseUrl}?w=800&random=${Date.now()}`;
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
