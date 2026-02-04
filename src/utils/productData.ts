export type productDataType = {
  id: string
  name: string
  slug: string
  brand?: string
  categories: string
  clothingCategories?: string // add in schema
  price: number
  stock: number
  forWhom: string
  itemDescription: string
  featured?: boolean
  images: string[]
}

export type productDataTypeKey = keyof productDataType
