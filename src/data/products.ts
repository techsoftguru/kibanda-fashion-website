// Product images
import mensSneakers1 from '@/assets/products/mens-sneakers-1.jpg';
import mensSneakers2 from '@/assets/products/mens-sneakers-2.jpg';
import mensSneakers3 from '@/assets/products/mens-sneakers-3.jpg';
import womensSneakers1 from '@/assets/products/womens-sneakers-1.jpg';
import womensSneakers2 from '@/assets/products/womens-sneakers-2.jpg';
import kidsSneakers1 from '@/assets/products/kids-sneakers-1.jpg';
import mensHoodie1 from '@/assets/products/mens-hoodie-1.jpg';
import mensPants1 from '@/assets/products/mens-pants-1.jpg';
import womensLeggings1 from '@/assets/products/womens-leggings-1.jpg';
import womensTop1 from '@/assets/products/womens-top-1.jpg';

export interface Product {
  id: string;
  name: string;
  category: 'sneakers' | 'clothing';
  gender: 'men' | 'women' | 'unisex';
  ageGroup: 'kids' | 'adults';
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  sizes: string[];
  colors: string[];
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
}

// Product name generators
const sneakerNames = [
  'Elite Runner Pro', 'Urban Street Classic', 'Sport Max Air', 'Velocity Boost', 'Air Precision',
  'Flex Motion', 'Cloud Walker', 'Speed Demon', 'Comfort Stride', 'Power Run',
  'Street Fighter', 'Gym Master', 'Trail Blazer', 'Court King', 'Running Legend',
  'Turbo Sprint', 'Mega Bounce', 'Ultra Glide', 'Hyper Jump', 'Swift Track',
  'Dynamic Force', 'Stealth Runner', 'Victory Racer', 'Thunder Strike', 'Vapor Edge'
];

const clothingNames = {
  hoodie: ['Premium Tech Hoodie', 'Sport Fleece Hoodie', 'Urban Style Hoodie', 'Athletic Zip Hoodie', 'Classic Pullover'],
  pants: ['Athletic Track Pants', 'Sport Joggers', 'Training Pants', 'Flex Sweatpants', 'Performance Tracksuit'],
  tshirt: ['Performance Tee', 'Athletic Training Shirt', 'Breathable Sports Tee', 'Comfort Fit Tee', 'Quick-Dry Shirt'],
  jacket: ['Lightweight Jacket', 'Sport Windbreaker', 'Training Jacket', 'All-Weather Jacket', 'Performance Coat'],
  shorts: ['Athletic Shorts', 'Training Shorts', 'Sport Shorts', 'Performance Shorts', 'Active Wear Shorts'],
  leggings: ['Yoga Leggings Pro', 'Sport Tights', 'Performance Leggings', 'Flex Fit Leggings', 'High-Rise Leggings'],
  top: ['Sport Crop Top', 'Athletic Tank', 'Training Top', 'Performance Bra Top', 'Active Camisole'],
  dress: ['Sport Dress', 'Athletic Skort', 'Tennis Dress', 'Active Dress', 'Performance Skirt']
};

const colors = {
  sneakers: ['Black', 'White', 'Navy', 'Gray', 'Red', 'Blue', 'Green', 'Pink', 'Purple', 'Orange'],
  clothing: ['Black', 'White', 'Navy', 'Gray', 'Red', 'Blue', 'Green', 'Pink', 'Purple', 'Charcoal']
};

const descriptions = {
  sneakers: [
    'High-performance running shoes with advanced cushioning technology',
    'Classic street style sneakers for everyday wear',
    'Maximum air cushioning for supreme comfort',
    'Lightweight design with responsive cushioning',
    'Durable construction for long-lasting performance',
    'Breathable mesh upper for optimal ventilation',
    'Superior traction for all-terrain performance'
  ],
  clothing: [
    'Technical fabric for style and performance',
    'Comfortable fit for training or casual wear',
    'Moisture-wicking fabric for peak performance',
    'Breathable material with four-way stretch',
    'Premium quality with modern design',
    'Versatile style for any occasion',
    'Engineered for maximum comfort and durability'
  ]
};

// Generate products
const generateProducts = (): Product[] => {
  const products: Product[] = [];
  let idCounter = 1;

  // Helper to get random item from array
  const random = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

  // Helper to generate price
  const generatePrice = (base: number): { price: number; originalPrice?: number } => {
    const hasSale = Math.random() > 0.7;
    return hasSale 
      ? { price: base, originalPrice: Math.round(base * 1.25) }
      : { price: base };
  };

  // Generate Men's Sneakers (100 products)
  for (let i = 0; i < 100; i++) {
    const priceInfo = generatePrice(9000 + Math.floor(Math.random() * 7000));
    products.push({
      id: ms-${String(idCounter++).padStart(3, '0')},
      name: sneakerNames[i % sneakerNames.length] + (i >= sneakerNames.length ? ` ${Math.floor(i / sneakerNames.length) + 1}` : ''),
      category: 'sneakers',
      gender: 'men',
      ageGroup: 'adults',
      ...priceInfo,
      description: random(descriptions.sneakers),
      images: [i % 3 === 0 ? mensSneakers1 : i % 3 === 1 ? mensSneakers2 : mensSneakers3],
      sizes: ['40', '41', '42', '43', '44', '45'],
      colors: [random(colors.sneakers), random(colors.sneakers), random(colors.sneakers)],
      inStock: Math.random() > 0.1,
      isNew: i < 15,
      isFeatured: i < 8
    });
  }

  // Generate Women's Sneakers (100 products)
  for (let i = 0; i < 100; i++) {
    const priceInfo = generatePrice(8500 + Math.floor(Math.random() * 6500));
    products.push({
      id: ws-${String(idCounter++).padStart(3, '0')},
      name: sneakerNames[i % sneakerNames.length] + (i >= sneakerNames.length ? ` ${Math.floor(i / sneakerNames.length) + 1}` : ''),
      category: 'sneakers',
      gender: 'women',
      ageGroup: 'adults',
      ...priceInfo,
      description: random(descriptions.sneakers),
      images: [i % 2 === 0 ? womensSneakers1 : womensSneakers2],
      sizes: ['36', '37', '38', '39', '40', '41'],
      colors: [random(colors.sneakers), random(colors.sneakers), random(colors.sneakers)],
      inStock: Math.random() > 0.1,
      isNew: i < 12,
      isFeatured: i < 6
    });
  }

  // Generate Kids' Sneakers (75 products)
  for (let i = 0; i < 75; i++) {
    const priceInfo = generatePrice(5000 + Math.floor(Math.random() * 3000));
    products.push({
      id: ks-${String(idCounter++).padStart(3, '0')},
      name: sneakerNames[i % sneakerNames.length] + ' Kids' + (i >= sneakerNames.length ? ` ${Math.floor(i / sneakerNames.length) + 1}` : ''),
      category: 'sneakers',
      gender: 'unisex',
      ageGroup: 'kids',
      ...priceInfo,
      description: random(descriptions.sneakers),
      images: [kidsSneakers1],
      sizes: ['28', '29', '30', '31', '32', '33', '34'],
      colors: [random(colors.sneakers), random(colors.sneakers)],
      inStock: Math.random() > 0.1,
      isNew: i < 10,
      isFeatured: i < 5
    });
  }

  // Generate Men's Clothing (100 products)
  const mensClothingTypes = ['hoodie', 'pants', 'tshirt', 'jacket', 'shorts'];
  for (let i = 0; i < 100; i++) {
    const type = mensClothingTypes[i % mensClothingTypes.length];
    const priceInfo = generatePrice(3000 + Math.floor(Math.random() * 7000));
    products.push({
      id: mc-${String(idCounter++).padStart(3, '0')},
      name: clothingNames[type][Math.floor(i / mensClothingTypes.length) % clothingNames[type].length],
      category: 'clothing',
      gender: 'men',
      ageGroup: 'adults',
      ...priceInfo,
      description: random(descriptions.clothing),
      images: [type === 'hoodie' ? mensHoodie1 : mensPants1],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: [random(colors.clothing), random(colors.clothing)],
      inStock: Math.random() > 0.1,
      isNew: i < 12,
      isFeatured: i < 6
    });
  }

  // Generate Women's Clothing (100 products)
  const womensClothingTypes = ['leggings', 'top', 'jacket', 'tshirt', 'dress', 'shorts'];
  for (let i = 0; i < 100; i++) {
    const type = womensClothingTypes[i % womensClothingTypes.length];
    const priceInfo = generatePrice(2800 + Math.floor(Math.random() * 7200));
    products.push({
      id: wc-${String(idCounter++).padStart(3, '0')},
      name: clothingNames[type][Math.floor(i / womensClothingTypes.length) % clothingNames[type].length],
      category: 'clothing',
      gender: 'women',
      ageGroup: 'adults',
      ...priceInfo,
      description: random(descriptions.clothing),
      images: [type === 'leggings' ? womensLeggings1 : womensTop1],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: [random(colors.clothing), random(colors.clothing)],
      inStock: Math.random() > 0.1,
      isNew: i < 15,
      isFeatured: i < 8
    });
  }

  // Generate Kids' Clothing (75 products)
  const kidsClothingTypes = ['hoodie', 'pants', 'tshirt', 'shorts', 'jacket'];
  for (let i = 0; i < 75; i++) {
    const type = kidsClothingTypes[i % kidsClothingTypes.length];
    const priceInfo = generatePrice(2000 + Math.floor(Math.random() * 3500));
    products.push({
      id: kc-${String(idCounter++).padStart(3, '0')},
      name: clothingNames[type][Math.floor(i / kidsClothingTypes.length) % clothingNames[type].length] + ' Kids',
      category: 'clothing',
      gender: 'unisex',
      ageGroup: 'kids',
      ...priceInfo,
      description: random(descriptions.clothing),
      images: [type === 'hoodie' ? mensHoodie1 : mensPants1],
      sizes: ['4Y', '6Y', '8Y', '10Y', '12Y', '14Y'],
      colors: [random(colors.clothing), random(colors.clothing)],
      inStock: Math.random() > 0.1,
      isNew: i < 10,
      isFeatured: i < 4
    });
  }

  return products;
};

export const products = generateProducts();

export const getProductById = (id: string) => products.find(p => p.id === id);
export const getFeaturedProducts = () => products.filter(p => p.isFeatured).slice(0, 12);
export const getNewArrivals = () => products.filter(p => p.isNew).slice(0, 16);
export const getProductsByCategory = (category: string) => products.filter(p => p.category === category);
export const getProductsByGender = (gender: string) => products.filter(p => p.gender === gender || p.gender === 'unisex');
export const getProductsByAgeGroup = (ageGroup: string) => products.filter(p => p.ageGroup === ageGroup);
