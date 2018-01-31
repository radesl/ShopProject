import React from 'react'
import NavBar from './../NavBar'
import ProductsList from './../ProductsList'
import './style.scss'

class AppContainer extends React.Component {
    render() {
        return (
            <div className='App'>
                <NavBar />
                <ProductsList/>
            </div>
        )
    }
}
export default AppContainer