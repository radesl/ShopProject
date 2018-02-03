import React from 'react'
import * as DATA_REDUCERS from './../../reducers/reducers'
import NavBar from './NavBar'
import './style.scss'
import Burger from './../Burger'
import SubMenuFilterButton from './../SubMenuFilterButton'

class NavBarContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            openMenu: false
        }
        this.toggleClass = this.toggleClass.bind(this)
    }
    toggleClass() {
        const { openMenu } = this.state
        let currentState = openMenu
        this.setState({
            openMenu: !currentState
        })
    }
    render() {
        const { openMenu } = this.state
        return (
            <div>
                <Burger toggle={this.toggleClass} openMenu={openMenu} />
                <ul className={openMenu ? 'NavBarContainer' : 'NavBarContainer--closed'}>
                    <li className="NavBarContainer__NavBar types">
                        <NavBar option={'types'} />
                        <ul>
                            <SubMenuFilterButton option={'alcohol'} />
                            <SubMenuFilterButton option={'chemicals'} />
                            <SubMenuFilterButton option={'food'} />
                        </ul>
                    </li>
                    <li className="NavBarContainer__NavBar prices">
                        <NavBar option={'prices'} />
                    </li>
                    <li className="NavBarContainer__NavBar sales">
                        <NavBar option={'sales'} />
                    </li>
                </ul>
            </div >)

    }
}

export default NavBarContainer