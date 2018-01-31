import React from 'react'

const NavBar = props => {
    const { option } = props
    return (
        <li className="NavBarContainer__NavBar">
            <a className={"NavBarContainer__NavBar__link"}>{option}</a>
        </li>)
}
export default NavBar