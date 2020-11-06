import React, {Component} from 'react';
import { connect } from 'react-redux';
import PlantForm from "../components/PlantForm";

class PlantContainer extends Component{

    constructor(props) {
        super(props);
        // console.log(props)
        this.state = {
            name: '',
            description: '',
            gardenbook_id: props.gardenbook_id,
        };
    }
    
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

    handleSubmit=e=>{
        e.preventDefault();
        this.props.startAddPlant(this.state)
        this.setState({
            ...this.state,
            name: "", 
            description: "",
        });
        this.props.startSetGardenbook();
    };

    render(){
        const {garden} = this.props 
        const plantId = parseInt(this.props.match.params.id)
        const plant = garden.filter(plant=>plant.id === plantId)
        // console.log(plant)
        // debugger
        return(
            <div>
                <h3>{plant[0].name}</h3>
                <PlantForm plant={plant[0]} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
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
        handleChange: ()=>{dispatch(this.handleChange())},
        handleSubmit: ()=>{dispatch(this.handleSubmit())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlantContainer);