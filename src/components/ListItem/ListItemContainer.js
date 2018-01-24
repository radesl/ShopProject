import React from 'react'

class ListItemContainer extends React.Component{
    render(){
        const {type}=this.props
        return <li>{type}</li>
    }
}
export default ListItemContainer