import React, { Component } from "react";

class NoteList extends Component{

    render(){
        const {notes,action,plant_id} = this.props;
        const plantsNotes = notes.filter(note=>note.plant_id === plant_id)
        const noteIds = plantsNotes.map(note=>{return(note.id)})
        console.log(noteIds)
        console.log(plantsNotes)
        console.log(action)
        return(
            <div>list of notes</div>
        );
    };
};

export default NoteList;