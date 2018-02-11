import React from 'react'
import { connect } from 'react-redux'
import * as DATA_REDUCER from './../../reducers/reducers'
import ProductList from './ProductList'
import ProductItem from './../ProductItem'
import LoadMoreButton from './../LoadMoreButton'

class ProductListContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            numberOfCurrentLoadedItems: 6
        }
        this.showProductList = this.showProductList.bind(this)
        this.loadMoreProduct = this.loadMoreProduct.bind(this)
    }
    componentDidMount() {
        const url = './../../../API/listOfProduct.json'
        const { fetchData } = this.props
        fetchData(url)
    }
    showProductList() {
        const { productList } = this.props
        const { numberOfCurrentLoadedItems } = this.state
        const loadedItems = numberOfCurrentLoadedItems
        if (!productList) {
            return
        }
        const startingProduct = Object.keys(productList).filter(product => {
            return Number(product) < loadedItems
        })
        return startingProduct.map(product => {
            return <ProductItem product={productList[product]} key={productList[product].id} />
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
        const { isRequesting } = this.props
        const showProductList = this.showProductList()
        //const loadMoreProduct = this.loadMoreProduct
        return (isRequesting
            ? <span>...loading</span>
            : <div className='ProductListContainer'>
                <ProductList showProductList={showProductList} />
                <LoadMoreButton loadMore={this.loadMoreProduct}/>
            </div>
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