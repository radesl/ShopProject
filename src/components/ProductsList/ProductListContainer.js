import React from 'react'
import { connect } from 'react-redux'
import * as DATA_REDUCER from './../../reducers/reducers'
import ProductList from './ProductList'
import ProductItem from './../ProductItem'

class ProductListContainer extends React.Component {
    constructor() {
        super()
        this.showProductList = this.showProductList.bind(this)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false)
        const url = './../../../API/listOfProduct.json'
        const { fetchData } = this.props
        fetchData(url)
    }
    showProductList() {
        const { productList } = this.props
        return productList && Object.keys(productList).map(product => {
            return <ProductItem product={productList[product]} key={productList[product].id} />
        })
    }
    render() {
        const showProductList = this.showProductList()
        return (
            <ProductList showProductList={showProductList} />
        )
    }
}
const mapStateToProps = state => {
    const { productList, isRequesting } = state
    return { productList, isRequesting }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => {
            dispatch({ type: DATA_REDUCER.FETCH_LIST_OF_PRODUCTS_START })
            const fetchListOfProducts = new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest()
                xhr.onreadystatechange = () => {
                    if (xhr.readyState == 4 && (xhr.status >= 200 || xhr.status < 300)) {
                        const productList = JSON.parse(xhr.responseText)
                        resolve(productList)
                    }
                }
                xhr.open('GET', url, true)
                xhr.send()
            })
                .then(productList => {
                    dispatch({
                        type: DATA_REDUCER.FETCH_LIST_OF_PRODUCTS_SUCESS,
                        productList
                    })
                })
                .catch(error => {
                    dispatch({
                        type: DATA_REDUCER.FETCH_LIST_OF_PRODUCTS_FALURE,
                        error
                    })
                })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer)