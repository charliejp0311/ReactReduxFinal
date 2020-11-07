import React, { Component } from "react";

class NoteList extends Component{

    render(){
        const {notes,action} = this.props;
        console.log(notes)
        console.log(action)
        return(
            <div>list of notes</div>
        );
    };
};

export default NoteList;