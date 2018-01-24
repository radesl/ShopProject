import React from 'react'
import ListItem from './../ListItem'

class FilterByTypeContainer extends React.Component{
    constructor(){
        super()
        this.toogle = this.toogle.bind(this)
        this.showList = this.showList.bind(this)
        this.state = {
            dropdownOpen: false,
            listOfType: ['food', 'chemicals', 'alcochol']
        }
    }
    toogle(){
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }
    showList(){
        const {listOfType, dropdownOpen}=this.state
        return dropdownOpen && listOfType.map(element => {
            return <ListItem 
                    type={element}
                    key={element}
                    />
        })
    }
    render(){
        const showList = this.showList()
        return (
            <ul>
                <li><button onClick={this.toogle}>TYPE</button></li>
                {showList}
            </ul>
        )
    }
}
export default FilterByTypeContainer