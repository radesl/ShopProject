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
            isMobile: true,
            openTypes: false,
            openPrices: false,
            openSales: false
        }
        this.toggleMenu = this.toggleMenu.bind(this)
        this.toogleTypes = this.toogleTypes.bind(this)
        this.tooglePrices = this.tooglePrices.bind(this)
        this.toogleSales = this.toogleSales.bind(this)
        this.checkWidth = this.checkWidth.bind(this)
    }
    componentDidMount() {
        window.addEventListener('resize', this.checkWidth)
    }
    toggleMenu() {
        const { openMenu } = this.state
        this.setState({
            openMenu: !openMenu
        })
    }
    toogleTypes() {
        const { openTypes, openPrices, openSales } = this.state
        this.setState({
            openTypes: !openTypes
        })
        if (openTypes == (openPrices && openSales)) {
            this.setState({
                openPrices: false,
                openSales: false
            })
        }
    }
    tooglePrices() {
        const { openTypes, openPrices, openSales } = this.state
        this.setState({
            openPrices: !openPrices
        })
        if (openPrices == (openTypes && openSales)) {
            this.setState({
                openTypes: false,
                openSales: false
            })
        }
    }
    toogleSales() {
        const { openTypes, openPrices, openSales } = this.state
        this.setState({
            openSales: !openSales
        })
        if (openSales == (openTypes && openPrices)) {
            this.setState({
                openTypes: false,
                openPrices: false
            })
        }
    }
    checkWidth() {
        const { isMobile, openMenu } = this.state
        if (window.innerWidth >= 760) {
            return this.setState({
                isMobile: false,
                openMenu: true
            })
        }
        this.setState({
            isMobile: true,
            openMenu: false
        })
    }
    render() {
        const { openMenu, openTypes, openPrices, openSales, isMobile } = this.state
        return (
            <div>
                <Burger toggle={this.toggleMenu} checkWidth={this.checkWidth}
                    isMobile={isMobile} openMenu={openMenu} />
                <ul className={openMenu ? 'NavBarContainer' : 'NavBarContainer--closed'}>
                    <li className="NavBarContainer__NavBar">
                        <NavBar toogle={this.toogleTypes} option={'types'} />
                        <ul className={openTypes
                            ? 'NavBarContainer__NavBar__submenu'
                            : 'NavBarContainer--closed'}>
                            <SubMenuFilterButton option={'alcohol'} />
                            <SubMenuFilterButton option={'chemicals'} />
                            <SubMenuFilterButton option={'food'} />
                        </ul>
                    </li>
                    <li className="NavBarContainer__NavBar">
                        <NavBar toogle={this.tooglePrices} option={'prices'} />
                        <ul className={openPrices
                            ? 'NavBarContainer__NavBar__submenu'
                            : 'NavBarContainer--closed'}>
                            <SubMenuFilterButton option={'alcohol'} />
                            <SubMenuFilterButton option={'chemicals'} />
                            <SubMenuFilterButton option={'food'} />
                        </ul>
                    </li>
                    <li className="NavBarContainer__NavBar">
                        <NavBar toogle={this.toogleSales} option={'sales'} />
                        <ul className={openSales
                            ? 'NavBarContainer__NavBar__submenu'
                            : 'NavBarContainer--closed'}>
                            <SubMenuFilterButton option={'alcohol'} />
                            <SubMenuFilterButton option={'chemicals'} />
                            <SubMenuFilterButton option={'food'} />
                        </ul>
                    </li>
                </ul>
            </div >)
    }
}

export default NavBarContainer