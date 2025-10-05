import express from 'express';
import cors from 'cors';
import { mockProducts } from './mockData.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Product search endpoint
app.get('/products/search', (req, res) => {
  try {
    const query = (req.query.query as string || '').toLowerCase();
    const limit = parseInt(req.query.limit as string) || 10;

    if (!query) {
      return res.status(400).json({
        error: 'Query parameter is required',
        example: '/products/search?query=headphones&limit=5'
      });
    }

    const results = mockProducts
      .filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query)
      )
      .slice(0, limit)
      .map(p => ({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        currency: p.currency,
        url: p.url,
        image_url: p.image_url,
        category: p.category,
        brand: p.brand,
        in_stock: p.in_stock
      }));

    res.json({
      query,
      count: results.length,
      results
    });
  } catch (error) {
    res.status(500).json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start server
export function startRestApi() {
  app.listen(PORT, () => {
    console.error(`REST API server running on http://localhost:${PORT}`);
    console.error(`Product search endpoint: http://localhost:${PORT}/products/search?query=headphones`);
  });
}
