import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = props => {
    const { option, toogle } = props
    return (
        <Link onClick={toogle} to='/' className={"NavBarContainer__NavBar__link"}>{option}</Link>)
}
export default NavBar