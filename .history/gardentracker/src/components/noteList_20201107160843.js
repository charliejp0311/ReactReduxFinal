import React, { Component } from "react";

class NoteList extends Component{

    handleDelete=e=>{
        debugger
    }

    render(){
        const {notes,action,plant_id} = this.props;
        const plantsNotes = notes.filter(note=>note.plant_id === plant_id)
        const actionIds = plantsNotes.map(note=>{return(note.action_id)})
        const actionByNoteComplex = actionIds.map(id=>{return(action.filter(a=>a.id===id))})
        const actionByNote = actionByNoteComplex.flat()
        const listArray = []
        for (let i = 0; i < plantsNotes.length; i++) {
            const note = plantsNotes[i].note;
            const action = actionByNote[i].name;
            listArray.push(<li key={plantsNotes[i].id} ><h6>{action}</h6><p>{note}<button id={plantsNotes[i].id} onClick={this.handleDelete}>X</button></p></li>)
        }
        // console.log(plantsNotes)
        // console.log(action)
        return(
            <div>
                <ul className='notes'>
                    {listArray}
                </ul>
            </div>
        );
    };
};

export default NoteList;