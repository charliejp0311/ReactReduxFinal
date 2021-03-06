import React, {Component} from 'react';
import { connect } from 'react-redux';

class PlantContainer extends Component{

    render(){
        const {garden} = this.props 
        const plantId = parseInt(this.props.match.params.id)
        const plant = garden.filter(plant=>plant.id === plantId)
        // console.log(plant)
        // debugger
        return(
            <div>
                <h3>{plant[0].name}</h3>
                {/* {this.props.plantForm} */}
            </div>

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