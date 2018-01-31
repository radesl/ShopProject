import React from 'react'
//import burgerImage from './../../resources/icons/burger.png'
import './style.scss'

const Burger = (props) => {
    const {toggle, open}=props
    console.log(open)
    return (
        <a onClick={toggle} className='Burger'></a>
    )
}
export default Burger