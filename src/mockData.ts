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
    "id": "prod-001",
    "name": "OnePlus Nord Buds 3 Pro - Starry Black",
    "description": "OnePlus Nord Buds 3 Pro - Starry Black",
    "price": 444.00,
    "currency": "SEK",
    "url": "https://pricedrop.se/en-SE/product/1333",
    "image_url": "https://www.proshop.se/Images/300x251/3279470_c70d5baf877c.jpg",
    "category": "Audio",
    "brand": "OnePlus",
    "in_stock": true
  },
  {
    "id": "prod-002",
    "name": "Sudio Headphone In-Ear A1 True Wireless Purple",
    "description": "Sudio Headphone In-Ear A1 True Wireless Purple (A1PUR) - Wireless, No Noise Cancellation",
    "price": 40.17,
    "currency": "EUR",
    "url": "https://pricedrop.se/en-SE/product/104",
    "image_url": "https://www.proshop.se/Images/300x251/3119514_6e2fa61b2c94.jpg",
    "category": "Audio",
    "brand": "Sudio",
    "in_stock": true
  },
  {
    "id": "prod-003",
    "name": "Kingston DataTraveler 70 - 256GB - USB-stick",
    "description": "Kingston DataTraveler 70 - USB-stick 256GB",
    "price": 17.08,
    "currency": "EUR",
    "url": "https://pricedrop.se/en-SE/product/1337",
    "image_url": "https://www.proshop.se/Images/300x251/2121472_b8dbc613ef03.jpg",
    "category": "Storage",
    "brand": "Kingston",
    "in_stock": true
  },
  {
    "id": "prod-004",
    "name": "Transcend 340S MicroSD/SD - 160MB/s - 128GB",
    "description": "Transcend 340S MicroSD/SD - 160MB/s - 128GB",
    "price": 16.62,
    "currency": "EUR",
    "url": "https://pricedrop.se/en-SE/product/102",
    "image_url": "https://www.proshop.se/Images/300x251/3121841_0e3eec12efbb.jpg",
    "category": "Storage",
    "brand": "Transcend",
    "in_stock": true
  },
  {
    "id": "prod-005",
    "name": "Philips Hue Color GU10 Spotlight - 2-pack",
    "description": "Smart GU10 bulbs, colour & white, for immersive lighting",
    "price": 88.38,
    "currency": "EUR",
    "url": "https://pricedrop.se/en-SE/product/101",
    "image_url": "https://www.proshop.se/Images/300x251/3227557_cafc85a3f7c3.jpg",
    "category": "Smart Home",
    "brand": "Philips",
    "in_stock": true
  },
];