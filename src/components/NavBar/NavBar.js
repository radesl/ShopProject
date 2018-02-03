import React from 'react'

const NavBar = props => {
    const { option } = props
    return (
        <a className={"NavBarContainer__NavBar__link"}>{option}</a>)
}
export default NavBar