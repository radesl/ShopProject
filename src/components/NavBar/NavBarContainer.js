import React from 'react'
import { connect } from 'react-redux'
import * as DATA_REDUCERS from './../../reducers/reducers'
import NavBar from './NavBar'
import './style.scss'
import Burger from './../Burger'

class NavBarContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            open: true
        }
        this.showMenuItems = this.showMenuItems.bind(this)
        this.toggleClass = this.toggleClass.bind(this)
    }
    componentDidMount() {
        const url = './../../../API/listOfMenuOptions.json'
        const { fetchData } = this.props
        fetchData(url)
    }
    toggleClass() {
        const { open } = this.state
        let currentState = open
        this.setState({
            open: !currentState
        })
    }
    showMenuItems() {
        const { listOfProductTypes } = this.props
        let types = null
        listOfProductTypes && (types = Object.keys(listOfProductTypes))
        return types && types.map(element => {
            return <NavBar option={element} key={element} />
        })
    }
    render() {
        const showMenuItems = this.showMenuItems()
        const { open } = this.state
        return (
            <div>
                <Burger toggle={this.toggleClass} open={open} />
                <ul className={open ? 'NavBarContainer' : 'NavBarContainer--closed'}>
                    {showMenuItems}
                </ul>
            </div>)

    }
}
const mapStateToProps = state => {
    const { listOfProductTypes, isRequesting } = state
    return { listOfProductTypes, isRequesting }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => {
            dispatch({ type: DATA_REDUCERS.FETCH_LIST_OF_TYPES_START })
            const fetchListOfTypes = new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest()
                xhr.onreadystatechange = () => {
                    if (xhr.readyState == 4 && (xhr.status >= 200 || xhr.status < 300)) {
                        const listOfProductTypes = JSON.parse(xhr.responseText)
                        resolve(listOfProductTypes)
                    }
                }
                xhr.open('GET', `${url}`, true)
                xhr.send()
            })
                .then(listOfProductTypes => {
                    dispatch({
                        type: DATA_REDUCERS.FETCH_LIST_OF_TYPES_SUCESS,
                        listOfProductTypes
                    })
                })
                .catch(error => {
                    dispatch({
                        type: DATA_REDUCERS.FETCH_LIST_OF_TYPES_FALURE,
                        error
                    })
                })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer)