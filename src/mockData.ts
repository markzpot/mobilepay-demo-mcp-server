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
      "id": "prod-101",
      "name": "Philips Hue Color GU10 Spotlight - 2-pack",
      "description": "A perfect fit for spotlights, GU10 bulbs give you access to the best of smart lighting. With white and colour light as well as ultra-low dimming, these bulbs can help you create immersive experiences, support your routines and more.",
      "price": 88.38,
      "currency": "EUR",
      "url": "https://pricedrop.se/en-SE/product/101",
      "image_url": "https://www.proshop.fi/Images/1600x1200/2991039_b58e10cc5db2.jpg",
      "category": "Starter Kits",
      "brand": "Philips",
      "in_stock": true
    },
    {
      "id": "prod-102",
      "name": "Transcend 340S MicroSD/SD - 160MB/s - 128GB",
      "description": "Designed for mobile devices and handheld game consoles, Transcend's Ultra Performance microSDXC 340S memory cards are compliant with the latest A2 speed class and boast excellent random read/write speeds, making them ideal for retrieving small pieces of data from random locations, and quick app launches.",
      "price": 16.62,
      "currency": "EUR",
      "url": "https://pricedrop.se/en-SE/product/102",
      "image_url": "https://www.proshop.fi/Images/1600x1200/2914949_7520e760924f.jpg",
      "category": "Micro SDXC",
      "brand": "Transcend",
      "in_stock": true
    },
    {
      "id": "prod-103",
      "name": "Champion Office - wireless headset + charging station, black",
      "description": "STREETZ in-ear Lightning headset, MFi, volume control, remote, white (HL-390) - TYPE: Wired Headset - Noise Cancelling: No - Color: White",
      "price": 22.46,
      "currency": "EUR",
      "url": "https://pricedrop.se/en-SE/product/103",
      "image_url": "https://cdn.multitronic.fi/images/prod/F/E/CHWH100-1.jpg",
      "category": "Wired Earphones",
      "brand": "Champion",
      "in_stock": true
    },
    {
      "id": "prod-104",
      "name": "Sudio - Headphone In-Ear A1 True Wireless Purple",
      "description": "Sudio Headphone In-Ear A1 True Wireless Purple (A1PUR) - Type: Wireless Headphone - Noise Cancellation: No - Color: Purple",
      "price": 40.17,
      "currency": "EUR",
      "url": "https://pricedrop.se/en-SE/product/104",
      "image_url": "https://m.media-amazon.com/images/I/51VMbmQYCaL._UF1000,1000_QL80_.jpg",
      "category": "Wireless Headphones",
      "brand": "Sudio",
      "in_stock": true
    },
    {
      "id": "prod-111",
      "name": "Airpods 4 (2024) Case - Choose from 16 colors",
      "description": "Find the perfect accessory for your AirPods: a high-quality AirPods case that not only protects your earphones from scratches, bumps, and dust, but also adds a modern and personal touch. Made from high-quality materials, this case offers: Stylish design - Tight fit with a clean finish that complements your everyday look. Maximum protection - Impact-resistant construction keeps your AirPods safe wherever you are. Convenient features - Precisely designed openings make charging easier without having to remove the case. Colors for every taste - Choose from a wide range of trendy colors that reflect your personality. Perfect for those who want to combine functionality with style - a must-have for all AirPod owners! Click on your case today and take your AirPods experience to the next level",
      "price": 6.83,
      "currency": "EUR",
      "url": "https://pricedrop.se/en-SE/product/111",
      "image_url": "https://ae01.alicdn.com/kf/Sd32ef6c032a744a2ba7b3f8ecb1d22f1d.jpg_640x640q90.jpg",
      "category": "Headphone Cases",
      "brand": "",
      "in_stock": true
    },
    {
      "id": "prod-112",
      "name": "UBIQUITI - Ubiquiti UniFi Etherlighting Patch Cable 0.15m UACC-Cable-Patch-EL-0.15M-W (Retail)",
      "description": "UBIQUITI Ubiquiti UniFi Etherlighting Patch Cable 0.15m UACC-Cable-Patch-EL-0.15M-W (Retail) (UACC-Cable-Patch-EL-0.15M-W) - Type: Cat6 - Connector 1: RJ-45 - Connector 2: RJ-45 - Color: White - Length: 0.15m",
      "price": 4.46,
      "currency": "EUR",
      "url": "https://pricedrop.se/en-SE/product/112",
      "image_url": "https://cdn.webshopapp.com/shops/41929/files/464055072/image.jpg",
      "category": "Network Cables 5m and under",
      "brand": "UBIQUITI",
      "in_stock": true
    },
    {
      "id": "prod-113",
      "name": "Deltaco Cat6 S/FTP - network cable, 0.3 m, Purple",
      "description": "The material in the cable is free from PVC plastic, which means that no halogen gas is released in case of fire.",
      "price": 3.86,
      "currency": "EUR",
      "url": "https://pricedrop.se/en-SE/product/113",
      "image_url": "https://hydraulic-cdn.com/productimages/5/4/2/1/3/9/5/5/7/1/3/3/6/7/4/4/7/6/6/019761d0-9266-70ca-8e72-3157574de248_720.jpeg",
      "category": "Network Cables 5m and under",
      "brand": "Deltaco",
      "in_stock": true
    },
    {
      "id": "prod-1111",
      "name": "Philips Hue Solo Lightstrip 3m",
      "description": "Philips Hue Solo Lightstrip 3m",
      "price": 529.0,
      "currency": "SEK",
      "url": "https://pricedrop.se/en-SE/product/1111",
      "image_url": "https://www.proshop.se/Images/300x251/3294954_b6082ae04650.jpg",
      "category": "Smart Home",
      "brand": "Philips",
      "in_stock": true
    },
    {
      "id": "prod-1112",
      "name": "Super Alkaline AAA (LR03), 1,5V, 4-pack",
      "description": "Super Alkaline AAA (LR03), 1,5V, 4-pack",
      "price": 5.9,
      "currency": "EUR",
      "url": "https://pricedrop.se/en-SE/product/1112",
      "image_url": "https://cdn.multitronic.fi/images/prod/2/5/xW126074982-1.jpg.pagespeed.ic.oYB6KfliQa.webp",
      "category": "Batteries",
      "brand": "",
      "in_stock": true
    },
    {
      "id": "prod-1333",
      "name": "OnePlus Nord Buds 3 Pro - Starry Black",
      "description": "OnePlus Nord Buds 3 Pro - Starry Black",
      "price": 444.0,
      "currency": "SEK",
      "url": "https://pricedrop.se/en-SE/product/1333",
      "image_url": "https://www.proshop.se/Images/300x251/3279470_c70d5baf877c.jpg",
      "category": "Smart Home",
      "brand": "OnePlus",
      "in_stock": true
    },
    {
      "id": "prod-1337",
      "name": "Kingston DataTraveler 70 - 256GB - USB-stick",
      "description": "Kingston DataTraveler 70 - 256GB - USB-stick",
      "price": 17.08,
      "currency": "EUR",
      "url": "https://pricedrop.se/en-SE/product/1337",
      "image_url": "https://www.proshop.fi/Images/300x251/3157170_c0b6c648bb00.jpg",
      "category": "USB-sticks",
      "brand": "Kingston",
      "in_stock": true
    },
    {
      "id": "prod-1338",
      "name": "Maxell battery, AA (LR06), Alkaline, 1,5V, 4-pack",
      "description": "Maxell battery, AA (LR06), Alkaline, 1,5V, 4-pack",
      "price": 3.9,
      "currency": "EUR",
      "url": "https://pricedrop.se/en-SE/product/1338",
      "image_url": "https://cdn.multitronic.fi/images/prod/7/D/723758-1.webp",
      "category": "Batteries",
      "brand": "Maxell",
      "in_stock": true
    },
];