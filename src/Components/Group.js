/** Group.js
* @ this file implements the Group component
* @ object's state: editing = true/false
* @                  editing_true:  renderForm
* @                  editing_false: renderUI
*/

//React
import React, {Component} from 'react'
import Games from './Games'
//icons
// import {MdEdit} from 'react-icons/md'
// import {MdSave} from 'react-icons/md'


//Class Component
class Group extends Component {
    constructor(props){
        super(props)
        //state
        this.state = {
            editing: false
        }
        //bind methods
        this.renderUI = this.renderUI.bind(this)
        this.renderForm = this.renderForm.bind(this)
        this.edit = this.edit.bind(this)
        this.save = this.save.bind(this)
    }
    //render
    render(){
        return this.state.editing ? this.renderForm() : this.renderUI()
    }
    //
    //renderUI
    renderUI(){
        return(
            <div className='group'>
                <div>
                    {/*render Idea component with:   */}
                    {/*   <Group> this_data </Group>   */}
                    <div className='card-header'>
                        {this.props.group.name}, ID: {this.props.group.id}
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title'    >         { this.props.group.comment }</h5>
                        <h6 className='card-subtitle'
                            style={{marginBottom: 0.75+'rem'}}>
                            Players: { this.props.group.players }
                        </h6>
                        <Games games={this.props.group.games} groupID={this.props.group.id}></Games>
                    </div>
                </div>
                {/*And also render this: */}
                <span>
                    <button onClick={this.edit}
                            className="btn btn-primary"
                    >
                        edit players
                    </button>
                </span>
            </div>
        )
    }
    //
    //render form
    // renderForm(){
    //     return(
    //         <div>
    //             <form onSubmit={this.save}>
    //                 <input 
    //                     type='number'
    //                     className='form-control'
    //                     ref={(input) => this.modifiedGroup = input}
    //                 />
    //                 <span>
    //                     <button onClick={this.save}
    //                             className='btn btn-primary'
    //                     > 
    //                         save
    //                     </button>
    //                 </span>
    //             </form>
    //         </div>
    //     )
    // }
    renderForm(){
        return(
            <div className='group'>
                <div>
                    {/*render Idea component with:   */}
                    {/*   <Group> this_data </Group>   */}
                    <div className='card-header'>
                        {this.props.group.name}, ID: {this.props.group.id}
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title'    >         { this.props.group.comment }</h5>
                        <h6 className='card-subtitle'
                            style={{marginBottom: 0.75+'rem'}}>
                            Players: { this.props.group.players }
                        </h6>

                        <form onSubmit={this.save}>
                            <input 
                                type='number'
                                className='form-control'
                                ref={(input) => this.modifiedGroup = input}
                            />
                            <span>
                                <button onClick={this.save}
                                        className='btn btn-primary'
                                        style={{marginTop: 0.75+'rem'}}
                                > 
                                    save
                                </button>
                            </span>
                        </form>

                        <Games games={this.props.group.games} groupID={this.props.group.id}></Games>
                    </div>
                </div>
                {/*And also render this: */}
                <span>
                    <button onClick={this.edit}
                            className="btn btn-primary"
                    >
                        edit players
                    </button>
                </span>
            </div>
        )
    }
    //
    edit(){
        this.setState({
            editing: true
        })
    }
    //
    save(e){
        //e.persist();
        console.log(`Saved: ${this.modifiedGroup.value} for index: ${this.props.index}`);
        //don't show renderUI again
        e.preventDefault();
        //sending data to parent with onChange
        this.props.onChange(
                this.modifiedGroup.value,
                this.props.index //comes from ref={}
        )
        //update state
        this.setState({
            editing: false
        })
    }
}

export default Group