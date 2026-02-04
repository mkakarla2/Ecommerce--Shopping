const product = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (field) => field.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (field) => field.required(),
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'string',
    },
    {
      name: 'categories',
      title: 'Category',
      type: 'string',
      description: 'clothing, accessories, or footwear',
      validation: (field) => field.required(),
    },
    {
      name: 'clothingCategories',
      title: 'Clothing Type',
      type: 'string',
      description: 'tops, formal, etc. (optional)',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price in dollars (e.g., 12.99)',
      validation: (field) => field.required(),
    },
    {
      name: 'stock',
      title: 'Stock',
      type: 'number',
      validation: (field) => field.required(),
    },
    {
      name: 'forWhom',
      title: 'For Whom',
      type: 'string',
      description: 'Target audience (e.g., men)',
      validation: (field) => field.required(),
    },
    {
      name: 'itemDescription',
      title: 'Description',
      type: 'text',
      validation: (field) => field.required(),
    },
    {
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'imageUrls',
      title: 'External Image URLs',
      type: 'array',
      description: 'URLs to external images (alternative to uploading)',
      of: [{ type: 'url' }],
    },
  ],
}

export default product
