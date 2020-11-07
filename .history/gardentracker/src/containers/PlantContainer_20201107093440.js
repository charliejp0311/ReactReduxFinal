import React, {Component} from 'react';
import { connect } from 'react-redux';
import UpdatePlantForm from "../components/UpdatePlantForm";
import { startAddPlant } from '../redux/actions'
import {startSetGardenbook} from '../redux/actions';
import NoteForm from "../components/NoteForm";
class PlantContainer extends Component{

    constructor(props) {
        super(props);
        // console.log(props)
        // console.log(this)
        this.state = {
            name: '',
            description: '',
            gardenbook_id: props.gardenbook_id,
            growing: '',
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
        this.props.startAddPlant(this.state)
        this.setState({
            ...this.state,
            name: "", 
            description: "",
            growing: '',
        });
        this.props.startSetGardenbook();
    };

    render(){
        // debugger
        const {garden} = this.props 
        const plantId = parseInt(this.props.match.params.id)
        const plantA = garden.filter(plant=>plant.id === plantId)
        const plant = plantA[0]
        const note = {}
        return(
            <div>
                <h3>{plant.name}</h3>
                <UpdatePlantForm plant={plant} gardenbook_id={this.props.gardenbook_id} />
                <p>Track your plants progress make a note:</p>
                <NoteForm plant={plant} note={note} handleChange={this.handleChange}/>
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