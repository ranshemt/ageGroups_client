/** GroupPlaying.js
* @ this file implements the GroupsPlaying (basketball) component
*/

//React
import React from 'react'
//My Components
import GroupsList from './GroupsList'

class GroupsPlayers extends React.Component{
    constructor(props){
        super(props)
        //state
        this.state = {
            form: true,
            funcURL: '',
            game: 0,
            players: 0,
            message: 'Groups playing '
        }
        //bind methods
        this.renderForm = this.renderForm.bind(this)
        this.renderList = this.renderList.bind(this)
        this.handleGameID = this.handleGameID.bind(this)
        this.handlePlayers = this.handlePlayers.bind(this)
        this.updateState = this.updateState.bind(this)
    }
    handleGameID(e){
        this.setState({
            game: e.target.value,
            funcURL: 'findGame'
        })
    }
    handlePlayers(e){
        this.setState({
            players: e.target.value,
            funcURL: 'findByGameAndPlayers'
        })
    }
    updateState(){
        this.setState({
            form: false,
            message: (this.state.message + this.state.game + ' with at least ' + this.state.players + ' players:')
        })
    }
    renderForm(){
        return(
            <React.Fragment>
                <form>
                    <div className="form-group">
                        <label htmlFor="gameID">Game</label>
                        <input required
                            type="number" 
                            className="form-control"
                            id="gameID"
                            placeholder="enter game id"
                            onChange={this.handleGameID}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="playersNum">Game</label>
                        <input
                            type="number" 
                            className="form-control"
                            id="playersNum"
                            placeholder="enter minimum number of players"
                            onChange={this.handlePlayers}
                        />
                    </div>
                    <button 
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.updateState}
                    >
                            Search
                    </button>
                </form>
            </React.Fragment>
        )
    }
    renderList(){
        let relevant_url = 'https://age-group.herokuapp.com/'
        if(this.state.funcURL === 'findByGameAndPlayers')
            relevant_url += 'findByGameAndPlayers/' + this.state.game + '&' + this.state.players
        if(this.state.funcURL === 'findGame')
            relevant_url += 'findGame/' + this.state.game
        const request = {
            url: relevant_url,
            options: {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        }
        return(
            <div>
                <br/>
                <h4>{this.state.message}</h4>
                <GroupsList
                    key={`container${this.state.game}_${this.state.players}`}
                    request={request}
                >
                </GroupsList>
            </div>
        )
    }
    //
    render(){
        return this.state.form ? this.renderForm() : this.renderList()
    }
}

export default GroupsPlayers