import React from 'react';
import { Switch, Route } from 'react-router-dom';

//componentes
import Home from './Components/Home'
import ProductListContainer from './Containers/ProductListContainer';
import ProductInfoContainer from './Containers/ProductInfoContainer';
import FormProducts from './Containers/FormProducts';
import CategoryForm from './Containers/CategoryForm';
import CategoryListContainer from './Containers/CategoryListContainer';
import CategoryInfoContainer from './Containers/CategoryInfoContainer';


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
        </Switch>
    )
}

export default Routes;