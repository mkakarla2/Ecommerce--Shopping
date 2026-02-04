// [domain]/.netlify/functions/products
// This serverless function fetches products from Sanity CMS

import { Handler } from '@netlify/functions'
import https from 'https'

const SANITY_PROJECT_ID = 'j3gfzmh0'
const SANITY_DATASET = 'production'
const SANITY_API_VERSION = '2024-01-01'

const PRODUCTS_QUERY = encodeURIComponent(`*[_type == "product"]{
  "id": _id,
  name,
  "slug": slug.current,
  brand,
  categories,
  clothingCategories,
  price,
  stock,
  forWhom,
  itemDescription,
  featured,
  "images": imageUrls
}`)

const handler: Handler = async () => {
  try {
    const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${PRODUCTS_QUERY}`
    
    const response = await fetch(url)
    const data = await response.json()
    
    return {
      statusCode: 200,
      body: JSON.stringify(data.result),
      headers: { 'Content-Type': 'application/json' },
    }
  } catch (err: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: 'Failed to load products', error: err?.message }),
    }
  }
}

export { handler }
