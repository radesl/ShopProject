import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './style.scss'

const SubMenuFilterButtonContainer = props => {
    const { option } = props
    return (
        <Link className='SubMenuFilterButtonContainer' to={`/ProductList/${option}`}>
            <li>{option}</li>
        </Link>)
}
export default SubMenuFilterButtonContainer