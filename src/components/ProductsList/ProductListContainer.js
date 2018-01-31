import React from 'react'
import { connect } from 'react-redux'
import * as DATA_REDUCER from './../../reducers/reducers'

class ProductListContainer extends React.PureComponent {
    componentDidMount(){
        const url = './../../../API/listOfProduct.json'
        const {fetchData}=this.props
        fetchData(url)
    }
    render() {
        return <div>product list</div>
    }
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
export default connect(null, mapDispatchToProps)(ProductListContainer)