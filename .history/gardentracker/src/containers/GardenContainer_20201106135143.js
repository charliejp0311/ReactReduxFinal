import React,{Component} from 'react';
import {connect} from 'react-redux';
import  PlantForm  from "../components/PlantForm";
import  PlantList  from "../components/PlantList";



class GardenContainer extends Component{
    

    render(){
        // console.log(this)
        return(
        <div> 
            {/* <PlantForm /> */}
            {this.props.PlantForm({gardenbook_id: this.props.id, name: '', description: '', dispatch: this.props.dispatch, handleSubmit: this.handlePlantSubmit, handleChange: this.handleChange })}
            {/* I want to call Plant form as a function will need to pass it props */}
            <PlantList garden={this.props.garden} notes={this.props.notes}/>
        </div>
        );
    };
};

const mapStateToProps = state => {
    // console.log(state)
    return{
        id: state.garden.id,
        garden: state.garden.garden,
        notes: state.garden.notes
    }
}



export default connect(mapStateToProps , {PlantForm})(GardenContainer);