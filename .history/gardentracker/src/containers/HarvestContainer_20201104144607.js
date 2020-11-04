import React,{Component} from 'react';
import {connect} from 'react-redux';



class HarvestContainer extends Component{

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
        harvest: state.garden.harvest,
        notes: state.garden.notes
    }
}

export default connect(mapStateToProps)(HarvestContainer);