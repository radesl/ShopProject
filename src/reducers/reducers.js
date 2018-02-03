import {connect} from 'react-redux'

const defaultState = {
    productList: null,
    oneProductType: null,
    isRequesting: null,
    error: null
}

export default (state = defaultState, action) => {
    switch (action.type) {
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
        case FETCH_LIST_OF_ONE_PRODUCTS_TYPE_START: {
            const newState = Object.assign({}, state, {
                oneProductType: null,
                isRequesting: true,
                error: null
            })
            return newState
        }
        case FETCH_LIST_OF_ONE_PRODUCTS_TYPE_SUCESS: {
            const newState = Object.assign({}, state, {
                oneProductType: action.oneProductType,
                isRequesting: false,
                error: false
            })
            return newState
        }
        case FETCH_LIST_OF_ONE_PRODUCTS_TYPE_FALIURE: {
            const newState = Object.assign({}, state, {
                oneProductType: null,
                isRequesting: false,
                error: action.error
            })
            return newState
        }
        default: return defaultState
    }
}
//product list reducers
export const FETCH_LIST_OF_PRODUCTS_START = 'FETCH_LIST_OF_PRODUCTS_START'
export const FETCH_LIST_OF_PRODUCTS_SUCESS = 'FETCH_LIST_OF_PRODUCTS_SUCESS'
export const FETCH_LIST_OF_PRODUCTS_FALURE = 'FETCH_LIST_OF_PRODUCTS_FALURE'
//oneProductType reducers
export const FETCH_LIST_OF_ONE_PRODUCTS_TYPE_START = 'FETCH_LIST_OF_ONE_PRODUCTS_TYPE_START'
export const FETCH_LIST_OF_ONE_PRODUCTS_TYPE_SUCESS = 'FETCH_LIST_OF_ONE_PRODUCTS_TYPE_SUCESS'
export const FETCH_LIST_OF_ONE_PRODUCTS_TYPE_FALIURE = 'FETCH_LIST_OF_ONE_PRODUCTS_TYPE_FALIURE'