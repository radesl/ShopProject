import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProductsList from './../ProductsList'
import OneTypeProductList from './../OneTypeProductList'

const ProductRoute = () => {
    return (
        <Switch>
            <Route exact path='/' component={ProductsList} />
            <Route path='/ProductList/:type' component={OneTypeProductList} />
        </Switch>
    )
}
export default ProductRoute