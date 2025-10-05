import { Product } from './mockData.js';

interface CartItem {
  product: Product;
  quantity: number;
}

interface Cart {
  session_id: string;
  items: CartItem[];
  total: number;
  currency: string;
}

export class CartManager {
  private carts: Map<string, Cart> = new Map();

  createSession(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  addToCart(sessionId: string, product: Product, quantity: number): Cart {
    let cart = this.carts.get(sessionId);

    if (!cart) {
      cart = {
        session_id: sessionId,
        items: [],
        total: 0,
        currency: product.currency,
      };
    }

    const existingItem = cart.items.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ product, quantity });
    }

    cart.total = cart.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    this.carts.set(sessionId, cart);
    return cart;
  }

  getCart(sessionId: string): Cart | undefined {
    return this.carts.get(sessionId);
  }

  clearCart(sessionId: string): void {
    this.carts.delete(sessionId);
  }
}