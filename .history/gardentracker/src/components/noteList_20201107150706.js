import React, { Component } from "react";

class NoteList extends Component{

    render(){
        const {notes,action,plant_id} = this.props;
        const plantsNotes = notes.filter(note=>note.plant_id === plant_id)
        const actionIds = plantsNotes.map(note=>{return(note.action_id)})
        console.log(actionIds)
        console.log(plantsNotes)
        console.log(action)
        return(
            <div>list of notes</div>
        );
    };
};

export default NoteList;