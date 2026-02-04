/**
 * Import script for Lucky Shopping products
 * Run with: SANITY_TOKEN=your_token node import-products.js
 * 
 * Note: Products are now managed directly in Sanity Studio at:
 * https://lucky-shopping.sanity.studio/
 */

const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: 'j3gfzmh0',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN, // You need to set this environment variable
  useCdn: false,
})

// Sample product structure for reference
const sampleProduct = {
  _type: 'product',
  _id: 'product-id',
  name: 'Product Name',
  slug: { _type: 'slug', current: 'product-slug' },
  brand: 'Lucky',
  categories: 'clothing',
  clothingCategories: 'tops',
  price: 19.99,
  stock: 50,
  forWhom: 'men',
  itemDescription: 'Product description here',
  featured: true,
  imageUrls: ['https://example.com/image.jpg'],
}

async function importProduct(product) {
  try {
    const result = await client.createOrReplace(product)
    console.log(`✓ Imported: ${result.name} (${result._id})`)
    return result
  } catch (error) {
    console.error(`✗ Failed to import ${product.name}:`, error.message)
    throw error
  }
}

// Export for programmatic use
module.exports = { client, importProduct }
