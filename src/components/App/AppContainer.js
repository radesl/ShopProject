import React from 'react'
import NavBar from './../NavBar'
import ProductRoute from './../ProductRoute'
import './style.scss'

class AppContainer extends React.Component {
    render() {
        return (
            <div className='App'>
                <NavBar />
                <ProductRoute/>
            </div>
        )
    }
}
export default AppContainer