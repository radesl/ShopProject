import {connect} from 'react-redux'

const defaultState = {
    listOfProductTypes: null,
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
        default: return defaultState
    }
}

export const FETCH_LIST_OF_TYPES_START = 'FETCH_LIST_OF_TYPES_START'
export const FETCH_LIST_OF_TYPES_SUCESS = 'FETCH_LIST_OF_TYPES_SUCESS'
export const FETCH_LIST_OF_TYPES_FALURE = 'FETCH_LIST_OF_TYPES_FALURE'