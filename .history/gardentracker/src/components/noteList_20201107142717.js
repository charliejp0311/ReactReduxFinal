import React, { Component } from "react";

class NoteList extends Component{

    render(){
        const {notes,actions} = this.props;
        console.log(notes)
        console.log(this.props.notes)
        return(
            <div>list of notes</div>
        );
    };
};

export default NoteList;