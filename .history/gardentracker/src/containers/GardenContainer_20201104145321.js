import React,{Component} from 'react';
import {connect} from 'react-redux';
import { PlantForm } from "../components/PlantForm";



class GardenContainer extends Component{

    render(){

        return(
        <div> 
            <PlantForm />
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