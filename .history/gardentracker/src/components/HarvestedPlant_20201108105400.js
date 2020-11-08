import React, {Component} from 'react';
import {connect} from 'react-redux';

 class HarvestedPlant extends Component{
    constructor(props){
        super(props);
        let id = parseInt(props.match.params.id)
        let plant = props.harvest.filter(p=>p.id===id)
        let pn = props.notes.filter(n=>n.plant_id===id)
        this.state = {
            plant,
            notes: pn,
        };
    };
    render(){
        console.log(this.state)
        return(
            <div>
                {/* {plant.name} */}
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