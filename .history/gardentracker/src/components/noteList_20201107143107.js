import React, { Component } from "react";

class NoteList extends Component{

    render(){
        const {notes,action,plant_id} = this.props;
        console.log(notes)
        console.log(action)
        console.log(plant_id)
        return(
            <div>list of notes</div>
        );
    };
};

export default NoteList;