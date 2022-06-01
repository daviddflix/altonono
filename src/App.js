import './App.css';
import { Route, Switch } from 'react-router-dom';
import {  useState } from 'react';
import cartContext from './componentes/context/cartContext';
import userContext from './componentes/context/userContext'
import Navbar from './componentes/Navbar/navbar';
import Products from './componentes/Products/Products';
import ReviewOrder from './componentes/reviewOrder/ReviewOrder';
import Payment from './componentes/payment/payment';
import Success from './componentes/successMp/sucess';


function App() {

  const [categories, setCategories] = useState('');


  const [client, setClient] = useState({
    name: '',
    table: '',
    email: '',
    method: '',
  })

  

  return (
   <div className='App'>
      <cartContext.Provider value={{categories, setCategories}}>
      <userContext.Provider value={{client, setClient}}>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
          <Products/> 
          </Route>

          <Route exact path='/review'>
          <ReviewOrder/> 
          </Route>

          <Route exact path='/payment'>
          <Payment/> 
          </Route>

          
          <Route exact path='/paymentmp'>
          <Success/> 
          </Route>

        </Switch>
      </userContext.Provider>
      </cartContext.Provider>
   </div>
  )
}

export default App;

      