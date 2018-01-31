import React from 'react'

class NavItemContainer extends React.PureComponent {
    render() {
        const { type } = this.props
        return <li>{type}</li>
    }
}
export default NavItemContainer