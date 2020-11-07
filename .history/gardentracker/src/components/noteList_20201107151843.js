import React, { Component } from "react";

class NoteList extends Component{

    render(){
        const {notes,action,plant_id} = this.props;
        const plantsNotes = notes.filter(note=>note.plant_id === plant_id)
        const actionIds = plantsNotes.map(note=>{return(note.action_id)})
        const actionByNoteComplex = actionIds.map(id=>{return(action.filter(a=>a.id===id))})
        const actionByNote = actionByNoteComplex.flat()
        console.log(actionByNote)
        // console.log(plantsNotes)
        // console.log(action)
        return(
            <div>list of notes</div>
        );
    };
};

export default NoteList;