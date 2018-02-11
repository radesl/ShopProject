import React from 'react'
import { connect } from 'react-redux'
import OneTypeProductList from './OneTypeProductList'
import ProductItem from './../ProductItem'

class OneTypeProductListContainer extends React.Component {
    constructor() {
        super()
        this.showFilterProductList = this.showFilterProductList.bind(this)
    }
    showFilterProductList() {
        const { productList, match: {
            params: {
                type
            }
        } } = this.props
        const filterProductList = productList.filter(product => {
            return product.type == type
        })
        console.log(productList && filterProductList[0])
        return productList && Object.keys(filterProductList).map(product => {
            return <ProductItem
                product={filterProductList[product]}
                key={filterProductList[product].id} />
        })
    }
    render() {
        const showFilterProductList = this.showFilterProductList()
        return (
            <div>
                <OneTypeProductList showFilterProductList={showFilterProductList} />
            </div>)
    }
}
const mapStateToProps = state => {
    const { productList } = state
    return { productList }
}
export default connect(mapStateToProps)(OneTypeProductListContainer)