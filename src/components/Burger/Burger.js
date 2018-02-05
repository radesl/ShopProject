import React from 'react'
import './style.scss'

const Burger = props => {
    const { toggle, isMobile } = props
    return (
        <a onClick={toggle} 
            className={isMobile ? 'Burger' : 'Burger--disabled'}></a>
    )
}

export default Burger