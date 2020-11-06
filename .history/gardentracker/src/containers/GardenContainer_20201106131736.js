import React,{Component} from 'react';
import {connect} from 'react-redux';
import  PlantForm  from "../components/PlantForm";
import  PlantList  from "../components/PlantList";



class GardenContainer extends Component{
    handleChange=e=>{
        switch (e.target.name) {
            case 'name':
                this.setState({
                    ...this.state,
                    name: e.target.value
                })
                break;
            case 'description':
                this.setState({
                    ...this.state,
                    description: e.target.value
                });
                break;
            default:
                break;
        };
    };

    handlePlantSubmit=e=>{
        e.preventDefault();
        this.props.startAddPlant({...this.state, gardenbook_id: this.props.gardenbook_id})
        this.setState({
            name: "", 
            description: "",
        });
        this.props.startSetGardenbook();
    };

    render(){
        console.log(this)
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
    return{
        id: state.garden.id,
        garden: state.garden.garden,
        notes: state.garden.notes
    }
}



export default connect(mapStateToProps , {PlantForm})(GardenContainer);