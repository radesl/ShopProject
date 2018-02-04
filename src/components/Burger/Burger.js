import React from 'react'
import './style.scss'

const Burger = props => {
    const { toggle, checkWidth, mobileMenu, width } = props
    return (
        <a onClick={toggle} onresize={checkWidth}
            className={mobileMenu ? 'Burger' : 'Burger--disabled'}></a>
    )
}

export default Burger