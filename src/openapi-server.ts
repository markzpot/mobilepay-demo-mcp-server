import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { OpenAPIRegistry, OpenApiGeneratorV3 } from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';

import { mockProducts } from './mockData.js';
import { ProductSearchInputSchema, ProductSearchResponseSchema } from './schemas.js';

const app = express();
app.use(express.json());
app.use(cors());

// Add error logging middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Express error:', err);
  next(err);
});

// Create OpenAPI registry
const registry = new OpenAPIRegistry();

// Register product search endpoint
registry.registerPath({
  method: 'get',
  path: '/products/search',
  description: 'Search for products',
  operationId: 'searchProducts',
  request: {
    query: ProductSearchInputSchema
  },
  responses: {
    200: {
      description: 'Search products successfully',
      content: {
        'application/json': {
          schema: ProductSearchResponseSchema
        }
      }
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z.object({
            error: z.string()
          })
        }
      }
    }
  }
});

// Health check endpoint
registry.registerPath({
  method: 'get',
  path: '/health',
  description: 'Health check endpoint',
  operationId: 'healthCheck',
  responses: {
    200: {
      description: 'Server is healthy',
      content: {
        'application/json': {
          schema: z.object({
            status: z.string()
          })
        }
      }
    }
  }
});

// Implement route handlers
app.get('/products/search', async (req, res) => {
  try {
    const { query, limit } = ProductSearchInputSchema.parse(req.query);

    const results = mockProducts
      .filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.brand.toLowerCase().includes(query.toLowerCase())
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
    handleError(res, error);
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Generate OpenAPI document
const generator = new OpenApiGeneratorV3(registry.definitions);

let openApiDocument;
try {
  openApiDocument = generator.generateDocument({
    openapi: '3.1.0',
    info: {
      title: 'MobilePay Product Search API',
      version: '1.0.0',
      description: 'REST API for MobilePay shopping demo - search products and manage cart'
    },
    servers: [{ url: process.env.API_URL || `http://localhost:${process.env.PORT || 3000}` }]
  });
  console.log('OpenAPI document generated successfully');
} catch (error) {
  console.error('Error generating OpenAPI document:', error);
  throw error;
}

// Serve raw OpenAPI schema
app.get('/api-docs/schema', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(openApiDocument);
});

// Serve OpenAPI documentation with error handling
app.use('/api-docs',
  (req: Request, res: Response, next: NextFunction) => {
    console.log('Accessing API docs');
    next();
  },
  swaggerUi.serve,
  (req: Request, res: Response, next: NextFunction) => {
    try {
      return swaggerUi.setup(openApiDocument)(req, res, next);
    } catch (error) {
      console.error('Error serving Swagger UI:', error);
      next(error);
    }
  }
);

// Error handler
const handleError = (res: Response, error: unknown) => {
  console.error('Request error:', error);
  const message = error instanceof Error ? error.message : 'An unknown error occurred';
  res.status(500).json({ error: message });
};

// Start server
export function startOpenApiServer() {
  const port = process.env.PORT || 3000;
  const server = app.listen(port, () => {
    console.log(`OpenAPI server running on port ${port}`);
    console.log(`API documentation available at http://localhost:${port}/api-docs`);
    console.log(`OpenAPI schema available at http://localhost:${port}/api-docs/schema`);
  }).on('error', (error) => {
    console.error('Server startup error:', error);
  });

  // Add graceful shutdown
  process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  });

  return server;
}
