/** index.js
* @ this file 'decides'
* @ which component to render at each path
*/
//React
import React from 'react'
//React Route component
//  Its basic responsibility is to render some UI (component)
//  when a location matches the route's path
import {Route} from 'react-router-dom'
//
//The components to render in each route
import Header from '../Header'
import GroupsList from '../Components/GroupsList'
import GroupsPlaying from '../Components/byGamePlayers'
//
//stateless component!
const ReactRouter = () => {
    //<React.Fragment> is similar to div
    //  but solve some problems when div cannot be used
    return (
        <React.Fragment>
            <Header/>
            <Route exact path='/' component={GroupsList}/>
            <Route path='/findByGameAndPlayers/' component={GroupsPlaying}/>
        </React.Fragment>
    )
}

export default ReactRouter