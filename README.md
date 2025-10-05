# MobilePay Demo MCP Server

MCP server for the MobilePay shopping demo with REST API support for ChatGPT integration.

## Features

- **MCP Server**: For Claude Desktop and Claude Code integration
- **REST API**: For ChatGPT GPT Actions and other external integrations
- **Product Search**: Search through a curated catalog of 8 tech products
- **Product Details**: Get detailed information about specific products
- **Cart Management**: Add products to cart and view cart contents
- **Checkout**: Generate checkout URLs for completing purchases

## Installation

\`\`\`bash
npm install
npm run build
\`\`\`

## Running the Server

### Both MCP and REST API (default)
\`\`\`bash
npm start
\`\`\`
This starts both the MCP server on stdio and the REST API on port 3000.

### REST API only
\`\`\`bash
npm run start:api
\`\`\`

### MCP only
\`\`\`bash
npm run start:mcp
\`\`\`

## REST API Endpoints

### Product Search
\`\`\`
GET /products/search?query={search_term}&limit={number}
\`\`\`

**Parameters:**
- `query` (required): Search term for products
- `limit` (optional): Maximum number of results (default: 10)

**Example:**
\`\`\`bash
curl "http://localhost:3000/products/search?query=headphones&limit=5"
\`\`\`

**Response:**
\`\`\`json
{
  "query": "headphones",
  "count": 1,
  "results": [
    {
      "id": "prod-001",
      "name": "Sony WH-1000XM5 Wireless Headphones",
      "description": "Industry-leading noise canceling headphones...",
      "price": 379,
      "currency": "EUR",
      "url": "https://pricedrop.se/products/sony-wh-1000xm5",
      "image_url": "https://example.com/images/sony-headphones.jpg",
      "category": "Audio",
      "brand": "Sony",
      "in_stock": true
    }
  ]
}
\`\`\`

### Health Check
\`\`\`
GET /health
\`\`\`

## OpenAPI Documentation

The server includes auto-generated OpenAPI documentation using Zod schemas and Swagger UI.

### Accessing the Documentation

1. Start the server: `npm run start:api`
2. Open your browser to: `http://localhost:3000/api-docs`
3. View the raw OpenAPI schema: `http://localhost:3000/api-docs/schema`

### Using with ChatGPT GPT Actions

1. Start the server: `npm run start:api`
2. Download the OpenAPI schema from `http://localhost:3000/api-docs/schema`
3. In ChatGPT GPT editor, add a new action
4. Import the OpenAPI schema
5. Configure the action to use the `/products/search` endpoint

The OpenAPI schema is automatically generated from Zod schemas, ensuring type safety and consistency between validation and documentation.

## Usage with Claude Desktop

Add to your Claude Desktop config (\`~/Library/Application Support/Claude/claude_desktop_config.json\` on macOS):

\`\`\`json
{
  "mcpServers": {
    "mobilepay-demo": {
      "command": "node",
      "args": ["/path/to/mobilepay-demo-mcp-server/build/index.js"],
      "env": {
        "MCP_ONLY": "true"
      }
    }
  }
}
\`\`\`

## Usage with Claude Code

\`\`\`bash
# In your project directory
claude code --mcp-server node /path/to/mobilepay-demo-mcp-server/build/index.js
\`\`\`

## MCP Tools

1. **search_products** - Search for products
2. **get_product_details** - Get full product information
3. **add_to_cart** - Add items to shopping cart
4. **get_cart** - View cart contents
5. **generate_checkout_url** - Get checkout URL

## Example Usage

### With Claude
\`\`\`
User: "I'm looking for wireless headphones"
Claude: [uses search_products tool]

User: "Add the Sony headphones to my cart"
Claude: [uses add_to_cart tool]

User: "Show me my cart"
Claude: [uses get_cart tool]

User: "I'm ready to checkout"
Claude: [uses generate_checkout_url tool]
\`\`\`

### With ChatGPT (via REST API)
\`\`\`
User: "Find me wireless headphones"
ChatGPT: [calls /products/search?query=wireless+headphones]
\`\`\`

## Development

\`\`\`bash
# Watch mode for development
npm run watch

# Start server (MCP + REST API)
npm start
\`\`\`

## Environment Variables

- `PORT`: REST API port (default: 3000)
- `MCP_ONLY`: Set to 'true' to run MCP server only without REST API

## Integration Notes

- Cart sessions are stored in-memory (resets on server restart)
- Checkout URLs point to pricedrop.se (can be updated for actual integration)
- Products use URLs instead of IDs (compatible with Starcart cart API)
- All prices in EUR

## Next Steps for Production

1. Replace mock products with real product API
2. Integrate with actual Starcart cart API
3. Add persistent session storage
4. Implement real checkout flow
5. Add authentication/authorization
6. Add error logging and monitoring
`,
  };

  const setupInstructions = `# Setup Instructions for Claude Code

## Step 1: Create Project Directory
mkdir mobilepay-demo-mcp-server
cd mobilepay-demo-mcp-server

## Step 2: Create Directory Structure
mkdir src

## Step 3: Copy Files
Copy each file from the interface above into your project:
- package.json
- tsconfig.json
- src/index.ts
- src/mockData.ts
- src/cartManager.ts
- README.md

## Step 4: Install Dependencies
npm install

## Step 5: Build
npm run build

## Step 6: Test with Claude Code
claude code

Then in Claude Code, you can test the MCP server by asking:
"Search for headphones in the product catalog"

## Step 7: Configure for ChatGPT Actions (Alternative)
To use with ChatGPT instead of Claude Code:
1. Deploy this as an HTTP API (not MCP)
2. Use the OpenAPI spec generation
3. Configure in ChatGPT Actions

Would you like me to also create the HTTP API version for ChatGPT Actions?