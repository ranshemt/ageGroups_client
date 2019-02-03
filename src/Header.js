/** Header.js
* @ this file implements the navigation component
* @ 
*/
//React 
import React, {Component} from 'react'
//NavLink is a component from another package
//  it will add styling attributes to the rendered element
//  when it matches the current URL
import {NavLink} from 'react-router-dom'
//
//The navigation component = Header
class Header extends Component{
    //style object for NavLink item
    active = {
        color: "white",
        fontWeight: "bold"
    };
    //
    //render
    render(){
        return(
            <div className='navbar bg-dark'>
                <NavLink exact to='/' activeStyle={this.active}>
                    All Groups
                </NavLink>
                <NavLink to='/findByGameAndPlayers/' activeStyle={this.active}>
                    Find by Game and Players
                </NavLink>
            </div>
        )
    }
}

export default Header