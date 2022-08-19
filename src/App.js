import './App.css';
import { Route, Switch } from 'react-router-dom';
import {  useEffect, useState } from 'react';
import cartContext from './componentes/context/cartContext';
import userContext from './componentes/context/userContext'
import navContext from './componentes/context/navContext'
import Navbar from './componentes/Navbar/navbar';
import Products from './componentes/Products/Products';
import ReviewOrder from './componentes/reviewOrder/ReviewOrder';
import Payment from './componentes/payment/payment';
import Success from './componentes/successMp/sucess';
import { SocketContext, socket } from './componentes/context/socketContext';
import { useDispatch } from 'react-redux';
import { getStatus } from './redux/actions';
import History from './componentes/history/history';
import Detail from './componentes/Detail/detail';


function App() {

  const [categories, setCategories] = useState('');
  const [nav, setNav] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(getStatus())
  }, [])
  

  const [client, setClient] = useState({
    name: '',
    table: '',
    telefono: '',
    method: '',
    comentarios: ''
  })

  

  return (
   <div className='App'>
    <navContext.Provider value={{nav, setNav}}>
      <cartContext.Provider value={{categories, setCategories}}>
      <userContext.Provider value={{client, setClient}}>
        <SocketContext.Provider value={socket}>
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

          <Route exact path='/detail/:id'>
          <Detail/> 
          </Route>

          
          <Route exact path='/paymentmp'>
          <Success/> 
          </Route>

          <Route exact path='/history'>
          <History/> 
          </Route>

        </Switch>
        </SocketContext.Provider>
      </userContext.Provider>
      </cartContext.Provider>
      </navContext.Provider>
   </div>
  )
}

export default App;

      