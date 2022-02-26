import {BrowserRouter,Switch, Route} from 'react-router-dom'

import './styles/Style.css'
import { NavBar,Footer} from './components'
import HomePage from './pages/home'
import PageCategory from './pages/category'
import PageDetail from './pages/productDet'
import PageCar from './pages/car'


function App () {
  return (
    <BrowserRouter>
<div className = "App" >
    < header  >
       <NavBar/>
    </header >
     <Switch>
        <Route path={"/productos/:productoId"}>
            <PageDetail/>
        </Route>
        <Route path={"/categoria/:categoryId"}>
            <PageCategory/> 
        </Route>
        <Route path={"/Cart"}>
            <PageCar/> 
        </Route>
        <Route exact path={"/"}>
            <HomePage/>
        </Route>
         </Switch>
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
