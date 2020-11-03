import React, { Component } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { menuData } from '../../constants/menu'
import './index.css'
import { IconContext } from 'react-icons'


class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            sidebar: false
        }
    }

    showSidebar = () => {
        this.setState({
            sidebar: !this.state.sidebar
        })
    }
    render(){
        const { sidebar } = this.state
        return (
            <>
                <IconContext.Provider value={{ color: '#ffffff' }}>
                    <div className="navbar">
                        <Link to='#' className="menu-bars">
                            <FaIcons.FaBars onClick={this.showSidebar}/>
                        </Link>
                    </div>
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className="nav-menu-items" onClick={this.showSidebar}>
                            <li className="navbar-toggle">
                                <Link to='#' className="menu-bars">
                                    <AiIcons.AiOutlineClose />
                                </Link>
                            </li>
                            {menuData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span className="nav-menu-span">{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </IconContext.Provider> 
            </>
        )
    }
}

export default Navbar