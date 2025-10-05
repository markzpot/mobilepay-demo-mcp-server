export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  url: string;
  image_url: string;
  category: string;
  brand: string;
  in_stock: boolean;
}

export const mockProducts: Product[] = [
  {
    id: 'prod-001',
    name: 'Sony WH-1000XM5 Wireless Headphones',
    description: 'Industry-leading noise canceling headphones with premium sound quality and 30-hour battery life',
    price: 379.00,
    currency: 'EUR',
    url: 'https://pricedrop.se/products/sony-wh-1000xm5',
    image_url: 'https://example.com/images/sony-headphones.jpg',
    category: 'Audio',
    brand: 'Sony',
    in_stock: true,
  },
  {
    id: 'prod-002',
    name: 'Apple AirPods Pro (2nd generation)',
    description: 'Active noise cancellation, Adaptive Transparency, and personalized Spatial Audio',
    price: 279.00,
    currency: 'EUR',
    url: 'https://pricedrop.se/products/airpods-pro-2',
    image_url: 'https://example.com/images/airpods-pro.jpg',
    category: 'Audio',
    brand: 'Apple',
    in_stock: true,
  },
  {
    id: 'prod-003',
    name: 'Logitech MX Master 3S Wireless Mouse',
    description: 'Advanced ergonomic mouse with ultra-fast scrolling and app-specific customization',
    price: 99.00,
    currency: 'EUR',
    url: 'https://pricedrop.se/products/mx-master-3s',
    image_url: 'https://example.com/images/mx-master.jpg',
    category: 'Peripherals',
    brand: 'Logitech',
    in_stock: true,
  },
  {
    id: 'prod-004',
    name: 'Anker PowerCore 20000mAh Power Bank',
    description: 'High-capacity portable charger with fast charging technology for phones and tablets',
    price: 45.00,
    currency: 'EUR',
    url: 'https://pricedrop.se/products/anker-powercore-20000',
    image_url: 'https://example.com/images/anker-powerbank.jpg',
    category: 'Accessories',
    brand: 'Anker',
    in_stock: true,
  },
  {
    id: 'prod-005',
    name: 'SanDisk Extreme 1TB Portable SSD',
    description: 'Rugged, fast portable storage with read speeds up to 1050MB/s',
    price: 129.00,
    currency: 'EUR',
    url: 'https://pricedrop.se/products/sandisk-extreme-1tb',
    image_url: 'https://example.com/images/sandisk-ssd.jpg',
    category: 'Storage',
    brand: 'SanDisk',
    in_stock: true,
  },
  {
    id: 'prod-006',
    name: 'Razer DeathAdder V3 Gaming Mouse',
    description: 'Lightweight esports gaming mouse with 30000 DPI optical sensor',
    price: 69.00,
    currency: 'EUR',
    url: 'https://pricedrop.se/products/razer-deathadder-v3',
    image_url: 'https://example.com/images/razer-mouse.jpg',
    category: 'Gaming',
    brand: 'Razer',
    in_stock: true,
  },
  {
    id: 'prod-007',
    name: 'Philips Hue White and Color Ambiance Starter Kit',
    description: 'Smart LED bulbs with 16 million colors, works with Alexa and Google Assistant',
    price: 159.00,
    currency: 'EUR',
    url: 'https://pricedrop.se/products/philips-hue-starter',
    image_url: 'https://example.com/images/philips-hue.jpg',
    category: 'Smart Home',
    brand: 'Philips',
    in_stock: true,
  },
  {
    id: 'prod-008',
    name: 'Samsung Galaxy Watch 6',
    description: 'Advanced smartwatch with health tracking, fitness features, and long battery life',
    price: 319.00,
    currency: 'EUR',
    url: 'https://pricedrop.se/products/galaxy-watch-6',
    image_url: 'https://example.com/images/galaxy-watch.jpg',
    category: 'Wearables',
    brand: 'Samsung',
    in_stock: true,
  },
];