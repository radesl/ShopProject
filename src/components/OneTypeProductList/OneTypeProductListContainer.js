import React from 'react'
import { connect } from 'react-redux'
import OneTypeProductList from './OneTypeProductList'
import ProductItem from './../ProductItem'
import LoadMoreButton from './../LoadMoreButton'

class OneTypeProductListContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            numberOfCurrentLoadedItems: 6
        }
        this.showFilterProductList = this.showFilterProductList.bind(this)
        this.loadMoreProduct = this.loadMoreProduct.bind(this)
    }
    showFilterProductList() {
        const { productList, match: {
            params: {
                type
            }
        } } = this.props
        const { numberOfCurrentLoadedItems } = this.state
        const filterProductList = productList.filter(product => {
            return product.type == type
        })
        const howManyProducts = numberOfCurrentLoadedItems
        const loadedProducts = Object.keys(filterProductList).filter(product => {
            return Number(product) < howManyProducts
        })
        return loadedProducts.map(product => {
            return <ProductItem
                product={filterProductList[product]}
                key={filterProductList[product].id} />
        })
    }
    loadMoreProduct() {
        const { productList } = this.props
        const endList = Object.keys(productList).length
        const { numberOfCurrentLoadedItems } = this.state
        if (numberOfCurrentLoadedItems >= endList) {
            return
        }
        this.setState({
            numberOfCurrentLoadedItems: numberOfCurrentLoadedItems + 6
        })
    }
    render() {
        const showFilterProductList = this.showFilterProductList()
        return (
            <div>
                <OneTypeProductList showFilterProductList={showFilterProductList} />
                <LoadMoreButton loadMore={this.loadMoreProduct}/>
            </div>)
    }
}
const mapStateToProps = state => {
    const { productList } = state
    return { productList }
}
export default connect(mapStateToProps)(OneTypeProductListContainer)