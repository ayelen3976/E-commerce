import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
<<<<<<< HEAD

=======
import Checkout from  './Components/Checkout';
>>>>>>> 98fe141912c57651eacd230d1e091dbd981f9283



const Routes = () => {
    return (
        <Switch>
            
            <Route exact path='/' component={Home} />
            <Route exact path='/products' component = {ProductListContainer}/>
            <Route exact path='/products/:id' component = {ProductInfoContainer}/>
            <Route exact path='/category/:id' component = {CategoryInfoContainer}/>
            <Route exact path='/category' component = {CategoryListContainer}/>
            <Route exact path='/ProductForm' component = {FormProducts}/>
            <Route exact path='/CategoryForm' component = {CategoryForm}/>
            <Route exact path='/register' component = {PageRegister}/>
<<<<<<< HEAD
            
=======
            <Route exact path='/Checkout' component = {Checkout}/>
>>>>>>> 98fe141912c57651eacd230d1e091dbd981f9283
        </Switch>
    )
}

export default Routes;