import React, { Component } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
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
        return (
            <>
                <IconContext.Provider value={{ color: '#ffffff' }}>
                    <div className="navbar">
                        <Link to='#' className="menu-bars">
                            <FaIcons.FaBars onClick={this.showSidebar}/>
                        </Link>
                    </div>
                </IconContext.Provider> 
            </>
        )
    }
}

export default Navbar