import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SubMenuFilterButtonContainer extends React.Component {
    render() {
        const { option } = this.props
        return (
            <Link to={`/ProductList/${option}`}>
                <li>{option}</li>
            </Link>)
    }
}
export default SubMenuFilterButtonContainer