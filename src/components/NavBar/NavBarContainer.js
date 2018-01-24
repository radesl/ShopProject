import React from 'react'
import NavBar from './NavBar'

class NavBarContainer extends React.Component{
    constructor(){
        super()
        this.toogle = this.toogle.bind(this)
        this.state = {
            dropdownOpen: false
        }
    }
    toogle(){
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }
    render(){
        return(
            <NavBar/>
        )
    }
}
export default NavBarContainer