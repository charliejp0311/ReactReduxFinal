import React, {Component} from "react";
import { connect } from "react-redux";

class NoteForm extends Component{
// export default function NoteForm(props){
    // constructor(props){
    //     super(props);
    //     console.log(props);
    // };

    render(){
        // console.log(this.props)
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