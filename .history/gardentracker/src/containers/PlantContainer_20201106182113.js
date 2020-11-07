import React, {Component} from 'react';
import { connect } from 'react-redux';
import PlantForm from "../components/PlantForm";
import { startAddPlant } from '../redux/actions'
import {startSetGardenbook} from '../redux/actions';
class PlantContainer extends Component{

    constructor(props) {
        super(props);
        console.log(props)
        // console.log(this)
        this.state = {
            name: '',
            description: '',
            gardenbook_id: props.gardenbook_id,
        };
    };
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
        debugger
        this.props.startAddPlant(this.state)
        this.setState({
            ...this.state,
            name: "", 
            description: "",
        });
        this.props.startSetGardenbook();
    };

    render(){
        debugger
        const {garden} = this.props 
        const plantId = parseInt(this.props.match.params.id)
        const plantA = garden.filter(plant=>plant.id === plantId)
        const plant = plantA[0]
        return(
            <div>
                <h3>{plant.name}</h3>
                <PlantForm key={plant.id} plant={plant} handleSubmit={this.props.handleSubmit} handleChange={this.props.handleChange} />
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
export default connect(mapStateToProps, {mapDispatchToProps, startAddPlant, startSetGardenbook})(PlantContainer);