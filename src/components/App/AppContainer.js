import React from 'react'
import NavBar from './../NavBar'
import ProductRoute from './../ProductRoute'
import Footer from './../Footer'
import './style.scss'

class AppContainer extends React.Component {
    render() {
        return (
            <div className='App'>
                <NavBar />
                <ProductRoute/>
                <Footer/>
            </div>
        )
    }
}
export default AppContainer