import {connect} from 'react-redux'

const defaultState = {
    listOfProductTypes: null,
    productList: null,
    isRequesting: null,
    error: null
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_LIST_OF_TYPES_START: {
            const newState = Object.assign({}, state, {
                isRequesting: true,
                listOfProductTypes: null,
                error: false
            })
            return newState
        }
        case FETCH_LIST_OF_TYPES_SUCESS: {
            const newState = Object.assign({}, state, {
                isRequesting: false,
                listOfProductTypes: action.listOfProductTypes,
                error: false
            })
            return newState
        }
        case FETCH_LIST_OF_TYPES_FALURE: {
            const newState = Object.assign({}, state, {
                isRequesting: false,
                listOfProductTypes: null,
                error: action.error
            })
            return newState
        }
        case FETCH_LIST_OF_PRODUCTS_START: {
            const newState = Object.assign({}, state, {
                isRequesting: true,
                productList: null,
                error: false
            })
            return newState
        }
        case FETCH_LIST_OF_PRODUCTS_SUCESS: {
            const newState = Object.assign({}, state, {
                isRequesting: false,
                productList: action.productList,
                error: false
            })
            return newState
        }
        case FETCH_LIST_OF_PRODUCTS_FALURE: {
            const newState = Object.assign({}, state, {
                isRequesting: false,
                productList: null,
                error: action.error
            })
            return newState
        }
        default: return defaultState
    }
}
//product types reducers
export const FETCH_LIST_OF_TYPES_START = 'FETCH_LIST_OF_TYPES_START'
export const FETCH_LIST_OF_TYPES_SUCESS = 'FETCH_LIST_OF_TYPES_SUCESS'
export const FETCH_LIST_OF_TYPES_FALURE = 'FETCH_LIST_OF_TYPES_FALURE'
//product list reducers
export const FETCH_LIST_OF_PRODUCTS_START = 'FETCH_LIST_OF_PRODUCTS_START'
export const FETCH_LIST_OF_PRODUCTS_SUCESS = 'FETCH_LIST_OF_PRODUCTS_SUCESS'
export const FETCH_LIST_OF_PRODUCTS_FALURE = 'FETCH_LIST_OF_PRODUCTS_FALURE'