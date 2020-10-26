import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

//componentes
//import Home from './Components/Home'
import Home from './Components/Home'
import ProductListContainer from './Containers/ProductListContainer';
import ProductInfoContainer from './Containers/ProductInfoContainer';
import FormProducts from './Containers/FormProducts';
import CategoryForm from './Containers/CategoryForm';
import CategoryListContainer from './Containers/CategoryListContainer';
import CategoryInfoContainer from './Containers/CategoryInfoContainer';
import PageRegister from './Components/PageRegister';
import Checkout from  './Components/Checkout';
import OrderContainer from './Components/Orders/OrderContainer';
import OrderInfo from './Components/Orders/OrderInfo';
import Login from './Components/Login';
import UserContainer from './Components/UserCrud/UserContainer'
import Error from './Error'

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
                <Route component={Error}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;