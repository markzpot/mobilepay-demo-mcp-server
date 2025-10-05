import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

// Product schema
export const ProductSchema = z.object({
  id: z.string().openapi({ example: 'prod-001' }),
  name: z.string().openapi({ example: 'Sony WH-1000XM5 Wireless Headphones' }),
  description: z.string().openapi({ example: 'Industry-leading noise canceling headphones with premium sound quality' }),
  price: z.number().openapi({ example: 379.00 }),
  currency: z.string().openapi({ example: 'EUR' }),
  url: z.string().url().openapi({ example: 'https://pricedrop.se/products/sony-wh-1000xm5' }),
  image_url: z.string().url().openapi({ example: 'https://example.com/images/sony-headphones.jpg' }),
  category: z.string().openapi({ example: 'Audio' }),
  brand: z.string().openapi({ example: 'Sony' }),
  in_stock: z.boolean().openapi({ example: true })
});

// Product search input
export const ProductSearchInputSchema = z.object({
  query: z.string().min(1).openapi({
    example: 'headphones',
    description: 'Search query for products'
  }),
  limit: z.coerce.number().optional().default(10).openapi({
    example: 10,
    description: 'Maximum number of results to return'
  })
});

// Product search response
export const ProductSearchResponseSchema = z.object({
  query: z.string().openapi({ example: 'headphones' }),
  count: z.number().openapi({ example: 1 }),
  results: z.array(ProductSchema)
});

export type Product = z.infer<typeof ProductSchema>;
export type ProductSearchInput = z.infer<typeof ProductSearchInputSchema>;
export type ProductSearchResponse = z.infer<typeof ProductSearchResponseSchema>;
