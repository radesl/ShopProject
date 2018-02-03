import React from 'react'
import './style.scss'

const Burger = (props) => {
    const { toggle } = props
    return (
        <a onClick={toggle} className='Burger'></a>
    )
}
export default Burger