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
import Detail from './componentes/Detail/detail';
import CacheBuster from 'react-cache-buster';
import { version } from '../package.json';
import Spinner from './componentes/spinner/spinner';


function App() {
  const isProduction = process.env.NODE_ENV === 'production';
  const [categories, setCategories] = useState('Comidas');
  const [nav, setNav] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(getStatus())
  }, [dispatch])
  

  const [client, setClient] = useState({
    name: '',
    table: '',
    telefono: '',
    method: '',
    comentarios: ''
  })

  

  return (
    <CacheBuster
      currentVersion={version}
      isEnabled={isProduction} //If false, the library is disabled.
      isVerboseMode={false} //If true, the library writes verbose logs to console.
      loadingComponent={<Spinner />} //If not pass, nothing appears at the time of new version check.
    >
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

          {/* <Route exact path='/history'>
          <History/> 
          </Route> */}

        </Switch>
        </SocketContext.Provider>
      </userContext.Provider>
      </cartContext.Provider>
      </navContext.Provider>
   </div>
   </CacheBuster>
  )
}

export default App;

      