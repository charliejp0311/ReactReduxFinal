import React, {Component} from 'react';
import { connect } from 'react-redux';

class PlantContainer extends Component{

    render(){
        const {garden} = this.props 
        const plant = garden.filter(plant=>plant.id === this.props.match.params.id)
        console.log(plant)
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