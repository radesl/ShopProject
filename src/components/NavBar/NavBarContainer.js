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
            mobileMenu: true,
            openTypes: false,
            openPrices: false,
            openSales: false,
            width: window.innerWidth
        }
        this.toggleMenu = this.toggleMenu.bind(this)
        this.toogleTypes = this.toogleTypes.bind(this)
        this.tooglePrices = this.tooglePrices.bind(this)
        this.toogleSales = this.toogleSales.bind(this)
        this.checkWidth = this.checkWidth.bind(this)
        this.updateDimensions = this.updateDimensions.bind(this)
    }
    componentDidMount() {
        const {width}=this.state
        window.addEventListener('resize', this.updateDimensions)
    }
    updateDimensions(){
        this.setState({
            width: window.innerWidth
        })
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
        const { mobileMenu, openMenu, width } = this.state
        if (width >= 760) {
            this.setState({
                mobileMenu: false,
                openMenu: false
            })
        }
    }
    render() {
        const { openMenu, openTypes, openPrices, openSales, mobileMenu, width } = this.state
        console.log(width)
        return (
            <div>
                <Burger toggle={this.toggleMenu} checkWidth={this.checkWidth}
                    mobileMenu={mobileMenu} width={width} openMenu={openMenu}/>
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