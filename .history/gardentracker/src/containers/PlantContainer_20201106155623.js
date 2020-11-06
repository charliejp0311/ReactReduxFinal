import React, {Component} from 'react';
import { connect } from 'react-redux';
import PlantForm from "../components/PlantForm";

class PlantContainer extends Component{

    constructor(props) {
        super(props);
        // console.log(props)
        // console.log(this)
        this.state = {
            name: '',
            description: '',
            gardenbook_id: props.gardenbook_id,
        };
    };

    render(){
        // debugger
        const {garden} = this.props 
        // if (this.props.match){
            const plantId = parseInt(this.props.match.params.id)
            const plant = garden.filter(plant=>plant.id === plantId)
        // }
        // console.log(plant)
        return(
            <div>
                <h3>{plant[0].name}</h3>
                <PlantForm plant={plant[0]} handleSubmit={this.props.handleSubmit} handleChange={this.props.handleChange} />
                {/* {this.props.plantForm} */}
            </div>

        );
    };
};

const mapStateToProps=state=>{
    return{
        gardenbook_id: state.garden.id,
        garden: state.garden.garden,
    };
};

const mapDispatchToProps=dispatch=>{
    return{
        handleChange: ()=>{dispatch(this.props.handleChange())},
        handleSubmit: ()=>{dispatch(this.props.handleSubmit())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlantContainer);