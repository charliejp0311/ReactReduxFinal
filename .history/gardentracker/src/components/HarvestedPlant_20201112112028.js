import React, {Component} from 'react';
import {connect} from 'react-redux';

 class HarvestedPlant extends Component{
    constructor(props){
        super(props);
        let id = parseInt(props.match.params.id)
        let plant = props.harvest.filter(p=>p.id===id)
        let pn = props.notes.filter(n=>n.plant_id===id)
        this.state = {
            plant: plant[0],
            notes: pn,
            actions: props.actions
        };
    };
    render(){
        const {notes} = this.state
        let al = []
        notes.forEach(note => {
            al.push(this.state.actions.filter(a=>a.id===note.action_id))
        });
        let actionList = al.flat()
        let noteActionList = []
        for (let i = 0; i < notes.length; i++) {
            const note = notes[i];
            const act = actionList[i];
            noteActionList.push(
                <li key={note.id}>
                    <h6>{act.name}</h6>
                    {note.note}
                </li>
            );
        };
        return(
            <div className='plant'>
                <h3>{this.state.plant.name}</h3>
                <p>{this.state.plant.description}</p>
                <p><i><b>What you did to this plant:</b></i></p>
                <ul>{noteActionList}</ul>

            </div>
        )
    };
};

const mapStateToProps=state=>{
    return {
        harvest: state.garden.harvest,
        notes: state.garden.notes,
        actions: state.garden.actions,
    };
};

export default connect(mapStateToProps)(HarvestedPlant);