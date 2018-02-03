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
            openMenu: false,
            openSubMenu: false
        }
        this.toggleMenu = this.toggleMenu.bind(this)
        this.toogleSubMenu = this.toogleSubMenu.bind(this)
    }
    toggleMenu() {
        const { openMenu } = this.state
        let currentState = openMenu
        this.setState({
            openMenu: !currentState
        })
    }
    toogleSubMenu() {
        const { openSubMenu } = this.state
        let currentState = openSubMenu
        this.setState({
            openSubMenu: !currentState
        })
    }
    render() {
        const { openMenu, openSubMenu } = this.state
        return (
            <div>
                <Burger toggle={this.toggleMenu} openMenu={openMenu} />
                <ul className={openMenu ? 'NavBarContainer' : 'NavBarContainer--closed'}>
                    <li className="NavBarContainer__NavBar">
                        <NavBar toogle={this.toogleSubMenu} option={'types'} />
                        <ul className={openSubMenu
                            ? 'NavBarContainer__NavBar__submenu'
                            : 'NavBarContainer--closed'}>
                            <SubMenuFilterButton option={'alcohol'} />
                            <SubMenuFilterButton option={'chemicals'} />
                            <SubMenuFilterButton option={'food'} />
                        </ul>
                    </li>
                    <li className="NavBarContainer__NavBar">
                        <NavBar option={'prices'} />
                    </li>
                    <li className="NavBarContainer__NavBar">
                        <NavBar option={'sales'} />
                    </li>
                </ul>
            </div >)

    }
}

export default NavBarContainer