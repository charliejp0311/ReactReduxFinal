import React, { Component } from "react";

class NoteList extends Component{

    render(){
        const {notes,action,plant_id} = this.props;
        const plantsNotes = notes.filter(note=>note.id === plant_id)
        const noteIds = plantsNotes.map(note=>{return(note.id)})
        console.log(noteIds)
        return(
            <div>list of notes</div>
        );
    };
};

export default NoteList;