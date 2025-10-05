#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool,
} from '@modelcontextprotocol/sdk/types.js';
import { mockProducts, Product } from './mockData.js';
import { CartManager } from './cartManager.js';
import { startOpenApiServer } from './openapi-server.js';

const cartManager = new CartManager();

const server = new Server(
  {
    name: 'mobilepay-demo-server',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Define available tools
const TOOLS: Tool[] = [
  {
    name: 'search_products',
    description: 'Search for products in the catalog. Returns product details including name, price, and URL.',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Search query to find products',
        },
        limit: {
          type: 'number',
          description: 'Maximum number of results to return (default: 5)',
          default: 5,
        },
      },
      required: ['query'],
    },
  },
  {
    name: 'get_product_details',
    description: 'Get detailed information about a specific product by URL',
    inputSchema: {
      type: 'object',
      properties: {
        product_url: {
          type: 'string',
          description: 'URL of the product to retrieve',
        },
      },
      required: ['product_url'],
    },
  },
  {
    name: 'add_to_cart',
    description: 'Add a product to the shopping cart',
    inputSchema: {
      type: 'object',
      properties: {
        product_url: {
          type: 'string',
          description: 'URL of the product to add',
        },
        quantity: {
          type: 'number',
          description: 'Quantity to add (default: 1)',
          default: 1,
        },
        session_id: {
          type: 'string',
          description: 'Session ID for the cart (optional, will create new if not provided)',
        },
      },
      required: ['product_url'],
    },
  },
  {
    name: 'get_cart',
    description: 'Retrieve the current shopping cart contents',
    inputSchema: {
      type: 'object',
      properties: {
        session_id: {
          type: 'string',
          description: 'Session ID for the cart',
        },
      },
      required: ['session_id'],
    },
  },
  {
    name: 'generate_checkout_url',
    description: 'Generate a checkout URL to complete the purchase',
    inputSchema: {
      type: 'object',
      properties: {
        session_id: {
          type: 'string',
          description: 'Session ID for the cart',
        },
      },
      required: ['session_id'],
    },
  },
];

// Tool handlers
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: TOOLS,
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case 'search_products': {
        const query = (args?.query as string).toLowerCase();
        const limit = (args?.limit as number) || 5;
        
        const results = mockProducts
          .filter(p => 
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
          )
          .slice(0, limit);

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                results,
                count: results.length,
                query,
              }, null, 2),
            },
          ],
        };
      }

      case 'get_product_details': {
        const productUrl = args?.product_url as string;
        const product = mockProducts.find(p => p.url === productUrl);

        if (!product) {
          return {
            content: [
              {
                type: 'text',
                text: JSON.stringify({ error: 'Product not found' }),
              },
            ],
            isError: true,
          };
        }

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(product, null, 2),
            },
          ],
        };
      }

      case 'add_to_cart': {
        const productUrl = args?.product_url as string;
        const quantity = (args?.quantity as number) || 1;
        const sessionId = (args?.session_id as string) || cartManager.createSession();

        const product = mockProducts.find(p => p.url === productUrl);
        
        if (!product) {
          return {
            content: [
              {
                type: 'text',
                text: JSON.stringify({ error: 'Product not found' }),
              },
            ],
            isError: true,
          };
        }

        const cart = cartManager.addToCart(sessionId, product, quantity);

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                success: true,
                session_id: sessionId,
                cart,
              }, null, 2),
            },
          ],
        };
      }

      case 'get_cart': {
        const sessionId = args?.session_id as string;
        const cart = cartManager.getCart(sessionId);

        if (!cart) {
          return {
            content: [
              {
                type: 'text',
                text: JSON.stringify({ error: 'Cart not found' }),
              },
            ],
            isError: true,
          };
        }

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(cart, null, 2),
            },
          ],
        };
      }

      case 'generate_checkout_url': {
        const sessionId = args?.session_id as string;
        const cart = cartManager.getCart(sessionId);

        if (!cart || cart.items.length === 0) {
          return {
            content: [
              {
                type: 'text',
                text: JSON.stringify({ error: 'Cart is empty or not found' }),
              },
            ],
            isError: true,
          };
        }

        // Generate checkout URL (mock for demo)
        const checkoutUrl = `https://pricedrop.se/checkout?session=${sessionId}`;

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                checkout_url: checkoutUrl,
                session_id: sessionId,
                total: cart.total,
                currency: cart.currency,
              }, null, 2),
            },
          ],
        };
      }

      default:
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify({ error: `Unknown tool: ${name}` }),
            },
          ],
          isError: true,
        };
    }
  } catch (error) {
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            error: error instanceof Error ? error.message : 'Unknown error',
          }),
        },
      ],
      isError: true,
    };
  }
});

async function main() {
  // Start OpenAPI server if not in MCP-only mode
  if (process.env.MCP_ONLY !== 'true') {
    startOpenApiServer();
  }

  // Start MCP server on stdio
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('MobilePay Demo MCP Server running on stdio');
}

main().catch((error) => {
  console.error('Server error:', error);
  process.exit(1);
});