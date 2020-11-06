import React, {Component} from 'react';
import { connect } from 'react-redux';

class PlantContainer extends Component{

    render(){
        const {garden} = this.props 
        const plantId = this.props.match.params.id
        const plant = garden.filter(plant=>plant.id === plantId.to_i())
        // console.log(plant)
        debugger
        return(
            <div>hurry MFer</div>
        );
    };
};
const mapStateToProps=state=>{
    // console.log(state)
    return{
        gardenbook_id: state.garden.id,
        garden: state.garden.garden,
        // harvest: state.garden.harvest,
    }
}
export default connect(mapStateToProps)(PlantContainer);