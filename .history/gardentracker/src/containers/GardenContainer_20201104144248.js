import React,{Component} from 'react';
import {connect} from 'react-redux';



class GardenContainer extends Component{

    render(){

        return(
        <div> 
        </div>
        );
    };
};

const mapStateToProps = state => {
    return{
        id: state.garden.id,
        garden: state.garden.garden,
        notes: state.garden.notes
    }
}

export default connect(mapStateToProps)(GardenContainer);