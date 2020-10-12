import React from 'react';
import { Switch, Route } from 'react-router-dom';

//componentes
import Home from './components/Home'
import ProductListContainer from './Containers/ProductListContainer';
import ProductInfoContainer from './Containers/ProductInfoContainer';
import FormProducts from './Containers/FormProducts';
import CategoryForm from './Containers/CategoryForm';



const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/products' component = {ProductListContainer}/>
            <Route exact path='/products/:id' component = {ProductInfoContainer}/>
            <Route exact path='/ProductForm' component = {FormProducts}/>
            <Route exact path='/CategoryForm' component = {CategoryForm}/>
            
        </Switch>
    )
}

export default Routes;