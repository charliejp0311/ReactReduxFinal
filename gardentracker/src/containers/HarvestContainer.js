import React,{Component} from 'react';
import {connect} from 'react-redux';
import  PlantList  from "../components/PlantList";



class HarvestContainer extends Component{

    render(){

        return(
        <div> 
            <PlantList harvest={this.props.harvest} notes={this.props.notes}/>
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