import { createContext } from "react";

const Product = [
    {
      img : './Component/product/image/10.jpg',
      description: 'Hit',
      price: '$ 500',
      id: 1
    },
    {
      img : './Component/product/image/7.jpg',
      description: 'Hit',
      price: '$ 500',
      id: 3
    },
    {
      img : './Component/product/image/8.jpg',
      description: 'Hit',
      price: '$ 500',
      id: 4
    }
  ]

 const Context = createContext(null)
  
 export default Context