/** GroupList.js
* @ this file implements the GroupsList component
* @ object's state: groups[{group}]
* @ from API = {games, id, name, comment, players}
*/

//React
import React, {Component} from 'react'
//My Components
import Group from './Group'
//
//Class Component
class GroupsList extends Component {
    constructor(props){
        super(props)
        //state
        this.state = {
            groups: []
        }
        //bind methods
        this.add       = this.add.bind(this)
        this.update    = this.update.bind(this)
        this.eachGroup = this.eachGroup.bind(this)
        this.listDB    = this.listDB.bind(this)
    }
    //get data from DB
    listDB(request){
        fetch(request.url, request.options)
            .then(res => res.json())
            .then(jsonRes => {
                //console.log(`jasonRes.stringify = ${JSON.stringify(jsonRes)}`)
                jsonRes.map(currGroup => {
                    this.add({
                              id     : currGroup.id     ,
                              name   : currGroup.name   ,
                              comment: currGroup.comment,
                              players: currGroup.players,
                              games  : currGroup.games  
                            })
                    return 0
                })
            })
            .catch(err => {
                console.error(err)
                return 0
            })
    }
    componentWillMount(){
        const request = {
            url: 'https://age-group.herokuapp.com/ageGroups',
            options: {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        }
        if(this.props.request != null){
            console.log(`props.request = ${JSON.stringify(this.props.request)}`)
            this.listDB(this.props.request)
        }
        else{
            console.log(`props = ${JSON.stringify(this.props)}`)
            this.listDB(request)
        }
            
    }
    //
    add({event = null, id=null, name = 'def name', comment = 'def comment', players = -1, games = []}){
        this.setState(prevState => ({
            groups: [
                ...prevState.groups,
                {
                    id: id,
                    name: name,
                    comment: comment,
                    players: players,
                    games: games
                }
            ]
        }))
        //console.log(`this.state = ${JSON.stringify(this.state)}`)
    }
    //
    update(modifiedGroup, i){
        let url = 'https://age-groups.herokuapp.com/setPlayers/' + i
        fetch(url, 
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  method: "POST",
                  body: JSON.stringify({players: modifiedGroup})
            }    
        )
        .then(res => res.json())
        .then(() => {
            this.setState(prevState => ({
                groups: prevState.groups.map(
                    group => (group.id !== i) ? group : {...group, players: modifiedGroup}
                )
            }))
        })
        .catch(err => console.log(err))
    }
    //
    eachGroup(group){
        return(
            <div
                key={`container${group.id}`}
                className='card'
                style={{width: 18+'rem', marginBottom: 7+'px'}}
            >
                <Group
                    key={`group${group.id}`}
                    index={group.id}
                    onChange={this.update}
                    group={group}
                >
                    
                </Group>
            </div>
        )
    }
    //
    render(){
        return(
            <div className='groupsList'>
                {this.state.groups.map(this.eachGroup)}
            </div>
        )
    }
}

export default GroupsList