/** Header.js
* @ this file implements the navigation component
* @ 
*/
//React 
import React, {Component} from ' react'
//NavLink is a component from another package
//  it will add styling attributes to the rendered element
//  when it matches the current URL
import {NavLink} from 'react-router-dom'
//
//The navigation component = Header
class Header extends Component{
    //style object for NavLink item
    active = {
        backgroundColor: "#212F3D",
        color: "white",
        fontWeight: "bold"
    };
    //style object for the all NavLink
    header = {
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly"
    };
    //
    //render
    render(){
        return(
            <div style={this.header}>
                <NavLink exact to='/' activeStyle={this.active}>
                    All Groups
                </NavLink>
                <NavLink exact to='/findGame/8' activeStyle={this.active}>
                    Groups playing Basketball
                </NavLink>
            </div>
        )
    }
}

export default Header