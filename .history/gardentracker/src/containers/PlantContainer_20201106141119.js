import React, {Component} from 'react';
import { connect } from 'react-redux';
// import PlantForm from "../components/PlantForm";

class PlantContainer extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
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
        this.props.startAddPlant({...this.state, gardenbook_id: this.props.gardenbook_id})
        this.setState({
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


export default connect(mapStateToProps)(PlantContainer);