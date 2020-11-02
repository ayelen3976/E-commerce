import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

//componentes
//import Home from './Components/Home'
import Home from './Components/Home'
import ProductListContainer from './Containers/ProductListContainer';
import ProductInfoContainer from './Containers/ProductInfoContainer';
import FormProducts from './Components/FormProducts/Table';
import CategoryForm from './Components/FormCategory/Table';
import CategoryListContainer from './Containers/CategoryListContainer';
import CategoryInfoContainer from './Containers/CategoryInfoContainer';
import PageRegister from './Components/PageRegister';
import Checkout from  './Components/Checkout';
import OrderContainer from './Components/Orders/OrderContainer';
import OrderInfo from './Components/Orders/OrderInfo';
import Login from './Components/Login';
import UserContainer from './Components/UserCrud/UserContainer'
import Error from './Error';
import Profile from './Components/profile/Profile';
import Nosotros from './Containers/nosotres/Nosotros';
import Historial from './Components/Historial/Historial'
import Hdetails from './Components/Historial/HistorialDetails'

const Routes = () => {
    return (
        <BrowserRouter>     
            <Switch>
                
                <Route exact path='/' component={Home} />
                <Route exact path='/products' component={ProductListContainer} />
                <Route exact path='/products/:id' component={ProductInfoContainer} />
                <Route exact path='/category/:id' component={CategoryInfoContainer} />
                <Route exact path='/category' component={CategoryListContainer} />
                <Route exact path='/ProductForm' component={FormProducts} />
                <Route exact path='/CategoryForm' component={CategoryForm} />
                <Route exact path='/register' component={PageRegister} />
                <Route exact path='/Checkout' component={Checkout} />
                <Route exact path='/admin/orders' component={OrderContainer} />
                <Route exact path='/admin/orders/:orderId' component={OrderInfo} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/users' component={UserContainer} />
                <Route exact path='/profile' component={Profile}/>
                <Route exact path='/nosotros' component={Nosotros} />
                <Route exact path='/historial' component={Historial} />
                <Route exact path='/hdetails/:id' component={Hdetails} />

                <Route component={Error}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;