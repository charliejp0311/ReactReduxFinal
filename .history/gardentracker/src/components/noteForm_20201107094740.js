import React, {Component} from "react";

class NoteForm extends Component{
// export default function NoteForm(props){
    constructor(props){
        super(props);
        console.log(props);
    };
    render(){
    return(
        <form>
            <input type='text' name='note' onChange={props.handleChange}/><br/>
            <button actionId='1'>Water</button>
            <button actionId='2'>Feed</button>
            <button actionId='3'>Germinate</button>
            <button actionId='4'>Polinate</button>
            <button actionId='5'>Notate</button>
        </form>
    )};
};

export default NoteForm;