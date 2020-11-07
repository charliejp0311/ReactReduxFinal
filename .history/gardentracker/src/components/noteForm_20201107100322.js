import React, {Component} from "react";
import { connect } from "react-redux";

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
        console.log(e.target)
    }

    render(){
        console.log(this.state)
        return(
            <form>
                <input type='text' name='note' /><br/>
                <button actionId='1'>Water</button>
                <button actionId='2'>Feed</button>
                <button actionId='3'>Germinate</button>
                <button actionId='4'>Polinate</button>
                <button actionId='5'>Notate</button>
            </form>
        )
    };
};

export default connect()(NoteForm);