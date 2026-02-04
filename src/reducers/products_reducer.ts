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

import { initialStateType } from '../context/products_context'
import { productDataType } from '../utils/productData'


const products_reducer = (state: initialStateType, action: any) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true }
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false }
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, productsLoading: true }
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    // Data from GROQ query is already in the correct format
    let allProducts = action.payload

    const featuredProducts = allProducts.filter(
      (product: productDataType) => product.featured
    )

    return { ...state, productsLoading: false, allProducts, featuredProducts }
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, productsError: true, productsLoading: false }
  }
  if (action.type === GET_SINGLE_PRODUCT_BEGIN){
    return {...state, singleProductLoading: true}
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    // check if it returns the correct productDataType object instead of an array
    return { ...state, singleProduct: action.payload, singleProductLoading: false }
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR){
    return { ...state, singleProductError: true, singleProductLoading: false}
  }
  // return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
