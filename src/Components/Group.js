/** Group.js
* @ this file implements the Group component
* @ state for the object: editing = true/false
* @                     editing_true:  renderForm
* @                     editing_false: renderUI
*/

//React
import React, {Component} from 'react'
//icons
import {MdEdit} from 'react-icons/md'
import {MdSave} from 'react-icons/md'


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
    }
    //render
    render(){
        return this.state.editing ? this.renderForm() : this.renderUI()
    }
    //renderUI
    renderUI(){
        return(
            <div className='group'>
                <div>
                    {/*render Idea component with:   */}
                    {/*   <Idea> this_data </Idea>   */}
                    {this.props.children}
                </div>
                {/*And also render this: */}
                <span>
                    <button onClick={this.edit}
                            className="btn btn-primary"
                            style={{marginRight: 7+'px'}}
                    >
                        <MdEdit/>
                    </button>
                </span>
            </div>
        )
    }

}