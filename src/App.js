import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './Component/Nav/nav';
import Chat from './Component/chat/whatsapp';
import Info from './Component/Info/info';
import Footer from './Component/footer/footer';
import CarouselProduct from './Component/product/product';
import Carouselp from './Component/carousel/carousel';
import DetailProduct from './Component/detailProduct/detailProduct';
import Categories from './Component/categories/categories';
import { useState } from 'react';
import Context from './Component/context/Items';
import UserProfile from './Component/profile/userProfile';





function App() {

    const [closeCart, setCloseCart] = useState(false)


  return (
    <Context.Provider value={{closeCart, setCloseCart }}>
    <div className="App">
       <Nav/>
       <Switch>
        
        <Route  exact path='/'>
        <Carouselp/>
        <CarouselProduct/>
        </Route> 

        <Route exact path='/productos'>
        <Categories/>
        </Route> 

         <Route exact path='/userProfile'>
        <UserProfile/>
        </Route>     

        <Route exact path='/detail/:id'>
        <DetailProduct/>
        </Route> 
       
        </Switch>  
      
       {/* <CarouselProduct /> */}
       <Info/>
      <Footer/>
     <div className='chat'>
     <Chat/>
     </div>
    </div>
    </Context.Provider>
  );
}

export default App;

      
/* <Switch>

<Route to='/'>
<Carouselp/>
</Route> 

<Route to='/'>
<CarouselProduct/>
</Route> 

</Switch>  */