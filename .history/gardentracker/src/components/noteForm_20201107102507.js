import React, {Component} from "react";
import { connect } from "react-redux";
import { startAddNote } from "../redux/actions";

class NoteForm extends Component{
// export default function NoteForm(props){
    constructor(props){
        super(props);
        this.state = {
            actionId: "",
            note: "",
            plantId: props.plant.id,
            gardenbook_id: parseInt(props.gardenbook_id),
        }
    };

    handleClick=e=>{
        e.preventDefault();
        let actionId = e.target.id 
        let note = e.target.parentElement.firstElementChild.value
        // debugger
        this.setState({
            ...this.state,
            actionId: actionId,
            note: note,
        })
        //after setting state need to post state to the data base
        
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <input type='text' name='note' /><br/>
                <button id='1' onClick={this.handleClick} >Water</button>
                <button id='2' onClick={this.handleClick} >Feed</button>
                <button id='3' onClick={this.handleClick} >Germinate</button>
                <button id='4' onClick={this.handleClick} >Polinate</button>
                <button id='5' onClick={this.handleClick} >Notate</button>
            </div>
        )
    };
};

export default connect(null,{ startAddNote })(NoteForm);