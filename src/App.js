import './App.css';
import { Route, Switch } from 'react-router-dom';
import {  useState } from 'react';
import cartContext from './componentes/context/cartContext';
import userContext from './componentes/context/userContext'


function App() {

  const [cart, setCart] = useState({
    title: '',
    description: '',
    unit_price: '',
    quantity: 0
  })

  const [client, setClient] = useState({
    name: '',
    table: '',
    email: '',
    method: '',
    total: ''
  })

  return (
    <cartContext.Provider value={{cart, setCart}}>
    <userContext.Provider value={{client, setClient}}>
      <div>hola</div>
    </userContext.Provider>
    </cartContext.Provider>
  )
}

export default App;

      