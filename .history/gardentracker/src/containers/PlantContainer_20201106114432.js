import React, {Component} from 'react';
import { connect } from 'react-redux';

class PlantContainer extends Component{

    render(){
        
        debugger
        return(
            <div>hurry MFer</div>
        );
    };
};
const mapStateToProps=state=>{
    console.log(state)
    return{
        garden: state.garden,
        harvest: state.harvest,
    }
}
export default connect(mapStateToProps)(PlantContainer);