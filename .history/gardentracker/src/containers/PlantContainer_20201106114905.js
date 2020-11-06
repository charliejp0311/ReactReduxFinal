import React, {Component} from 'react';
import { connect } from 'react-redux';

class PlantContainer extends Component{

    render(){
        const plants = [...this.props.garden, ...this.props.harvest]
        // debugger
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
        harvest: state.garden.harvest,
    }
}
export default connect(mapStateToProps)(PlantContainer);