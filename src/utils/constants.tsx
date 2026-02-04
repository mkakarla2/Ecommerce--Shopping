import { GiClothes } from 'react-icons/gi'
import { GiWatch } from 'react-icons/gi'
import { FaShoePrints } from 'react-icons/fa'

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'shipping',
    url: '/shipping',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiClothes />,
    title: 'clothing',
    text: 'shirts, tees, trousers',
  },
  {
    id: 2,
    icon: <FaShoePrints />,
    title: 'footwear',
    text: 'sneakers, formal shoes, sandals',
  },
  {
    id: 3,
    icon: <GiWatch />,
    title: 'accessories',
    text: 'watches, belts, wallets',
  },
]
