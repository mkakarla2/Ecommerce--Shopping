import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'
// import { featuredProducts, productData } from '../utils/productData'
import { productDataType } from '../utils/productData'
import axios from 'axios'

// Sanity API configuration
const SANITY_PROJECT_ID = 'j3gfzmh0'
const SANITY_DATASET = 'production'
const SANITY_API_VERSION = '2024-01-01'
const SANITY_URL = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}`

// GROQ query to fetch all products
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

export type initialStateType = {
  isSidebarOpen: boolean
  allProducts: productDataType[] | []
  featuredProducts: productDataType[] | []
  singleProduct: productDataType | {}
  openSidebar: () => void
  closeSidebar: () => void
  fetchSingleProduct: (id: string) => void
  productsLoading: boolean
  productsError: boolean
  singleProductLoading: boolean
  singleProductError: boolean
}

const initialState: initialStateType = {
  isSidebarOpen: false,
  allProducts: [],
  featuredProducts: [],
  singleProduct: {},
  openSidebar: () => {},
  closeSidebar: () => {},
  fetchSingleProduct: (id: string) => {},
  productsLoading: false,
  productsError: false,
  singleProductLoading: false,
  singleProductError: false,
}

const ProductsContext = React.createContext<initialStateType>(initialState)

export const ProductsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }

  const fetchSingleProduct = (slug: string) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN })
    try {
      const singleProduct: productDataType = state.allProducts.filter(
        (product: productDataType) => product.slug === slug
      )[0]
      // running filter() on empty allProducts [] will result in undefined
      // this if clause guard against such case
      if (singleProduct) {
        dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct })
      }
    } catch (error) {
      console.log(error)
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR })
    }
  }

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: GET_PRODUCTS_BEGIN })
      try {
        // Fetch from Sanity CMS
        const { data } = await axios.get(`${SANITY_URL}?query=${PRODUCTS_QUERY}`)
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data.result })
      } catch (error) {
        console.log('Failed to fetch products from Sanity:', error)
        dispatch({ type: GET_PRODUCTS_ERROR })
      }
    }
    fetchProducts()
  }, [])

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}
